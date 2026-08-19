import Image from "next/image";
import FranjaBeneficios from "./FranjaBeneficios";

const FONDO_URL =
  "https://res.cloudinary.com/dkq95jus0/image/upload/v1787154357/pexels-perfect-lens-14147299_yrfntp.jpg";

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden px-6 py-16 text-center sm:py-24">
      <Image
        src={FONDO_URL}
        alt=""
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-chocolate/70" />

      <div className="relative z-10">
        <p className="font-heading text-sm font-semibold uppercase tracking-[0.3em] text-gold">
          Dulces Americanos
        </p>
        <h1 className="mt-3 font-script text-6xl leading-none text-white sm:text-8xl">
          Dulce María
        </h1>
        <p className="mx-auto mt-5 max-w-md font-body text-base text-white/90 sm:text-lg">
          Chocolates, gomitas y snacks importados directo a tu antojo.
          Elige tu favorito y pide por WhatsApp.
        </p>

        <FranjaBeneficios />
      </div>
    </section>
  );
}
