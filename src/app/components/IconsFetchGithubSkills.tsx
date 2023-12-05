import { useEffect, useState } from "react";
import CustomIcon from "./CustomIcon";
import {iconMap} from "@/core/utils/IconMap";
import githubAPI from "@/core/domain/githubAPI";

interface GithubProps {
    onGithub: string
}

function IconsFetchGithubSkills(props: GithubProps) {
    const [languages, setLanguages] = useState<IGithubTechnologies[]>([]);

    useEffect(() => {
        const fetchGithubData = async () => {
            try {
                const githubLanguages = await githubAPI.getLanguages();

                setLanguages(githubLanguages);
            } catch (error: any) {
                console.error('Error fetching GitHub data: ', error.message);
            }
        };
        fetchGithubData();
    }, []);

    return (
        <div className={'skills-wrapper h-3/6 mt-12'}>
            <h3 className='skills-subtitle uppercase'>{props?.onGithub}</h3>
            <div className='skills-content'>
                {languages.map(({ language, contributions, percentage}) => {
                    const iconSkill = iconMap[language];
                    // console.log(language, contributions, `${percentage.toFixed(2)}%`)
                    return iconSkill ? (
                        <i key={`map-lang-${language}`} title={`${language}: ${contributions} contributions`} className='mx-2'>
                            <CustomIcon iconSkill={iconSkill.icon} color={iconSkill.color} />
                        </i>
                    ) : (
                        <span key={language}>{language}</span>
                    );
                })}
            </div>
        </div>

    );
}

export default IconsFetchGithubSkills;
