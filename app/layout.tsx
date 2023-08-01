import './globals.css'
import React from 'react'
// import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
// import topPeak from './assets/wave-haikei.svg'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Simple Studios',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}

        
        </body>
    </html>
  )
}
