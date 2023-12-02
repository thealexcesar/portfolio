'use client'
import React, { useEffect, useState } from "react";
import { getDictionary } from "@/core/utils/dictionaries";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Experience from "@/app/components/Experience";
import Skills from "@/app/components/Skills";
import { IDictionaries, IProps } from "@/core/interfaces/props.interface";
import About from "@/app/components/About";

function Home({ params: { lang } }: IProps) {
    const [translations, setTranslations] = useState<IDictionaries>({
        about: [],
        experience: [],
        hero: [],
        skills: [],
        labels: [],
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dictionary = await getDictionary(lang);
                setTranslations({
                    about: dictionary.about || [],
                    experience: dictionary.experience || [],
                    hero: dictionary.hero || [],
                    skills: dictionary.skills || [],
                    labels: dictionary.labels || [],
                });
            } catch (error) {
                console.error("Error fetching dictionary:", error);
            }
        };

        fetchData();
    }, [lang]);

    return (
        <main
            lang={lang}
            className="h-screen snap-y snap snap-mandatory overflow-x-scroll scrollbar z-0
         overflow-y-scroll scrollbar-track-gray-400/20 scrollbar-thumb-gray-400/80"
        >
            <Header key="header" labels={translations.labels} />
            <Hero lang={lang} hero={translations.hero} />
            <About about={translations.about} />
            <Experience experience={translations.experience} skills={translations.skills} />
            <Skills />
        </main>
    );
}

export default Home;