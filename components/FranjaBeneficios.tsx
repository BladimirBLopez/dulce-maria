const beneficios = [
  { emoji: "💬", texto: "Atención por WhatsApp" },
  { emoji: "🚴", texto: "Entrega en Santa Cruz" },
  { emoji: "🍬", texto: "Dulces importados" },
];

export default function FranjaBeneficios() {
  return (
    <div className="mx-auto mt-5 flex max-w-2xl flex-wrap items-center justify-center gap-2 px-4">
      {beneficios.map((b) => (
        <span
          key={b.texto}
          className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 font-heading text-xs font-semibold text-chocolate-soft ring-1 ring-blush"
        >
          <span>{b.emoji}</span>
          {b.texto}
        </span>
      ))}
    </div>
  );
}
