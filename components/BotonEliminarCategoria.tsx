"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  id: string;
  nombre: string;
};

export default function BotonEliminarCategoria({ id, nombre }: Props) {
  const router = useRouter();
  const [eliminando, setEliminando] = useState(false);

  async function handleClick() {
    const confirmado = window.confirm(
      `¿Eliminar "${nombre}"? Los productos quedarán sin categoría.`
    );
    if (!confirmado) return;

    setEliminando(true);
    const res = await fetch(`/api/categorias/${id}`, { method: "DELETE" });
    setEliminando(false);

    if (res.ok) {
      router.refresh();
    } else {
      alert("No se pudo eliminar la categoría.");
    }
  }

  return (
    <button
      onClick={handleClick}
      disabled={eliminando}
      className="rounded-full bg-white px-4 py-2 font-heading text-sm font-semibold text-candy-pink-dark ring-1 ring-blush transition hover:bg-candy-pink hover:text-white disabled:opacity-60"
    >
      {eliminando ? "..." : "Eliminar"}
    </button>
  );
}
