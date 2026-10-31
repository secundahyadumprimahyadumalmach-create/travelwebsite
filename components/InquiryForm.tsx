"use client";

import { useState } from "react";
import { tours } from "@/lib/tours";
import type { FormErrors } from "@/lib/validation";

export default function InquiryForm() {
  const [error, setError] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (!data.get("name") || !data.get("email")) {
      setError("Something went wrong");
      return;
    }
    setError("");
    setSent(true);
  }

  if (sent) {
    return <p className="mt-8 text-lg">Thanks, we have your inquiry.</p>;
  }

  const field = "mt-1 w-full rounded border border-indigo-dye/30 bg-white p-3";

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex max-w-xl flex-col gap-5">
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
      {error && <p className="text-red-700">{error}</p>}
      <button type="submit" className="self-start rounded bg-lagoon px-6 py-3 font-semibold text-white">
        Send inquiry
      </button>
    </form>
  );
}