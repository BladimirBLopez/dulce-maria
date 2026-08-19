"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  valorInicial: boolean;
};

export default function ToggleMostrarPrecios({ valorInicial }: Props) {
  const router = useRouter();
  const [activo, setActivo] = useState(valorInicial);
  const [guardando, setGuardando] = useState(false);

  async function handleToggle() {
    const nuevoValor = !activo;
    setActivo(nuevoValor);
    setGuardando(true);

    const res = await fetch("/api/configuracion", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mostrarPrecios: nuevoValor }),
    });

    setGuardando(false);

    if (res.ok) {
      router.refresh();
    } else {
      setActivo(!nuevoValor);
      alert("No se pudo actualizar la configuración.");
    }
  }

  return (
    <div className="flex items-center justify-between rounded-2xl bg-white p-4 ring-1 ring-blush">
      <div>
        <p className="font-heading text-sm font-semibold text-chocolate">
          Mostrar precios en la página
        </p>
        <p className="font-body text-xs text-chocolate-soft">
          {activo
            ? "Los precios se ven en el catálogo"
            : "Los precios están ocultos"}
        </p>
      </div>

      <button
        onClick={handleToggle}
        disabled={guardando}
        className={`relative h-7 w-12 flex-shrink-0 rounded-full transition ${
          activo ? "bg-candy-pink" : "bg-blush"
        } disabled:opacity-60`}
      >
        <span
          className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition ${
            activo ? "left-6" : "left-1"
          }`}
        />
      </button>
    </div>
  );
}
