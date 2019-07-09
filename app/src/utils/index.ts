import { format } from 'date-fns';
import { env } from '../env';

export const formatTime = (date: Date): string => format(date, 'hh:mm');
export function normalize<T>(items: T[], key: string = 'id'): Record<string, T> {
  return items.reduce((acc, item) => {
    acc[item[key]] = item;
    return acc;
  }, {});
}

export function getImageUrl(path: string): string {
  return `${env.endpoint}${path}`;
}
