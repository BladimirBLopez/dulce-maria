export function formatearPrecio(precio: number): string {
  const tieneDecimales = precio % 1 !== 0;
  return tieneDecimales ? precio.toFixed(2) : precio.toFixed(0);
}
