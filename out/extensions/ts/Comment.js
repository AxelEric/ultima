"use strict";
//    |─────────────────────────────────────────────────────────────────────────────────────── |
//    |─────────────────────────────────────────────────────────────────────────────────────── |
//    |    :   :   :  :  :  : : : :::::: Coloreds Comments :::::: : : :  :  :  :   :   :   :   |
//    |─────────────────────────────────────────────────────────────────────────────────────── |
//    |─────────────────────────────────────────────────────────────────────────────────────── |
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
//#region                                               |  Imports                             ─── |
require('module-alias/register');
const Globals_1 = require("../../globals/Globals");
const vscode = require("vscode");
const dictionary = require("../../lang/ts/dictionary");
//#endregion                                                                                   ─── |
//#region                                               |  Properties                          ─── |
var activeTextEditor;
var firstSpaces = { spaces: 0, tabs: 0 };
const coLineCo = '\u2500';
const lineRegEx = /^\s*([a-z ]|[0-9][0-9\.]*|[\:\-\+\@\!\?])+\s*$/i;
const RegExErrMsg = "Error: Comments only supports [a-z,A-Z][0-9][:,-,+,@,?,!]";
var lang = new Globals_1.Globals.Lang();
var line = new Globals_1.Globals.Line();
const colTag = { r: " ", g: " ", y: " ", b: " ", o: " ", n: " ", z: " ", w: " ", };
//#endregion                                                                                   ─── |
//#region                                               |  Impementation                       ─── |
//#region                                          |  Activate - Deactivate          ─── |
function activate(context) {
    context.subscriptions.push(vscode.commands.registerCommand('comment.makeFlagComment', () => doReplace(genFlag())));
    context.subscriptions.push(vscode.commands.registerCommand('comment.makeSectionComment', () => doReplace(genSect(true))));
    context.subscriptions.push(vscode.commands.registerCommand('comment.makeReverseSectionComment', () => doReplace(genSect(false))));
    context.subscriptions.push(vscode.commands.registerCommand('comment.makeLineComment', () => doReplace(genLine())));
    vscode.window.onDidChangeActiveTextEditor((activeTextEditor = vscode.window.activeTextEditor) => {
        lang.langId = activeTextEditor.document.languageId;
        lang = dictionary.setLangTags(lang);
    }, null, context.subscriptions);
    vscode.workspace.onDidChangeTextDocument(event => {
        if (activeTextEditor && event.document === activeTextEditor.document) {
            line.line = activeTextEditor.selection.active.line;
            line.text = activeTextEditor.document.lineAt(line.line).text;
            lang.langId = activeTextEditor.document.languageId;
            line.spaceStatus = activeTextEditor.options.insertSpaces;
            line.tabSize = activeTextEditor.options.tabSize;
            line.spacing = getSpaces();
            line.indent = line.spacing.tabs + Math.floor(line.spacing.spaces / line.tabSize);
            line.realIndent = Math.floor(line.indent / 2);
        }
    }, null, context.subscriptions);
    function getSpaces() {
        let spc = { tabs: 0, spaces: 0 };
        let i = 0;
        let elem;
        while (line.text[i]) {
            elem = line.text[i++];
            if (elem == ('\t' || ' ')) {
                spc.tabs = (elem == '\t')
                    ? spc.tabs + 1
                    : spc.tabs;
                spc.spaces = (elem != '\t')
                    ? spc.spaces + 1
                    : spc.spaces;
            }
        }
        return spc;
    }
}
exports.activate = activate;
function deactivate() {
    vscode.window.showInformationMessage('Bye, bye ...... Hope we\'ll see us again ');
}
exports.deactivate = deactivate;
//#endregion                                                                         ─── |
//#region                           Main Function  |  doReplace()                    ─── |
function doReplace(str) {
    activeTextEditor.edit(textEditorEdit => {
        textEditorEdit.replace(activeTextEditor.document.lineAt(line.line).range, str);
    });
    vscode.commands.executeCommand('cancelSelection');
}
//#endregion                                                                         ─── |
//#region                      Comment Generation  |  genFlag()                      ─── |
function genFlag() {
    const line90 = repeat(coLineCo, (90));
    const str = line.text.trim();
    const indent = genIndent();
    let mult = Math.floor((28 - str.length) / 2);
    let rab = repeat(':', mult);
    let result = '';
    const l9g = `${indent}${lang.langTags.middle}${colTag.g}${line90}\n`;
    const l9r = `${indent}${lang.langTags.middle}${colTag.r}${line90}\n`;
    result += (lang.sensitive || !lang.mono) ? `${indent}${lang.langTags.start}\n` : `${l9r}`;
    result += `${l9g}`;
    result += `${indent}${lang.langTags.middle}${colTag.y} |:   :   :   :  :  :  : : : ::`;
    result += `${rab} ${str} ${rab}:: : : :  :  :  :   :   :   :|\n`;
    result += `${l9g}`;
    result += (lang.sensitive || !lang.mono) ? indent + lang.langTags.end + "\n" : `${l9r}`;
    return result;
}
//#endregion                                                                         ─── |
//#region                      Comment Generation  |  genLine()                      ─── |
function genLine() {
    const txt = repeat(coLineCo, 90, true);
    const indent = genIndent();
    return (lang.mono)
        ? `\n${indent}${lang.langTags.middle}${colTag.r}${txt}\n`
        : `\n${indent}${lang.langTags.start}${colTag.r}${txt} ${lang.langTags.end}\n`;
}
//#endregion                                                                         ─── |
//#region                      Comment Generation  |  genSect()                      ─── |
function genSect(normal) {
    let result = '';
    const width = (line.realIndent === 0) ? 90 : 80;
    const str = (lineRegEx.test(line.text)) ? line.text.toUpperCase().trim() : "";
    const indent = genIndent();
    const startChars = repeat(coLineCo, 10);
    const tailsChars = repeat(coLineCo, width - str.length - 9);
    result += (lang.sensitive || !lang.mono) ? '' : `${indent}${lang.langTags.start}\n`;
    result += (normal)
        ? `\n${indent}${lang.langTags.middle}${colTag.y} ${startChars} ${str} ${tailsChars}\n`
        : `\n${indent}${lang.langTags.middle}${colTag.g} ${tailsChars} ${str} ${startChars}\n`;
    result += (lang.sensitive || !lang.mono) ? '' : `${indent}${lang.langTags.end}\n`;
    return result + genSpace();
}
//#endregion                                                                         ─── |
//#region                                          |  Utils Functions                ─── |
function genSpace() {
    if (lang.sensitive || !lang.mono) {
        return "\n";
    }
    else {
        let spacings = "\n" + genIndent();
        if (line.realIndent < 2)
            spacings += (line.spaceStatus)
                ? repeat(' ', line.tabSize * 1)
                : repeat('\t', 1);
        return spacings;
    }
}
function genIndent() {
    return repeat(' ', line.spacing.spaces)
        + (line.spaceStatus)
        ? repeat(' ', line.tabSize * line.spacing.tabs)
        : repeat('\t', line.spacing.tabs);
}
function repeat(text, times, bol) {
    let result = '';
    if (bol) {
        let tim = times / 6;
        let res = '';
        for (let index = 0; index < (tim - 2); index++)
            res += text;
        return res + ' END ' + res + res + ' END ' + res + res + ' END ' + res;
    }
    for (let index = 0; index < times; index++)
        result += text;
    return result;
}
class GlobLang {
    constructor() {
        return (this instanceof GlobLang) ? this : new GlobLang();
    }
}
class GlobLine {
    constructor() {
        return (this instanceof GlobLine) ? this : new GlobLine();
    }
}
//#endregion                                                                                   ─── |
//  ────────────────────────────────────────────────────────────────────────────────────────────── |
//  ────────────────────────────────────────────────────────────────────────────────────────────── |
//# sourceMappingURL=Comment.js.map