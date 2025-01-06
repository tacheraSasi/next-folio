import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tachera W Sasi",
  description: "Tachera W Sasi's portfolio. A passionate web developer and Golang enthusiast with expertise in modern web technologies. CEO @ ekilie.",
  keywords:"Tachera W Sasi,Tach, ekilie ceo,sasi, web developer, Golang, PHP, Python, TypeScript, Java, C++, JavaScript, Django, React, Node.js, Next.js, React Native, PostgreSQL, Docker, Gin, Fiber, Express.js, Hono, Ubuntu, VSCode, NeoVim, Prisma, HTMX"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
