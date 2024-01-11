import type { Metadata } from 'next'
import './globals.css'
import { Poppins, Roboto_Mono } from 'next/font/google'
import Navbar from '@/components/Navbar'
import StoreProvider from './StoreProvider'
import Loader from '@/components/Loader'

const poppins = Poppins({
  weight: ['200','300', '400','500','600', '700','800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})
const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

export const metadata: Metadata = {
  title: 'Erotas',
  description: 'Erotas shopping',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${roboto_mono.variable}`}>
      <body className='flex flex-col'>
        <StoreProvider>
          <Navbar />
          {children}
          <Loader />
        </StoreProvider>
      </body>
    </html>
  )
}
