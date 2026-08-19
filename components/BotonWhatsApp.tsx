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
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 flex-shrink-0">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.85 9.85 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.8 14.16c-.24.68-1.4 1.3-1.93 1.35-.5.05-.98.24-3.3-.7-2.79-1.13-4.6-3.96-4.74-4.15-.14-.19-1.14-1.52-1.14-2.9 0-1.37.72-2.04.97-2.32.26-.28.56-.35.75-.35.19 0 .37 0 .53.01.17.01.4-.06.62.48.24.58.81 2 .88 2.14.07.14.12.31.02.5-.1.19-.15.31-.29.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.76 1.26 1.63 2.04 1.12 1 2.06 1.31 2.35 1.46.29.15.46.13.63-.08.17-.21.72-.84.92-1.13.19-.29.38-.24.63-.15.26.1 1.65.78 1.93.92.29.14.48.22.55.34.07.12.07.68-.17 1.35z" />
      </svg>
      Pedir por WhatsApp
    </a>
  );
}
