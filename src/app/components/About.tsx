import React from 'react';
import Image from 'next/image';
import { IDictionaries } from "@/core/interfaces/props.interface";

interface AboutProps {
    about: IDictionaries['about'];
}

function About({ about }: AboutProps) {
    const size = 600;
    return (
        <section key={about[0]} id='about' className='snap-center' lang={'pt'} >
            <article className='flex flex-col lg:flex-row items-center
              justify-center text-center px-4 md:px-10 lg:px-20 pt-16'
            >
                <div className='section-wrapper flex-col'>
                    <h2 className='section-title'>{about[0]}</h2>
                    <Image src="/about.png" alt={about[1]}
                           className="layout-image mt-8 px-0"
                           width={size} height={size}
                    />
                    <div className='layout-wrapper'>
                        <h3 className='layout-subtitle'>{about[1] + about[2]}</h3>
                        <p className='text-left mx-auto'>{about[3]}</p>
                    </div>
                </div>
            </article>
        </section>
    );
}

export default About;
