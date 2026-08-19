import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import BotonCerrarSesion from "@/components/BotonCerrarSesion";
import BotonEliminarProducto from "@/components/BotonEliminarProducto";
import ToggleMostrarPrecios from "@/components/ToggleMostrarPrecios";

export const revalidate = 0;

export default async function AdminPage() {
  const [productos, config] = await Promise.all([
    prisma.producto.findMany({
      include: { categoria: true },
      orderBy: { createdAt: "desc" },
    }),
    prisma.configuracion.findUnique({ where: { id: "config_global" } }),
  ]);

  return (
    <main className="min-h-screen flex-1 bg-cream px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <div>
          <p className="font-heading text-xs font-semibold uppercase tracking-widest text-gold">
            Panel Admin
          </p>
          <h1 className="font-script text-4xl text-chocolate">Productos</h1>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap gap-2">
            <Link
              href="/admin/categorias"
              className="rounded-full bg-white px-4 py-2 font-heading text-sm font-semibold text-chocolate-soft ring-1 ring-blush transition hover:bg-cream-soft"
            >
              🏷️ Categorías
            </Link>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-4 py-2 font-heading text-sm font-semibold text-chocolate-soft ring-1 ring-blush transition hover:bg-cream-soft"
            >
              🌐 Ver página web
            </a>
          </div>
          <BotonCerrarSesion />
        </div>

        <div className="mt-4">
          <ToggleMostrarPrecios valorInicial={config?.mostrarPrecios ?? true} />
        </div>

        <Link
          href="/admin/nuevo"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-candy-pink px-5 py-2.5 font-heading font-semibold text-white transition hover:bg-candy-pink-dark"
        >
          + Nuevo producto
        </Link>

        <div className="mt-6 flex flex-col gap-3">
          {productos.length === 0 && (
            <p className="rounded-2xl bg-white p-6 text-center font-body text-chocolate-soft ring-1 ring-blush">
              Todavía no hay productos. Crea el primero.
            </p>
          )}

          {productos.map((producto) => (
            <div
              key={producto.id}
              className="flex flex-col gap-3 rounded-2xl bg-white p-3 ring-1 ring-blush sm:flex-row sm:items-center"
            >
              <div className="flex items-center gap-3">
                <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl bg-cream-soft">
                  <Image
                    src={producto.imagenUrl}
                    alt={producto.nombre}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="truncate font-heading font-semibold text-chocolate">
                    {producto.nombre}
                  </p>
                  <p className="font-body text-sm text-chocolate-soft">
                    Bs {producto.precio.toFixed(2)}
                    {producto.categoria && ` · ${producto.categoria.nombre}`}
                    {!producto.disponible && " · Oculto"}
                  </p>
                </div>
              </div>

              <div className="flex flex-shrink-0 gap-2 sm:ml-auto">
                <Link
                  href={`/admin/${producto.id}/editar`}
                  className="flex-1 rounded-full bg-blush px-4 py-2 text-center font-heading text-sm font-semibold text-chocolate transition hover:bg-candy-pink hover:text-white sm:flex-none"
                >
                  Editar
                </Link>

                <BotonEliminarProducto id={producto.id} nombre={producto.nombre} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
