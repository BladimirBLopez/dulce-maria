import Image from "next/image";
import FranjaBeneficios from "./FranjaBeneficios";

type Props = {
  imagenesProductos: string[];
};

export default function HeroBanner({ imagenesProductos }: Props) {
  const franja = Array.from(
    { length: 8 },
    (_, i) =>
      imagenesProductos.length > 0
        ? imagenesProductos[i % imagenesProductos.length]
        : null
  );

  return (
    <section className="relative">
      {imagenesProductos.length > 0 && (
        <div className="flex h-40 w-full sm:h-56">
          {franja.map((url, i) => (
            <div key={i} className="relative flex-1 overflow-hidden">
              {url && (
                <Image
                  src={url}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="150px"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-cream/40 via-transparent to-transparent" />
            </div>
          ))}
        </div>
      )}

      <div className="relative z-10 mx-auto -mt-10 max-w-lg rounded-[2.5rem] bg-white px-6 py-9 text-center shadow-lg ring-1 ring-blush sm:-mt-14 sm:px-10">
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
