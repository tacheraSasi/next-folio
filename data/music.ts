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
    audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
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
    audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
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
    audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
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
    audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
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
    audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
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
    audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
    description: "Classic boom bap with hard-hitting drums"
  },
  {
    id: "7",
    title: "Neon Nights",
    bpm: 130,
    key: "B minor",
    genre: "Synthwave",
    mood: "Nostalgic",
    dateProduced: "2024-01-20",
    audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
    description: "80s-inspired synthwave with retro analog sounds"
  },
  {
    id: "8",
    title: "Ocean Breeze",
    bpm: 100,
    key: "C major",
    genre: "Ambient",
    mood: "Peaceful",
    dateProduced: "2024-01-18",
    audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
    description: "Ambient soundscape with natural ocean samples"
  },
  {
    id: "9",
    title: "Fire Flow",
    bpm: 150,
    key: "F# minor",
    genre: "Drill",
    mood: "Aggressive",
    dateProduced: "2024-01-12",
    audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
    description: "Hard-hitting drill beat with intense energy"
  }
];