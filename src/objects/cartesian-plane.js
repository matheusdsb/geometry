"use strict";
exports.__esModule = true;
exports.CartesianPlane = void 0;
var CartesianPlane = /** @class */ (function () {
    function CartesianPlane(points) {
        this.points = points;
    }
    CartesianPlane.prototype.hasNextPoint = function (index) {
        return this.points.length > index + 1;
    };
    CartesianPlane.prototype.getNextPoint = function (currentIndex) {
        return this.points[currentIndex + 1];
    };
    CartesianPlane.prototype.getNextPointOrNull = function (currentIndex) {
        if (this.hasNextPoint(currentIndex)) {
            return this.getNextPoint(currentIndex);
        }
        return null;
    };
    CartesianPlane.distanceBetweenTwoPoints = function (pointA, pointB) {
        if (!pointA || !pointB) {
            return 0;
        }
        return pointA.distanceTo(pointB);
    };
    CartesianPlane.prototype.totalDistanceBetweenPoints = function () {
        var _this = this;
        var totalDistance = 0;
        this.points.forEach(function (point, index) {
            var nextPoint = _this.getNextPointOrNull(index);
            if (nextPoint) {
                totalDistance += CartesianPlane.distanceBetweenTwoPoints(point, _this.getNextPoint(index));
            }
        });
        return totalDistance;
    };
    CartesianPlane.prototype.addPoint = function (point) {
        this.points.push(point);
    };
    return CartesianPlane;
}());
exports.CartesianPlane = CartesianPlane;
