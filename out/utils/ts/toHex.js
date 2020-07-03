"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toHex = void 0;
function toHex(n) {
    const r = n.toString(16);
    return r.length !== 2 ? '0' + r : r;
}
exports.toHex = toHex;
//# sourceMappingURL=toHex.js.map