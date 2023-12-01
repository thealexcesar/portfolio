'use client'
import { useEffect, useState } from "react";
import { Locale } from "../../../i18n.config";
import Hero from "@/components/Hero";
import { getDictionary } from "../getDictionaries";
import Header from "@/components/Header";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";

interface TranslationsProps {
    hero: string[];
    about: string[];
}

interface HomeProps {
    params: { lang: Locale | string };
}

function Home({ params: { lang } }: HomeProps, props: TranslationsProps) {
    const [translations, setTranslations] = useState<TranslationsProps>({
        hero: props?.hero || [],
        about: props?.about || [],
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dictionary = await getDictionary(lang);
                setTranslations({
                    hero: dictionary.hero || [],
                    about: dictionary.about || [],
                });
            } catch (error) { console.error("Error fetching dictionary:", error) }
        };

        fetchData();
    }, [lang]);

    return (
        <main lang={lang} className="h-screen snap-y snap snap-mandatory overflow-x-scroll scrollbar z-0
         overflow-y-scroll scrollbar-track-gray-400/20 scrollbar-thumb-gray-400/80"
        >
            <Header key='header' />
            <Hero lang={lang} hero={translations.hero} />
            <Experience key='experience' />
            <Skills key='skills' />
        </main>
    );
}

export default Home;
