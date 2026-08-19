"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function FormularioCategoria() {
  const router = useRouter();
  const [nombre, setNombre] = useState("");
  const [guardando, setGuardando] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setGuardando(true);

    const res = await fetch("/api/categorias", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre }),
    });

    setGuardando(false);

    if (res.ok) {
      setNombre("");
      router.refresh();
    } else {
      setError("No se pudo crear la categoría (¿ya existe?).");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Nueva categoría"
        className="flex-1 rounded-xl border border-blush bg-cream-soft px-4 py-2.5 font-body text-chocolate outline-none focus:border-candy-pink"
        required
      />
      <button
        type="submit"
        disabled={guardando}
        className="rounded-full bg-candy-pink px-5 py-2.5 font-heading font-semibold text-white transition hover:bg-candy-pink-dark disabled:opacity-60"
      >
        {guardando ? "..." : "Agregar"}
      </button>
      {error && (
        <p className="w-full text-sm font-medium text-candy-pink-dark">
          {error}
        </p>
      )}
    </form>
  );
}
