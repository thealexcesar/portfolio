import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

function ExperienceCard() {
    const size = 600
    return (
        <article
            className='flex flex-col lg:flex-row items-center justify-center text-center px-4 md:px-10 lg:px-20 pt-16'>
            <Link href='https://appnucleus.com.br/'
                  className='cursor-pointer my-2 mx-auto lg:w-1/2 xl:w-[600px] lg:rounded-full lg:rounded-md object-contain e'
                  title='Visit the App Nucleus'
            >
                <Image className='layout-image px-8 bg-[#251857] max-h-72'
                       src="/logo_nucleus.png"
                       alt="Logo Nucleus Software last Company"
                       width={size} height={size}
                />
            </Link>
            <div className='layout-wrapper'>
                <h3 className='layout-subtitle'>Full-Stack Developer</h3>
                <div className='text-left'>
                    <p className='underline filter brightness-110 font-bold text-lg'>Nucleus Software</p>
                    <p>Sep 2021 · Aug 25 2023 · 2 years</p>
                    <p>Blumenau/SC · Hibrid · full-time</p>
                </div>
                <p>
                    <strong>Skills:</strong> Ruby · JQuery · Sass · React ·
                    PostgreSQL · Redis · Heroku · AWS S3 · RESTful WebServices
                </p>
            </div>
        </article>
    );
}

export default ExperienceCard;
