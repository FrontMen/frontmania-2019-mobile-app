export function loadImage(url: string): Promise<HTMLImageElement> {
  return new Promise(resolve => {
    const el = new Image();
    el.onload = () => {
      resolve(el);
    };

    el.src = url;
  });
}
