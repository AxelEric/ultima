"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ultima = void 0;
const Configs_1 = require("./Configs/Configs");
const Extensions_1 = require("./extensions/Extensions");
const Modules_1 = require("./modules/Modules");
var Ultima;
(function (Ultima) {
    Ultima.MogoDistant = Configs_1.Configs._MogoDistant;
    Ultima.MongoLocal = Configs_1.Configs._MongoLocal;
    Ultima.ColorTags = Configs_1.Configs._ColorTags;
    Ultima.Colors = Configs_1.Configs._Colors;
    Ultima.ColoredsComments = Extensions_1.Extensions._ColoredsComments;
    Ultima.LinesComments = Extensions_1.Extensions._LinesComments;
    //export const ColorProvider    =    Modules._ColorProvider;
    Ultima.UltimaColors = Modules_1.Modules._UltimaColors;
    Ultima.Parser = Modules_1.Modules._Parser;
    Ultima.Types = Modules_1.Modules._Types;
})(Ultima = exports.Ultima || (exports.Ultima = {}));
//# sourceMappingURL=Ultima.js.map