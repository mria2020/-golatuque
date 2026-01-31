"use client";

import styles from "./StickyBar.module.css";
import { Phone, MessageSquare, Calculator } from "lucide-react";
import { PRICING_CONFIG } from "../utils/pricing";

export default function StickyBar({ dict }: { dict: any }) {
    const scrollToCalculator = (e: React.MouseEvent) => {
        e.preventDefault();
        const element = document.getElementById("calculator-section");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const generateSMS = () => {
        return `sms:${PRICING_CONFIG.phoneNumber}&body=${encodeURIComponent(dict.sms_body)}`;
    };

    return (
        <div className={styles.stickyBar}>
            <div className={styles.container}>
                <a href={`tel:${PRICING_CONFIG.phoneNumber}`} className={`${styles.item} ${styles.primary}`}>
                    <Phone className={styles.icon} />
                    <span className={styles.label}>{dict.call}</span>
                </a>

                <a href={generateSMS()} className={styles.item}>
                    <MessageSquare className={styles.icon} />
                    <span className={styles.label}>{dict.text}</span>
                </a>

                <button onClick={scrollToCalculator} className={styles.item}>
                    <Calculator className={styles.icon} />
                    <span className={styles.label}>{dict.price}</span>
                </button>
            </div>
        </div>
    );
}
