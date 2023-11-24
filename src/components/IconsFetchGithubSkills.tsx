import { useEffect, useState } from "react";
import CustomIcon from "./CustomIcon";
import { iconMap } from "../app/IconMap";
import githubAPI from "../app/githubAPI";

interface LanguageInfo {
    language: string;
    contributions: number;
    percentage: number;
}

function IconsFetchGithubSkills() {
    const [languages, setLanguages] = useState<LanguageInfo[]>([]);

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
            <h3 className='skills-subtitle uppercase'>Most Used on GitHub</h3>
            <div className='skills-content'>
                {languages.map(({ language, contributions, percentage }) => {
                    const iconSkill = iconMap[language];
                    console.log(language, contributions, `${percentage.toFixed(2)}%`)
                    return iconSkill ? (
                        <i key={language} title={`${language}: ${contributions} contributions`} className='mx-2'>
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