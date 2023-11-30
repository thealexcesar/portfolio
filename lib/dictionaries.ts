import type { Locale } from '../i18n.config';

interface Dictionary {
    about: string | null;
    about_content: string | null;
    presentation: string | null;
    welcome: string | null;
    send_me_an_email: string | null;
}

const languages: Locale[] = ['en', 'es', 'pt'];
const dictionaries: Record<Locale, () => Promise<Dictionary>> = {};
languages.forEach((lang) => {
    dictionaries[lang] = () => import(`../src/app/dictionaries/${lang}.json`).then((module) => module.default);
});

export const getDictionary = async (locale: Locale): Promise<Dictionary> => dictionaries[locale]();
