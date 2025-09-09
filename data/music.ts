export interface Beat {
  id: string;
  title: string;
  bpm: number;
  key: string;
  genre: string;
  mood: string;
  dateProduced: string;
  audioUrl: string;
  coverImage?: string;
  description?: string;
}

export const mockBeats: Beat[] = [
  {
    id: "1",
    title: "Midnight Dreams",
    bpm: 120,
    key: "C minor",
    genre: "Lo-Fi Hip Hop",
    mood: "Chill",
    dateProduced: "2024-01-15",
    audioUrl: "/audio/midnight-dreams.mp3",
    description: "A smooth, atmospheric beat perfect for late night sessions"
  },
  {
    id: "2",
    title: "Urban Pulse",
    bpm: 140,
    key: "G major",
    genre: "Trap",
    mood: "Energetic",
    dateProduced: "2024-01-10",
    audioUrl: "/audio/urban-pulse.mp3",
    description: "High-energy trap beat with heavy 808s"
  },
  {
    id: "3",
    title: "Sunset Vibes",
    bpm: 95,
    key: "D major",
    genre: "R&B",
    mood: "Smooth",
    dateProduced: "2024-01-08",
    audioUrl: "/audio/sunset-vibes.mp3",
    description: "Smooth R&B instrumental with soulful melodies"
  },
  {
    id: "4",
    title: "Digital Horizon",
    bpm: 128,
    key: "A minor",
    genre: "Electronic",
    mood: "Futuristic",
    dateProduced: "2024-01-05",
    audioUrl: "/audio/digital-horizon.mp3",
    description: "Futuristic electronic beat with synthesized elements"
  },
  {
    id: "5",
    title: "Jazz Cafe",
    bpm: 110,
    key: "F major",
    genre: "Jazz Hip Hop",
    mood: "Relaxing",
    dateProduced: "2024-01-01",
    audioUrl: "/audio/jazz-cafe.mp3",
    description: "Jazz-influenced hip hop with smooth piano samples"
  },
  {
    id: "6",
    title: "Street Anthem",
    bpm: 85,
    key: "E minor",
    genre: "Boom Bap",
    mood: "Raw",
    dateProduced: "2023-12-28",
    audioUrl: "/audio/street-anthem.mp3",
    description: "Classic boom bap with hard-hitting drums"
  }
];