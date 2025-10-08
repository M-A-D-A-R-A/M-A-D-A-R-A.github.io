// data/blogs.ts
export interface BlogPost {
  title: string;           // e.g. "How I built my portfolio"
  description: string;
  date: string;            // ISO or "YYYY-MM-DD"
  tags?: string[];
}

export const blogPosts: BlogPost[] = [
    {
    title: "Bali-Pass trek & 15,800ft Mystery",
    description: "This blog is from my recent trek to Bali-pass in Garhwal Himalayas, Uttarakhand, India.",
    date: "2025-05-05",
    tags:["Trekking","Calculus"]

  },
    {
    title:"Bayesian deep learning & Computer Vision",
    description:"Have you ever wondered how Deep learing especially BDL works with many appliaction of Computer Vision. Have a good read!",
    date:"2023-10-01",
    tags:["CV","Deep learning"]
   },
  {
    title: "Introduction",
    description: "This first entry will serve as a brief introduction, as well as an outline of what you can expect to see and read on this platform.",
    date: "2023-09-01",
  }
];
