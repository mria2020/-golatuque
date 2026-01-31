import 'server-only';
import type { Locale } from './config';

// We enumerate all dictionaries for explicit build inclusion
const dictionaries = {
    fr: () => import('../dictionaries/fr.json').then((module) => module.default),
    en: () => import('../dictionaries/en.json').then((module) => module.default),
    atk: () => import('../dictionaries/atk.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
