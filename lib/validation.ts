export type FormValues = { tour: string; date: string; guests: string };
export type FormErrors = Partial<Record<keyof FormValues, string>>;

export function todayString(): string {
  const n = new Date();
  const mm = String(n.getMonth() + 1).padStart(2, "0");
  const dd = String(n.getDate()).padStart(2, "0");
  return `${n.getFullYear()}-${mm}-${dd}`;
}

const tourRules: Record< string, { notice: number; friday: boolean; min: number; max: number}> = {
  "ouidah-heritage-day":{notice: 3, friday: false, min: 2, max: 8},
  "ganvie-stilt-village": { notice:3, friday: false,min:1, max:6 },
  "cotonou-city-tour": { notice:3, friday: false,min:1, max:10 },
  "lagos-to-cotonou-weekend": { notice:7, friday: true,min:4, max:12},
}

export function daysBetween(from: string, to: string): number {
  return Math.round((new Date(to).getTime() - new Date(from).getTime()) / 86400000);
}

export function validate(values: FormValues, today: string): FormErrors {
  const errors: FormErrors = {};
  const rule = tourRules[values.tour];

  if (!values.date) {
    errors.date = "Please choose a travel date.";
  } else {
    const days = daysBetween (today , values.date);
    const md = values.date.slice(5);
    if (days < rule.notice) errors.date = `Please choose a date at least ${rule.notice} days from today.`;
     else if (days > 180) errors.date = "We can only take booking up to 180 days ahead.";
     else if  ((md >= "12-25" && md <= "12-29") || md === "01-01") errors.date = "We are not taking inquiries for that date. Please pick another.";
     else if ( rule.friday && new Date(values.date).getUTCDay() !== 5) errors.date = "This trip starts on Fridays only."

  }

  const guests = Number(values.guests);
  if (values.guests.trim() === " " || !Number.isInteger(guests)){
    errors.guests = "Please enter a whole number of travelers."
  } else if ( guests < rule.min){
    errors.guests =  `This tour needs at least ${rule.min} travelers."`
  } else if ( guests >rule.max){
    errors.guests = `This tour takes up to ${rule.max} travelers. Message us on WhatsApp for a private group."`
  }

  return errors;
}