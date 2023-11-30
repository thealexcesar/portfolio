export const i18n = {
    defaultLocale: 'es',
    locales: ['en', 'es', 'pt'],
};

export const languageTranslations: Record<string, Record<string, string>> = {
    '/en': {
        en: "English",
        es: "Spanish",
        pt: "Portuguese",
    },
    '/es': {
        en: "Inglés",
        es: "Español",
        pt: "Portugués",
    },
    '/pt': {
        en: "Inglês",
        pt: "Português",
        es: "Espanhol",
    },
};

export type Locale = (typeof i18n)['locales'][number];