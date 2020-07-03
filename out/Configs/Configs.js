"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Configs = void 0;
const ColorConfigs_1 = require("./ts/ColorConfigs");
const EnvConfigs_1 = require("./ts/EnvConfigs");
const ColoredsLinesConfig_1 = require("./ts/ColoredsLinesConfig");
var Configs;
(function (Configs) {
    Configs._ColorTags = ColorConfigs_1.ColorConfigs.ColorTags;
    Configs._Colors = ColorConfigs_1.ColorConfigs.Colors;
    Configs._MogoDistant = EnvConfigs_1.EnvConfigs.MogoDistant;
    Configs._MongoLocal = EnvConfigs_1.EnvConfigs.MogoLocal;
    Configs._setDefaultLangValues = ColoredsLinesConfig_1.default.setDefaultLangValues;
})(Configs = exports.Configs || (exports.Configs = {}));
//# sourceMappingURL=Configs.js.map