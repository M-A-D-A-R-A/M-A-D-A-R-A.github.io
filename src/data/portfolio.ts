export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
  {
    title: "VM File Downloader CLI",
    description:
      "A Go-based cli tool to fetch files from a remote VM using SSH/SFTP. This was a vibe-coded project for Oracle internal use only and to test Oracle AI agents capbilties.",
    technologies: ["Golang", "SSH", "SFTP"],
    codeUrl: "https://github.com/M-A-D-A-R-A/vmfile-cli"
  },
  {
    title: "github-code-review-agent",
    description:
      "An autonomous code-review service for GitHub pull requests.It fetches PR diffs, runs lightweight static checks, asks a local LLM (Ollama) via Agno to produce a strict JSON review, stores results in Postgres, and exposes a FastAPI API. Work is executed asynchronously using Celery with Redis as broker/result backend.",
    technologies: ["Python", "FastAPI", "Agno","Ollama"],
    projectUrl: "https://github-code-review-agent.vercel.app/gh-agent.html",
    codeUrl: "https://github.com/M-A-D-A-R-A/github-code-review-agent",
  },
  {
    title: "Sports_py",
    description:
      "An Script to Count Push-up Pull-up and many more in Python using Mediapipe ,Cv2 and Argparse.",
    technologies: ["Python", ],
   
    codeUrl: "https://github.com/M-A-D-A-R-A/Sports_py",
  },
  {
    title: "CS:GO Tournament App",
    description:
      "An App where all the details about a tournament can be found. Got Featured on Google Dev Library in the only 50 open sources Flutter Apps",
    technologies: ["Flutter","Firebase"],
   projectUrl:"https://devlibrary.withgoogle.com/products/flutter/repos/kapilkumar2001-Arcadia-Auction",
    codeUrl: "https://github.com/kapilkumar2001/Arcadia-Auction",
  },
  
];
