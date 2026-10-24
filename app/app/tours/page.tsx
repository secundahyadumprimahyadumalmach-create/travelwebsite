import Link from "next/link";
import { tours } from "@/lib/tours";

export default function ToursPage() {
  return (
    <section className="px-12 py-16">
      <h1 className="text-4xl font-semibold">Tours</h1>
      <div className="mt-8 grid grid-cols-3 gap-6">
        {tours.map((tour) => (
          <Link key={tour.slug} href={`/tours/${tour.slug}`} className="rounded border border-indigo-dye/20 bg-white p-6">
            <h2 className="text-xl font-semibold">{tour.title}</h2>
            <p className="mt-2">{tour.summary}</p>
            <p className="mt-4">{tour.duration}</p>
            <p className="font-semibold">{tour.price}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
