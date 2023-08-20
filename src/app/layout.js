import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Practice NextJS',
    description: 'Practice NextJS',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className='w-[97%] mx-auto'>
                    {children}
                </div>
            </body>
        </html>
    )
}

import React from 'react';