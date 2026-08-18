"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    setLoading(false);

    if (res.ok) {
      router.push("/admin");
      router.refresh();
    } else {
      setError("Contraseña incorrecta");
    }
  }

  return (
    <main className="flex min-h-screen flex-1 items-center justify-center bg-cream px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-3xl bg-white p-8 shadow-sm ring-1 ring-blush"
      >
        <h1 className="text-center font-script text-4xl text-chocolate">
          Dulce María
        </h1>
        <p className="mt-1 text-center font-heading text-sm uppercase tracking-widest text-gold">
          Panel Admin
        </p>

        <label className="mt-6 block font-heading text-sm font-semibold text-chocolate-soft">
          Contraseña
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full rounded-xl border border-blush bg-cream-soft px-4 py-2.5 font-body text-chocolate outline-none focus:border-candy-pink"
            autoFocus
            required
          />
        </label>

        {error && (
          <p className="mt-3 text-sm font-medium text-candy-pink-dark">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full rounded-full bg-candy-pink py-2.5 font-heading font-semibold text-white transition hover:bg-candy-pink-dark disabled:opacity-60"
        >
          {loading ? "Entrando..." : "Entrar"}
        </button>
      </form>
    </main>
  );
}
