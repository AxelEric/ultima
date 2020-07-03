/*
import * as Modules from '../../modules/Modules';
import ILangTag from './langTag';
import ILine from './line';
import ILang from './lang';
import IUserSet from './userSet';

var langTag: ILangTag = {
    start: '',
    middle: '',
    end: '',
    escape: ''
}

// ! ───────────── getLangTag ─────────────────────|
// # ───── Function ───────────────────────────────|

export function getLangTag(){

    Modules.Provider.setRegex(VscEnv.lang.langId);
    langTag.start = '';
    langTag.middle = '';
    langTag.end = '';
    langTag.escape = '';
}

// ! ───────────── Line ───────────────────────────|
// ? ───── Property ───────────────────────────────|
 var line: ILine = {
    line: '',
    text: '',
    spaceStatus: false,
    TabSize: -1,
    Spacing: null,
    IndentSize: null,
    RelIndentSize: null
}

// ! ───────────── getLine ────────────────────────|
// # ───── Function ───────────────────────────────|

export function getLine(){
    line.line = '';
    line.text = '';
    line.spaceStatus = false;
    line.TabSize = -1;
    line.Spacing = null;
    line.IndentSize = null;
    line.RelIndentSize = null;
}

// ! ───────────── lang ───────────────────────────|
// ? ───── Property ───────────────────────────────|
var lang:ILang  = {
    ignoreFirstLine: false,
    plainText: false,
    suported: false,
    langId: '',
    jsDoc: false,
    mono: false,
    langTag:langTag
}

// ! ───────────── getLang ────────────────────────|
// # ───── Function ───────────────────────────────|

export function getLang() {
    lang.ignoreFirstLine = false,
    lang.plainText = false,
    lang.suported = false,
    lang.langId = '',
    lang.jsDoc = false,
    lang.mono = false,
    getLangTag();

}



//#region




export interface IClorTags {

    tag: string,
    color: Modules.Provider.Color,
    strikethrough: boolean,
    backgroundColor: string,
}[];

let ColorRed: Modules.Provider.Color;

var userSet: IUserSet = {
    useMultiline: false,
    useJSDocStyle: false,
    usePlainText: false,
    ClorTags: [
        {
            tag: '!',
            color: ColorRed
            strikethrough: boolean;
            backgroundColor: string;
        }
    ]
}
}




















export interface IVscEnv {
    line: ILine,
    lang: ILang,
    tags: IUserSet
}
export var VscEnv: IVscEnv = {
    line: line,
    lang: lang,
    tags:
}
export function getVscEnv() {
    getLine();
    getLang();
}


*/
// ! ───────────── END ────────────────────────── END ────────────────────────── END ──────────────────
//#endregion ──────────────────────────────────────────────────────────────────────────────────────────
// !																								  |───|
//																								  ─── |
// # ──────────────────────────────────────── Powered by ──────────────────────────────────────────────
// * ──────────────────────────────────────────────────────────────────────────────────────────────────
// # :   :   :   :  :  :  : : : :::::::::: A X E L E R I C :::::::::: : : :  :  :  :   :   :    :     :
// * ──────────────────────────────────────────────────────────────────────────────────────────────────
// # ───────────────────────────────────── axel@axeleric.eu ───────────────────────────────────────────
//# sourceMappingURL=vSEnv.js.map