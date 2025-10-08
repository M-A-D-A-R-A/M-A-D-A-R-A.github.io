export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  // {
  //   year: "2019-203",
  //   institution: "Indian Institute of Information Technology Vadodara",
  //   degree: "B.Tech in CSE",
  //   // advisor: "Prof. Sarah Johnson",
  // }
];
