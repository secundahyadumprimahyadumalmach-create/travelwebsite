export type FormValues = { tour: string; date: string; guests: string };
export type FormErrors = Partial<Record<keyof FormValues, string>>;

export function todayString(): string {
  const n = new Date();
  const mm = String(n.getMonth() + 1).padStart(2, "0");
  const dd = String(n.getDate()).padStart(2, "0");
  return `${n.getFullYear()}-${mm}-${dd}`;
}

export function daysBetween(from: string, to: string): number {
  return Math.round((new Date(to).getTime() - new Date(from).getTime()) / 86400000);
}

export function validate(values: FormValues, today: string): FormErrors {
  return {};
}