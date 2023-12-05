import React from "react";
import Head from "next/head";

interface HeadProps {
    metadata: string[];
}

function HeadComponent(props: HeadProps) {
    const mDefault: string[] = ["Alex's Portfolio","Full-Stack Web Developer","Computer Science, Computer Engineer."];
    const mSkills: string = 'Back-end, Front-end, Ruby on Rails, PostgreSQL, ' +
        'SASS, JavaScript, TypeScript, JQuery, React, SQL, NoSQL, Java';
    const metaTag: string | any = (i: number) => {
        const mPropriety: string | undefined = i === 2 ? `${mSkills}, ${props.metadata[2]}` : props.metadata[i];
        return mPropriety || mDefault[i];
    };

    return (
        <head>
            <title>{metaTag(0)}</title>
            <meta property="og:title" content={metaTag(0)} />
            <meta name="description" content={metaTag(1)} />
            <meta name="og:description" content={metaTag(1)} />
            <meta name="og:keywords" content={metaTag(2)} />
            <meta name="author" content='Alex Cesar' />
            <link rel='icon' href='/favicon.ico' />
            <link rel="canonical" href="https://alexcesar.dev" />{/*TODO: CV-Builder + blog*/}
            <meta name="robots" content="index, follow" />
            <meta name="github" content='https://github.com/thealexcesar' />
            <meta name="linkedin" content='https://www.linkedin.com/in/thealexcesar/' />
            <meta property="image" content="/logo_devices.svg" />
            <meta property="og:image" content="/logo_devices.svg" />
        </head>
    )
}

export default HeadComponent;
