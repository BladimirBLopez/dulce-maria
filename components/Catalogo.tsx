"use client";

import { useState, useMemo } from "react";
import TarjetaProducto from "./TarjetaProducto";

type Categoria = {
  id: string;
  nombre: string;
};

type Producto = {
  id: string;
  nombre: string;
  descripcion: string | null;
  precio: number;
  imagenUrl: string;
  categoria: Categoria | null;
  createdAt: Date | string;
};

const SIETE_DIAS_MS = 7 * 24 * 60 * 60 * 1000;

function esProductoNuevo(createdAt: Date | string) {
  const fecha = new Date(createdAt).getTime();
  return Date.now() - fecha < SIETE_DIAS_MS;
}

type Props = {
  productos: Producto[];
  categorias: Categoria[];
};

export default function Catalogo({ productos, categorias }: Props) {
  const [busqueda, setBusqueda] = useState("");
  const [categoriaActiva, setCategoriaActiva] = useState<string | null>(null);

  const productosFiltrados = useMemo(() => {
    return productos.filter((p) => {
      const coincideCategoria =
        !categoriaActiva || p.categoria?.id === categoriaActiva;
      const coincideBusqueda = p.nombre
        .toLowerCase()
        .includes(busqueda.trim().toLowerCase());
      return coincideCategoria && coincideBusqueda;
    });
  }, [productos, busqueda, categoriaActiva]);

  return (
    <>
      <div className="mx-auto max-w-md px-4 pt-8 sm:px-8">
        <div className="relative">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg">
            🔍
          </span>
          <input
            type="text"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Buscar un dulce..."
            className="w-full rounded-full border-2 border-blush bg-white py-3 pl-11 pr-5 font-body text-chocolate shadow-sm outline-none focus:border-candy-pink"
          />
        </div>
      </div>

      {categorias.length > 0 && (
        <div className="mt-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:justify-center sm:px-8">
          <button
            onClick={() => setCategoriaActiva(null)}
            className={`flex-shrink-0 rounded-full border-2 px-4 py-2 font-heading text-sm font-semibold transition ${
              !categoriaActiva
                ? "border-candy-pink-dark bg-candy-pink text-white shadow-sm"
                : "border-blush bg-white text-chocolate-soft hover:border-candy-pink hover:bg-blush"
            }`}
          >
            🍭 Todos
          </button>
          {categorias.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategoriaActiva(cat.id)}
              className={`flex-shrink-0 rounded-full border-2 px-4 py-2 font-heading text-sm font-semibold transition ${
                categoriaActiva === cat.id
                  ? "border-candy-pink-dark bg-candy-pink text-white shadow-sm"
                  : "border-blush bg-white text-chocolate-soft hover:border-candy-pink hover:bg-blush"
              }`}
            >
              {cat.nombre}
            </button>
          ))}
        </div>
      )}

      <section className="px-4 pb-20 pt-6 sm:px-8">
        {productosFiltrados.length === 0 ? (
          <div className="mx-auto max-w-md rounded-3xl bg-white/60 p-10 text-center ring-1 ring-blush">
            <p className="font-heading text-lg text-chocolate-soft">
              {productos.length === 0
                ? "Muy pronto vas a encontrar aquí todos nuestros dulces 🍭"
                : "No encontramos dulces con ese nombre 🔍"}
            </p>
          </div>
        ) : (
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
            {productosFiltrados.map((producto) => (
              <TarjetaProducto
                key={producto.id}
                id={producto.id}
                nombre={producto.nombre}
                descripcion={producto.descripcion}
                precio={producto.precio}
                imagenUrl={producto.imagenUrl}
                categoriaNombre={producto.categoria?.nombre}
                esNuevo={esProductoNuevo(producto.createdAt)}
              />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
