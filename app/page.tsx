import { prisma } from "@/lib/prisma";
import Catalogo from "@/components/Catalogo";
import HeroBanner from "@/components/HeroBanner";

export const revalidate = 0;

export default async function Home() {
  const [productos, categorias, config] = await Promise.all([
    prisma.producto.findMany({
      where: { disponible: true },
      include: { categoria: true },
      orderBy: { createdAt: "desc" },
    }),
    prisma.categoria.findMany({ orderBy: { orden: "asc" } }),
    prisma.configuracion.findUnique({ where: { id: "config_global" } }),
  ]);

  const mostrarPrecios = config?.mostrarPrecios ?? true;

  return (
    <main className="flex-1">
      <HeroBanner />
      <Catalogo
        productos={productos}
        categorias={categorias}
        mostrarPrecios={mostrarPrecios}
      />
    </main>
  );
}
