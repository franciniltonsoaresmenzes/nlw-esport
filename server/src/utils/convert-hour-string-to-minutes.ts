export function convertHoursStringToMinute(hoursString: string) {
  const [hours, minute] = hoursString.split(':').map(Number)

  const minutesAmount = (hours * 60) + minute

  return minutesAmount;
}
