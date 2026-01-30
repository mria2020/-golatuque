import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GOLATUQUE - Transport Officiel de La Tuque",
  description: "Le service de transport #1 à La Tuque. Taxi, Navette, Livraison. Disponible 24/7. Réservez maintenant pour un service rapide et fiable.",
  keywords: ["Taxi La Tuque", "Transport La Tuque", "Navette", "Livraison", "GOLATUQUE"],
  openGraph: {
    title: "GOLATUQUE - Transport Premium",
    description: "La référence en transport à La Tuque.",
    locale: "fr_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
