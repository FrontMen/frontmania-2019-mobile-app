import { Images, loadImages } from './loadImages';
import { loadBackgroundImage } from './loadBackgroundImage';
import { spray } from './utils';

const DENSITY = 100;
const RADIUS = 40;
const SIZE = 8;
const STEP = 0.3;

let images: Images = null;

function prepareCanvas(
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D
): void {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  ctx.imageSmoothingEnabled = false;
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  // ctx.drawImage(images.backgroundWithLogo, 0, 0);

  // ctx.save();

  // ctx.fillStyle = '#FFED00';
  // ctx.shadowColor = 'white';
  // ctx.shadowBlur = 10;
  // ctx.lineJoin = 'round';
  // ctx.lineCap = 'round';

  // for (let i = 0; i < canvas.width / RADIUS; i++) {
  //   for (let j = 0; j < canvas.height / RADIUS; j++) {
  //     spray(ctx, [i * RADIUS, j * RADIUS], 100);
  //     // arr.push([i * RADIUS, j * RADIUS]);
  //   }
  // }

  // ctx.restore();
}

function applyStyle(ctx: CanvasRenderingContext2D, { backgroundImage }): void {
  ctx.fillStyle = ctx.createPattern(backgroundImage, 'no-repeat');
  // ctx.fillStyle = '#ffed00';
  // ctx.shadowColor = 'white';
  // ctx.shadowBlur = 10;
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
}

function startInteraction(
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D
): void {
  let touch: [number, number] | null = null;

  function onTouchMove(e: TouchEvent): void {
    touch = [e.touches[0].clientX, e.touches[0].clientY];
  }

  function draw(): void {
    if (!touch) {
      return;
    }

    spray(ctx, touch);
    // ctx.beginPath();
    // ctx.arc(touch[0], touch[1], RADIUS, 0, 2 * Math.PI);
    // ctx.fill();

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

async function init(): Promise<void> {
  const canvas = document.querySelector('#canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d');
  const images = await loadImages();
  const backgroundImage = await loadBackgroundImage({ ...images });

  prepareCanvas(canvas, ctx);
  applyStyle(ctx, { backgroundImage });

  startInteraction(canvas, ctx);
}

init();
