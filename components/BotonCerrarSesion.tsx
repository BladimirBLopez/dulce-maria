"use client";

import { useRouter } from "next/navigation";

export default function BotonCerrarSesion() {
  const router = useRouter();

  async function handleClick() {
    await fetch("/api/admin/login", { method: "DELETE" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <button
      onClick={handleClick}
      className="rounded-full bg-white px-4 py-2 font-heading text-sm font-semibold text-chocolate-soft ring-1 ring-blush transition hover:bg-cream-soft"
    >
      Cerrar sesión
    </button>
  );
}
