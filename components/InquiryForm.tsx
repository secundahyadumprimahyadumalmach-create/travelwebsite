"use client";

import { useState } from "react";
import { tours } from "@/lib/tours";
import { validate, todayString,FormErrors } from "@/lib/validation";


export default function InquiryForm() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const result = validate (
      {
        tour: String(data.get("tour")),
        date: String(data.get("date")),
        guests: String(data.get("guests")),
      },
      todayString()
    );
    setErrors(result);
    if (Object.keys(result).length === 0) setSent (true);
  }

  if (sent) {
    return <p className="mt-8 text-lg">Thanks, we have your inquiry.</p>;
  }

  const field = "mt-1 w-full rounded border border-indigo-dye/30 bg-white p-3";

  return (
    <form onSubmit={handleSubmit} noValidate className="mt-8 flex max-w-xl flex-col gap-5">
      <label>Name<input name="name" className={field} /></label>
      <label>Email<input name="email" type="email" className={field} /></label>
      <label>
        Tour
        <select name="tour" className={field}>
          {tours.map((t) => (
            <option key={t.slug} value={t.slug}>{t.title}</option>
          ))}
        </select>
      </label>
      <label>Travel date<input name="date" type="date" className={field} />
        {errors.date && <span className="mt-1 block text-red-700">{errors.date}</span>}
      </label>
      <label>Number of travelers<input name="guests" type="number" className={field} />
        {errors.guests && <span className="mt-1 block text-red-700">{errors.guests}</span>}
      </label>
      <label>Notes<textarea name="notes" rows={4} className={field} /></label>
      <button type="submit" className="self-start rounded bg-lagoon px-6 py-3 font-semibold text-white">
        Send inquiry
      </button>
    </form>
  );
}