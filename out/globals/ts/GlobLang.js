"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Config = require("../../configs/Configs");
class GlobLang {
    constructor() {
        let result = (this instanceof GlobLang) ? this : Config.Configs._setDefaultLangValues(new GlobLang());
    }
}
exports.default = GlobLang;
//# sourceMappingURL=GlobLang.js.map