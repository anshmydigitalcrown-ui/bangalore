import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Loconto Escorts - Premium Call Girls in Bangalore',
  description: 'No.1 escorts provider in Bengaluru. Satisfy your desires with Bengaluru call girls. The most stylish and fashionable elite escorts.',
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