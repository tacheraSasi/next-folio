import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { generateMetadata } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = generateMetadata({
  title: "Blog - Tachera W Sasi",
  description: "Thoughts, tutorials, and insights on web development, Golang, and modern technologies by Tachera W Sasi.",
  canonical: "/blog",
  ogType: "website",
  section: "blog"
});

interface Props{
  children:React.ReactNode
}

export default function BlogLayout({children}:Readonly<Props>){
  return(
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}