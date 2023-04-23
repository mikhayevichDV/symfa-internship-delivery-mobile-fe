import dayjs from 'dayjs';

export const format = (date: string, formatTo: string) =>
  dayjs(date).format(formatTo);
