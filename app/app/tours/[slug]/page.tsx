import Link from "next/link";
import { tours } from "@/lib/tours";

export default async function TourPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tour = tours.find((t) => t.slug === slug)!;

  return (
    <section className="px-12 py-16">
      <h1 className="text-4xl font-semibold">{tour.title}</h1>
      <p className="mt-4 max-w-xl">{tour.summary}</p>

      <table className="mt-8 min-w-[720px] border border-indigo-dye/20 bg-white">
        <thead>
          <tr className="bg-indigo-dye text-left text-white">
            <th className="p-3">Duration</th>
            <th className="p-3">Price</th>
            <th className="p-3">Group size</th>
            <th className="p-3">Includes</th>
            <th className="p-3">Meeting point</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-3">{tour.duration}</td>
            <td className="p-3">{tour.price}</td>
            <td className="p-3">{tour.groupSize}</td>
            <td className="p-3">{tour.inclusions}</td>
            <td className="p-3">{tour.meetingPoint}</td>
          </tr>
        </tbody>
      </table>

      <Link href="/inquiry" className="mt-8 inline-block rounded bg-saffron px-6 py-3 font-semibold">
        Send an inquiry
      </Link>
    </section>
  );
}
