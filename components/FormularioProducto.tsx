"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import SubirImagen from "./SubirImagen";

type Producto = {
  id: string;
  nombre: string;
  descripcion: string | null;
  precio: number;
  imagenUrl: string;
  disponible: boolean;
  agotado: boolean;
  enOferta: boolean;
  categoriaId: string | null;
};

type Categoria = {
  id: string;
  nombre: string;
};

type Props = {
  producto?: Producto;
  categorias: Categoria[];
};

export default function FormularioProducto({ producto, categorias }: Props) {
  const router = useRouter();
  const esEdicion = Boolean(producto);

  const [nombre, setNombre] = useState(producto?.nombre ?? "");
  const [descripcion, setDescripcion] = useState(producto?.descripcion ?? "");
  const [precio, setPrecio] = useState(producto?.precio?.toString() ?? "");
  const [imagenUrl, setImagenUrl] = useState(producto?.imagenUrl ?? "");
  const [disponible, setDisponible] = useState(producto?.disponible ?? true);
  const [agotado, setAgotado] = useState(producto?.agotado ?? false);
  const [enOferta, setEnOferta] = useState(producto?.enOferta ?? false);
  const [categoriaId, setCategoriaId] = useState(producto?.categoriaId ?? "");
  const [guardando, setGuardando] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!imagenUrl) {
      setError("Sube una foto del producto antes de guardar.");
      return;
    }

    setGuardando(true);

    const url = esEdicion
      ? `/api/productos/${producto!.id}`
      : "/api/productos";
    const method = esEdicion ? "PATCH" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre,
        descripcion,
        precio,
        imagenUrl,
        disponible,
        agotado,
        enOferta,
        categoriaId: categoriaId || null,
      }),
    });

    setGuardando(false);

    if (res.ok) {
      router.push("/admin");
      router.refresh();
    } else {
      setError("No se pudo guardar el producto. Intenta de nuevo.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <SubirImagen valorInicial={imagenUrl} onUploaded={setImagenUrl} />

      <label className="block font-heading text-sm font-semibold text-chocolate-soft">
        Nombre
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="mt-1 w-full rounded-xl border border-blush bg-cream-soft px-4 py-2.5 font-body text-chocolate outline-none focus:border-candy-pink"
          required
        />
      </label>

      <label className="block font-heading text-sm font-semibold text-chocolate-soft">
        Categoría
        <select
          value={categoriaId}
          onChange={(e) => setCategoriaId(e.target.value)}
          className="mt-1 w-full rounded-xl border border-blush bg-cream-soft px-4 py-2.5 font-body text-chocolate outline-none focus:border-candy-pink"
        >
          <option value="">Sin categoría</option>
          {categorias.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.nombre}
            </option>
          ))}
        </select>
      </label>

      <label className="block font-heading text-sm font-semibold text-chocolate-soft">
        Descripción
        <textarea
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          rows={3}
          className="mt-1 w-full resize-none rounded-xl border border-blush bg-cream-soft px-4 py-2.5 font-body text-chocolate outline-none focus:border-candy-pink"
        />
      </label>

      <label className="block font-heading text-sm font-semibold text-chocolate-soft">
        Precio (Bs)
        <input
          type="number"
          step="0.01"
          min="0"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          className="mt-1 w-full rounded-xl border border-blush bg-cream-soft px-4 py-2.5 font-body text-chocolate outline-none focus:border-candy-pink"
          required
        />
      </label>

      <label className="flex items-center gap-2 font-heading text-sm font-semibold text-chocolate-soft">
        <input
          type="checkbox"
          checked={disponible}
          onChange={(e) => setDisponible(e.target.checked)}
          className="h-5 w-5 rounded border-blush text-candy-pink focus:ring-candy-pink"
        />
        Mostrar en el catálogo
      </label>

      <div>
        <p className="font-heading text-sm font-semibold text-chocolate-soft">
          Estado de stock
        </p>
        <div className="mt-2 flex gap-4">
          <label className="flex items-center gap-2 font-body text-sm text-chocolate">
            <input
              type="radio"
              name="stock"
              checked={!agotado}
              onChange={() => setAgotado(false)}
              className="h-4 w-4 text-candy-pink focus:ring-candy-pink"
            />
            En stock
          </label>
          <label className="flex items-center gap-2 font-body text-sm text-chocolate">
            <input
              type="radio"
              name="stock"
              checked={agotado}
              onChange={() => setAgotado(true)}
              className="h-4 w-4 text-candy-pink focus:ring-candy-pink"
            />
            Agotado
          </label>
        </div>
      </div>

      <label className="flex items-center gap-2 font-heading text-sm font-semibold text-chocolate-soft">
        <input
          type="checkbox"
          checked={enOferta}
          onChange={(e) => setEnOferta(e.target.checked)}
          className="h-5 w-5 rounded border-blush text-candy-pink focus:ring-candy-pink"
        />
        En oferta
      </label>

      {error && (
        <p className="text-sm font-medium text-candy-pink-dark">{error}</p>
      )}

      <button
        type="submit"
        disabled={guardando}
        className="rounded-full bg-candy-pink py-3 font-heading font-semibold text-white transition hover:bg-candy-pink-dark disabled:opacity-60"
      >
        {guardando ? "Guardando..." : esEdicion ? "Guardar cambios" : "Crear producto"}
      </button>
    </form>
  );
}
