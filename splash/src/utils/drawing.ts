import { stepNumber, getRandomFloat } from './number';
import { Point } from '../types';

export function spray(
  ctx: CanvasRenderingContext2D,
  pos: Point,
  { count = 200, radius = 40, size = 8, step = 0.3 } = {}
): void {
  for (let i = count; i > 0; i--) {
    const angle = getRandomFloat(0, Math.PI * 2);
    const randomRadius = getRandomFloat(0, radius);

    ctx.fillRect(
      pos[0] + randomRadius * Math.cos(angle),
      pos[1] + randomRadius * Math.sin(angle),
      stepNumber(getRandomFloat(0, size), step),
      stepNumber(getRandomFloat(0, size), step)
    );
  }
}
