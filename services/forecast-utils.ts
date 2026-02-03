const DAYS = ["DIM", "LUN", "MAR", "MER", "JEU", "VEN", "SAM"];
// Transforme la date de l'api en jour de la semaine
export function dayWeek(date: string) {
  return DAYS[new Date(date).getDay()];
}

// Récupère la date actuel et vérifie si elle est supérieur ou égale à la date de l'api
export function getStartIndexFromNow(times: string[]) {
  const now = new Date();
  const indexTime = times.findIndex((t) => new Date(t) >= now);
  return indexTime;
}

export function formatHour(date: string) {
  return new Date(date).toLocaleTimeString("fr-FR", { hour: "2-digit" });
}
