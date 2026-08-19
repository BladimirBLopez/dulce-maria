const beneficios = [
  {
    emoji: "💬",
    titulo: "Atención por WhatsApp",
    texto: "Te ayudamos a elegir y coordinar tu pedido",
  },
  {
    emoji: "🚴",
    titulo: "Entrega coordinada",
    texto: "Coordinamos la entrega en Santa Cruz",
  },
  {
    emoji: "🍬",
    titulo: "Dulces importados",
    texto: "Selección directa de marcas americanas",
  },
];

export default function FranjaBeneficios() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-6 sm:px-8">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {beneficios.map((b) => (
          <div
            key={b.titulo}
            className="flex items-center gap-3 rounded-2xl bg-white p-4 ring-1 ring-blush"
          >
            <span className="text-2xl">{b.emoji}</span>
            <div>
              <p className="font-heading text-sm font-bold text-chocolate">
                {b.titulo}
              </p>
              <p className="font-body text-xs text-chocolate-soft">
                {b.texto}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
