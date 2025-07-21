import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import "dayjs/locale/fr"; // Français

// Étendre dayjs avec les plugins nécessaires
dayjs.extend(utc);
dayjs.extend(timezone);

type DateFormatOptions = {
  timeZone?: string;
  locale?: string;
  format?: string;
};

/**
 * Formate une date de manière professionnelle
 * @param input Date en string, number ou Date
 * @param options Options de formatage
 * @returns Date formatée
 */
export function formatDate(
  input: string | number | Date,
  options: DateFormatOptions = {}
): string {
  const {
    timeZone = "Africa/Nairobi", // Fuseau horaire par défaut : Afrique de l'Est
    locale = "fr", // Locale par défaut : français
    format = "DD MMMM YYYY", // Format par défaut : "09 mars 2026"
  } = options;

  // Configurer la locale
  dayjs.locale(locale);

  // Créer l'objet dayjs avec gestion du fuseau horaire
  let date = dayjs(input);
  if (timeZone) {
    date = date.tz(timeZone);
  }

  // Formater la date
  return date.format(format);
}
