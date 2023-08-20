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
          <nav className='flex gap-5 mb-4 mt-4'>
            <a href="">Home</a>
            <a href="">About</a>
          </nav>
          {children}
          <footer className='mt-5'>
            This is footer
          </footer>
        </div>
      </body>
    </html>
  )
}
