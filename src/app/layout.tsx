import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import StoreProvider from './StoreProvider'

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
    <html lang="en">
      <body className='flex flex-col'>
        <StoreProvider>
          <Navbar />
          {children}
        </StoreProvider>
      </body>
    </html>
  )
}
