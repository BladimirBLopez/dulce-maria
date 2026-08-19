import Image from "next/image";
import FranjaBeneficios from "./FranjaBeneficios";

const FONDO_URL =
  "https://res.cloudinary.com/dkq95jus0/image/upload/v1787154357/pexels-perfect-lens-14147299_yrfntp.jpg";

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-16 text-center sm:pb-20 sm:pt-24">
      <Image src={FONDO_URL} alt="" fill className="object-cover" priority />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.75)_75%,var(--color-cream)_100%)]" />

      <div className="relative z-10">
        <p className="font-heading text-sm font-semibold uppercase tracking-[0.3em] text-gold drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
          Dulces Americanos
        </p>
        <h1 className="mt-3 font-script text-6xl leading-none text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)] sm:text-8xl">
          Dulce María
        </h1>
        <p className="mx-auto mt-5 max-w-md font-body text-base text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)] sm:text-lg">
          Chocolates, gomitas y snacks importados directo a tu antojo.
          Elige tu favorito y pide por WhatsApp.
        </p>

        <FranjaBeneficios />
      </div>
    </section>
  );
}
