'use client'
import Image from "next/image";
import {useEffect, useRef} from "react";
import HeroButton from "../components/HeroButton";
import CustomTypewriter from "../components/CustomTypeWriter";

interface HeroProps {
    locale: string;
    locales: string[];
    defaultLocale: string;
}
const Hero: React.FC<HeroProps> = (props) => {
    const { locale, locales, defaultLocale } = props;
    console.log(locale, locales, defaultLocale);
    const texts = [
        'Welcome to my profile!',
        "I'm a Full-Stack Developer.",
    ];

    const heroRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        heroRef.current && heroRef.current.scrollIntoView({behavior: 'smooth'});
    }, []);

    const buttons = {
        delay: [0.1, 0.3, 0.6, 0.9],
        buttons: ['about', 'experience', 'skills']
    }

    return (
        <section id='hero' className='snap-start'>
            <div ref={heroRef} className='h-screen flex flex-col items-center justify-center space-y-2 p-2 overflow-hidden'>
                <span>
                    <Image
                        src='/default_avatar.png'
                        alt="Alex's image profile"
                        height={800}
                        width={800}
                        className='rounded-md object-contain text-center border-white-500'
                    />
                </span>

                <h2 className='text-xs uppercase tracking-[4px] mt-4'>Alex Cesar</h2>

                <div className='h-10 z-10 mt-4'>
                    <span className='lg:text-2xl font-semibold scroll-px-10'>
                        <CustomTypewriter texts={texts} classes='lg:text-4xl font-semibold scroll-px-10' />
                    </span>
                </div>

                <div className='mx-auto max-w-7xl flex flex-wrap justify-center'>
                    {buttons.buttons.map((content, index) => (
                        <HeroButton key={index} delay={buttons.delay[index]} content={content} />
                    ))}
                </div>
            </div>
        </section>

    );
}

export default Hero;