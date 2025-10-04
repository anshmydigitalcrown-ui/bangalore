import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Escorts In Bangalore - Premium Services',
  description: 'Premium escort services in Bangalore with professional and discreet companions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-dark-bg min-h-screen`}>
        {children}
      </body>
    </html>
  )
}