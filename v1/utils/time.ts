export function getCurrentTimeRange() {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  if (minute < 31) {
    return `${hour}:30`;
  } else {
    return `${hour + 1}:00`;
  }
}
