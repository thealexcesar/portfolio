'use client'
import {motion} from "framer-motion";
import CustomIcon from "./CustomIcon";
import IconsFetchGithubSkills from "./IconsFetchGithubSkills";
import {iconMap} from "../app/IconMap";

function Skills() {
    const Skills: string[] = [
        'Ruby on Rails',
        'JQuery',
        'Postgresql',
        'Redis',
        'React'
    ];

    return (
        <section id='skills' className='snap-center h-5/6'>
            <motion.div className='section-wrapper flex-col'>
                <h2 className='section-title'>skills</h2>
                <div className='flex flex-col justify-around items-center my-auto w-full'>
                    <div className="skills-wrapper">
                        <div className='skills-content'>
                            {Skills.map((skill, index) => {
                                const iconSkill = iconMap[skill];

                                return iconSkill ? (
                                    <i key={index} title={skill} className='mx-2'>
                                        <CustomIcon iconSkill={iconSkill.icon} color={iconSkill.color}/>
                                    </i>
                                ) : (
                                    <span key={skill}>{skill}</span>
                                );
                            })}
                        </div>
                    </div>
                    <IconsFetchGithubSkills most_used={''} />
                </div>
            </motion.div>
        </section>
    );
}

export default Skills;