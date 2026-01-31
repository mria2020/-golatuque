import Link from "next/link";
import { Phone, MapPin, Clock, ShieldCheck, Car, Package, Menu, CheckCircle, Smartphone, Map, CreditCard } from "lucide-react";
import Image from "next/image";
import styles from "../page.module.css";
import Calculator from "../../components/Calculator";
import StickyBar from "../../components/StickyBar";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import { PRICING_CONFIG } from "../../utils/pricing";
import { getDictionary } from "../../i18n/get-dictionary";
import type { Locale } from "../../i18n/config";

export default async function Home({ params }: { params: { lang: Locale } }) {
  const dict = await getDictionary(params.lang);

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
                "description": dict.meta.description,
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
        <div className={`container ${styles.headerContainer}`}>
          <div className={styles.logo}>
            <Image
              src="/logo.svg"
              alt="GOLATUQUE"
              width={160}
              height={50}
              priority
              style={{ height: 'auto', width: 'auto', maxHeight: '40px' }}
            />
          </div>

          <nav className={styles.nav}>
            <Link href="#services" className={styles.navLink}>{dict.nav.services}</Link>
            <Link href="#calculator-section" className={styles.navLink}>{dict.nav.pricing}</Link>
            <Link href="#faq" className={styles.navLink}>{dict.nav.faq}</Link>
          </nav>

          <div className={styles.navContainer}>
            <LanguageSwitcher currentLang={params.lang} />

            <div className={styles.cta}>
              <a href={`tel:${PRICING_CONFIG.phoneNumber}`} className="btn btn-primary">
                <Phone size={18} className={styles.iconSpace} />
                {PRICING_CONFIG.phoneNumberDisplay}
              </a>
            </div>
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
                <div className={styles.badge}>{dict.hero.badge}</div>
                <h1 className={styles.heroTitle}>
                  {dict.hero.title_start} <br />
                  <span className="text-gradient">{dict.hero.title_end}</span>
                </h1>
                <p className={styles.heroText}>
                  {dict.hero.subtitle}
                </p>

                <div className={styles.heroButtons}>
                  <a href={`sms:${PRICING_CONFIG.phoneNumber}&body=Bonjour golatuque!`} className="btn btn-primary">
                    <Smartphone size={18} className={styles.iconSpace} />
                    {dict.hero.cta_sms}
                  </a>
                  <a href="#services" className="btn btn-secondary">
                    {dict.hero.cta_services}
                  </a>
                </div>

                <div className={styles.promiseBox}>
                  <p dangerouslySetInnerHTML={{ __html: dict.hero.promise }} />
                </div>

                <div className={styles.trustBadges}>
                  <div className={styles.trustItem}>
                    <CheckCircle size={16} color="var(--primary)" />
                    <span>{dict.hero.trust.legal}</span>
                  </div>
                  <div className={styles.trustItem}>
                    <CheckCircle size={16} color="var(--primary)" />
                    <span>{dict.hero.trust.safe}</span>
                  </div>
                  <div className={styles.trustItem}>
                    <CheckCircle size={16} color="var(--primary)" />
                    <span>{dict.hero.trust.payment}</span>
                  </div>
                </div>
              </div>

              {/* Calculator Widget */}
              <div id="calculator-section" className={styles.heroWidget}>
                <Calculator dict={dict.calculator} />
              </div>
            </div>
          </div>

          <div className={styles.heroGlow}></div>
        </section>

        {/* Pricing Transparency Section (Required for SEO) */}
        <section className={`section ${styles.sectionDark}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2>{dict.pricing.title}</h2>
              <p>{dict.pricing.subtitle}</p>
            </div>

            <div className={styles.pricingTable}>
              {dict.pricing.rows.map((row: any, i: number) => (
                <div key={i} className={styles.tableRow}>
                  <span>{row.label}</span>
                  <strong>{row.price}</strong>
                </div>
              ))}
              <div className={styles.pricesNote}>
                {dict.pricing.note}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="section">
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2>{dict.services.title}</h2>
              <p>{dict.services.subtitle}</p>
            </div>

            <div className={styles.grid}>
              <div className={styles.card}>
                <div className={styles.iconBox}>
                  <Car size={28} />
                </div>
                <h3>{dict.services.items[0].title}</h3>
                <p>{dict.services.items[0].desc}</p>
              </div>

              <div className={styles.card}>
                <div className={styles.iconBox}>
                  <ShieldCheck size={28} />
                </div>
                <h3>{dict.services.items[1].title}</h3>
                <p>{dict.services.items[1].desc}</p>
              </div>

              <div className={styles.card}>
                <div className={styles.iconBox}>
                  <Package size={28} />
                </div>
                <h3>{dict.services.items[2].title}</h3>
                <p>{dict.services.items[2].desc}</p>
              </div>

              <div className={styles.card}>
                <div className={styles.iconBox}>
                  <MapPin size={28} />
                </div>
                <h3>{dict.services.items[3].title}</h3>
                <p>{dict.services.items[3].desc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className={`section ${styles.sectionDark}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2>{dict.faq.title}</h2>
            </div>
            <div className={styles.faqGrid}>
              {dict.faq.items.map((item: any, i: number) => (
                <details key={i} className={styles.faqItem}>
                  <summary>{item.q}</summary>
                  <p dangerouslySetInnerHTML={{ __html: item.a }} />
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className="container">
            <div className={styles.footerContent}>
              <div className={styles.logo}>
                <Image
                  src="/logo.svg"
                  alt="GOLATUQUE"
                  width={200}
                  height={60}
                  style={{ height: 'auto', width: 'auto', maxHeight: '50px' }}
                />
              </div>
              <p className={styles.footerText}>
                {dict.footer.rights.replace('{year}', String(new Date().getFullYear()))}<br />
                514-677-5200
              </p>
              <div className={styles.footerLinks}>
                {/* SEO Links (Hidden visually but present for crawlers/structure) */}
                <Link href="/transport-la-tuque" className={styles.footerLink}>{dict.footer.link_transport}</Link>
                <Link href="/livraison-locale-la-tuque" className={styles.footerLink}>{dict.footer.link_delivery}</Link>
              </div>
            </div>
          </div>
        </footer>
      </main>

      <StickyBar dict={dict.sticky} />
    </div>
  );
}
