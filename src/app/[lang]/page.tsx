'use client'
import React, {useEffect, useState} from "react";
import {Inter} from 'next/font/google';
import '@/app/assets/stylesheets/style_tailwind.css';
import '@/app/assets/stylesheets/style.sass';
import {getDictionary} from "@/core/utils/dictionaries";
import {IDictionaries} from "@/core/interfaces/idictionaries";
import Layout from "@/app/layout";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Skills from "@/app/components/Skills";
import Experience from "@/app/components/Experience";

const inter = Inter({ subsets: ['latin'] });

function Page(props: { params: { lang: string } }) {
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
        <Layout>
            <main
                lang={props.params?.lang}
                className="h-screen snap snap-y snap-mandatory overflow-x-scroll scrollbar z-0
                overflow-y-scroll scrollbar-track-gray-400/20 scrollbar-thumb-gray-400/80"
            >
                <Header labels={translate?.labels ?? []} key="header" />
                <Hero presentation={translate?.presentation ?? []} hero={translate?.hero ?? []} />
                <About about={translate?.about ?? []} />
                <Skills skills={translate?.skills ?? ''} />
                <Experience experience={translate?.experience ?? []} skills={translate?.skills ?? ''} />
            </main>
        </Layout>
    );
}

export default Page;

