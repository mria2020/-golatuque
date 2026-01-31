import type { Metadata } from "next";
import Home from "../page";
import type { Locale } from "../../../i18n/config";

export const metadata: Metadata = {
    title: "Transport Travailleurs La Tuque - Navette Chantier | golatuque",
    description: "Transport pour travailleurs et équipes à La Tuque. Chantiers, quarts de travail. Service ponctuel 24/7.",
    alternates: {
        canonical: 'https://golatuque.com/transport-travailleurs-la-tuque'
    }
};

export default function TravailleursPage({ params }: { params: { lang: Locale } }) {
    // @ts-expect-error Async Server Component
    return <Home params={params} />;
}
