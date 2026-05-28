import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-ink px-5 text-center text-pearl">
      <div>
        <p className="section-kicker text-champagne">Page not found</p>
        <h1 className="editorial-title mt-5 text-6xl text-pearl sm:text-8xl">
          This invitation page is missing.
        </h1>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-champagne px-6 py-4 text-sm font-bold text-ink transition hover:bg-pearl"
        >
          Return home
        </Link>
      </div>
    </main>
  );
}
