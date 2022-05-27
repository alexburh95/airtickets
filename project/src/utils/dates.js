import dayjs from 'dayjs';
import ruLocale from 'dayjs/locale/ru';

dayjs.locale(ruLocale);

export function formatDate(value) {
  return dayjs(value).format('DD MMMM ');
}

export function formatTime(value) {
  return dayjs(value).format('HH:mm');
}

export function getTimeFromMins(mins) {
  let hours = Math.trunc(mins / 60);
  let minutes = mins % 60;
  return hours + ' ч ' + minutes + ' мин';
}
