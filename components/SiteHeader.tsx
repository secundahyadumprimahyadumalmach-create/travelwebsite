import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="flex items-center justify-between bg-lagoon px-12 py-5 text-white">
      <Link href="/" className="font-display text-xl font-semibold whitespace-nowrap">
        Luming Concierge
      </Link>
      <nav className="flex gap-10 whitespace-nowrap">
        <Link href="/tours">Tours</Link>
        <Link href="/inquiry">Send an inquiry</Link>
      </nav>
    </header>
  );
}
