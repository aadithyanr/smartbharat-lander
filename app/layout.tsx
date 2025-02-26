import "./globals.css"
import { GeistMono } from 'geist/font/mono'
import { cn } from "@/lib/utils"

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
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-[#050616] text-neutral-200 font-mono antialiased",
        GeistMono.variable
      )}>
        {children}
      </body>
    </html>
  )
}