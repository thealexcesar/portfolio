'use client'
import Image from "next/image";
import React, {useEffect, useRef} from "react";
import CustomTypewriter from "./CustomTypeWriter";
import HeroButton from "@/app/components/HeroButton";
import dynamic from "next/dynamic";
const ImageHero = dynamic(() =>
    import("@/app/components/ImageHero").then((mod) => mod.default)
);

interface HeroProps {
    hero: string[];
    presentation: string[];
}

function Hero(props: HeroProps) {
    const heroRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        heroRef.current && heroRef.current.scrollIntoView({behavior: 'smooth'});
    }, []);

    return (
        <section id='hero' className='snap-start'>
            <div
                ref={heroRef}
                className='h-screen flex flex-col items-center justify-center space-y-2 p-2 overflow-hidden'
            >
                <div className='image-wrapper hero'>
                    <ImageHero />
                </div>

                <h2 className='animate-pulse uppercase tracking-[4px] mt-4'>Alex Cesar</h2>

                <div className='h-10 z-10 mt-4'>
                    <CustomTypewriter
                        content={props?.presentation}
                        classes='text-xl lg:text-3xl xl:text-4xl scroll-px-10 scroll-px-10 font-semibold'
                    />
                </div>

                <div className='mx-auto max-w-7xl flex flex-wrap justify-center'>
                    {[0.1, 0.3, 0.6, 0.9].map((delay, i) => (
                        <HeroButton delay={delay} hero={props?.hero[i]} key={i}/>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Hero;