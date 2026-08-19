const beneficios = [
  { emoji: "💬", texto: "Atención por WhatsApp" },
  { emoji: "🚴", texto: "Entrega en Santa Cruz" },
  { emoji: "🍬", texto: "Dulces importados" },
];

export default function FranjaBeneficios() {
  return (
    <div className="mx-auto mt-6 flex max-w-2xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4">
      {beneficios.map((b) => (
        <span
          key={b.texto}
          className="inline-flex items-center gap-1.5 font-heading text-sm font-semibold text-white/95"
        >
          <span>{b.emoji}</span>
          {b.texto}
        </span>
      ))}
    </div>
  );
}
