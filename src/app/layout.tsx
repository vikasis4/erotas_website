import type { Metadata } from 'next'
import './globals.css'
import { Poppins, Roboto_Mono } from 'next/font/google'
import Navbar from '@/components/Navbar'
import StoreProvider from './StoreProvider'
import Loader from '@/components/Loader'
import Footer from '@/components/Footer'

const poppins = Poppins({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
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
  title: 'Erota',
  description: 'Erota shopping',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="en" className={`${poppins.variable} ${roboto_mono.variable}`}>
        <body>
          <StoreProvider>
            <Navbar />
            {children}
            <Loader />
            <Footer />
          </StoreProvider>
          <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
        </body>
      </html>
    </>
  )
}
