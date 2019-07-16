import bgPatternUrl from './assets/bg-pattern.png';
import logoUrl from './assets/FM2019-logo-blue.png';

import { loadImage } from './utils';

export interface Images {
  bgPattern: HTMLImageElement;
  logo: HTMLImageElement;
}

export async function loadImages(): Promise<Images> {
  const [bgPattern, logo] = await Promise.all([
    loadImage(bgPatternUrl),
    loadImage(logoUrl),
  ]);

  return { bgPattern, logo };
}
