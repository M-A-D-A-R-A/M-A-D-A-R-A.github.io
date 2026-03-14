# Add Media Entry Using OMDb

## Purpose

This skill adds a movie, anime, or book to the `src/data/media.ts` media log using metadata fetched from the OMDb API.

The OMDb API key is read from an environment variable in the current session.

---

# Input

A movie, anime, book, or show title.

Example:

```
add media dune part one
```

---

# Environment Requirement

The OMDb API key must be available as an environment variable:

```
OMDB_API_KEY
```

The API request must use this variable.

---

# Step 1 — URL Encode the Input

The title must be URL encoded before making the request.

Example:

```
Input:
Dune: Part One

Encoded:
Dune:%20Part%20One
```

Use URL encoding to safely pass the title to the API.

---

# Step 2 — Fetch Metadata Using curl

Call the OMDb API using the encoded title and the environment variable API key.

Command:

```
curl "https://www.omdbapi.com/?t=<ENCODED_TITLE>&apikey=$OMDB_API_KEY"
```

Example:

```
curl "https://www.omdbapi.com/?t=Dune:%20Part%20One&apikey=$OMDB_API_KEY"
```

The API returns JSON similar to:

```
{
  "Title": "Dune: Part One",
  "Year": "2021",
  "Genre": "Action, Adventure, Drama",
  "Plot": "Feature adaptation of Frank Herbert's science fiction novel.",
  "Poster": "https://m.media-amazon.com/images/...",
  "imdbRating": "8.0",
  "Type": "movie",
  "Response": "True"
}
```

If `"Response": "False"` then stop and report failure.

---

# Step 3 — Convert Response to MediaEntry Format

Map the OMDb fields to the structure used in `src/data/media.ts`.

Structure:

```ts
{
  id: "<generated-id>",
  date: "<today-date>",
  type: "movie" | "anime" | "book",
  title: "<Title>",
  image: "<Poster>",
  rating: <rating 1-5>,
  notes: ["<Genre>"],
  opinion: "<Plot>"
}
```

Field mapping:

| OMDb Field | MediaEntry Field |
| ---------- | ---------------- |
| Title      | title            |
| Poster     | image            |
| Genre      | notes            |
| Plot       | opinion          |
| imdbRating | rating           |
| Type       | type             |

---

# Step 4 — Rating Conversion

Convert IMDb rating (0–10 scale) to a 1–5 scale.

Formula:

```
rating = round(imdbRating / 2)
```

Example:

```
imdbRating = 7.9
rating = 4
```

---

# Step 5 — Determine Media Type

Rules:

```
if Type == "movie" → movie
if Genre contains "Animation" and Country == "Japan" → anime
otherwise → movie
```

Books may need manual correction.

---

# Step 6 — Generate ID

Generate a unique ID using a timestamp.

Example:

```
Date.now().toString()
```

---

# Step 7 — Generate Date

Format the date as:

```
YYYY-MM-DD
```

Example:

```
2026-03-15
```

---

# Step 8 — Append to Media Log

Open the file:

```
src/data/media.ts
```

Find the array:

```
export const mediaLog: MediaEntry[] = [
```

Insert the new entry **before the closing `];`**.

Example entry:

```ts
{
  id: "1710500000000",
  date: "2026-03-15",
  type: "movie",
  title: "Dune: Part One",
  image: "https://m.media-amazon.com/images/...",
  rating: 4,
  notes: ["Action, Adventure, Drama"],
  opinion: "Feature adaptation of Frank Herbert's science fiction novel."
}
```

Ensure:

* Proper TypeScript formatting
* Correct commas between entries
* Do not overwrite existing entries

---

# Success Output

After completion return:

```
Added "<Title>" to media log.
```

Example:

```
Added "Dune: Part One" to media log.
```

---

# Failure Output

If OMDb returns an error:

```
Could not find media with title "<input>"
```
