import Link from "next/link";
import { tours } from "@/lib/tours";

export default function Home() {
  return (
    <>
      <section className="bg-lagoon px-12 pb-24 pt-16 text-white">
        <h1 className="max-w-3xl text-6xl font-semibold leading-tight">
          Ouidah, Ganvié and Cotonou, arranged for you.
        </h1>
        <p className="mt-6 max-w-xl text-lg">
          Luming Concierge plans trips in Benin for travelers coming from Lagos and the diaspora.
        </p>
        <div className="mt-8 flex gap-4">
          <Link href="/tours" className="rounded bg-saffron px-6 py-3 font-semibold text-ink">
            See tours
          </Link>
          <Link href="/inquiry" className="rounded border border-white px-6 py-3">
            Send an inquiry
          </Link>
        </div>
      </section>

      <section className="px-12 py-16">
        <h2 className="text-3xl font-semibold">Popular tours</h2>
        <div className="mt-8 grid grid-cols-3 gap-6">
          {tours.slice(0, 3).map((tour) => (
            <Link key={tour.slug} href={`/tours/${tour.slug}`} className="rounded border border-indigo-dye/20 bg-white p-6">
              <h3 className="text-xl font-semibold">{tour.title}</h3>
              <p className="mt-2">{tour.duration}</p>
              <p className="mt-4 font-semibold">{tour.price}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
