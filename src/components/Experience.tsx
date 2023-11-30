import React from 'react';
import ExperienceCard from './ExperienceCard';

function Experience() {
    return (
        <section id='experience' className='snap-center'>
            <div className='section-wrapper flex-col'>
                <h2 className='section-title'>Experience</h2>
                <ExperienceCard />
            </div>
        </section>
    );
}

export default Experience;
