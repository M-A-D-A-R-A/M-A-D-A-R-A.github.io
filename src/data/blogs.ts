// data/blogs.ts
export interface BlogPost {
  title: string;           // e.g. "How I built my portfolio"
  description: string;
  date: string;            // ISO or "YYYY-MM-DD"
  tags?: string[];
  count?:number
}

export const blogPosts: BlogPost[] = [
    {
    title: "Bali-Pass trek & Black Peak Mystery",
    description: "My almost lost thru-hike of Bali-Pass ~60 km  trail. A rugged adventure on the high-altitude mountain pass trail in Garhwal Himalayas!",
    date: "2025-05-05",
    tags:["Trekking","Travel"],
    count:1526

  },
    {
    title:"Bayesian deep learning & Computer Vision",
    description:"Have you ever wondered how Deep learing especially BDL works with many appliaction of Computer Vision. Have a good read!",
    date:"2023-10-01",
    tags:["CV","Deep learning"],
    count:781
   },
  {
    title: "Introduction",
    description: "This first entry will serve as a brief introduction, as well as an outline of what you can expect to see and read on this platform.",
    date: "2023-09-01",
    count:272
  }
];
