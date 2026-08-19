export default function DecoracionAcuarela() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Trazos superior izquierda */}
      <svg
        className="absolute -left-2 top-4 h-10 w-28 text-candy-pink/60 sm:left-6 sm:top-8"
        viewBox="0 0 120 40"
        fill="none"
      >
        <path
          d="M5 25 Q40 10 115 15"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M5 32 Q40 18 100 22"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>

      {/* Corazón derecha */}
      <svg
        className="absolute right-6 top-16 h-6 w-6 text-blush sm:right-16 sm:top-20"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 21s-7.5-4.6-10-9.1C0.3 8.6 2 5 5.5 5c2 0 3.3 1 4.5 2.6C11.2 6 12.5 5 14.5 5 18 5 19.7 8.6 18 11.9 15.5 16.4 12 21 12 21z" />
      </svg>

      {/* Trazo derecha */}
      <svg
        className="absolute -right-4 top-2 h-8 w-20 rotate-12 text-candy-pink/40 sm:right-10"
        viewBox="0 0 120 40"
        fill="none"
      >
        <path
          d="M5 20 L115 20"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

      {/* Corazón izquierda abajo */}
      <svg
        className="absolute left-10 bottom-2 h-5 w-5 text-candy-pink/50 sm:left-24"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 21s-7.5-4.6-10-9.1C0.3 8.6 2 5 5.5 5c2 0 3.3 1 4.5 2.6C11.2 6 12.5 5 14.5 5 18 5 19.7 8.6 18 11.9 15.5 16.4 12 21 12 21z" />
      </svg>
    </div>
  );
}
