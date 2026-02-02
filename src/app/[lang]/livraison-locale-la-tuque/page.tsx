import type { Metadata } from "next";
import Home from "../page";
import type { Locale } from "../../../i18n/config";

export const metadata: Metadata = {
    title: "Livraison Locale La Tuque - Service Rapide | golatuque",
    description: "Service de livraison locale à La Tuque. Documents, colis, commissions. Rapide et fiable.",
    alternates: {
        canonical: 'https://golatuque.com/livraison-locale-la-tuque'
    }
};

export default async function LivraisonPage({ params }: { params: Promise<{ lang: Locale }> }) {
    return <Home params={params} />;
}
