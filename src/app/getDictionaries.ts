import { Locale } from "../../i18n.config";
import {useRouter} from "next/router";

interface Dictionary {
    about: string[];
    hero: string[];
}

interface GetDictionaries {
    [key: string]: () => Promise<Dictionary>;
}

const getDictionaries: GetDictionaries = {
    en: () => import(`./dictionaries/en`).then((mod) => mod.en),
    es: () => import(`./dictionaries/es`).then((mod) => mod.es),
    pt: () => import(`./dictionaries/pt`).then((mod) => mod.pt)
}

export const getDictionary = async (lang: Locale): Promise<Dictionary> => {
    lang = invalidPathFromUrl(lang);
    return await getDictionaries[lang]();
};

function invalidPathFromUrl(lang: Locale) {
    const validLangRegex = /^(en|es|pt)$/;
    return validLangRegex.test(lang) ? lang : 'pt'
}