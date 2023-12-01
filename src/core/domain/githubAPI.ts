require('dotenv').config();

interface RepositoryLanguageData {
    [key: string]: number;
}
interface LanguageInfo {
    language: string;
    contributions: number;
    percentage: number;
}

const githubAPI = {
    async getLanguages(): Promise<LanguageInfo[]> {
        const errorMessage = "Can't getting languages:";
        try {
            const languageStats: RepositoryLanguageData = {};
            const baseUrl = `https://api.github.com/users/${process.env.GITHUB_USERNAME || 'thealexcesar'}`;
            const headers = { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` };
            const response = await fetch(`${baseUrl}/repos`, { headers });
            const storedLanguages = localStorage.getItem('githubLanguages');

            if (storedLanguages) {
                return JSON.parse(storedLanguages);
            }

            if (response.ok) {
                const repositories = await response.json();

                await Promise.all(repositories.map(async (repo: any) => {
                    const repoLanguagesResponse = await fetch(`${repo.languages_url}`, { headers });
                    const excludedLanguages = ['scss', 'css', 'html'];

                    if (repoLanguagesResponse.ok) {
                        const repoLanguagesData: RepositoryLanguageData = await repoLanguagesResponse.json();

                        const filteredLanguages = Object.keys(repoLanguagesData)
                            .filter(language => !excludedLanguages.includes(language.toLowerCase()));

                        filteredLanguages.forEach((language) => {
                            languageStats[language] = (languageStats[language] || 0) + repoLanguagesData[language];
                        });
                    } else {
                        console.error(errorMessage, repoLanguagesResponse.statusText);
                    }
                }));

                const totalContributions = Object.values(languageStats).reduce((acc, count) => acc + count, 0);

                const languageWithPercentage: LanguageInfo[] = Object.entries(languageStats)
                    .map(([language, count]) => ({
                        language,
                        contributions: count,
                        percentage: (count / totalContributions) * 100,
                    }))
                    .sort((a, b) => b.contributions - a.contributions)
                    .filter((language) => language !== null)
                    .slice(0, 8);

                localStorage.setItem('githubLanguages', JSON.stringify(languageWithPercentage));
                return languageWithPercentage;
            } else {
                const errorData = await response.json();
                console.error(errorMessage, errorData);
                throw new Error(errorMessage, errorData.message);
            }
        } catch (error) {
            console.error(errorMessage, error);
            throw new Error(errorMessage);
        }
    },
};

export default githubAPI;
