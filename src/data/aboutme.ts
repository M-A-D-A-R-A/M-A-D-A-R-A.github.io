export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
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
    "I am a hobbyist software developer and a tinkerer. I completed my bachelor from IIIT Vadodara in CSE (2019-23). My interests include Software/Hardware, Cybersecurity, Aerospace/Aerophysics ,Literature, Anime & Sports. I believe the universe is indifferent and our species is often worse. We’re accelerating into ecological and social breakdown, mostly by choice. I’m not here to win—just to play beautifully while the rules fall apart. I’m not optimistic; I’m operational.",
  email: "andoriyanishant@gmail.com",
  imageUrl:"/assets/images/Madara-Uchiha-Sharingan.png",
  githubUsername: "M-A-D-A-R-A",
  linkedinUsername: "andoriya-nishant",
  twitterUsername: "NishantAndoriy1",
  blogUrl: "/blogs",
  cvUrl: "/Nishant_Andoriya.pdf",
  institutionUrl: "https://iiitvadodara.ac.in/",
  altName: "nandoriy",
  secretDescription: "Whatever that keeps you from killing yourself is your purpose.",
  funDescription:"Asdasd"
};
