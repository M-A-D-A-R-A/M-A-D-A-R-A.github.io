export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  mediaUrl: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Nishant Andoriya",
  title: "Developer / Tinkerer",
  institution: "IIIT Vadodara",
  // Note that links work in the description
  description:
    "I am a software developer and tinkerer from IIIT Vadodara (CSE, 2019-23), currently working on Oracle Procurement Cloud. I like building practical tools across software, hardware, cybersecurity, AI workflows, and personal archives. Outside work, I read, write, watch films and anime, follow sports, and keep poking at systems until they reveal how they work. I am not here to sound polished for its own sake; I prefer being useful, curious, and operational.",
  email: "andoriyanishant@gmail.com",
  imageUrl: "/assets/images/Madara-Uchiha-Sharingan.png",
  githubUsername: "M-A-D-A-R-A",
  linkedinUsername: "andoriya-nishant",
  twitterUsername: "NishantAndoriy1",
  mediaUrl: "/Letterboxd",
  blogUrl: "/blogs",
  cvUrl: "/Nishant_Andoriya.pdf",
  institutionUrl: "https://iiitvadodara.ac.in/",
  altName: "nandoriy",
  secretDescription: "Stay curious. Build useful things. Keep a record.",
  funDescription: "Software, hardware, film, and systems notes.",
};
