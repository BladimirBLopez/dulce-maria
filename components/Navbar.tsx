import Image from "next/image";
import Link from "next/link";

const LOGO_URL =
  "https://res.cloudinary.com/dkq95jus0/image/upload/v1787158940/logo-recortado_t7mna7.png";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-blush/60 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 sm:px-8">
        <Link href="/" className="relative h-14 w-14 sm:h-16 sm:w-16">
          <Image
            src={LOGO_URL}
            alt="Dulce María"
            fill
            className="object-contain"
          />
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
