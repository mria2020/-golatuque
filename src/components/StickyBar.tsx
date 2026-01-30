"use client";

import styles from "./StickyBar.module.css";
import { Phone, MessageSquare, Calculator } from "lucide-react";
import { PRICING_CONFIG } from "../utils/pricing";

export default function StickyBar() {
    const scrollToCalculator = (e: React.MouseEvent) => {
        e.preventDefault();
        const element = document.getElementById("calculator-section");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const generateSMS = () => {
        return `sms:${PRICING_CONFIG.phoneNumber}&body=Bonjour golatuque! Je voudrais réserver un transport.`;
    };

    return (
        <div className={styles.stickyBar}>
            <div className={styles.container}>
                <a href={`tel:${PRICING_CONFIG.phoneNumber}`} className={`${styles.item} ${styles.primary}`}>
                    <Phone className={styles.icon} />
                    <span className={styles.label}>Appeler</span>
                </a>

                <a href={generateSMS()} className={styles.item}>
                    <MessageSquare className={styles.icon} />
                    <span className={styles.label}>Texto</span>
                </a>

                <button onClick={scrollToCalculator} className={styles.item}>
                    <Calculator className={styles.icon} />
                    <span className={styles.label}>Prix</span>
                </button>
            </div>
        </div>
    );
}
