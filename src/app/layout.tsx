import type { Metadata } from 'next'
import './globals.css'
import { Poppins, Roboto_Mono, Playfair_Display } from 'next/font/google'
import Navbar from '@/components/Navbar'
import StoreProvider from './StoreProvider'
import Loader from '@/components/Loader'
import { Toaster } from "@/components/ui/toaster"
import Footer from '@/components/Footer'
import AuthProvider from './AuthProvider'

const poppins = Poppins({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})
const playfair = Playfair_Display({
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})
const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

export const metadata: Metadata = {
  title: 'Erota',
  description: 'Erota is an online shop for purchansing well crafted teddies and clothes, erota ensures that customers can have access to high quality products',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="en" className={`${poppins.variable} ${roboto_mono.variable} ${playfair.variable}`}>
        <body>
          <AuthProvider>
            <StoreProvider>
              <Navbar />
              {children}
              <Toaster />
              <Loader />
              <Footer />
            </StoreProvider>
          </AuthProvider>
          <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
          <link rel="icon" href="/favicon.ico" sizes="any" />
        </body>
      </html>
    </>
  )
}
