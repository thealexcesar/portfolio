'use client'
import React from "react";
import { usePathname } from "next/navigation";
import { Inter } from 'next/font/google';
import '@/app/assets/stylesheets/style_tailwind.css';
import '@/app/assets/stylesheets/style.sass';
import {useReportWebVitals} from "next/web-vitals";

const inter = Inter({ subsets: ['latin'] });

function Layout({ children }: { children: React.ReactNode }) {

    useReportWebVitals((metric) => {
        console.log(metric)
    })

    const pathName: string = usePathname();
    const language: string = pathName.split("/")[1] || 'pt';

    return (
        <html lang={language} data-theme="light">
            <body className={inter.className}>{children}</body>
        </html>
    );
}

export default Layout;