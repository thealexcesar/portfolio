import React from 'react';
import Image from 'next/image';

interface AboutProps {
    about: string[]
}
function About(props: AboutProps) {
    const size = 600;
    return (
        <section key={props?.about[0]} id='about' className='snap-center' lang={'pt'} >
            <article className='flex flex-col lg:flex-row items-center
              justify-center text-center px-4 md:px-10 lg:px-20 pt-16'
            >
                <div className='section-wrapper flex-col'>
                    <h2 className='section-title'>{props?.about[0]}</h2>
                    <Image src="/about.png" alt={props?.about[1]}
                           className="layout-image mt-8 px-0"
                           width={size} height={size}
                    />
                    <div className='layout-wrapper'>
                        <h3 className='layout-subtitle'>{props?.about[1] + props?.about[2]}</h3>
                        <p className='text-left mx-auto'>{props?.about[3]}</p>
                    </div>
                </div>
            </article>
        </section>
    );
}

export default About;
