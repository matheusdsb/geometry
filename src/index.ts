import { Point } from './objects/point';
import { CartesianPlane } from './objects/cartesian-plane';

const point1 = new Point(1,5);
const point2 = new Point(7,2);
const point3 = new Point(11,8);

console.log(CartesianPlane.distanceBetweenTwoPoints(point1, point2));

const cartesianPlane = new CartesianPlane([point1, point2, point3]);
console.log(cartesianPlane.totalDistanceBetweenPoints());