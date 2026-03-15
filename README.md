# Cline Skills Used

## Media Skill (OMDb-powered)

This repository uses the **Cline media skill** to add media entries (movies, anime, books, shows) into `src/data/media.ts` by fetching metadata from the OMDb API. Key features:

- **OMDb metadata lookup** using a URL-encoded title and the `OMDB_API_KEY` environment variable.
- **Field mapping** from OMDb response fields to the `MediaEntry` structure.
- **Rating conversion** from IMDb’s 0–10 scale to a 1–5 scale using `round(imdbRating / 2)`.
- **Media type inference** (movie vs anime) based on OMDb `Type` and `Genre`/`Country` rules.
- **Timestamp ID + formatted date** generation for new entries.
- **Safe append** to the `mediaLog` array without overwriting existing entries.