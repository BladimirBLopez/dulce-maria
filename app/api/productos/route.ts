import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const productos = await prisma.producto.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(productos);
}

export async function POST(request: NextRequest) {
  const session = request.cookies.get("admin_session");
  if (session?.value !== "authenticated") {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const data = await request.json();

  const producto = await prisma.producto.create({
    data: {
      nombre: data.nombre,
      descripcion: data.descripcion || null,
      precio: parseFloat(data.precio),
      imagenUrl: data.imagenUrl,
      disponible: data.disponible ?? true,
      agotado: data.agotado ?? false,
      enOferta: data.enOferta ?? false,
      categoriaId: data.categoriaId || null,
    },
  });

  return NextResponse.json(producto, { status: 201 });
}
