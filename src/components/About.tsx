import React from 'react';
import Image from 'next/image';
import {Locale} from "../../i18n.config";

interface AboutProps {
    lang: Locale;
    translate: {
        about_content: string | null
    }
}

function About(props: AboutProps) {
    const size = 600
    return (
        <section id='about' className='snap-center'>
            <article
                className='flex flex-col lg:flex-row items-center justify-center text-center px-4 md:px-10 lg:px-20 pt-16'>
                <div className='section-wrapper flex-col'>
                    <h2 className='section-title'>About</h2>
                    <Image src="/about.png" alt="About Me" className="layout-image mt-8 px-0" width={size} height={size}/>
                    <div className='layout-wrapper'>
                        <h3 className='layout-subtitle'>
                            A Little <span className='underline text-blue-900'>About</span> Me.
                        </h3>
                        <p className='text-left mx-auto'> {props?.translate.about_content || ''} </p>
                    </div>
                </div>
            </article>
        </section>
    );
}

export default About;
