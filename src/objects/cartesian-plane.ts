import { Point } from './point';

export class CartesianPlane {    

    constructor(private points: Point[]) {

    }

    private hasNextPoint(index: number) : boolean {
        return this.points.length > index + 1;
    }

    private getNextPoint(currentIndex: number) : Point {
        return this.points[currentIndex + 1];
    }

    private getNextPointOrNull(currentIndex: number) : Point|null {
        if(this.hasNextPoint(currentIndex)) {
            return this.getNextPoint(currentIndex);
        }
        return null;
    }

    static distanceBetweenTwoPoints(pointA: Point, pointB: Point) {
        if(!pointA || !pointB) { 
            return 0;
        }
        return pointA.distanceTo(pointB);
    }    

    totalDistanceBetweenPoints() : number {
        let totalDistance = 0;

        this.points.forEach((point, index) => {
            const nextPoint = this.getNextPointOrNull(index);
            if(nextPoint) {
                totalDistance += CartesianPlane.distanceBetweenTwoPoints(point, this.getNextPoint(index));
            }
        });

        return totalDistance;
    }

    addPoint(point: Point) {
        this.points.push(point);
    }
}