type Props = {
  producto: string;
  className?: string;
};

const NUMERO_WHATSAPP = "59175084630";

export default function BotonWhatsApp({ producto, className }: Props) {
  const mensaje = encodeURIComponent(
    `¡Hola! Me interesa "${producto}" 🍬 ¿Está disponible?`
  );
  const url = `https://wa.me/${NUMERO_WHATSAPP}?text=${mensaje}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={
        className ??
        "inline-flex items-center justify-center gap-2 rounded-full bg-candy-pink px-5 py-2.5 font-heading font-semibold text-white transition hover:bg-candy-pink-dark"
      }
    >
      Pedir por WhatsApp
    </a>
  );
}
