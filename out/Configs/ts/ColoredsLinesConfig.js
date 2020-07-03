"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ColoredsLinesConfig;
(function (ColoredsLinesConfig) {
    function setDefaultLangValues(lang) {
        lang.langId = 'TypeScript';
        lang.langTags = { start: '/*', middle: '//', end: '*/', delimiter: '', escape: '*' };
        lang.noFirst = false; //default false
        lang.multiline = false; // default false
        lang.plainText = true; // default true
        lang.supported = true; // default true 
        lang.jsDoc = false; // default false
        lang.mono = true; // default true
        lang.sensitive = false; //??
    }
    ColoredsLinesConfig.setDefaultLangValues = setDefaultLangValues;
})(ColoredsLinesConfig || (ColoredsLinesConfig = {}));
exports.default = ColoredsLinesConfig;
//# sourceMappingURL=ColoredsLinesConfig.js.map