import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'reasonlearn | Reasoning-first technical writing and demos',
    description:
        'reasonlearn is a reasoning-first platform for technical writing, research summaries, and programming project demos. Explore LLM-assisted learning workflows and publish clear, evidence-backed narratives.',
    keywords: [
        'reasoning tools',
        'technical writing',
        'LLM learning',
        'programming projects',
        'research summaries',
        'developer documentation',
        'reasoning workflows',
        'AI assisted writing',
    ],
    openGraph: {
        title: 'reasonlearn | Reasoning-first technical writing and demos',
        description:
            'Explore LLM-assisted reasoning, technical writing, and programming project demos built with reasonlearn.',
        type: 'website',
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    )
}
