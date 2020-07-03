"use strict";
//
// Kary.Text Framework - Numerics Library
//    Copyright 2015-2016 Kary Foundation, Inc.
//    Author: Pouya Kary <k@karyfoundation.org>
//
Object.defineProperty(exports, "__esModule", { value: true });
exports.Roman = void 0;
//
// ─── ROMAN NUMBER GENERATOR ─────────────────────────────────────────────────────
//
/**
 * Generates a Roman number in by inputs in range of [0..4999]
 */
var Roman;
(function (Roman) {
    //
    // ─── ON NULL ─────────────────────────────────────────────────────
    //
    function getRoman(input) {
        if (input === 0) {
            return 'NULL';
        }
        //
        // ─── AND NO MORE THAN 4999 ───────────────────────────────────────
        //
        if (input > 4999) {
            return 'HUGE';
        }
        //
        // ─── DEFS ────────────────────────────────────────────────────────
        //
        let result = '';
        const values = [
            1000, 900, 500, 400, 100, 90,
            50, 40, 10, 9, 5, 4, 1
        ];
        const numerals = [
            "M", "CM", "D", "CD", "C", "XC", "L",
            "XL", "X", "IX", "V", "IV", "I"
        ];
        //
        // ─── GENERATOR ───────────────────────────────────────────────────
        //
        for (let index = 0; index < 13; index++) {
            while (input >= values[index]) {
                input -= values[index];
                result += numerals[index];
            }
        }
        return result;
        // ─────────────────────────────────────────────────────────────────
    }
    Roman.getRoman = getRoman;
    // ────────────────────────────────────────────────────────────────────────────────
})(Roman = exports.Roman || (exports.Roman = {}));
//# sourceMappingURL=roman.js.map