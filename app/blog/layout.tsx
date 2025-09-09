import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = generateSEOMetadata({
  title: "Blog",
  description: "Technical articles and insights from Tachera W Sasi on web development, Golang, and modern software engineering practices.",
  keywords: "blog, articles, web development, Golang, TypeScript, React, Next.js, software engineering, tutorials, tech insights",
  url: "https://tacherasasi.dev/blog",
  type: "website",
});

interface Props{
  children:React.ReactNode
}

export default function BlogLayout({children}:Readonly<Props>){
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Tachera W Sasi's Blog",
    "description": "Technical articles and insights on web development and software engineering",
    "url": "https://tacherasasi.dev/blog",
    "author": {
      "@type": "Person",
      "name": "Tachera W Sasi",
      "url": "https://tacherasasi.dev"
    },
    "inLanguage": "en-US",
    "publisher": {
      "@type": "Person",
      "name": "Tachera W Sasi"
    }
  };

  return(
    <html lang="en">
      <head>
        <StructuredData data={blogSchema} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}