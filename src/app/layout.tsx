import type { Metadata as NextMetadata } from 'next';
import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

interface CustomMetadata extends NextMetadata {
    title: string;
    description: string;
    image: string;
    author: string;
}

export const metadata: CustomMetadata = {
    title: "Alex's Portfolio",
    description: 'Web Developer - Computer Science Engineer',
    image: '/public/images/about.png',
    author: 'Alex Cesar',
};

interface RootLayoutProps {
    children: React.ReactNode;
}

function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en" data-theme="light">
        <Head>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description || ''} />
            <meta property="og:image" content={metadata.image || ''} />
            <meta property="og:author" content={metadata.author || ''} />
        </Head>
        <body className={inter.className}>{children}</body>
        </html>
    );
}

export default RootLayout;
