// data/blogs.ts
export interface BlogPost {
  title: string;
  description: string;
  date: string;
  tags?: string[];
  count?: number;
}

export const blogPosts: BlogPost[] = [
  {
    title: "The Movies & the World Beyond Screen",
    description: "A personal diary-meets-critic essay tracing Bollywood’s timeline and the global films that shaped my taste.",
    date: "2026-03-16",
    tags: ["Cinema", "Bollywood", "Personal", "Critique", "Movies"],
    count: 1500,
  },
  {
    title: "Bali-Pass trek & Black Peak Mystery",
    description: "My almost-lost thru-hike across the Bali Pass trail, about 60 km of high-altitude adventure in the Garhwal Himalayas.",
    date: "2025-05-05",
    tags: ["Trekking", "Travel"],
    count: 1526,
  },
  {
    title: "Bayesian Deep Learning & Computer Vision",
    description: "A short primer on uncertainty, Bayesian deep learning, and its applications in computer vision.",
    date: "2023-10-01",
    tags: ["CV", "Deep Learning"],
    count: 781,
  },
  {
    title: "Introduction",
    description: "This first entry will serve as a brief introduction, as well as an outline of what you can expect to see and read on this platform.",
    date: "2023-09-01",
    tags: ["Intro", "Personal", "Tech"],
    count: 272,
  },
];
