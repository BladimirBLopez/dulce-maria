import Link from "next/link";
import { prisma } from "@/lib/prisma";
import FormularioProducto from "@/components/FormularioProducto";

export const revalidate = 0;

export default async function NuevoProductoPage() {
  const categorias = await prisma.categoria.findMany({
    orderBy: { orden: "asc" },
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
          Nuevo producto
        </h1>

        <div className="mt-6 rounded-3xl bg-white p-6 ring-1 ring-blush">
          <FormularioProducto categorias={categorias} />
        </div>
      </div>
    </main>
  );
}
