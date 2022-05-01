export const defValues = {
  date: "",
  distance: 0.1,
}
export const defaultItem = {
  id: null,
  date: null,
  distance: null,
}

export function getFormatDate(date, localFormat = false) {
  const d = date.getDate().toString().padStart(2, '0');
  const m = (date.getMonth()+1).toString().padStart(2, '0');
  const y = date.getFullYear();
  return localFormat ? `${d}.${m}.${y}` : `${y}-${m}-${d}`;
}
