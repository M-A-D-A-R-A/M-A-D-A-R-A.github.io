// src/data/media.ts

export type MediaType = "movie" | "book" | "anime";

export interface MediaEntry {
  id: string;
  date?: string; // YYYY-MM-DD (single-day entry)
  startDate?: string; // YYYY-MM-DD (multi-day entry)
  endDate?: string; // YYYY-MM-DD (multi-day entry)
  type: MediaType;

  title: string;
  subtitle?: string;

  year?: string;
  genre?: string;
  runtime?: string;
  director?: string;
  writer?: string;
  actors?: string;
  plot?: string;
  language?: string;
  country?: string;
  awards?: string;
  boxOffice?: string;
  imdbRating?: string;
  metascore?: string;
  ratings?: Array<{ source: string; value: string }>;

  image?: string; // /public/media/xxx.jpg
  notes?: string[];
  opinion?: string;
  rating?: number;
}

export const mediaLog: MediaEntry[] = [
  // {
  //   id: "4",
  //   date: "2026-03-15",
  //   type: "movie",
  //   title: "Dune: Part One",
  //   subtitle: "Feature adaptation of Frank Herbert's epic sci-fi novel",
  //   year: "2021",
  //   genre: "Action, Adventure, Drama",
  //   runtime: "155 min",
  //   director: "Denis Villeneuve",
  //   writer: "Jon Spaihts, Denis Villeneuve, Eric Roth",
  //   actors: "Timothée Chalamet, Rebecca Ferguson, Zendaya",
  //   plot:
  //     "Paul Atreides arrives on Arrakis after his father accepts the stewardship of the dangerous planet. However, chaos ensues after a betrayal as forces clash to control melange, a precious resource.",
  //   language: "English, Mandarin",
  //   country: "United States, Canada",
  //   awards: "Won 6 Oscars. 175 wins & 299 nominations total",
  //   boxOffice: "$108,897,830",
  //   imdbRating: "8.0",
  //   metascore: "74",
  //   ratings: [
  //     { source: "Internet Movie Database", value: "8.0/10" },
  //     { source: "Rotten Tomatoes", value: "83%" },
  //     { source: "Metacritic", value: "74/100" }
  //   ],
  //   image:
  //     "https://m.media-amazon.com/images/M/MV5BNWIyNmU5MGYtZDZmNi00ZjAwLWJlYjgtZTc0ZGIxMDE4ZGYwXkEyXkFqcGc@._V1_SX300.jpg",
  //   rating: 5,
  //   notes: ["Immersive world-building", "Stunning visuals"],
  //   opinion: "Epic scale with a patient, atmospheric build-up that pays off in the finale."
  // },
  {
    id: "1",
    date: "2026-01-06",
    type: "movie",
    title: "Eko",
    subtitle: "A foggy village mystery wrapped around a hunted dog breeder",
    year: "2025",
    genre: "Adventure, Mystery",
    runtime: "125 min",
    director: "Dinjith Ayyathan",
    actors: "Sandeep Pradeep, Biana Momin, Saurabh Sachdeva",
    plot:
      "In misty Kaattukunnu hills, an elderly woman and her caretaker confront past memories while a hunted dog breeder named Kuriyachan eludes capture. As searchers arrive, buried secrets emerge.",
    language: "Malayalam, Hindi, Tamil, Telugu, Kannada",
    country: "India",
    awards: "N/A",
    boxOffice: "N/A",
    imdbRating: "7.8",
    ratings: [{ source: "Internet Movie Database", value: "7.8/10" }],
    image:
      "https://m.media-amazon.com/images/M/MV5BY2UxOTM1YmEtZTc0Yy00MmIwLWEyMTYtNDIwM2NjOWNiOTdjXkEyXkFqcGc@._V1_SX300.jpg",
    rating: 3,
    notes: ["Intruguing Concept"],
    opinion: "I have always enjoyed around animals especially dogs. This was one of them"
  },
  {
    id: "2",
    startDate: "2025-03-08",
    endDate: "2025-03-12",
    type: "book",
    title: "TUMHARI AUQAT KYA HAI PIYUSH MISHRA",
    rating: 2,
    subtitle: "Thought of reading this from the lallantop Episode",
    image: "https://m.media-amazon.com/images/I/71NlmtJQ+OL._SL1500_.jpg",
    // notes: ["Dec", "Systems > goals"]
  },
  {
    id: "3",
    startDate: "2026-01-02",
    // endDate: "2026-01-05",
    type: "anime",
    title: "100 Meters",
    subtitle: "Gifted runner Togashi meets rival Komiya",
    year: "2025",
    genre: "Animation, Drama, Sport",
    runtime: "106 min",
    director: "Kenji Iwaisawa",
    writer: "Uoto, Yasuyuki Muto",
    actors: "Aeric Azana, Oscar Cordova, Pressly James Crosby",
    plot:
      "Gifted runner Togashi dominates 100m races until transfer student Komiya arrives, motivating him to train harder. Years later, they compete as rivals on the racetrack.",
    language: "Japanese",
    country: "Japan",
    awards: "2 nominations total",
    boxOffice: "$140,991",
    imdbRating: "7.9",
    // metascore: "72",
    ratings: [
      { source: "Internet Movie Database", value: "7.9/10" },
      { source: "Rotten Tomatoes", value: "100%" },
      { source: "Metacritic", value: "72/100" }
    ],
    image:
      "https://m.media-amazon.com/images/M/MV5BOTYyNWZiNTktNzhiYi00YWVmLWJhZTctZTc4MDRkZGMyZjVhXkEyXkFqcGc@._V1_SX300.jpg",
    rating: 4,
    notes: ["Underdog rivalry", "Energetic animation", "Motivational arc"],
    opinion: "Personal take: This hit like a modern sports epic — focused, emotional, and insanely motivating."
  },
  {
    id: "4",
    date: "2026-01-15",
    type: "movie",
    title: "Scent of a Woman",
    subtitle: "A prep school student babysits a blind, irascible ex-army colonel",
    year: "1992",
    genre: "Drama",
    runtime: "156 min",
    director: "Martin Brest",
    writer: "Giovanni Arpino, Bo Goldman, Ruggero Maccari",
    actors: "Al Pacino, Chris O'Donnell, James Rebhorn",
    plot:
      "A prep school student needing money agrees to \"babysit\" a blind man, but the job is not at all what he anticipated.",
    language: "English",
    country: "United States",
    awards: "Won 1 Oscar. 6 wins & 14 nominations total",
    boxOffice: "$63,095,253",
    imdbRating: "8.0",
    metascore: "57",
    ratings: [
      { source: "Internet Movie Database", value: "8.0/10" },
      { source: "Rotten Tomatoes", value: "82%" },
      { source: "Metacritic", value: "57/100" }
    ],
    image:
      "https://m.media-amazon.com/images/M/MV5BNzc5ODg2NzMtYTQ4MS00MWFiLWI5NWMtNWNkODNmZjE0ZGVjXkEyXkFqcGc@._V1_SX300.jpg",
    rating: 4,
    notes: ["Iconic performance", "Classic drama"],
    opinion: "Personal take: can i get a hoo aah rewatched"
  },
  {
    id: "6",
    startDate: "2026-01-26",
    endDate: "2026-02-17",
    type: "movie",
    title: "Game of Thrones",
    subtitle: "Rewatch — because the north remembers",
    year: "2011–2019",
    genre: "Action, Adventure, Drama",
    runtime: "57 min",
    director: "N/A",
    writer: "David Benioff, D.B. Weiss",
    actors: "Emilia Clarke, Peter Dinklage, Kit Harington",
    plot:
      "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
    language: "English",
    country: "United States, United Kingdom",
    awards: "Won 59 Primetime Emmys. 396 wins & 655 nominations total",
    imdbRating: "9.2",
    ratings: [{ source: "Internet Movie Database", value: "9.2/10" }],
    image:
      "https://m.media-amazon.com/images/M/MV5BMTNhMDJmNmYtNDQ5OS00ODdlLWE0ZDAtZTgyYTIwNDY3OTU3XkEyXkFqcGc@._V1_SX300.jpg",
    rating: 5,
    notes: ["Action, Adventure, Drama", "Rewatch"],
    opinion: "Rewatch because the north remembers."
  },
  {
    id: "5",
    date: "2026-03-10",
    type: "movie",
    title: "War Machine",
    subtitle: "Recruits face an otherworldly threat during a special ops boot camp",
    year: "2026",
    genre: "Action, Sci-Fi, Thriller",
    runtime: "106 min",
    director: "Patrick Hughes",
    writer: "James Beaufort, Patrick Hughes",
    actors: "Joshua Diaz, Richard Cotta, Alan Ritchson",
    plot:
      "Follow the final recruits of a grueling special ops boot camp who encounter a deadly force from beyond this world.",
    language: "English",
    country: "United Kingdom, Australia, New Zealand, United States",
    awards: "1 nomination total",
    boxOffice: "N/A",
    imdbRating: "8.8",
    // metascore: "N/A",
    ratings: [{ source: "Internet Movie Database", value: "8.8/10" }],
    image:
      "https://m.media-amazon.com/images/M/MV5BMmM1ZTc5ZTYtOTM2My00MjBmLWE5NzktYzkyYzdlYWE3ZDAzXkEyXkFqcGc@._V1_SX300.jpg",
    rating: 4,
    notes: ["Special ops thriller", "Alien threat"],
    opinion: "Personal take: always loved jake reacher"
  },
  {
    id: "1773500246000",
    date: "2026-02-28",
    type: "movie",
    title: "Eternal Sunshine of the Spotless Mind",
    subtitle: "A couple erases memories after a painful breakup",
    year: "2004",
    genre: "Drama, Romance, Sci-Fi",
    runtime: "108 min",
    director: "Michel Gondry",
    writer: "Charlie Kaufman, Michel Gondry, Pierre Bismuth",
    actors: "Jim Carrey, Kate Winslet, Tom Wilkinson",
    plot:
      "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories forever.",
    language: "English",
    country: "United States",
    awards: "Won 1 Oscar. 73 wins & 111 nominations total",
    boxOffice: "$34,400,301",
    imdbRating: "8.3",
    metascore: "89",
    ratings: [
      { source: "Internet Movie Database", value: "8.3/10" },
      { source: "Rotten Tomatoes", value: "93%" },
      { source: "Metacritic", value: "89/100" }
    ],
    image:
      "https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_SX300.jpg",
    rating: 4,
    notes: ["Drama, Romance, Sci-Fi"],
    opinion: "The best movie i watched in theaters by far this year. (and this was a lot special)"
  },
  {
    id: "20260319-zootopia",
    date: "2026-03-19",
    type: "movie",
    title: "Zootopia",
    subtitle: "Judy Hopps, Nick Wilde, and one very busy mammal metropolis",
    year: "2016",
    genre: "Animation, Action, Adventure",
    runtime: "108 min",
    director: "Byron Howard, Rich Moore, Jared Bush",
    writer: "Byron Howard, Rich Moore, Jared Bush",
    actors: "Ginnifer Goodwin, Jason Bateman, Idris Elba",
    plot:
      "In a city of anthropomorphic animals, a rookie bunny cop and a cynical con artist fox must work together to uncover a conspiracy.",
    language: "English",
    country: "United States",
    awards: "Won 1 Oscar. 49 wins & 75 nominations total",
    boxOffice: "$341,268,248",
    imdbRating: "8.0",
    metascore: "78",
    ratings: [
      { source: "Internet Movie Database", value: "8.0/10" },
      { source: "Rotten Tomatoes", value: "98%" },
      { source: "Metacritic", value: "78/100" }
    ],
    image:
      "https://m.media-amazon.com/images/M/MV5BOTMyMjEyNzIzMV5BMl5BanBnXkFtZTgwNzIyNjU0NzE@._V1_SX300.jpg",
    rating: 4,
    notes: ["Animation, Action, Adventure"],
    opinion: "Judy >_<"
  },
  {
    id: "20260403-your-lie-in-april",
    date: "2026-04-03",
    type: "anime",
    title: "Your Lie in April",
    subtitle: "A piano prodigy is pulled back toward music by a violinist with a secret",
    year: "2014-2015",
    genre: "Animation, Comedy, Drama",
    actors: "Natsuki Hanae, Risa Taneda, Ayane Sakura",
    plot:
      "A piano prodigy who lost his ability to play after suffering a traumatic event in his childhood is forced back into the spotlight by an eccentric girl with a secret of her own.",
    language: "Japanese, English, German, Spanish",
    country: "Japan",
    awards: "11 wins & 12 nominations total",
    imdbRating: "8.5",
    ratings: [{ source: "Internet Movie Database", value: "8.5/10" }],
    image:
      "https://m.media-amazon.com/images/M/MV5BZGMyYmFmNzgtMWQ4NS00MWE2LTg4YmEtZGY1MTBiODE0YmE5XkEyXkFqcGc@._V1_SX300.jpg",
    rating: 4,
    notes: ["Animation, Comedy, Drama"],
    opinion: "Its april again, had to watch it"
  },
  {
    id: "20260406-phantoms-in-the-brain",
    startDate: "2026-04-06",
    type: "book",
    title: "Phantoms in the Brain",
    subtitle: "Probing the Mysteries of the Human Mind",
    year: "1999",
    writer: "V. S. Ramachandran, Sandra Blakeslee",
    image: "https://covers.openlibrary.org/b/id/432813-M.jpg",
    notes: ["Neuroscience", "Psychology", "Currently reading"],
    opinion: "Still reading from 6 April."
  },
  {
    id: "20260420-lifespan",
    startDate: "2026-04-20",
    type: "book",
    title: "Lifespan",
    subtitle: "Why We Age-and Why We Don't Have To",
    year: "2019",
    writer: "David A. Sinclair, Matthew D. LaPlante",
    plot:
      "A genetics and longevity book arguing that aging can be treated by understanding and activating the body's survival circuits.",
    language: "English",
    image:
      "https://books.google.com/books/content?id=x--oDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    notes: ["Science", "Longevity", "Currently reading"],
    opinion: "Still reading."
  },
  {
    id: "20260424-project-hail-mary",
    date: "2026-04-24",
    type: "movie",
    title: "Project Hail Mary",
    subtitle: "Andy Weir's first-contact survival story with Rocky",
    year: "2026",
    genre: "Adventure, Comedy, Sci-Fi",
    runtime: "156 min",
    director: "Phil Lord, Christopher Miller",
    writer: "Drew Goddard, Andy Weir",
    actors: "Ryan Gosling, Sandra Hüller, James Ortiz",
    plot:
      "A science teacher wakes up alone on a spaceship. As his memory returns, he uncovers a mission to stop a mysterious substance killing Earth's sun and that an unexpected friendship may be the key.",
    language: "English",
    country: "United States",
    awards: "1 win & 1 nomination total",
    boxOffice: "$260,744,752",
    imdbRating: "8.4",
    metascore: "77",
    ratings: [
      { source: "Internet Movie Database", value: "8.4/10" },
      { source: "Rotten Tomatoes", value: "94%" },
      { source: "Metacritic", value: "77/100" }
    ],
    image:
      "https://m.media-amazon.com/images/M/MV5BNTkwNzJiYTctNzI3NC00NjE1LTlhYjktY2Q5MTdmMWFmNzcxXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    rating: 4,
    notes: ["Adventure, Comedy, Sci-Fi"],
    opinion: "loved it so much created my own rocky"
  },
  {
    id: "20260427-dev-d",
    date: "2026-04-27",
    type: "movie",
    title: "Dev.D",
    subtitle: "A messy, modern Devdas spiral",
    year: "2009",
    genre: "Comedy, Drama, Romance",
    runtime: "144 min",
    director: "Anurag Kashyap",
    writer: "Sarat Chandra Chattopadhyay, Abhay Deol, Vikramaditya Motwane",
    actors: "Abhay Deol, Mahie Gill, Kalki Koechlin",
    plot:
      "After breaking up with his childhood sweetheart, a young man finds solace in drugs. Meanwhile, a teenage girl is caught in the world of prostitution. Will they be destroyed, or will they find redemption?",
    language: "Hindi",
    country: "India",
    awards: "12 wins & 27 nominations",
    boxOffice: "$18,613",
    imdbRating: "7.9",
    ratings: [{ source: "Internet Movie Database", value: "7.9/10" }],
    image:
      "https://m.media-amazon.com/images/M/MV5BZThhZjhiNGItOWM5ZS00ODM2LWI0OWItYWIzYzc1MWQyMzNlXkEyXkFqcGc@._V1_SX300.jpg",
    rating: 4,
    notes: ["Comedy, Drama, Romance"],
    opinion: "should have gone drunk"
  },
  {
    id: "20260428-michael",
    date: "2026-04-28",
    type: "movie",
    title: "Michael",
    subtitle: "Moonwalk fuel",
    year: "2026",
    genre: "Biography, Drama, History",
    runtime: "127 min",
    director: "Antoine Fuqua",
    writer: "John Logan",
    actors: "Jaafar Jackson, Nia Long, Colman Domingo",
    plot:
      "The early life of the famous musician Michael Jackson, known as the King of Pop.",
    language: "English",
    country: "United Kingdom, United States",
    awards: "2 wins & 1 nomination total",
    boxOffice: "$129,803,832",
    imdbRating: "7.7",
    metascore: "39",
    ratings: [
      { source: "Internet Movie Database", value: "7.7/10" },
      { source: "Metacritic", value: "39/100" }
    ],
    image:
      "https://m.media-amazon.com/images/M/MV5BNzllNmRlN2EtMDQyOC00ODJjLTg4OWQtZDNmNGU3YzlkNjc1XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    rating: 4,
    notes: ["Biography, Drama, History"],
    opinion: "i wanna learn moonwalk after this"
  }
];
