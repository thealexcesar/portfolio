export const i18n = {
    defaultLocale: 'pt',
    locales: ['en', 'es', 'pt'],
};

export const languageTranslations: Record<string, Record<string, string>> = {
    '/en': { es: "Spanish", pt: "Portuguese" },
    '/es': { en: "Inglés", pt: "Portugués"},
    '/pt': { en: "Inglês", es: "Espanhol"}
};

export type Locale = (typeof i18n)['locales'][number];