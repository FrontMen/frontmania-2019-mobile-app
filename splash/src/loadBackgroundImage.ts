export async function loadBackgroundImage({
  width = window.innerWidth,
  height = window.innerHeight,
  bgPattern,
  logo,
}): Promise<HTMLImageElement> {
  const canvas = document.createElement('canvas');
  // canvas.className = 'full-width';
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d');

  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(bgPattern, 0, 0);

  const logoWidth = logo.width / 1.5;
  const logoHeight = logo.height / 1.5;

  ctx.drawImage(
    logo,
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

  return img;
}
