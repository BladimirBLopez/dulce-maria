import Image from "next/image";
import Link from "next/link";
import BotonWhatsApp from "./BotonWhatsApp";
import { formatearPrecio } from "@/lib/formato";

type Props = {
  id: string;
  nombre: string;
  descripcion: string | null;
  precio: number;
  imagenUrl: string;
  categoriaNombre?: string;
  esNuevo?: boolean;
  mostrarPrecio?: boolean;
  agotado?: boolean;
  enOferta?: boolean;
};

export default function TarjetaProducto({
  id,
  nombre,
  descripcion,
  precio,
  imagenUrl,
  categoriaNombre,
  esNuevo,
  mostrarPrecio = true,
  agotado = false,
  enOferta = false,
}: Props) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-blush transition hover:-translate-y-0.5 hover:shadow-lg">
      <Link
        href={`/producto/${id}`}
        className="relative block aspect-square w-full overflow-hidden bg-cream-soft"
      >
        <Image
          src={imagenUrl}
          alt={nombre}
          fill
          className={`object-cover transition duration-300 group-hover:scale-105 ${
            agotado ? "grayscale opacity-60" : ""
          }`}
          sizes="(max-width: 768px) 50vw, 25vw"
        />

        <div className="absolute left-2 top-2 flex flex-col gap-1">
          {agotado && (
            <span className="rounded-full bg-chocolate-soft px-2.5 py-1 font-heading text-[10px] font-bold uppercase tracking-wide text-white shadow">
              Agotado
            </span>
          )}
          {!agotado && enOferta && (
            <span className="rounded-full bg-candy-pink-dark px-2.5 py-1 font-heading text-[10px] font-bold uppercase tracking-wide text-white shadow">
              Oferta
            </span>
          )}
          {!agotado && esNuevo && (
            <span className="rounded-full bg-gold px-2.5 py-1 font-heading text-[10px] font-bold uppercase tracking-wide text-white shadow">
              Nuevo
            </span>
          )}
        </div>

        {mostrarPrecio && (
          <span className="absolute bottom-2 right-2 rounded-full bg-candy-pink px-3 py-1.5 font-heading text-sm font-bold text-white shadow-md">
            Bs {formatearPrecio(precio)}
          </span>
        )}
      </Link>

      <svg
        className="block w-full text-white"
        viewBox="0 0 200 8"
        preserveAspectRatio="none"
        style={{ height: 8 }}
      >
        <path
          d="M0,0 Q5,8 10,0 T20,0 T30,0 T40,0 T50,0 T60,0 T70,0 T80,0 T90,0 T100,0 T110,0 T120,0 T130,0 T140,0 T150,0 T160,0 T170,0 T180,0 T190,0 T200,0 V8 H0 Z"
          fill="currentColor"
        />
      </svg>

      <div className="flex flex-1 flex-col gap-1.5 px-4 pb-4 pt-1">
        {categoriaNombre && (
          <span className="inline-flex w-fit items-center gap-1 rounded-full bg-blush/60 px-2.5 py-0.5 font-heading text-[10px] font-bold uppercase tracking-wider text-candy-pink-dark">
            {categoriaNombre}
          </span>
        )}
        <Link href={`/producto/${id}`}>
          <h3 className="line-clamp-2 font-heading text-lg font-semibold leading-tight text-chocolate hover:text-candy-pink-dark">
            {nombre}
          </h3>
        </Link>
        {descripcion && (
          <p className="line-clamp-2 text-sm text-chocolate-soft">
            {descripcion}
          </p>
        )}

        <BotonWhatsApp
          producto={nombre}
          className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-candy-pink px-4 py-2.5 text-sm font-heading font-semibold text-white transition hover:bg-candy-pink-dark"
        />
      </div>
    </div>
  );
}
