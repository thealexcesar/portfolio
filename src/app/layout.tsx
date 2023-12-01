'use client'
import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './assets/stylesheets/style_tailwind.scss';
import './assets/stylesheets/style.sass';
import { usePathname } from "next/navigation";

// import { useNavigation } from 'next/navigation';

const inter = Inter({subsets: ['latin']});

// export const metadata: Metadata = {
//     title: "Alex's Portfolio",
//     description: 'Web Developer - Computer Science Engineer',
// };

function Layout({children}: { children: React.ReactNode }) {
    const pathName: string = usePathname();
    const language: string = pathName.split("/")[1] || 'pt';

    return (
        <html lang={language} data-theme="light">
            <body className={inter.className}>{children}</body>
        </html>
    );
}

export default Layout;
