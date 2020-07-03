import * as Modules from 'app/modules/Modules';
import { toRgba } from '../../utils/toRgba';
import toHex from 'libs/LogColor/src/toHex';

export module ColorProvider {

type DocumentColorProvider = Modules.Provider.DocumentColorProvider;
const ColorInformation = Modules.Provider.ColorInformation;
type IColorInformation = Modules.Provider.IColorInformation;
type TextDocument = Modules.Provider.TextDocument;
type IRange = Modules.Provider.IRange;
const Range = Modules.Provider.Range;
type Color = Modules.Provider.Color;
type Token = Modules.Provider.Token;

class GoColorProvider implements DocumentColorProvider {
	public provideDocumentColors(
		document: TextDocument, token: Token):
		Thenable<IColorInformation[]> {
			let temp: IColorInformation[] =[]
			let regExArray: RegExpExecArray | null;
			let text = document.getText()
			let pattern = /console.log\('%c.*', 'color: (#([a-f0-9]{6}(?:[a-f0-9]{0,2}))\b)/g
			let b = [''] ;
			while (regExArray = pattern.exec(text)) {
				b.push(regExArray[1])
				const positionStart = document.positionAt(pattern.lastIndex - regExArray[1].length)
				const positionEnd = positionStart.translate(0, regExArray[1].length)
				temp.push(new ColorInformation(new Range(positionStart, positionEnd), toRgba(b[b.length - 1])))
			}
			return new Promise(resolve => { resolve(temp) })
	}

	public provideColorPresentations(
		color: Color, context: { document: TextDocument, range: IRange }, token: Token):
		Thenable<vscode.ColorPresentation[]> { return new Promise(resolve => {
													resolve(b.map((el: any) => {
														const bb = `#${toHex(color.red * 255)}
														${toHex(color.green * 255)}
														${toHex(color.blue * 255)}
														${color.alpha !== 1 ? toHex(Math.round(color.alpha * 255))
														: ''}`
														return {label: bb}
													}))
												})}
	}
}
