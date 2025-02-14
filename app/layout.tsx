import type React from "react"
import { Modak as Monomakh } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const monomakh = Monomakh({ subsets: ["latin"], weight: "400" })

export const metadata = {
  title: "Valentine's Day Special",
  description: "A special Valentine's Day website for my girlfriend",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={monomakh.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}

