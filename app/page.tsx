import { prisma } from "@/lib/prisma";
import TarjetaProducto from "@/components/TarjetaProducto";

export const revalidate = 0;

export default async function Home() {
  const productos = await prisma.producto.findMany({
    where: { disponible: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="flex-1">
      <section className="relative overflow-hidden px-6 pb-12 pt-16 text-center sm:pt-24">
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
      </section>

      <section className="px-4 pb-20 sm:px-8">
        {productos.length === 0 ? (
          <div className="mx-auto max-w-md rounded-3xl bg-white/60 p-10 text-center ring-1 ring-blush">
            <p className="font-heading text-lg text-chocolate-soft">
              Muy pronto vas a encontrar aquí todos nuestros dulces 🍭
            </p>
          </div>
        ) : (
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
            {productos.map((producto) => (
              <TarjetaProducto
                key={producto.id}
                nombre={producto.nombre}
                descripcion={producto.descripcion}
                precio={producto.precio}
                imagenUrl={producto.imagenUrl}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
