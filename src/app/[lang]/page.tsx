'use client'
import { useEffect, useState } from "react";
import { Locale } from "../../../i18n.config";
import { getDictionary } from "../../../lib/dictionaries";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";

function Home({ params: { lang } }: { params: { lang: Locale } }) {
    const [t, setT] = useState({
        about: 'Sobre',
        most_used_on_github: 'Mais usados do Github',
        about_content: 'Sobre conteudo',
        presentation: 'Apresentação',
        send_me_an_email: 'Envie-me um e-mail',
        welcome: 'Bem-vindo!',
    });

    const components = [
        <Header key="header" lang={lang} translate={t} />,
        <Hero key="hero" lang={lang} translate={t} />,
        <About key="about" lang={lang} translate={t} />,
        // <Experience key="experience" lang={lang} translate={t} />,
        // <Skills key="skills" lang={lang} translate={t} />,
    ];

    return (
        <main className="h-screen snap-y snap snap-mandatory overflow-x-scroll scrollbar overflow-y-scroll z-0 scrollbar-track-gray-400/20 scrollbar-thumb-gray-400/80">
            {components}
        </main>
    );
}

export default Home;

