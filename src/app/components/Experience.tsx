import React from 'react';
import ExperienceCard from './ExperienceCard';
import {IDictionaries} from "@/core/interfaces/props.interface";
interface ExperienceProps {
    experience: IDictionaries['experience']
    skills: IDictionaries['skills'];
}

function Experience({experience, skills}: ExperienceProps) {
    return (
        <section key={experience[0]} id='experience' className='snap-center'>
            <div className='section-wrapper flex-col'>
                <h2 className='section-title'>{experience[0]}</h2>
                <ExperienceCard experience={experience} skills={skills} />
            </div>
        </section>
    );
}

export default Experience;
