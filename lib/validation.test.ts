import { describe, it, expect } from "vitest";
import { validate, type FormValues } from "./validation";

const today = "2026-11-06"; // a Friday

function plus(from: string, n: number) {
  const d = new Date(from);
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
}

const valid: FormValues = { tour: "ouidah-heritage-day", date: plus(today, 7), guests: "4" };