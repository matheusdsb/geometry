"use strict";
exports.__esModule = true;
exports.Hypotenuse = void 0;
var Hypotenuse = /** @class */ (function () {
    function Hypotenuse() {
    }
    Hypotenuse.calc = function (sideA, sideB) {
        var sideASquare = Math.pow(sideA, 2);
        var sideBSquare = Math.pow(sideB, 2);
        var sumSquareSides = sideASquare + sideBSquare;
        return Math.sqrt(sumSquareSides);
    };
    return Hypotenuse;
}());
exports.Hypotenuse = Hypotenuse;
