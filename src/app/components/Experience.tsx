import React from 'react';
import Link from "next/link";
import Image from "next/image";

interface ExperienceProps {
    experience: string[];
    skills: string;
}
function Experience(props: ExperienceProps) {
    const size = 600
    const technologies: string[] = [
        "Ruby",
        "JQuery",
        "Sass",
        "React",
        "PostgreSQL",
        "Redis",
        "Heroku",
        "AWS",
        "S3",
        "RESTful",
        "WebServices"
    ]

    return (
        <section id='experience' className='snap-center'>
            <div className='section-wrapper flex-col'>
                <h2 className='section-title'>{props?.experience[0]}</h2>
                <article
                    className='flex flex-col lg:flex-row items-center justify-center text-center px-4 md:px-10 lg:px-20 pt-16'>
                    <Link href='https://appnucleus.com.br/'
                          className='cursor-pointer my-2 mx-auto lg:w-1/2 xl:w-[600px] object-contain'
                          title={props?.experience[4]}
                    >
                        <Image className='layout-image px-8 bg-[#251857] max-h-72'
                               src="/logo_nucleus.png"
                               alt="Logo Nucleus Software last Company"
                               width={size} height={size}
                        />
                    </Link>
                    <div className='layout-wrapper'>
                        <h3 className='layout-subtitle'>{props?.experience[1]}</h3>
                        <div className='text-left'>
                            <p className='underline filter brightness-110 font-bold text-lg'>Nucleus Software</p>
                            <p>{props?.experience[2]}</p>
                            <p>{props?.experience[3]}</p>
                        </div>
                        <p>
                            <strong>{props?.skills}: </strong>
                            <span>{technologies.join(" · ")}</span>
                        </p>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Experience;
