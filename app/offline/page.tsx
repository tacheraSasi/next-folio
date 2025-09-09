import type { Metadata } from "next";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";

export const metadata: Metadata = generateSEOMetadata({
  title: "Offline",
  description: "You are currently offline. Please check your internet connection and try again.",
  url: "https://tacherasasi.dev/offline",
});

export default function OfflinePage() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-6">📵</div>
        <h1 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
          You're Offline
        </h1>
        <p className="text-gray-300 mb-6">
          It looks like you've lost your internet connection. Please check your connection and try again.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}