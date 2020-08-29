import { Hypotenuse } from '../formulas/hypotenuse';

export class Point {
  constructor(protected xAxis: number, protected yAxis: number) {}

  distanceTo(point: Point) : number {
    const sumX = point.xAxis - this.xAxis;
    const sumY = point.yAxis - this.yAxis;

    return Hypotenuse.calc(sumX, sumY);
  }

  renderCoordinates() {
	return `(${this.xAxis}, ${this.yAxis})`;
  }
}