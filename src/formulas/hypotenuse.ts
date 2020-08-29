export class Hypotenuse {
  static calc = (sideA: number, sideB: number) : number => {
    const sideASquare = Math.pow(sideA, 2);
    const sideBSquare = Math.pow(sideB, 2);

    const sumSquareSides = sideASquare + sideBSquare;

    return Math.sqrt(sumSquareSides);
  }
}