import type { Metadata } from "next";
import Home from "../page";

export const metadata: Metadata = {
    title: "Transport Travailleurs La Tuque - Chantiers & Équipes | golatuque",
    description: "Navette et transport pour travailleurs à La Tuque. Service fiable pour chantiers, quarts de travail et entreprises. Réservation flexible.",
    alternates: {
        canonical: 'https://golatuque.com/transport-travailleurs-la-tuque'
    }
};

export default function TravailleursPage() {
    return <Home />;
}
