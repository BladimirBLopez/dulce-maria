import Image from "next/image";
import DecoracionAcuarela from "./DecoracionAcuarela";
import FranjaBeneficios from "./FranjaBeneficios";

type Props = {
  imagenesProductos: string[];
};

export default function HeroBanner({ imagenesProductos }: Props) {
  // Repetimos las imágenes disponibles hasta llenar 12 celdas del fondo
  const celdas = Array.from(
    { length: 12 },
    (_, i) => imagenesProductos[i % imagenesProductos.length]
  );

  return (
    <section className="relative overflow-hidden">
      {imagenesProductos.length > 0 && (
        <div className="absolute inset-0 grid grid-cols-4 gap-1 opacity-25 sm:grid-cols-6">
          {celdas.map((url, i) => (
            <div key={i} className="relative aspect-square">
              <Image
                src={url}
                alt=""
                fill
                className="object-cover"
                sizes="200px"
              />
            </div>
          ))}
        </div>
      )}

      <div className="absolute inset-0 bg-cream/85" />

      <div className="relative px-6 pb-8 pt-12 text-center sm:pt-16">
        <DecoracionAcuarela />

        <div className="mx-auto max-w-lg rounded-[2.5rem] bg-white/90 px-6 py-10 shadow-sm ring-1 ring-blush backdrop-blur-sm sm:px-10">
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
      </div>
    </section>
  );
}
