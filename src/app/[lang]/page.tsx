'use client'
import React, { useEffect, useState } from "react";
import { IDictionaries } from "@/core/interfaces/idictionaries";
import { getDictionary } from "@/core/utils/dictionaries";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Skills from "@/app/components/Skills";
import Experience from "@/app/components/Experience";
import HeadComponent from "@/app/components/HeadComponent";

interface PageProps {
    params: { lang: string };
}

function Page(props: PageProps) {
    const [translate, setTranslate] = useState<IDictionaries | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const lang: string = props.params?.lang || 'pt';
                const dictionary: IDictionaries = await getDictionary(lang);
                setTranslate(dictionary);
            } catch (error) {
                console.error("Error fetching dictionary:", error);
            }
        };
        fetchData();
    }, [props.params?.lang]);

    if (!translate) {
        return null;
    }

    return (
        <>
            <HeadComponent meta={translate.meta} />
            <main
                lang={props.params?.lang}
                className="h-screen snap snap-y snap-mandatory overflow-x-scroll scrollbar z-0
                overflow-y-scroll scrollbar-track-gray-400/20 scrollbar-thumb-gray-400/80"
            >
                <Header
                    labels={translate.labels || []}
                    sendEmail={translate.sendEmail || ''}
                    switchTheme={translate.switchTheme || ''}
                    key="_header"
                />
                <Hero
                    presentation={translate.presentation || []}
                    hero={translate.hero || []}
                    key="_hero"
                />
                <About
                    about={translate.about || []}
                />
                <Skills
                    skills={translate.skills || ''}
                    onGithub={translate.onGithub || ''}
                    key="_skills"
                />
                <Experience
                    experience={translate.experience || []}
                    skills={translate.skills || ''}
                    key="_experience"
                />
            </main>
        </>
    );
}

export default Page;
