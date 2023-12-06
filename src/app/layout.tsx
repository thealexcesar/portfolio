import React from "react";
import { Inter } from 'next/font/google';
import '@/app/assets/stylesheets/style_tailwind.css';
import '@/app/assets/stylesheets/style.sass';
import {Metadata} from "next";
import {headers} from "next/headers";
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    applicationName: "Alex's Portfolio",
    category: 'Desenvolvimento Web',
    creator: 'Alex Cesar',
    classification: 'Programador - Profissional de TI - Desenvolvedor Full-Stack - Back-end, Front-end',
    description: 'Desenvolvedor Web Full-Stack',
    generator: 'next.js/^14.0.3',
    keywords: 'Back-end, Front-end, Ruby on Rails, PostgreSQL, SASS, JavaScript, TypeScript, JQuery, React, SQL, NoSQL, Java, Ciência da Computação, Engenheiro de Computação.',
    referrer: 'origin',
    title: 'Alex - Portfolio'
};

function Layout({ children }: { children: React.ReactNode }) {

    return (
        <html data-theme="light">
            <body className={inter.className}>{children}</body>
        </html>
    );
}

export default Layout;