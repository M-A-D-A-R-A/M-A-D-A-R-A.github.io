// data/til.ts
export interface TIL {
  date: string;            // ISO or "YYYY-MM-DD"
  title: string;           // short heading
  description: string;     // 1–2 lines
  link?: string;           // optional: source / snippet url
}

export const tilItems: TIL[] = [
  {
    date: "2025-10-05",
    title: "Petrichor vs Ozone",
    description: "Earthy smell after rain is petrichor; pre-storm sharp scent is ozone.",
  },
  {
    date:"2025-09-19",
    title:"conductor",
    description:"Run a bunch of Claude Codes in parallel.",
    link:"https://x.com/NishantAndoriy1/status/1969099683495886849"
  },
  {
    date:"2025-07-06",
    title:"Sprites and Airglow",
    description:"Sprites and airglow are distinct upper atmospheric phenomena. Think of them as lighting strike and chemical reactions but towards the space",
    link:"https://x.com/NishantAndoriy1/status/1941775483433353415"
  },{
    date:"2024-04-16",
    title:"Converting Python Requests to cURL Commands",
    description:"pip install curlify; print(curlify.to_curl(r.request))"
  }
];
