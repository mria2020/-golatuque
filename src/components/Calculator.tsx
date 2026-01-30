"use client";

import { useState, useEffect } from "react";
import { MapPin, Navigation, AlertCircle, Loader2, CheckCircle, RotateCcw, X } from "lucide-react";
import styles from "./Calculator.module.css";
import { PRICING_CONFIG, calculatePrice } from "../utils/pricing";

// Types
type LocationResult = {
    lat: number;
    lon: number;
    display_name: string;
};

type RouteResult = {
    distanceKm: number;
    durationMin: number;
};

export default function Calculator() {
    const [pickup, setPickup] = useState("");
    const [dropoff, setDropoff] = useState("");
    const [pickupCoords, setPickupCoords] = useState<LocationResult | null>(null);
    const [dropoffCoords, setDropoffCoords] = useState<LocationResult | null>(null);

    const [period, setPeriod] = useState<'standard' | 'soir' | 'nuit'>('standard');
    const [service, setService] = useState<'personne' | 'travailleur' | 'livraison' | 'entreprise'>('personne');

    const [result, setResult] = useState<{ distance: number, duration: number, price: number } | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [suggestions, setSuggestions] = useState<any[]>([]);
    const [activeField, setActiveField] = useState<'pickup' | 'dropoff' | null>(null);

    // Debounce for search
    useEffect(() => {
        const timer = setTimeout(() => {
            if (activeField === 'pickup' && pickup.length > 3) searchAddress(pickup);
            if (activeField === 'dropoff' && dropoff.length > 3) searchAddress(dropoff);
        }, 500);
        return () => clearTimeout(timer);
    }, [pickup, dropoff, activeField]);

    const searchAddress = async (query: string) => {
        try {
            // Clean query to avoid double region
            let q = query.trim();
            const lowerQ = q.toLowerCase();
            // Only append context if not already present
            if (!lowerQ.includes("canada") && !lowerQ.includes("qc") && !lowerQ.includes("quebec")) {
                q = `${q}, QC`;
            }

            // 1. First try: Priority to La Tuque + 100km region
            // Viewbox approx: Haut-St-Maurice / Mauricie
            const viewbox = "-74.5,48.5,-71.0,46.0";

            let res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(q)}&limit=5&countrycodes=ca&viewbox=${viewbox}&bounded=0`);
            let data = await res.json();

            // 2. Fallback: If no results in region, wide search in QC/Canada
            // This solves the issue if the address is just outside the box or obscure
            if (!data || data.length === 0) {
                // Try without viewbox bias
                res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(q)}&limit=5&countrycodes=ca`);
                data = await res.json();
            }

            setSuggestions(data || []);
        } catch (e) {
            console.error("Geocoding error", e);
            setSuggestions([]);
        }
    };

    const handleSelectAddress = (item: any) => {
        const loc = { lat: parseFloat(item.lat), lon: parseFloat(item.lon), display_name: item.display_name };
        if (activeField === 'pickup') {
            setPickup(item.display_name.split(',')[0]);
            setPickupCoords(loc);
        } else {
            setDropoff(item.display_name.split(',')[0]);
            setDropoffCoords(loc);
        }
        setSuggestions([]);
        setActiveField(null);
    };

    const getRoute = async (p: LocationResult, d: LocationResult): Promise<RouteResult> => {
        const res = await fetch(`https://router.project-osrm.org/route/v1/driving/${p.lon},${p.lat};${d.lon},${d.lat}?overview=false`);
        if (!res.ok) throw new Error("Erreur itinéraire");
        const data = await res.json();
        if (!data.routes || !data.routes.length) throw new Error("Route non trouvée");

        return {
            distanceKm: data.routes[0].distance / 1000,
            durationMin: data.routes[0].duration / 60
        };
    };

    const handleCalculate = async () => {
        if (!pickupCoords || !dropoffCoords) {
            setError("Veuillez sélectionner les adresses dans la liste.");
            return;
        }

        setLoading(true);
        setError(null);
        setResult(null);

        try {
            const route = await getRoute(pickupCoords, dropoffCoords);
            const price = calculatePrice(route.distanceKm, route.durationMin, period, service);

            setResult({
                distance: route.distanceKm,
                duration: route.durationMin,
                price: price
            });
        } catch (err) {
            setError("Impossible de calculer l'itinéraire précis. Vérifiez les adresses.");
        } finally {
            setLoading(false);
        }
    };

    const handleReset = () => {
        setPickup("");
        setDropoff("");
        setPickupCoords(null);
        setDropoffCoords(null);
        setResult(null);
        setError(null);
        setSuggestions([]);
        setActiveField(null);
    };

    const useCurrentLocation = () => {
        if (!navigator.geolocation) {
            setError("Géolocalisation non supportée");
            return;
        }
        setLoading(true);
        navigator.geolocation.getCurrentPosition(async (pos) => {
            try {
                const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`);
                const data = await res.json();
                setPickup(data.display_name.split(',')[0]);
                setPickupCoords({ lat: parseFloat(data.lat), lon: parseFloat(data.lon), display_name: data.display_name });
                setLoading(false);
            } catch (e) {
                setLoading(false);
                setError("Erreur de localisation");
            }
        }, () => {
            setLoading(false);
            setError("Accès à la position refusé");
        });
    };

    const selectKeyLocation = (loc: { name: string, address: string }) => {
        if (!pickup) {
            setPickup(loc.name);
            setActiveField('pickup');
        } else {
            setDropoff(loc.name);
            setActiveField('dropoff');
        }
        searchAddress(loc.address).then(() => {
            // Just pre-warming search, user usually still needs to click suggestion or we assume exact match? 
            // For better UX with "Key Locations", we should probably verify/geocode them ONCE or have coords hardcoded.
            // Current implementation relies on user clicking.
        });
    };

    const generateSMS = () => {
        if (!result) return "";
        const msg = `Bonjour golatuque!
Service: ${service} (${period})
De: ${pickup}
À: ${dropoff}
Est: ${result.price.toFixed(2)}$ (${result.distance.toFixed(1)}km)
Dispo?`;
        return `sms:${PRICING_CONFIG.phoneNumber}&body=${encodeURIComponent(msg)}`;
    };

    return (
        <div className={styles.calculatorCard}>
            <div className={styles.header}>
                <h3>Estimer votre trajet</h3>
                <div className={styles.headerActions}>
                    <button onClick={handleReset} className={styles.resetBtn} title="Réinitialiser">
                        <RotateCcw size={14} style={{ marginRight: 4 }} /> Reset
                    </button>
                    <span className={styles.badge}>Outil 24/7</span>
                </div>
            </div>

            <div className={styles.chips}>
                {PRICING_CONFIG.keyLocations.slice(0, 4).map((loc, i) => (
                    <button key={i} onClick={() => selectKeyLocation(loc)} className={styles.chip}>
                        {loc.name}
                    </button>
                ))}
            </div>

            <div className={styles.inputs}>
                <div className={styles.inputGroup}>
                    <MapPin size={20} className={styles.icon} />
                    <input
                        type="text"
                        placeholder="Adresse de départ"
                        value={pickup}
                        onChange={(e) => { setPickup(e.target.value); setActiveField('pickup'); }}
                        className={styles.input}
                    />
                    {pickup && (
                        <button
                            onClick={() => { setPickup(""); setPickupCoords(null); }}
                            className={styles.clearBtn}
                            title="Effacer"
                        >
                            <X size={16} />
                        </button>
                    )}
                    <button onClick={useCurrentLocation} className={styles.geoBtn} title="Ma position">
                        <Navigation size={16} />
                    </button>

                    {activeField === 'pickup' && suggestions.length > 0 && (
                        <ul className={styles.suggestions}>
                            {suggestions.map((s, i) => (
                                <li key={i} onClick={() => handleSelectAddress(s)}>{s.display_name}</li>
                            ))}
                        </ul>
                    )}
                </div>

                <div className={styles.inputGroup}>
                    <CheckCircle size={20} className={styles.icon} />
                    <input
                        type="text"
                        placeholder="Destination"
                        value={dropoff}
                        onChange={(e) => { setDropoff(e.target.value); setActiveField('dropoff'); }}
                        className={styles.input}
                    />
                    {dropoff && (
                        <button
                            onClick={() => { setDropoff(""); setDropoffCoords(null); }}
                            className={styles.clearBtn}
                            title="Effacer"
                        >
                            <X size={16} />
                        </button>
                    )}
                    {activeField === 'dropoff' && suggestions.length > 0 && (
                        <ul className={styles.suggestions}>
                            {suggestions.map((s, i) => (
                                <li key={i} onClick={() => handleSelectAddress(s)}>{s.display_name}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>

            <div className={styles.controls}>
                <select value={service} onChange={(e: any) => setService(e.target.value)} className={styles.select}>
                    <option value="personne">Transport Personne</option>
                    <option value="travailleur">Travailleur</option>
                    <option value="livraison">Livraison</option>
                    <option value="entreprise">Entreprise</option>
                </select>
                <select value={period} onChange={(e: any) => setPeriod(e.target.value)} className={styles.select}>
                    <option value="standard">Standard</option>
                    <option value="soir">Soir (18h+)</option>
                    <option value="nuit">Nuit (23h+)</option>
                </select>
            </div>

            {error && (
                <div className={styles.error}>
                    <AlertCircle size={16} />
                    <span>{error}</span>
                </div>
            )}

            {result && (
                <div className={styles.result}>
                    <div className={styles.resultDetails}>
                        <div className={styles.kpi}>
                            <span>Distance</span>
                            <strong>{result.distance.toFixed(1)} km</strong>
                        </div>
                        <div className={styles.kpi}>
                            <span>Durée</span>
                            <strong>{Math.round(result.duration)} min</strong>
                        </div>
                        <div className={`${styles.kpi} ${styles.priceKpi}`}>
                            <span>Estimation</span>
                            <strong>{result.price.toFixed(2)}$</strong>
                        </div>
                    </div>

                    <div className={styles.actions}>
                        <a href={generateSMS()} className="btn btn-primary" style={{ flex: 1, fontSize: '0.9rem' }}>
                            Réserver (Texto)
                        </a>
                        <a href={`tel:${PRICING_CONFIG.phoneNumber}`} className="btn btn-secondary" style={{ flex: 1, fontSize: '0.9rem' }}>
                            Appeler
                        </a>
                    </div>
                    <p className={styles.disclaimer}>*Prix estimé à titre indicatif. Varie selon trafic/attente.</p>
                </div>
            )}

            {!result && (
                <button
                    onClick={handleCalculate}
                    disabled={loading}
                    className="btn btn-primary btn-full"
                    style={{ marginTop: '1rem' }}
                >
                    {loading ? (
                        <>
                            <Loader2 className={styles.spin} size={20} style={{ marginRight: '8px' }} />
                            Calcul...
                        </>
                    ) : (
                        "Calculer le prix"
                    )}
                </button>
            )}
        </div>
    );
}
