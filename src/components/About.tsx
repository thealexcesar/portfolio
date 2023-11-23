import React from 'react';
import Image from 'next/image';

let text: string = "I am a full-stack web developer with 2 years of experience in Ruby on Rails, JavaScript, PostgreSQL"
    text += "and SASS. I am passionate about technology and believe it can be used to improve people's lives."
    text += "I am always looking for ways to use my skills to create useful and engaging projects."
function About() {
    return (
        <section id='about' className='snap-center'>
            <div className='section-wrapper'>
                <h2 className='section-title'>About</h2>
                <div className='mt-8 px-4'>
                    <Image src="/about.png" alt="About Me" className="layout-image my-4" width={600} height={600} />
                </div>
                <div className='layout-wrapper'>
                    <h3 className='layout-subtitle'>
                        A Little <span className='underline text-blue-900'>About</span> Me.
                    </h3>
                    <p className='text-left mx-auto'> {text} </p>
                </div>
            </div>
        </section>
    );
}

export default About;
