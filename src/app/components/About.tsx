'use client'
import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import {motion} from 'framer-motion'
interface AboutProps {
    about: string[]
}
function About(props: AboutProps) {
    const size = 500;
    const animationVariants = {
        initial: { opacity: 0, y: "50%" },
        animate: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section id='about' className='snap-center' lang={'pt'} >
            <article className='flex flex-col lg:flex-row items-center
              justify-center text-center px-4 md:px-10 lg:px-20 pt-16'
            >
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={animationVariants}
                    className='section-wrapper flex-col'
                >
                    <h2 className='section-title mb-4'>{props?.about[0]}</h2>
                    <div className='image-wrapper p-6 pt-0 overflow-hidden'>
                        <Image src="/logo_devices.svg"
                               alt={props?.about[1].split(' ').slice(-2).join(' ')}
                               className="layout-image mt-8 px-0"
                               width={size} height={size}
                        />
                    </div>
                    <div className='layout-wrapper'>
                        <h3 className='layout-subtitle'>{props?.about[1]}.</h3>
                        <p className='text-left mx-auto'>
                            {props?.about[2]}
                            Ruby on Rails, SASS, PostgreSQL, JavaScript (Vanilla & JQuery).{' '}
                            {props?.about[3]}
                        </p>
                    </div>
                </motion.div>
            </article>
        </section>
    );
}

export default About;
