export default function Footer() {
  return (
    <footer className="border-t border-blush/60 bg-white px-4 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 text-center">
        <p className="font-script text-3xl text-chocolate">Dulce María</p>
        <p className="font-heading text-xs font-semibold uppercase tracking-widest text-gold">
          Dulces Americanos
        </p>

        <div className="mt-2 flex flex-col gap-1 font-body text-sm text-chocolate-soft">
          <p>Av. Beni, esquina — Santa Cruz de la Sierra, Bolivia</p>
          <a
            href="https://wa.me/59175084630"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-candy-pink-dark hover:underline"
          >
            +591 75084630
          </a>
        </div>

        <p className="mt-4 font-body text-xs text-chocolate-soft/70">
          © {new Date().getFullYear()} Dulce María. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
