import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const categorias = await prisma.categoria.findMany({
    orderBy: { orden: "asc" },
  });
  return NextResponse.json(categorias);
}

export async function POST(request: NextRequest) {
  const session = request.cookies.get("admin_session");
  if (session?.value !== "authenticated") {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const data = await request.json();

  const ultimaCategoria = await prisma.categoria.findFirst({
    orderBy: { orden: "desc" },
  });
  const siguienteOrden = (ultimaCategoria?.orden ?? 0) + 1;

  const categoria = await prisma.categoria.create({
    data: {
      nombre: data.nombre,
      orden: siguienteOrden,
    },
  });

  return NextResponse.json(categoria, { status: 201 });
}
