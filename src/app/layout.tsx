'use client'
import React from "react";
import { usePathname } from "next/navigation";
import { Inter } from 'next/font/google';
import '@/app/assets/stylesheets/style_tailwind.css';
import '@/app/assets/stylesheets/style.sass';
import Head from "next/head";

const inter = Inter({ subsets: ['latin'] });

interface LayoutProps {
    children: React.ReactNode
    content: string[]
}
function Layout(props: LayoutProps) {
    const pathName: string = usePathname();
    const language: string = pathName.split("/")[1] || 'pt';

    const content = [
        "Alex's Portfolio",
        "Web Developer, full-stack, Ruby on Rails, JavaScript, PostgreSQL, SASS",
        "Alex Cesar - Full-Stack Web Developer and Computer Engineering student",
    ];

    return (
        <html lang={language} data-theme="light">
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta key="og:title" property="og:title" content={content[0] || ''} />
                <meta key="description" name="description" content={content[1] || ''} />
                <meta key="keywords" name="keywords" content={content[1] || ''} />
            </Head>
            <body className={inter.className}>{props?.children}</body>
        </html>
    );
}

export default Layout;
