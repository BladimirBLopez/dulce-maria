import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const CONFIG_ID = "config_global";

export async function PATCH(request: NextRequest) {
  const session = request.cookies.get("admin_session");
  if (session?.value !== "authenticated") {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const data = await request.json();

  const config = await prisma.configuracion.upsert({
    where: { id: CONFIG_ID },
    update: { mostrarPrecios: data.mostrarPrecios },
    create: { id: CONFIG_ID, mostrarPrecios: data.mostrarPrecios },
  });

  return NextResponse.json(config);
}
