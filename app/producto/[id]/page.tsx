import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import BotonWhatsApp from "@/components/BotonWhatsApp";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const producto = await prisma.producto.findUnique({ where: { id } });

  if (!producto) return {};

  return {
    title: `${producto.nombre} | Dulce María`,
    description: producto.descripcion ?? `${producto.nombre} - Bs ${producto.precio.toFixed(2)}`,
    openGraph: {
      title: producto.nombre,
      description: producto.descripcion ?? undefined,
      images: [producto.imagenUrl],
    },
  };
}

export default async function ProductoPage({ params }: Props) {
  const { id } = await params;
  const producto = await prisma.producto.findUnique({
    where: { id },
    include: { categoria: true },
  });

  if (!producto || !producto.disponible) {
    notFound();
  }

  return (
    <main className="flex-1 px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="font-heading text-sm font-semibold text-chocolate-soft hover:text-candy-pink-dark"
        >
          ← Volver al catálogo
        </Link>

        <div className="mt-4 overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-blush sm:grid sm:grid-cols-2">
          <div className="relative aspect-square w-full bg-cream-soft">
            <Image
              src={producto.imagenUrl}
              alt={producto.nombre}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
              priority
            />
          </div>

          <div className="flex flex-col gap-3 p-6 sm:p-8">
            {producto.categoria && (
              <span className="font-heading text-xs font-bold uppercase tracking-wider text-gold">
                {producto.categoria.nombre}
              </span>
            )}

            <h1 className="font-heading text-2xl font-bold text-chocolate sm:text-3xl">
              {producto.nombre}
            </h1>

            {producto.descripcion && (
              <p className="font-body text-chocolate-soft">
                {producto.descripcion}
              </p>
            )}

            <span className="mt-2 font-heading text-3xl font-bold text-candy-pink-dark">
              Bs {producto.precio.toFixed(2)}
            </span>

            <BotonWhatsApp
              producto={producto.nombre}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-candy-pink px-6 py-3 font-heading font-semibold text-white transition hover:bg-candy-pink-dark"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
