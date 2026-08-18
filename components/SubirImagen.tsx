"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  valorInicial?: string;
  onUploaded: (url: string) => void;
};

export default function SubirImagen({ valorInicial, onUploaded }: Props) {
  const [preview, setPreview] = useState(valorInicial ?? "");
  const [subiendo, setSubiendo] = useState(false);
  const [error, setError] = useState("");

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setError("");
    setSubiendo(true);

    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset!);

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        { method: "POST", body: formData }
      );

      if (!res.ok) throw new Error("Error al subir la imagen");

      const data = await res.json();
      setPreview(data.secure_url);
      onUploaded(data.secure_url);
    } catch {
      setError("No se pudo subir la imagen. Intenta de nuevo.");
    } finally {
      setSubiendo(false);
    }
  }

  return (
    <div>
      <label className="block font-heading text-sm font-semibold text-chocolate-soft">
        Foto del producto
      </label>

      {preview && (
        <div className="relative mt-2 h-40 w-40 overflow-hidden rounded-2xl ring-1 ring-blush">
          <Image src={preview} alt="Vista previa" fill className="object-cover" />
        </div>
      )}

      <input
        type="file"
        accept="image/*"
        onChange={handleFile}
        disabled={subiendo}
        className="mt-2 block w-full font-body text-sm text-chocolate-soft file:mr-3 file:rounded-full file:border-0 file:bg-blush file:px-4 file:py-2 file:font-heading file:font-semibold file:text-chocolate hover:file:bg-candy-pink hover:file:text-white"
      />

      {subiendo && (
        <p className="mt-1 text-sm text-chocolate-soft">Subiendo imagen...</p>
      )}
      {error && (
        <p className="mt-1 text-sm text-candy-pink-dark">{error}</p>
      )}
    </div>
  );
}
