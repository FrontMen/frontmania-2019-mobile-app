import { format } from 'date-fns';

export const formatTime = (date: Date): string => format(date, 'hh:mm');
