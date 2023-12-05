import React from "react";
import Head from "next/head";

interface HeadProps {
    meta?: string[];
}

function HeadComponent(props: HeadProps) {
    const mDefault: string[] = ["Alex's Portfolio","Full-Stack Web Developer","Computer Science, Computer Engineer."];
    const mSkills: string = 'Back-end, Front-end, Ruby on Rails, PostgreSQL, ' +
        'SASS, JavaScript, TypeScript, JQuery, React, SQL, NoSQL, Java';
    const metaTag: string | any = (i: number) => {
        const mPropriety: string | undefined = i === 2 ? `${mSkills}, ${props.meta?.[2]}` : props.meta?.[i];
        return mPropriety || mDefault[i];
    };

    return (
        <Head>
            <title>{metaTag(0)}</title>
            <meta key="meta:og:title" property="og:title" content={metaTag(0)} />
            <meta key="meta:description" name="description" content={metaTag(1)} />
            <meta key="meta:og:description" name="og:description" content={metaTag(1)} />
            <meta key="meta:keywords" name="og:keywords" content={metaTag(2)} />
            <meta key="meta:author" name="author" content='Alex Cesar' />
            <link key="meta:icon" rel='icon' href='/favicon.ico' />
            <link key="meta:canonical" rel="canonical" href="https://alexcesar.dev" />{/*TODO: CV-Builder + blog*/}
            <meta key="meta:robots" name="robots" content="index, follow" />
            <meta key="meta:github" name="github" content='https://github.com/thealexcesar' />
            <meta key="meta:linkedin" name="linkedin" content='https://www.linkedin.com/in/thealexcesar/' />
            <meta key="meta:image" property="image" content="/logo_devices.svg" />
            <meta key="meta:og:image" property="og:image" content="/logo_devices.svg" />
        </Head>
    )
}

export default HeadComponent;
