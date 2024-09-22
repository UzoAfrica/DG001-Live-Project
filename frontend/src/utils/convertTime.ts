import dayjs from 'dayjs';

export function formatDate(isoString: string) {
  return dayjs(isoString).format('DD/MM/YYYY');
}

// Example usage:
// const isoDate = '2024-09-22T15:44:44.902Z';
// console.log(formatDate(isoDate));
