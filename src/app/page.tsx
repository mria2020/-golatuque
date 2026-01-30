import Link from "next/link";
import { Phone, MapPin, Clock, ShieldCheck, Car, Package, Menu, CheckCircle, Smartphone, Map, CreditCard } from "lucide-react";
import styles from "./page.module.css";
import Calculator from "../components/Calculator";
import StickyBar from "../components/StickyBar";
import { PRICING_CONFIG } from "../utils/pricing";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "LocalBusiness",
                "name": "golatuque",
                "telephone": "+15146775200",
                "url": "https://golatuque-demo.vercel.app",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "La Tuque",
                  "addressRegion": "QC",
                  "addressCountry": "CA"
                },
                "areaServed": [
                  { "@type": "City", "name": "La Tuque" },
                  { "@type": "AdministrativeArea", "name": "Haute-Mauricie" }
                ],
                "priceRange": "$$",
                "description": "golatuque n’est ni un Uber, ni un taxi. C’est un service professionnel de transport humain, local, simple et sécuritaire.",
                "paymentAccepted": "Cash, Credit Card, Square",
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  "opens": "00:00",
                  "closes": "23:59"
                }
              },
              {
                "@type": "Service",
                "name": "Transport Humain sur Appel",
                "provider": { "@id": "https://golatuque.com" },
                "serviceType": "Transport de personnes",
                "areaServed": "La Tuque"
              }
            ]
          })
        }}
      />

      {/* Header */}
      <header className={styles.header}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
          <div className={styles.logo}>
            go<span style={{ color: 'var(--primary)' }}>latuque</span>
          </div>

          <nav className={styles.nav}>
            <Link href="#services" className={styles.navLink}>Services</Link>
            <Link href="#calculator-section" className={styles.navLink}>Tarifs</Link>
            <Link href="#faq" className={styles.navLink}>Questions</Link>
          </nav>

          <div className={styles.cta}>
            <a href={`tel:${PRICING_CONFIG.phoneNumber}`} className="btn btn-primary">
              <Phone size={18} style={{ marginRight: '8px' }} />
              {PRICING_CONFIG.phoneNumberDisplay}
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroGrid}>
              <div className={styles.heroContent}>
                <div className={styles.badge}>TRANSPORT OFFICIEL LA TUQUE</div>
                <h1 className={styles.heroTitle}>
                  Plus qu'un taxi. <br />
                  <span className="text-gradient">Une vraie solution.</span>
                </h1>
                <p className={styles.heroText}>
                  <strong>golatuque</strong> n’est ni un Uber, ni un taxi. C’est un service professionnel de transport humain, simple et sécuritaire.
                </p>

                <div className={styles.heroButtons}>
                  <a href={`sms:${PRICING_CONFIG.phoneNumber}&body=Bonjour golatuque!`} className="btn btn-primary">
                    <Smartphone size={18} style={{ marginRight: '8px' }} />
                    Réserver par Texto
                  </a>
                  <a href="#services" className="btn btn-secondary">
                    Nos Services
                  </a>
                </div>

                <div className={styles.promiseBox}>
                  <p>
                    « Tu nous textes ou tu nous appelles. Tu réserves ou pas.
                    <strong> Si on est disponibles, on vient te chercher.</strong> »
                  </p>
                </div>

                <div className={styles.trustBadges}>
                  <div className={styles.trustItem}>
                    <CheckCircle size={16} color="var(--primary)" />
                    <span>Légal</span>
                  </div>
                  <div className={styles.trustItem}>
                    <CheckCircle size={16} color="var(--primary)" />
                    <span>Sécuritaire</span>
                  </div>
                  <div className={styles.trustItem}>
                    <CheckCircle size={16} color="var(--primary)" />
                    <span>Paiement Square</span>
                  </div>
                </div>
              </div>

              {/* Calculator Widget */}
              <div id="calculator-section" className={styles.heroWidget}>
                <Calculator />
              </div>
            </div>
          </div>

          <div className={styles.heroGlow}></div>
        </section>

        {/* Pricing Transparency Section (Required for SEO) */}
        <section className="section" style={{ background: 'var(--card)' }}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2>Transparence Tarifaire</h2>
              <p>Le prix dépend principalement de la distance et du temps de trajet.</p>
            </div>

            <div className={styles.pricingTable}>
              <div className={styles.tableRow}>
                <span>1 km / 3 min</span>
                <strong>≈ 9.50 $</strong>
              </div>
              <div className={styles.tableRow}>
                <span>3 km / 7 min</span>
                <strong>≈ 15.00 $</strong>
              </div>
              <div className={styles.tableRow}>
                <span>5 km / 10 min</span>
                <strong>≈ 20.00 $</strong>
              </div>
              <div className={styles.tableRow}>
                <span>10 km / 18 min</span>
                <strong>≈ 32.50 $</strong>
              </div>
              <div className={styles.pricesNote}>
                * Estimation indicative. Tarifs compétitifs pour La Tuque.
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="section">
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2>Nos Services</h2>
              <p>Une solution de transport adaptée à chaque besoin.</p>
            </div>

            <div className={styles.grid}>
              <div className={styles.card}>
                <div className={styles.iconBox}>
                  <Car size={28} />
                </div>
                <h3>Transport Humain</h3>
                <p>Du point A au point B. Simple, rapide, sécuritaire. Pour vos rendez-vous, courses et sorties.</p>
              </div>

              <div className={styles.card}>
                <div className={styles.iconBox}>
                  <ShieldCheck size={28} />
                </div>
                <h3>Transport Travailleurs</h3>
                <p>Pour les chantiers, les quarts de travail et les équipes. Fiable pour arriver à l'heure.</p>
              </div>

              <div className={styles.card}>
                <div className={styles.iconBox}>
                  <Package size={28} />
                </div>
                <h3>Petite Livraison</h3>
                <p>Récupération de commande resto, paquets, documents ou commissions locales urgentes.</p>
              </div>

              <div className={styles.card}>
                <div className={styles.iconBox}>
                  <MapPin size={28} />
                </div>
                <h3>Transport Entreprises</h3>
                <p>Solution pour Hydro-Québec, facteurs, et visiteurs professionnels. Facturation simplifiée.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="section" style={{ background: 'var(--card)' }}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2>Questions Fréquentes</h2>
            </div>
            <div className={styles.faqGrid}>
              <details className={styles.faqItem}>
                <summary>Est-ce que c'est un taxi ou un Uber ?</summary>
                <p>Non. <strong>golatuque</strong> n’est ni un Uber, ni un taxi. C’est un service professionnel de transport humain autorisé, géré localement à La Tuque.</p>
              </details>
              <details className={styles.faqItem}>
                <summary>Comment je paie ?</summary>
                <p>Le paiement se fait <strong>en personne</strong> via Square. Nous acceptons débit, crédit et argent comptant.</p>
              </details>
              <details className={styles.faqItem}>
                <summary>Les chauffeurs sont-ils autorisés ?</summary>
                <p>Oui. Tous nos transports sont effectués par des chauffeurs détenant les permis de transport autorisés et les assurances requises.</p>
              </details>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className="container">
            <div className={styles.footerContent}>
              <div className={styles.logo}>
                go<span style={{ color: 'var(--primary)' }}>latuque</span>
              </div>
              <p className={styles.footerText}>
                © {new Date().getFullYear()} golatuque. Service professionnel de transport humain à La Tuque.<br />
                514-677-5200
              </p>
              <div className={styles.footerLinks}>
                {/* SEO Links (Hidden visually but present for crawlers/structure) */}
                <Link href="/transport-la-tuque" style={{ opacity: 0.6, fontSize: '0.8rem' }}>Transport La Tuque</Link>
                <Link href="/livraison-locale-la-tuque" style={{ opacity: 0.6, fontSize: '0.8rem' }}>Livraison La Tuque</Link>
              </div>
            </div>
          </div>
        </footer>
      </main>

      <StickyBar />
    </div>
  );
}
