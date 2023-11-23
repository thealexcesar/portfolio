import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '././assets/stylesheets/style_tailwind.scss'
import '././assets/stylesheets/style.sass';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Alex's Portfolio",
  description: 'Web Developer - Computer Science Engineer',
}

function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

export default RootLayout;