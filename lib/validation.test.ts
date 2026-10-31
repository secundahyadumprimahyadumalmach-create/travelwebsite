import { describe, it, expect } from "vitest";
import { validate, type FormValues } from "./validation";

const today = "2026-11-06"; // a Friday

function plus(from: string, n: number) {
  const d = new Date(from);
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
}

const valid: FormValues = { tour: "ouidah-heritage-day", date: plus(today, 7), guests: "4" };

describe ("dates", () => {
  it.each([
    ["3-day tour, today+2", "ouidah-heritage-day", plus (today, 2), false],
    ["3-day tour, today+3", "ouidah-heritage-day", plus (today, 3), true],
    ["weekend, today+6", "lagos-to-cotonou-weekend", plus (today, 6), false],
    ["weekend , Friday today+7", "lagos-to-cotonou-weekend", plus (today, 7), true],
    ["weekend , Saturday today+7", "lagos-to-cotonou-weekend", plus (today, 8), false],
    ["window, today+181", "ouidah-heritage-day", plus (today, 180), true],
    ["window, today+181", "ouidah-heritage-day", plus (today, 181), false],
    ["blocked Dec 26, today+3", "ouidah-heritage-day", "2026-12-26", false],
    ["Dec 30, today+3", "ouidah-heritage-day", plus (today, 3), true],

  ])
})