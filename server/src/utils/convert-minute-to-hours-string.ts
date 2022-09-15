export function convertMinutesToHoursString(minustesAmount: number) {
  const hours = Math.floor(minustesAmount / 60);
  const minutes = minustesAmount % 60;

  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`
}
