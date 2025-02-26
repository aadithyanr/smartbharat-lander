import "./globals.css"
import { GeistMono } from 'geist/font/mono'
import { Urbanist } from 'next/font/google'
import { cn } from "@/lib/utils"

// Import Urbanist font
const urbanist = Urbanist({ 
  subsets: ['latin'],
  variable: '--font-urbanist',
  display: 'swap',
})

export const metadata = {
  title: 'SmartBharat',
  description: 'Democratising Computer Education for a Smarter India',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={cn(
        "min-h-screen bg-[#050616] text-neutral-200 antialiased",
        GeistMono.variable,
        urbanist.variable
      )}>
        {children}
      </body>
    </html>
  )
}