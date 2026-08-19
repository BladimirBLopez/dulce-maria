import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

function noAutorizado(request: NextRequest) {
  const session = request.cookies.get("admin_session");
  return session?.value !== "authenticated";
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

  const categoria = await prisma.categoria.update({
    where: { id },
    data: { nombre: data.nombre },
  });

  return NextResponse.json(categoria);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (noAutorizado(request)) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const { id } = await params;

  await prisma.producto.updateMany({
    where: { categoriaId: id },
    data: { categoriaId: null },
  });

  await prisma.categoria.delete({ where: { id } });

  return NextResponse.json({ success: true });
}
