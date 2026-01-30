export const PRICING_CONFIG = {
    currency: "CAD",
    baseFare: 7.50,
    perKm: 2.05,
    perMin: 0.32,
    minimumFare: 11.00,
    roundTo: 0.25,

    // Bias for geocoding
    geoBias: "La Tuque, QC, Canada",

    // Contact
    phoneNumber: "5146775200",
    phoneNumberDisplay: "514-677-5200",

    multipliers: {
        period: {
            standard: 1.00,
            soir: 1.12, // 18h - 23h
            nuit: 1.25  // 23h - 06h
        },
        service: {
            personne: 1.00,
            travailleur: 1.05,
            livraison: 1.08,
            entreprise: 1.10
        }
    },

    keyLocations: [
        { name: "Hôpital de La Tuque", address: "885 Boulevard Ducharme, La Tuque, QC" },
        { name: "Gare / Terminus", address: "550 Rue Saint-Louis, La Tuque, QC" },
        { name: "IGA La Tuque", address: "455 Rue Saint-François, La Tuque, QC" },
        { name: "Maxi", address: "1150 Boulevard Ducharme, La Tuque, QC" },
        { name: "SAQ", address: "326 Rue Saint-Joseph, La Tuque, QC" },
        { name: "Centre-Ville (Rues Comm.)", address: "Rue Commerciale, La Tuque, QC" },
        { name: "Ski La Tuque", address: "La Tuque, QC" }
    ]
};

export const calculatePrice = (distanceKm: number, durationMin: number, tier: 'standard' | 'soir' | 'nuit', service: 'personne' | 'travailleur' | 'livraison' | 'entreprise') => {
    const { baseFare, perKm, perMin, minimumFare, multipliers, roundTo } = PRICING_CONFIG;

    const multPeriod = multipliers.period[tier];
    const multService = multipliers.service[service];

    const rawPrice = (baseFare + (distanceKm * perKm) + (durationMin * perMin)) * multPeriod * multService;
    const finalPrice = Math.max(minimumFare, rawPrice);

    // Round to nearest 0.25
    return Math.round(finalPrice / roundTo) * roundTo;
};
