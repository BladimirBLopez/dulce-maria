import { prisma } from "@/lib/prisma";
import Catalogo from "@/components/Catalogo";
import HeroBanner from "@/components/HeroBanner";

export const revalidate = 0;

export default async function Home() {
  const [productos, categorias] = await Promise.all([
    prisma.producto.findMany({
      where: { disponible: true },
      include: { categoria: true },
      orderBy: { createdAt: "desc" },
    }),
    prisma.categoria.findMany({ orderBy: { orden: "asc" } }),
  ]);

  return (
    <main className="flex-1">
      <HeroBanner />
      <Catalogo productos={productos} categorias={categorias} />
    </main>
  );
}
