import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

function noAutorizado(request: NextRequest) {
  const session = request.cookies.get("admin_session");
  return session?.value !== "authenticated";
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const producto = await prisma.producto.findUnique({ where: { id } });

  if (!producto) {
    return NextResponse.json(
      { error: "Producto no encontrado" },
      { status: 404 }
    );
  }

  return NextResponse.json(producto);
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (noAutorizado(request)) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const { id } = await params;
  const data = await request.json();

  const producto = await prisma.producto.update({
    where: { id },
    data: {
      nombre: data.nombre,
      descripcion: data.descripcion || null,
      precio: data.precio !== undefined ? parseFloat(data.precio) : undefined,
      imagenUrl: data.imagenUrl,
      disponible: data.disponible,
    },
  });

  return NextResponse.json(producto);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (noAutorizado(request)) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const { id } = await params;
  await prisma.producto.delete({ where: { id } });

  return NextResponse.json({ success: true });
}
