import { Poppins } from 'next/font/google'

import './globals.css'
import { NextAuthProvider } from './providers'

const inter = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin-ext'],
})

export const metadata = {
  title: 'Shop Genius',
  description: 'Ultimate Shopping Destination',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="h-screen bg-stone-100">
          <NextAuthProvider>{children}</NextAuthProvider>
        </main>
      </body>
    </html>
  )
}
