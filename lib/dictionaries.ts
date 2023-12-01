import 'server-only';
import { Locale } from "../i18n.config";

interface Dictionary {
    about: string | null;
    about_content: string | null;
    presentation: string | null;
    welcome: string | null;
    most_used_on_github: string | null;
    send_me_an_email: string | null;
}

const dictionaries = {
    en: () => import(`../src/app/dictionaries/en.json`).then((module) => module.default),
    es: () => import(`../src/app/dictionaries/es.json`).then((module) => module.default),
    pt: () => import(`../src/app/dictionaries/pt.json`).then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]();

