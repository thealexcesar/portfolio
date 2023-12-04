import React from "react";

interface HeadProps {
    meta?: string[];
}

function Head(props: HeadProps) {
    const metaDefault = [
        "Alex's Portfolio",
        "Web Developer",
        "Alex Cesar - Full-Stack Web Developer and Computer Engineering student",
    ];

    const skill: string = 'full-stack, Ruby on Rails, SASS, PostgreSQL, JavaScript (Vanilla & JQuery).'
    const metaTag = (index: number) => {
        const propriety = index == 1 ? props.meta?.[index] + skill : props.meta?.[index];
        return propriety || metaDefault[index];
    };

    return (
        <>
            <head>
                <title>{metaTag(0)}</title>
                <meta key="og:title" property="og:title" content={metaTag(0)} />
                <meta key="description" name="description" content={metaTag(1)} />
                <meta key="keywords" name="keywords" content={metaTag(2)} />
                <link rel='icon' href='/favicon.ico' />
                <meta name="og:title" content={metaTag(0)} />
                <meta name="og:description" content={metaTag(1)} />
                <meta name="github" content='https://github.com/thealexcesar' />
                <meta name="linkedin" content='https://www.linkedin.com/in/thealexcesar/' />
                <meta property="og:image" content="/images/about.png" />
            </head>
        </>
    )
}

export default Head;
