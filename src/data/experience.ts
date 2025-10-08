export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "June 2023- Present",
    title: "Application Developer 2",
    company: "Oracle",
    description:
      "Worked on Oracle ADF, Java,JavaScript & SQL for enhanced user experience and expanded functionality of Fusionapps procurement module under Oracle Procurement Cloud (SCM).",
    manager: "Rajvi Shah ",
    companyUrl: "https://www.oracle.com/in/",
  },
    {
    date: "Dec 2022-June 2023",
    title: "Software Developer",
    company: "BeyondIRR",
    description:
      "Worked on Python,Flask, FastAPIs and Microserives for fintech services.",
    manager: "Sagar Chand Agarwal (CTO)",
    companyUrl: "https://beyondirr.com/",
  }
];
