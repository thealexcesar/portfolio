
import {i18n, Locale} from "../../../i18n.config";
import {IDictionaries, IGetDictionaries} from "@/core/interfaces/props.interface";


const languages = ['en', 'pt', 'es'];
const dictionaries: IGetDictionaries = {};
languages.forEach((lang) => {
    dictionaries[lang] = () => import(`../dictionaries/${lang}`).then((mod) => mod[lang]);
});

function invalidPathFromUrl(lang: Locale): string {
    const validLangRegex = /^(en|es|pt)$/;
    return validLangRegex.test(lang) ? lang : 'pt'
}

export function redirectedPathName(pathName: string) {
    const locale: string = '';
    if (!pathName) {
        return `/${i18n.defaultLocale}`;
    }
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
};

export const getDictionary = async (lang: Locale): Promise<IDictionaries> => {
    lang = invalidPathFromUrl(lang);
    return await dictionaries[lang]();
};

