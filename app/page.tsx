import { prisma } from "@/lib/prisma";
import Catalogo from "@/components/Catalogo";
import DecoracionAcuarela from "@/components/DecoracionAcuarela";
import FranjaBeneficios from "@/components/FranjaBeneficios";

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
      <section className="relative overflow-hidden px-6 pb-8 pt-12 text-center sm:pt-16">
        <DecoracionAcuarela />
        <p className="font-heading text-sm font-semibold uppercase tracking-[0.3em] text-gold">
          Dulces Americanos
        </p>
        <h1 className="mt-3 font-script text-6xl leading-none text-chocolate sm:text-8xl">
          Dulce María
        </h1>
        <p className="mx-auto mt-5 max-w-md font-body text-base text-chocolate-soft sm:text-lg">
          Chocolates, gomitas y snacks importados directo a tu antojo.
          Elige tu favorito y pide por WhatsApp.
        </p>

        <FranjaBeneficios />
      </section>

      <Catalogo productos={productos} categorias={categorias} />
    </main>
  );
}
