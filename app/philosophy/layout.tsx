import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
  title: "Life Philosophy - Tachera W Sasi",
  description: "Tachera W Sasi's life philosophy centered around five core pillars: Creation, Music, Body, Mind, and Spirit. A holistic approach to personal growth and fulfillment.",
  canonical: "/philosophy",
  ogType: "website",
  section: "philosophy",
  keywords: "Tachera W Sasi philosophy, life pillars, personal growth, creation, music, body, mind, spirit"
});

interface Props {
  children: React.ReactNode
}

export default function PhilosophyLayout({ children }: Readonly<Props>) {
  return children;
}