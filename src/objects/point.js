"use strict";
exports.__esModule = true;
exports.Point = void 0;
var hypotenuse_1 = require("../formulas/hypotenuse");
var Point = /** @class */ (function () {
    function Point(xAxis, yAxis) {
        this.xAxis = xAxis;
        this.yAxis = yAxis;
    }
    Point.prototype.distanceTo = function (point) {
        var sumX = point.xAxis - this.xAxis;
        var sumY = point.yAxis - this.yAxis;
        return hypotenuse_1.Hypotenuse.calc(sumX, sumY);
    };
    Point.prototype.renderCoordinates = function () {
        return "(" + this.xAxis + ", " + this.yAxis + ")";
    };
    return Point;
}());
exports.Point = Point;
