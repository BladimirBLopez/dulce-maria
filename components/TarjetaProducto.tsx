import Image from "next/image";
import BotonWhatsApp from "./BotonWhatsApp";

type Props = {
  nombre: string;
  descripcion: string | null;
  precio: number;
  imagenUrl: string;
  categoriaNombre?: string;
};

export default function TarjetaProducto({
  nombre,
  descripcion,
  precio,
  imagenUrl,
  categoriaNombre,
}: Props) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-blush transition hover:shadow-md">
      <div className="relative aspect-square w-full overflow-hidden bg-cream-soft">
        <Image
          src={imagenUrl}
          alt={nombre}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      </div>

      <div className="mx-4 mt-3 border-t-2 border-dashed border-blush" />

      <div className="flex flex-1 flex-col gap-1.5 p-4 pt-3">
        {categoriaNombre && (
          <span className="font-heading text-xs font-bold uppercase tracking-wider text-gold">
            {categoriaNombre}
          </span>
        )}
        <h3 className="font-heading text-lg font-semibold leading-tight text-chocolate">
          {nombre}
        </h3>
        {descripcion && (
          <p className="line-clamp-2 text-sm text-chocolate-soft">
            {descripcion}
          </p>
        )}
        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="font-heading text-xl font-bold text-candy-pink-dark">
            Bs {precio.toFixed(2)}
          </span>
        </div>
        <BotonWhatsApp
          producto={nombre}
          className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-candy-pink px-4 py-2 text-sm font-heading font-semibold text-white transition hover:bg-candy-pink-dark"
        />
      </div>
    </div>
  );
}
