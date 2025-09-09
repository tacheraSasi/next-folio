import type { Metadata } from "next";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = generateSEOMetadata({
  title: "Music Catalog",
  description: "Original beats and music compositions by Tachera W Sasi. Explore a diverse collection of music spanning multiple genres and moods.",
  keywords: "music, beats, original compositions, producer, audio, sound design, music catalog, Tachera W Sasi music",
  url: "https://tacherasasi.dev/music",
  type: "website",
});

interface Props {
  children: React.ReactNode;
}

export default function MusicLayout({ children }: Readonly<Props>) {
  const musicCollectionSchema = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    "name": "Tachera W Sasi Music",
    "description": "Original music compositions and beats",
    "url": "https://tacherasasi.dev/music",
    "member": {
      "@type": "Person",
      "name": "Tachera W Sasi",
      "url": "https://tacherasasi.dev"
    },
    "genre": ["Electronic", "Hip Hop", "Ambient", "Experimental"],
    "sameAs": [
      "https://soundcloud.com/tacherasasi",
      "https://youtube.com/@tacherasasi"
    ]
  };

  return (
    <>
      <StructuredData data={musicCollectionSchema} />
      {children}
    </>
  );
}