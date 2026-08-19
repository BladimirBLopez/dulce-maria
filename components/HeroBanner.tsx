import Image from "next/image";
import DecoracionAcuarela from "./DecoracionAcuarela";
import FranjaBeneficios from "./FranjaBeneficios";

type Props = {
  imagenesProductos: string[];
};

const POSICIONES = [
  "left-[-10px] top-6 h-20 w-20 rotate-[-12deg] sm:left-4 sm:h-28 sm:w-28",
  "right-[-10px] top-16 h-16 w-16 rotate-[10deg] sm:right-6 sm:h-24 sm:w-24",
  "left-2 bottom-10 h-16 w-16 rotate-[8deg] sm:left-10 sm:h-20 sm:w-20",
  "right-2 bottom-4 h-20 w-20 rotate-[-8deg] sm:right-12 sm:h-24 sm:w-24",
];

export default function HeroBanner({ imagenesProductos }: Props) {
  const flotantes = imagenesProductos.slice(0, 4);

  return (
    <section className="relative overflow-hidden px-4 pb-8 pt-10 sm:pt-14">
      <DecoracionAcuarela />

      {flotantes.map((url, i) => (
        <div
          key={i}
          className={`absolute z-0 overflow-hidden rounded-3xl bg-white shadow-lg ring-4 ring-white ${POSICIONES[i]}`}
        >
          <Image src={url} alt="" fill className="object-cover" sizes="120px" />
        </div>
      ))}

      <div className="relative z-10 mx-auto max-w-lg rounded-[2.5rem] bg-white px-6 py-10 text-center shadow-sm ring-1 ring-blush sm:px-10">
        <p className="font-heading text-sm font-semibold uppercase tracking-[0.3em] text-gold">
          Dulces Americanos
        </p>
        <h1 className="mt-3 font-script text-6xl leading-none text-chocolate sm:text-7xl">
          Dulce María
        </h1>
        <p className="mx-auto mt-5 max-w-md font-body text-base text-chocolate-soft">
          Chocolates, gomitas y snacks importados directo a tu antojo.
          Elige tu favorito y pide por WhatsApp.
        </p>

        <FranjaBeneficios />
      </div>
    </section>
  );
}
