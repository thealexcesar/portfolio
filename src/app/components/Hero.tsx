'use client'
import Image from "next/image";
import { useEffect, useRef } from "react";
import CustomTypewriter from "./CustomTypeWriter";
import HeroButton from "@/app/components/HeroButton";

interface HeroProps {
    hero: string[];
    presentation: string[];
}

function Hero(props: HeroProps) {
    const heroRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        heroRef.current && heroRef.current.scrollIntoView({ behavior: 'smooth' });
    }, []);

    return (
        <section id='hero' className='snap-start'>
            <div ref={heroRef}
                 className='h-screen flex flex-col items-center justify-center space-y-2 p-2 overflow-hidden'>
                <div className='image-wrapper hero'>
                    <Image
                        src='/default_avatar.png'
                        alt="Alex's image profile"
                        height={800}
                        width={800}
                        className='object-contain text-center'
                    />
                </div>

                <h2 className='text-xs uppercase tracking-[4px] mt-4'>Alex Cesar</h2>

                <div className='h-10 z-10 mt-4'>
                    <span className='lg:text-2xl font-semibold scroll-px-10'>
                        <CustomTypewriter
                            content={props?.presentation}
                            classes='lg:text-4xl font-semibold scroll-px-10'
                        />
                    </span>
                </div>

                <div className='mx-auto max-w-7xl flex flex-wrap justify-center'>
                    {[0.1, 0.3, 0.6, 0.9].map((delay, i) => (
                        <HeroButton delay={delay} hero={props?.hero[i]} key={props?.hero[i]} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Hero;