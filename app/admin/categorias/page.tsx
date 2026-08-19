import Link from "next/link";
import { prisma } from "@/lib/prisma";
import FormularioCategoria from "@/components/FormularioCategoria";
import BotonEliminarCategoria from "@/components/BotonEliminarCategoria";

export const revalidate = 0;

export default async function CategoriasPage() {
  const categorias = await prisma.categoria.findMany({
    orderBy: { orden: "asc" },
    include: { _count: { select: { productos: true } } },
  });

  return (
    <main className="min-h-screen flex-1 bg-cream px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-lg">
        <Link
          href="/admin"
          className="font-heading text-sm font-semibold text-chocolate-soft hover:text-candy-pink-dark"
        >
          ← Volver
        </Link>

        <h1 className="mt-3 font-script text-4xl text-chocolate">
          Categorías
        </h1>

        <div className="mt-6 rounded-3xl bg-white p-6 ring-1 ring-blush">
          <FormularioCategoria />
        </div>

        <div className="mt-6 flex flex-col gap-3">
          {categorias.map((categoria) => (
            <div
              key={categoria.id}
              className="flex items-center justify-between rounded-2xl bg-white p-4 ring-1 ring-blush"
            >
              <div>
                <p className="font-heading font-semibold text-chocolate">
                  {categoria.nombre}
                </p>
                <p className="font-body text-sm text-chocolate-soft">
                  {categoria._count.productos} producto
                  {categoria._count.productos !== 1 && "s"}
                </p>
              </div>
              <BotonEliminarCategoria
                id={categoria.id}
                nombre={categoria.nombre}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
