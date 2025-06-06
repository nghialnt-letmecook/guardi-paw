import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GUARDi PAW - Vòng Cổ Thông Minh Cho Thú Cưng",
  
  description:
    "Bảo vệ thú cưng bằng công nghệ yêu thương. Vòng cổ thông minh với GPS, theo dõi sức khỏe và nhiều tính năng hiện đại.",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
