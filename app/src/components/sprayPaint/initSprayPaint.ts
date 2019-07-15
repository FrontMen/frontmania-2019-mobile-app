/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */

/**
 * WARNING: We are just generating js string from this method
 * by calling .toString() on this function
 */
export function initSprayPaint(): void {
  const DENSITY = 100;
  const RADIUS = 20;
  const SIZE = 2.3;
  const STEP = 0.3;

  function prepareCanvas(canvas: HTMLCanvasElement): void {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function applyStyle(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = '#ffed00';
    ctx.shadowColor = '#fff78c';
    ctx.shadowBlur = 10;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
  }

  function stepNumber(num: number, step: number): number {
    return step * Math.floor(num / step);
  }

  function getRandomFloat(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  function startInteraction(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D): void {
    let touch: [number, number] | null = null;

    function onTouchMove(e: TouchEvent): void {
      touch = [e.touches[0].clientX, e.touches[0].clientY];
    }

    function draw(): void {
      if (!touch) {
        return;
      }

      for (let i = DENSITY; i > 0; i--) {
        const angle = getRandomFloat(0, Math.PI * 2);
        const radius = getRandomFloat(0, RADIUS);

        ctx.fillRect(
          touch[0] + radius * Math.cos(angle),
          touch[1] + radius * Math.sin(angle),
          stepNumber(getRandomFloat(0, SIZE), STEP),
          stepNumber(getRandomFloat(0, SIZE), STEP),
        );
      }

      requestAnimationFrame(draw);
    }

    canvas.addEventListener('touchstart', e => {
      touch = [e.touches[0].clientX, e.touches[0].clientY];

      draw();
      canvas.addEventListener('touchmove', onTouchMove);
    });

    canvas.addEventListener('touchend', () => {
      touch = null;
      canvas.removeEventListener('touchmove', onTouchMove);
    });
  }

  function init(): void {
    const canvas = document.querySelector('#canvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    prepareCanvas(canvas);
    applyStyle(ctx);

    startInteraction(canvas, ctx);
  }

  init();
}
