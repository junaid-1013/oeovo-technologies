import '@/app/globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import Top from '@/components/Top'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Linetech Digital',
  description: 'Generated by Junaid Ali Bhatti',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-[#1b1b1b]'>
      <body className={inter.className}>
        <Top/>
        <br/>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  )
}
