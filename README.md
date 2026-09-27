# ShnwazDev JioSaavn API

<div align="center">

[![CI Status](https://img.shields.io/github/actions/workflow/status/shnwazdeveloper/shnwazdev-jiosaavn-api/ci.yaml?branch=main&label=CI&logo=githubactions&logoColor=white&style=for-the-badge)](https://github.com/shnwazdeveloper/shnwazdev-jiosaavn-api/actions/workflows/ci.yaml)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Hono](https://img.shields.io/badge/Hono-E36002?style=for-the-badge&logo=hono&logoColor=white)](https://hono.dev/)
[![Cloudflare Workers](https://img.shields.io/badge/Cloudflare_Workers-F38020?style=for-the-badge&logo=cloudflareworkers&logoColor=white)](https://workers.cloudflare.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![OpenAPI 3.1](https://img.shields.io/badge/OpenAPI_3.1-6BA539?style=for-the-badge&logo=openapiinitiative&logoColor=white)](https://swagger.io/specification/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

</div>

Unofficial JioSaavn API and developer portal built for `shnwazdev`. Exposes comprehensive music metadata, direct 320kbps audio stream download URLs, albums, artists, browse feeds, synced lyrics, playlists, podcasts, radio stations, search, and trending charts through high-performance Hono and TypeScript edge runtimes.

---

## Highlights

- ![Auth](https://img.shields.io/badge/AUTH-None-2ea44f?style=flat-square) **Open Public Access**: No API keys, tokens, or registration required.
- ![Rate Limit](https://img.shields.io/badge/LIMIT-None-0969da?style=flat-square) **Zero Rate Limits**: No application-level throttling or artificial request caps.
- ![Runtime](https://img.shields.io/badge/RUNTIME-Edge_Native-bf8700?style=flat-square) **Edge Native**: Production-ready for Cloudflare Workers and Vercel serverless.
- ![Docs](https://img.shields.io/badge/DOCS-Scalar_%2B_Swagger-8250df?style=flat-square) **Interactive Docs**: Built-in Scalar reference and OpenAPI 3.1 JSON schemas.
- ![Audio](https://img.shields.io/badge/AUDIO-320kbps-cf222e?style=flat-square) **Lossless Quality**: Direct CDN audio stream links up to 320kbps MP4 / AAC.
- ![Catalog](https://img.shields.io/badge/CATALOG-47%2B_Routes-0969da?style=flat-square) **Complete JioSaavn Surface**: Full coverage across search, songs, albums, artists, playlists, lyrics, radio, and feeds.

---

## Live Deployments

| Target | Description | URL |
| :--- | :--- | :--- |
| ![Production](https://img.shields.io/badge/Portal-jio.shnwaz.dev-0969da?style=flat-square&logo=cloudflare&logoColor=white) | Production Web Portal | `https://jio.shnwaz.dev/` |
| ![Scalar](https://img.shields.io/badge/Docs-Scalar-0969da?style=flat-square) | Interactive Documentation | `https://jio.shnwaz.dev/docs` |
| ![OpenAPI](https://img.shields.io/badge/Schema-Swagger-6BA539?style=flat-square&logo=swagger&logoColor=white) | OpenAPI 3.1 Spec | `https://jio.shnwaz.dev/swagger` |
| ![Health](https://img.shields.io/badge/Status-Health-2ea44f?style=flat-square) | Uptime Monitor Route | `https://jio.shnwaz.dev/health` |
| ![Index](https://img.shields.io/badge/Index-Endpoints-8250df?style=flat-square) | Machine-Readable Route Catalog | `https://jio.shnwaz.dev/api/endpoints` |
| ![Limits](https://img.shields.io/badge/Policy-Limits-bf8700?style=flat-square) | Policy Metadata | `https://jio.shnwaz.dev/api/limits` |

---

## Quickstart

Query any route using `curl` or any HTTP client without authentication:

```sh
# Health Check
curl "https://jio.shnwaz.dev/health"

# Global Search
curl "https://jio.shnwaz.dev/api/search?query=Believer"

# Scoped Song Search
curl "https://jio.shnwaz.dev/api/search/songs?query=Kesariya"

# Song Details by ID
curl "https://jio.shnwaz.dev/api/songs/0W6DtW_N"

# Song Details by JioSaavn URL
curl "https://jio.shnwaz.dev/api/songs?link=https://www.jiosaavn.com/song/kesariya/AgIAQyBeWlI"

# Top Trending Songs
curl "https://jio.shnwaz.dev/api/trending/songs?limit=5"
```

---

## API Endpoints Reference

### Search

| Method | Endpoint | Description | Query Parameters |
| :--- | :--- | :--- | :--- |
| ![GET](https://img.shields.io/badge/GET-0ea5e9?style=flat-square) | `/api/search` | Search songs, albums, artists, and playlists | `query` (required), `page`, `limit` |
| ![GET](https://img.shields.io/badge/GET-0ea5e9?style=flat-square) | `/api/search/songs` | Search songs | `query` (required), `page`, `limit` |
| ![GET](https://img.shields.io/badge/GET-0ea5e9?style=flat-square) | `/api/search/albums` | Search albums | `query` (required), `page`, `limit` |
| ![GET](https://img.shields.io/badge/GET-0ea5e9?style=flat-square) | `/api/search/artists` | Search artists | `query` (required), `page`, `limit` |
| ![GET](https://img.shields.io/badge/GET-0ea5e9?style=flat-square) | `/api/search/playlists` | Search playlists | `query` (required), `page`, `limit` |

### Songs

| Method | Endpoint | Description | Parameters |
| :--- | :--- | :--- | :--- |
| ![GET](https://img.shields.io/badge/GET-0ea5e9?style=flat-square) | `/api/songs` | Fetch songs by comma-separated IDs or song link | `ids` or `link` |
| ![GET](https://img.shields.io/badge/GET-0ea5e9?style=flat-square) | `/api/songs/{id}` | Fetch a single song with 320kbps audio streams | `id` in path |
| ![GET](https://img.shields.io/badge/GET-0ea5e9?style=flat-square) | `/api/songs/{id}/suggestions` | Recommendations for a song | `id` in path, `limit` |
| ![GET](https://img.shields.io/badge/GET-0ea5e9?style=flat-square) | `/api/songs/station` | Create song radio station | `song_id` |

### Albums

| Method | Endpoint | Description | Parameters |
| :--- | :--- | :--- | :--- |
| ![GET](https://img.shields.io/badge/GET-0ea5e9?style=flat-square) | `/api/albums` | Retrieve album metadata and tracks | `id` or `link` |

### Artists

| Method | Endpoint | Description | Parameters |
| :--- | :--- | :--- | :--- |
| ![GET](https://img.shields.io/badge/GET-0ea5e9?style=flat-square) | `/api/artists` | Retrieve artist details | `id` or `link` |
| ![GET](https://img.shields.io/badge/GET-0ea5e9?style=flat-square) | `/api/artists/{id}` | Retrieve artist overview | `id` in path |
| ![GET](https://img.shields.io/badge/GET-0ea5e9?style=flat-square) | `/api/artists/{id}/songs` | Retrieve artist songs | `id` in path, `page`, `category`, `sort` |
| ![GET](https://img.shields.io/badge/GET-0ea5e9?style=flat-square) | `/api/artists/{id}/albums` | Retrieve artist albums | `id` in path, `page`, `category`, `sort` |
| ![GET](https://img.shields.io/badge/GET-0ea5e9?style=flat-square) | `/api/artists/{id}/related` | Retrieve related artists | `id` in path |
| ![GET](https://img.shields.io/badge/GET-0ea5e9?style=flat-square) | `/api/artists/by-name` | Search artist by name | `name` query param |

### Playlists

| Method | Endpoint | Description | Parameters |
| :--- | :--- | :--- | :--- |
| ![GET](https://img.shields.io/badge/GET-0ea5e9?style=flat-square) | `/api/playlists` | Retrieve playlist details and songs | `id` or `link`, `page`, `limit` |

### Lyrics

| Method | Endpoint | Description | Parameters |
| :--- | :--- | :--- | :--- |
| ![GET](https://img.shields.io/badge/GET-0ea5e9?style=flat-square) | `/api/lyrics` | Retrieve lyrics by song name | `query` |
| ![GET](https://img.shields.io/badge/GET-0ea5e9?style=flat-square) | `/api/lyrics/{id}` | Retrieve lyrics by song ID | `id` in path |
| ![GET](https://img.shields.io/badge/GET-0ea5e9?style=flat-square) | `/api/lyrics/{id}/sync` | Retrieve synchronized time-coded lyrics | `id` in path |

### Browse Feeds

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| ![GET](https://img.shields.io/badge/GET-0ea5e9?style=flat-square) | `/api/home` | Full JioSaavn home feed |
| ![GET](https://img.shields.io/badge/GET-0ea5e9?style=flat-square) | `/api/home/modules` | Home feed module definitions |
| ![GET](https://img.shields.io/badge/GET-0ea5e9?style=flat-square) | `/api/home/promos` | Editorial promo groupings |
| ![GET](https://img.shields.io/badge/GET-0ea5e9?style=flat-square) | `/api/home/city-modules` | City trending modules |
| ![GET](https://img.shields.io/badge/GET-0ea5e9?style=flat-square) | `/api/home/artist-recommendations` | Home artist radio recommendations |
| ![GET](https://img.shields.io/badge/GET-0ea5e9?style=flat-square) | `/api/charts` | Top chart rankings |
| ![GET](https://img.shields.io/badge/GET-0ea5e9?style=flat-square) | `/api/channels` | Browse channels |
| ![GET](https://img.shields.io/badge/GET-0ea5e9?style=flat-square) | `/api/channels/{id}` | Channel detail payload |
| ![GET](https://img.shields.io/badge/GET-0ea5e9?style=flat-square) | `/api/discover` | Discover categories |
| ![GET](https://img.shields.io/badge/GET-0ea5e9?style=flat-square) | `/api/genres` | Music genre listings |
| ![GET](https://img.shields.io/badge/GET-0ea5e9?style=flat-square) | `/api/moods` | Mood-based categories |
| ![GET](https://img.shields.io/badge/GET-0ea5e9?style=flat-square) | `/api/music-plus` | Music plus stations |
| ![GET](https://img.shields.io/badge/GET-0ea5e9?style=flat-square) | `/api/radio` | Radio station categories |
| ![GET](https://img.shields.io/badge/GET-0ea5e9?style=flat-square) | `/api/radio/{id}` | Radio station stream payload |
| ![GET](https://img.shields.io/badge/GET-0ea5e9?style=flat-square) | `/api/radio/artists` | Artist radio categories |
| ![GET](https://img.shields.io/badge/GET-0ea5e9?style=flat-square) | `/api/radio/featured` | Featured radio channels |

### Podcasts

| Method | Endpoint | Description | Parameters |
| :--- | :--- | :--- | :--- |
| ![GET](https://img.shields.io/badge/GET-0ea5e9?style=flat-square) | `/api/podcasts` | Retrieve podcasts by ID, token, link, or query | `id`, `token`, `link`, `query` |
| ![GET](https://img.shields.io/badge/GET-0ea5e9?style=flat-square) | `/api/podcasts/{id}` | Retrieve podcast show detail | `id` in path |
| ![GET](https://img.shields.io/badge/GET-0ea5e9?style=flat-square) | `/api/episodes/{id}` | Retrieve single episode detail | `id` in path |

### Trending

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| ![GET](https://img.shields.io/badge/GET-0ea5e9?style=flat-square) | `/api/trending` | Aggregated trending overview |
| ![GET](https://img.shields.io/badge/GET-0ea5e9?style=flat-square) | `/api/trending/songs` | Trending songs list |
| ![GET](https://img.shields.io/badge/GET-0ea5e9?style=flat-square) | `/api/trending/albums` | Trending albums list |
| ![GET](https://img.shields.io/badge/GET-0ea5e9?style=flat-square) | `/api/trending/artists` | Trending artists list |
| ![GET](https://img.shields.io/badge/GET-0ea5e9?style=flat-square) | `/api/trending/playlists` | Trending playlists list |
| ![GET](https://img.shields.io/badge/GET-0ea5e9?style=flat-square) | `/api/trending/podcasts` | Trending podcast episodes |

---

## Response Envelope

All API endpoints return structured JSON:

```json
{
  "success": true,
  "data": {
    "total": 1,
    "start": 0,
    "results": [
      {
        "id": "csaAEio2",
        "name": "Believer",
        "type": "song",
        "year": "2017",
        "duration": 204,
        "label": "Interscope Records",
        "language": "english",
        "hasLyrics": true,
        "url": "https://www.jiosaavn.com/song/believer/XScOACV-bVc",
        "downloadUrl": [
          { "quality": "12kbps", "url": "..." },
          { "quality": "48kbps", "url": "..." },
          { "quality": "96kbps", "url": "..." },
          { "quality": "160kbps", "url": "..." },
          { "quality": "320kbps", "url": "..." }
        ]
      }
    ]
  }
}
```

---

## Local Development

```sh
# Clone repository
git clone https://github.com/shnwazdeveloper/shnwazdev-jiosaavn-api.git
cd shnwazdev-jiosaavn-api

# Install dependencies
npm ci

# Start local server with hot reload
npm run dev

# Run test suite
npm test

# Run linter
npm run lint

# Production build
npm run build
```

---

## Deployment

### Vercel Serverless

- `vercel.json`: Routing, headers, and function configuration.
- `api/index.js`: Serverless handler mounting Hono application.

```sh
npx vercel --prod
```

### Cloudflare Workers

- `wrangler.jsonc`: Cloudflare Worker configuration with `src/server.ts` entry.

```sh
npm run deploy:cf
```

---

## License

Released under the [MIT License](LICENSE). Built for educational and personal API integrations.
