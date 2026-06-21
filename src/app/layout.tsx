import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Airport Restaurant | Dal 1982",
  description: "Ristorante Pizzeria a Grottaglie. Cucina italiana dal 1982.",
  openGraph: {
    title: "Airport Restaurant",
    description: "Ristorante Pizzeria a Grottaglie (TA) dal 1982.",
    images: ["/og-airport.jpg"],
  },
};

const PRELOAD_IMAGES = [
  "/airport-pizze.webp",
  "/airport-pizzenew.webp",
  "/airport-antipasti.webp",
  "/airport-primi.webp",
  "/airport-secondicarne.webp",
  "/airport-secondipesce.webp",
  "/airport-bevande.webp",
  "/airport-dolci.webp",
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Jost:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        {PRELOAD_IMAGES.map((src) => (
          <link key={src} rel="preload" as="image" href={src} />
        ))}
      </head>
      <body>{children}</body>
    </html>
  );
}
