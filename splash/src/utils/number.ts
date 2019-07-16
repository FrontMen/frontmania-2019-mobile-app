export function stepNumber(num: number, step: number): number {
  return step * Math.floor(num / step);
}

export function getRandomFloat(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}
