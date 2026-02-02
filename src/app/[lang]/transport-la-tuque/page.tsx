import type { Metadata } from "next";
import Home from "../page";
import type { Locale } from "../../../i18n/config";

export const metadata: Metadata = {
    title: "Transport La Tuque - Alternative Taxi & Navette | golatuque",
    description: "Besoin d'un transport à La Tuque? golatuque offre une alternative fiable au taxi. Service professionnel, estimation de prix immédiate et réservation facile.",
    alternates: {
        canonical: 'https://golatuque.com/transport-la-tuque'
    }
};

export default async function TransportPage({ params }: { params: Promise<{ lang: Locale }> }) {
    return <Home params={params} />;
}
