export interface News {
  date: string;
  title: string;
  description: string;
  link?: string;
}

export const newsData: News[] = [
  // If you don't want to show news, just make the array empty.
  {
    date: "May 2022-September 2022",
    title: "Google Summer of Code 2022",
    description: "LabelLab is an image analysis and classification platform for machine learning (ML) researchers. Submitted a proposal to Google Summer of Code 2022, a program promoting open-source contributions, and was honoured to be selected as one of 1,054 contributors worldwide.",
    link: "https://summerofcode.withgoogle.com/archive/2022/projects/BRb6s0fz",
  }
];
