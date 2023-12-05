'use client'
import {motion} from "framer-motion";
import CustomIcon from "./CustomIcon";
import IconsFetchGithubSkills from "./IconsFetchGithubSkills";
import {iconMap} from "@/core/utils/IconMap";
import {IDictionaries} from "@/core/interfaces/idictionaries";

interface SkillProps {
    onGithub: string
    skills: string
}

function Skills(props: SkillProps) {

    const Skills: string[] = [
        'Ruby on Rails',
        'JQuery',
        'Postgresql',
        'Redis',
        'React'
    ];

    return (
        <section id='skills' className='snap-center'>
            <motion.div className='section-wrapper flex-col'>
                <h2 className='section-title mt-32'>{props?.skills}</h2>
                <div className='flex flex-col justify-around items-center my-auto w-full'>
                    <div className="skills-wrapper">
                        <div className='skills-content'>
                            {Skills.map((skill, i) => {
                                const iconSkill = iconMap[skill];

                                return iconSkill ? (
                                    <i key={i} title={skill} className='mx-2'>
                                        <CustomIcon iconSkill={iconSkill.icon} color={iconSkill.color}/>
                                    </i>
                                ) : (
                                    <span>{skill}</span>
                                );
                            })}
                        </div>
                    </div>
                    <IconsFetchGithubSkills onGithub={props?.onGithub} />
                </div>
            </motion.div>
        </section>
    );
}

export default Skills;