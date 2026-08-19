import Link from "next/link";

type Categoria = {
  id: string;
  nombre: string;
};

type Props = {
  categorias: Categoria[];
  categoriaActiva?: string;
};

export default function FiltroCategorias({
  categorias,
  categoriaActiva,
}: Props) {
  if (categorias.length === 0) return null;

  return (
    <div className="flex gap-2 overflow-x-auto px-4 pb-2 sm:justify-center sm:px-8">
      <Link
        href="/"
        className={`flex-shrink-0 rounded-full px-4 py-2 font-heading text-sm font-semibold transition ${
          !categoriaActiva
            ? "bg-candy-pink text-white"
            : "bg-white text-chocolate-soft ring-1 ring-blush hover:bg-blush"
        }`}
      >
        Todos
      </Link>
      {categorias.map((cat) => (
        <Link
          key={cat.id}
          href={`/?categoria=${cat.id}`}
          className={`flex-shrink-0 rounded-full px-4 py-2 font-heading text-sm font-semibold transition ${
            categoriaActiva === cat.id
              ? "bg-candy-pink text-white"
              : "bg-white text-chocolate-soft ring-1 ring-blush hover:bg-blush"
          }`}
        >
          {cat.nombre}
        </Link>
      ))}
    </div>
  );
}
