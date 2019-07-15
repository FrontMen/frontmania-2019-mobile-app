import bgPatternUrl from './bg-pattern.png';
import logoUrl from './FM2019-logo-blue.svg';

function initSprayPaint(): void {
  const DENSITY = 100;
  const RADIUS = 40;
  const SIZE = 8;
  const STEP = 0.3;

  interface Images {
    bgPattern: HTMLImageElement;
    logo: HTMLImageElement;
    backgroundWithLogo?: HTMLImageElement;
  }

  type Point = [number, number];

  let images: Images = null;

  async function loadImages(): Promise<Images> {
    const [bgPattern, logo] = await Promise.all([
      loadImage(bgPatternUrl),
      loadImage(logoUrl),
    ]);

    return { bgPattern, logo };
  }

  function loadImage(url: string): Promise<HTMLImageElement> {
    return new Promise(resolve => {
      const el = new Image();
      el.onload = () => {
        resolve(el);
      };

      el.src = url;
    });
  }

  async function loadBackgroundImage({
    width = window.innerWidth,
    height = window.innerHeight,
  } = {}): Promise<void> {
    const canvas = document.createElement('canvas');
    // canvas.className = 'full-width';
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext('2d');

    ctx.drawImage(images.bgPattern, 0, 0);

    const logoWidth = images.logo.width;
    const logoHeight = images.logo.height;

    ctx.drawImage(
      images.logo,
      (canvas.width - logoWidth) / 2,
      100,
      logoWidth,
      logoHeight
    );

    canvas.style.display = 'none';
    document.body.appendChild(canvas);

    const dataUrl = canvas.toDataURL();

    const img = new Image();
    img.src = dataUrl;

    await new Promise(resolve => (img.onload = resolve));

    images.backgroundWithLogo = img;
  }

  function prepareCanvas(
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D
  ): void {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // ctx.fillStyle = '#FFED00';
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(images.backgroundWithLogo, 0, 0);

    ctx.save();

    ctx.fillStyle = '#FFED00';
    ctx.shadowColor = 'white';
    ctx.shadowBlur = 10;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';

    for (let i = 0; i < canvas.width / RADIUS; i++) {
      for (let j = 0; j < canvas.height / RADIUS; j++) {
        spray(ctx, [i * RADIUS, j * RADIUS], 100);
        // arr.push([i * RADIUS, j * RADIUS]);
      }
    }

    ctx.restore();
  }

  function applyStyle(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = ctx.createPattern(images.backgroundWithLogo, 'no-repeat');
    // ctx.fillStyle = '#ffed00';
    // ctx.shadowColor = 'white';
    // ctx.shadowBlur = 10;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
  }

  function stepNumber(num: number, step: number): number {
    return step * Math.floor(num / step);
  }

  function getRandomFloat(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  function spray(
    ctx: CanvasRenderingContext2D,
    pos: Point,
    count = DENSITY
  ): void {
    for (let i = count; i > 0; i--) {
      const angle = getRandomFloat(0, Math.PI * 2);
      const radius = getRandomFloat(0, RADIUS);

      ctx.fillRect(
        pos[0] + radius * Math.cos(angle),
        pos[1] + radius * Math.sin(angle),
        stepNumber(getRandomFloat(0, SIZE), STEP),
        stepNumber(getRandomFloat(0, SIZE), STEP)
      );
    }
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

      // spray(ctx, touch);
      ctx.beginPath();
      ctx.arc(touch[0], touch[1], RADIUS, 0, 2 * Math.PI);
      ctx.fill();

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

    images = await loadImages();

    await loadBackgroundImage();

    prepareCanvas(canvas, ctx);
    applyStyle(ctx);

    startInteraction(canvas, ctx);
  }

  init();
}

initSprayPaint();
