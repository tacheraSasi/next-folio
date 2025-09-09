import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
  title: "Music Catalog - Tachera W Sasi",
  description: "Explore Tachera W Sasi's collection of original beats and music spanning multiple genres. Each track is crafted with passion and attention to detail.",
  canonical: "/music",
  ogType: "website",
  section: "music",
  keywords: "Tachera W Sasi music, original beats, music catalog, audio production, sound design"
});

interface Props {
  children: React.ReactNode
}

export default function MusicLayout({ children }: Readonly<Props>) {
  return children;
}