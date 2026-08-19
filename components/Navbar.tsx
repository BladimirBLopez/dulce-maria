import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-blush/60 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-8">
        <Link
          href="/"
          className="font-script text-3xl leading-none text-chocolate"
        >
          Dulce María
        </Link>
        <a
          href="https://wa.me/59175084630"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-candy-pink px-4 py-2 font-heading text-sm font-semibold text-white transition hover:bg-candy-pink-dark"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}
