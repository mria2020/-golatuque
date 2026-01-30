import type { Metadata } from "next";
import Home from "../page";

export const metadata: Metadata = {
    title: "Livraison Locale La Tuque - Colis & Commandes | golatuque",
    description: "Service de livraison locale à La Tuque. Récupération de commandes, paquets et commissions urgentes. Rapide et sécuritaire.",
    alternates: {
        canonical: 'https://golatuque.com/livraison-locale-la-tuque'
    }
};

export default function LivraisonPage() {
    return <Home />;
}
