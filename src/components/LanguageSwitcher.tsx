'use client';

import { usePathname, useRouter } from 'next/navigation';
import { i18n, type Locale } from '@/i18n/config';
import styles from './LanguageSwitcher.module.css';

export default function LanguageSwitcher({ currentLang }: { currentLang: Locale }) {
    const pathname = usePathname();
    const router = useRouter();

    const redirectedPathName = (locale: Locale) => {
        if (!pathname) return '/';
        const segments = pathname.split('/');
        segments[1] = locale;
        return segments.join('/');
    };

    const handleLocaleChange = (locale: Locale) => {
        const newPath = redirectedPathName(locale);
        router.push(newPath);
    };

    const labels = {
        fr: 'FR',
        en: 'EN',
        atk: 'ATK'
    };

    return (
        <div className={styles.switcher}>
            {i18n.locales.map((locale) => {
                const isActive = currentLang === locale;
                return (
                    <button
                        key={locale}
                        onClick={() => handleLocaleChange(locale)}
                        className={`${styles.langBtn} ${isActive ? styles.active : ''}`}
                        aria-label={`Switch to ${labels[locale]}`}
                        aria-current={isActive ? 'page' : undefined}
                    >
                        {labels[locale]}
                    </button>
                );
            })}
        </div>
    );
}
