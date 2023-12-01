import {Locale} from "../../../i18n.config";

export interface IProps {
    params: { lang: Locale | string };
    title: string
}

export interface ILang {
    lang: string
}
export interface IDictionaries {
    about: string[];
    experience: string[];
    hero: string[];
    labels: string[];
    skills: string[];
}

export interface IGetDictionaries {
    [key: string]: () => Promise<IDictionaries>
}
