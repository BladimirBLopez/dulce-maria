import type { Metadata } from "next";
import { Caveat, Baloo_2, Quicksand } from "next/font/google";
import "./globals.css";
import SiteChrome from "@/components/SiteChrome";

const caveat = Caveat({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const baloo = Baloo_2({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const quicksand = Quicksand({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dulce María | Dulces Americanos",
  description:
    "Dulces americanos en Bolivia. Chocolates, gomitas y snacks importados, directo al corazón dulce de Santa Cruz.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${caveat.variable} ${baloo.variable} ${quicksand.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-chocolate font-body">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
