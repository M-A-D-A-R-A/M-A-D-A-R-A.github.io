// src/data/media.ts

export type MediaType = "movie" | "book" | "anime";

export interface MediaEntry {
  id: string;
  date: string; // YYYY-MM-DD
  type: MediaType;

  title: string;
  subtitle?: string;

  image?: string; // /public/media/xxx.jpg
  notes?: string[];
  opinion?: string;
  rating?: number;
}

export const mediaLog: MediaEntry[] = [
  {
    id: "1",
    date: "2026-01-06",
    type: "movie",
    title: "Eko",
    image: "https://www.themoviedb.org/t/p/w600_and_h900_face/tXdFEmtqLm8tewIErDJgnbTS9qs.jpg",
    rating: 3,
    notes: ["Intruguing Concept"],
    opinion: "I have always enjoyed around animals especially dogs. This was one of them"
  },
  {
    id: "2",
    date: "2025-03-12",
    type: "book",
    title: "TUMHARI AUQAT KYA HAI PIYUSH MISHRA",
    rating: 2,
    subtitle: "Thought of reading this from the lallantop Episode",
    image: "https://m.media-amazon.com/images/I/71NlmtJQ+OL._SL1500_.jpg",
    // notes: ["Dec", "Systems > goals"]
  },
  {
    id: "3",
    date: "2026-01-02",
    type: "anime",
    title: "100 Meters",
    image: "https://www.themoviedb.org/t/p/w1280/w2pzrRTevXrW3vgIK4CCYaXvtIc.jpg",
    rating: 3,
    // notes: ["Minimalist pacing", "Good performances"],
    opinion: "Reminded me of Bhaag Milkha Bhaag"
  }
];
