import { Hono } from 'hono'

export const Home = new Hono()

const API_NAME = 'ShnwazDev JioSaavn API'
const REPOSITORY_URL = 'https://github.com/shnwazdeveloper/shnwazdev-jiosaavn-api'
const DISPLAY_DOMAIN = 'jio.shnwaz.dev'
const DESCRIPTION =
  'High-performance TypeScript music streaming and metadata API for JioSaavn songs, 320kbps streams, albums, artists, and lyrics.'

type RouteItem = {
  method: string
  path: string
  description: string
}

type RouteGroup = {
  name: string
  count: number
  routes: RouteItem[]
}

const stats = [
  {
    title: '47+ Endpoints',
    desc: 'Songs, albums, artists, browse, lyrics, radio, trending feeds',
    badge: 'Comprehensive'
  },
  {
    title: '320kbps Streams',
    desc: 'Direct lossless CDN audio stream URLs in MP4 and AAC format',
    badge: 'High Bitrate'
  },
  {
    title: 'Zero Rate Limits',
    desc: 'Direct public access with no throttling or token requirement',
    badge: 'Unlimited'
  },
  {
    title: 'Edge Deployed',
    desc: 'Sub-30ms global edge response times on Cloudflare Workers',
    badge: 'Ultra Fast'
  }
]

const features = [
  {
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
    title: 'Full-Spectrum Search',
    description: 'Unified and scoped search for songs, albums, artists, and playlists with instant multi-page results.'
  },
  {
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>`,
    title: 'Editorial Browse Feeds',
    description: 'Home feeds, charts, genres, mood channels, city trend modules, and live featured radio stations.'
  },
  {
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>`,
    title: '320kbps Audio Quality',
    description: 'Direct CDN audio URLs for 12, 48, 96, 160, and 320kbps qualities with artist metadata.'
  },
  {
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
    title: 'Zero Rate Limits',
    description: 'No app-level request throttling, registration, or API keys. Designed for seamless integrations.'
  },
  {
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
    title: 'OpenAPI 3.1 & Scalar',
    description: 'Interactive API reference with real-time test request execution and machine-readable Swagger JSON.'
  },
  {
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`,
    title: 'Synced Lyrics & Podcasts',
    description: 'Time-synchronized lyrics, podcast episodes, show overviews, ringtone previews, and share URLs.'
  }
]

const routeGroups: RouteGroup[] = [
  {
    name: 'Search',
    count: 6,
    routes: [
      { method: 'GET', path: '/api/search?query={query}', description: 'Unified search for songs, albums, artists, playlists' },
      { method: 'GET', path: '/api/search/songs?query={query}', description: 'Search songs with pagination support' },
      { method: 'GET', path: '/api/search/albums?query={query}', description: 'Search music albums by title' },
      { method: 'GET', path: '/api/search/artists?query={query}', description: 'Search artists with details' },
      { method: 'GET', path: '/api/search/playlists?query={query}', description: 'Search user and editorial playlists' },
      { method: 'GET', path: '/api/search/top-query?query={query}', description: 'Retrieve top matching autocomplete query' }
    ]
  },
  {
    name: 'Songs',
    count: 5,
    routes: [
      { method: 'GET', path: '/api/songs?ids={ids}', description: 'Retrieve multiple songs by comma-separated IDs' },
      { method: 'GET', path: '/api/songs?link={url}', description: 'Retrieve song details by JioSaavn song URL' },
      { method: 'GET', path: '/api/songs/{id}', description: 'Retrieve single song details with 320kbps streams' },
      { method: 'GET', path: '/api/songs/{id}/suggestions', description: 'Retrieve recommended songs based on song ID' },
      { method: 'GET', path: '/api/songs/station', description: 'Create a continuous song radio station' }
    ]
  },
  {
    name: 'Album',
    count: 1,
    routes: [{ method: 'GET', path: '/api/albums?id={id}', description: 'Retrieve album metadata, artist credits, and tracklist' }]
  },
  {
    name: 'Artists',
    count: 6,
    routes: [
      { method: 'GET', path: '/api/artists?id={id}', description: 'Retrieve artists by ID or JioSaavn profile link' },
      { method: 'GET', path: '/api/artists/{id}', description: 'Retrieve artist bio and profile overview by ID' },
      { method: 'GET', path: '/api/artists/{id}/albums', description: 'Retrieve all albums released by artist' },
      { method: 'GET', path: '/api/artists/{id}/songs', description: 'Retrieve top songs by artist with sorting' },
      { method: 'GET', path: '/api/artists/{id}/related', description: 'Retrieve similar and related artists' },
      { method: 'GET', path: '/api/artists/by-name?name={name}', description: 'Search and retrieve artist by name query' }
    ]
  },
  {
    name: 'Browse',
    count: 16,
    routes: [
      { method: 'GET', path: '/api/home', description: 'Full JioSaavn homepage feed payload' },
      { method: 'GET', path: '/api/home/modules', description: 'Feed module metadata and section definitions' },
      { method: 'GET', path: '/api/home/promos', description: 'Editorial promotional groups and banners' },
      { method: 'GET', path: '/api/home/city-modules', description: 'City-specific trending and regional modules' },
      { method: 'GET', path: '/api/home/artist-recommendations', description: 'Artist radio recommendations for home' },
      { method: 'GET', path: '/api/charts', description: 'Top music charts rankings and positions' },
      { method: 'GET', path: '/api/channels', description: 'Curated browse channels listing' },
      { method: 'GET', path: '/api/channels/{id}', description: 'Detailed channel feed with tracklists' },
      { method: 'GET', path: '/api/discover', description: 'Discover new music modules and releases' },
      { method: 'GET', path: '/api/genres', description: 'Music genres directory' },
      { method: 'GET', path: '/api/moods', description: 'Mood-based music categories' },
      { method: 'GET', path: '/api/music-plus', description: 'Music Plus special feature stations' },
      { method: 'GET', path: '/api/radio', description: 'Radio station categories' },
      { method: 'GET', path: '/api/radio/{id}', description: 'Live radio station stream payload' },
      { method: 'GET', path: '/api/radio/artists', description: 'Artist radio stations list' },
      { method: 'GET', path: '/api/radio/featured', description: 'Featured radio stations list' }
    ]
  },
  {
    name: 'Lyrics',
    count: 3,
    routes: [
      { method: 'GET', path: '/api/lyrics?query={query}', description: 'Retrieve lyrics by song title' },
      { method: 'GET', path: '/api/lyrics/{id}', description: 'Retrieve lyrics by song or lyrics ID' },
      { method: 'GET', path: '/api/lyrics/{id}/sync', description: 'Retrieve synchronized time-stamped lyrics payload' }
    ]
  },
  {
    name: 'Playlists',
    count: 1,
    routes: [{ method: 'GET', path: '/api/playlists?id={id}', description: 'Retrieve playlist details and songs by ID or link' }]
  },
  {
    name: 'Podcasts',
    count: 3,
    routes: [
      { method: 'GET', path: '/api/podcasts?id={id}', description: 'Retrieve podcast show by ID or link' },
      { method: 'GET', path: '/api/podcasts/{id}', description: 'Retrieve podcast show detail and all episodes' },
      { method: 'GET', path: '/api/episodes/{id}', description: 'Retrieve single podcast episode detail' }
    ]
  },
  {
    name: 'Trending',
    count: 6,
    routes: [
      { method: 'GET', path: '/api/trending', description: 'Aggregated trending music overview' },
      { method: 'GET', path: '/api/trending/songs', description: 'Top trending songs list' },
      { method: 'GET', path: '/api/trending/albums', description: 'Top trending albums list' },
      { method: 'GET', path: '/api/trending/artists', description: 'Top trending artists list' },
      { method: 'GET', path: '/api/trending/playlists', description: 'Top trending playlists list' },
      { method: 'GET', path: '/api/trending/podcasts', description: 'Top trending podcasts list' }
    ]
  }
]

const escapeHtml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')

const renderStats = () =>
  stats
    .map(
      (item) => `
        <div class="stat-card">
          <div class="stat-header">
            <span class="stat-badge">${escapeHtml(item.badge)}</span>
          </div>
          <strong class="stat-title">${escapeHtml(item.title)}</strong>
          <span class="stat-desc">${escapeHtml(item.desc)}</span>
        </div>`
    )
    .join('')

const renderFeatures = () =>
  features
    .map(
      (feature) => `
        <article class="feature-card">
          <div class="feature-icon-wrapper">
            ${feature.icon}
          </div>
          <h3>${escapeHtml(feature.title)}</h3>
          <p>${escapeHtml(feature.description)}</p>
        </article>`
    )
    .join('')

const renderRouteGroups = () =>
  routeGroups
    .map(
      (group) => `
        <div class="route-group-panel" data-category="${escapeHtml(group.name.toLowerCase())}">
          <div class="route-group-header">
            <div class="route-group-title">
              <h3>${escapeHtml(group.name)}</h3>
              <span class="count-badge">${group.count} ${group.count === 1 ? 'route' : 'routes'}</span>
            </div>
          </div>
          <div class="route-table">
            ${group.routes
              .map(
                (route) => `
                  <div class="route-row" data-path="${escapeHtml(route.path.toLowerCase())}" data-desc="${escapeHtml(route.description.toLowerCase())}">
                    <span class="method-tag">${escapeHtml(route.method)}</span>
                    <code class="route-path">${escapeHtml(route.path)}</code>
                    <span class="route-info">${escapeHtml(route.description)}</span>
                    <button class="copy-url-btn" type="button" data-copy-path="${escapeHtml(route.path)}" title="Copy Endpoint Path">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                      <span>Copy</span>
                    </button>
                  </div>`
              )
              .join('')}
          </div>
        </div>`
    )
    .join('')

const styles = `
:root {
  --bg: #07090e;
  --bg-card: rgba(13, 17, 24, 0.7);
  --bg-card-hover: rgba(20, 27, 39, 0.85);
  --border: rgba(255, 255, 255, 0.08);
  --border-highlight: rgba(255, 255, 255, 0.16);
  --text: #f8fafc;
  --text-muted: #94a3b8;
  --text-dim: #64748b;
  --accent: #38bdf8;
  --accent-soft: rgba(56, 189, 248, 0.1);
  --accent-hover: #7dd3fc;
  --radius-xs: 6px;
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --transition: 0.22s cubic-bezier(0.16, 1, 0.3, 1);
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  color-scheme: dark;
}

body {
  font-family: "Manrope", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background-color: var(--bg);
  color: var(--text);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  min-height: 100vh;
  overflow-x: hidden;
}

/* Subtle Grid Background (Pure SVG Pattern, Strictly Zero Glow) */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  opacity: 0.04;
  background-image: linear-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.4) 1px, transparent 1px);
  background-size: 32px 32px;
  z-index: 0;
}

/* Motion Keyframes */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(14px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes livePulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.35;
  }
}

@keyframes tabSwitch {
  from {
    opacity: 0.7;
    transform: translateY(3px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Header */
.topbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(7, 9, 14, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
  animation: fadeUp 0.4s var(--transition) both;
}

.topbar-inner {
  max-width: 1180px;
  margin: 0 auto;
  padding: 14px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: var(--text);
  font-weight: 800;
  font-size: 1.02rem;
  letter-spacing: -0.01em;
}

.brand-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: var(--accent-soft);
  border: 1px solid rgba(56, 189, 248, 0.3);
  color: var(--accent);
  border-radius: var(--radius-xs);
  font-size: 11px;
  font-weight: 900;
}

.domain-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  font-weight: 600;
  color: var(--text-muted);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border);
  padding: 3px 9px;
  border-radius: 999px;
}

.pulse-dot {
  width: 6px;
  height: 6px;
  background: #34d399;
  border-radius: 50%;
  animation: livePulse 2s ease-in-out infinite;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-item {
  color: var(--text-muted);
  text-decoration: none;
  font-size: 13px;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: var(--radius-xs);
  transition: color var(--transition), background var(--transition);
}

.nav-item:hover {
  color: var(--text);
  background: rgba(255, 255, 255, 0.06);
}

.nav-item.highlight {
  color: var(--accent);
}

/* Layout */
main {
  position: relative;
  z-index: 1;
  max-width: 1180px;
  margin: 0 auto;
  padding: 44px 20px 80px;
}

.section {
  margin-bottom: 64px;
}

.section-head {
  max-width: 720px;
  margin-bottom: 28px;
}

.section-head h2 {
  font-size: 1.85rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #fff;
  margin-bottom: 8px;
}

.section-head p {
  color: var(--text-muted);
  font-size: 0.98rem;
  line-height: 1.55;
}

/* Hero Section */
.hero-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 36px;
  align-items: stretch;
  margin-bottom: 60px;
}

.hero-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.release-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 11.5px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--accent);
  background: var(--accent-soft);
  border: 1px solid rgba(56, 189, 248, 0.25);
  padding: 5px 12px;
  border-radius: 999px;
  margin-bottom: 16px;
  width: fit-content;
  animation: fadeUp 0.4s var(--transition) both;
}

h1 {
  font-size: clamp(2.3rem, 4vw, 3.4rem);
  font-weight: 800;
  line-height: 1.14;
  letter-spacing: -0.03em;
  color: #fff;
  margin-bottom: 16px;
  animation: fadeUp 0.5s var(--transition) 0.05s both;
}

.hero-lead {
  color: var(--text-muted);
  font-size: 1.05rem;
  line-height: 1.6;
  margin-bottom: 24px;
  animation: fadeUp 0.5s var(--transition) 0.1s both;
}

.hero-actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 24px;
  animation: fadeUp 0.5s var(--transition) 0.15s both;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  font-size: 13px;
  font-weight: 700;
  border-radius: var(--radius-sm);
  text-decoration: none;
  cursor: pointer;
  border: 1px solid transparent;
  transition: transform var(--transition), background var(--transition), border-color var(--transition);
}

.btn:active {
  transform: scale(0.98);
}

.btn-primary {
  background: var(--accent);
  color: #05070a;
  border-color: var(--accent);
}

.btn-primary:hover {
  background: var(--accent-hover);
  border-color: var(--accent-hover);
  transform: translateY(-2px);
}

.btn-secondary {
  background: var(--bg-card);
  color: var(--text);
  border-color: var(--border-highlight);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.btn-secondary:hover {
  background: var(--bg-card-hover);
  border-color: rgba(255, 255, 255, 0.28);
  transform: translateY(-2px);
}

/* Quick Curl Box */
.curl-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  background: rgba(13, 17, 24, 0.9);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 8px 12px;
  margin-bottom: 24px;
  animation: fadeUp 0.5s var(--transition) 0.18s both;
}

.curl-bar code {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 12px;
  color: #cbd5e1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.curl-copy-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: var(--text);
  font-size: 11px;
  font-weight: 700;
  padding: 5px 10px;
  border-radius: var(--radius-xs);
  cursor: pointer;
  transition: background var(--transition);
  flex-shrink: 0;
}

.curl-copy-btn:hover {
  background: rgba(255, 255, 255, 0.15);
}

/* Stats 2x2 Grid */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  animation: fadeUp 0.5s var(--transition) 0.22s both;
}

.stat-card {
  background: var(--bg-card);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 14px 16px;
  transition: transform var(--transition), background var(--transition), border-color var(--transition);
}

.stat-card:hover {
  background: var(--bg-card-hover);
  border-color: var(--border-highlight);
  transform: translateY(-2px);
}

.stat-header {
  margin-bottom: 4px;
}

.stat-badge {
  font-size: 10px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--accent);
}

.stat-title {
  display: block;
  font-size: 1.05rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 2px;
}

.stat-desc {
  display: block;
  font-size: 0.8rem;
  color: var(--text-muted);
  line-height: 1.4;
}

/* Interactive Hero Console */
.hero-console {
  background: var(--bg-card);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45);
  animation: fadeUp 0.5s var(--transition) 0.15s both;
}

.console-topbar {
  background: rgba(13, 17, 24, 0.95);
  border-bottom: 1px solid var(--border);
  padding: 10px 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.window-dots {
  display: flex;
  gap: 6px;
}

.window-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.window-dot.red { background: #ef4444; }
.window-dot.yellow { background: #f59e0b; }
.window-dot.green { background: #10b981; }

.console-tabs {
  display: flex;
  gap: 4px;
}

.console-tab {
  background: transparent;
  border: 1px solid transparent;
  color: var(--text-muted);
  font-size: 11px;
  font-weight: 700;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;
  padding: 4px 10px;
  border-radius: var(--radius-xs);
  cursor: pointer;
  transition: all var(--transition);
}

.console-tab:hover {
  color: var(--text);
  background: rgba(255, 255, 255, 0.05);
}

.console-tab.active {
  color: var(--accent);
  background: var(--accent-soft);
  border-color: rgba(56, 189, 248, 0.25);
}

.console-meta-bar {
  background: rgba(9, 12, 18, 0.6);
  border-bottom: 1px solid var(--border);
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 11.5px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;
}

.request-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #fff;
  font-weight: 700;
}

.http-method {
  color: var(--accent);
  background: var(--accent-soft);
  padding: 1px 6px;
  border-radius: 4px;
  font-size: 10.5px;
}

.response-status {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #34d399;
  font-weight: 700;
}

.console-body {
  padding: 18px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 12px;
  line-height: 1.55;
  color: #e2e8f0;
  flex: 1;
  overflow-x: auto;
  min-height: 280px;
}

.console-body pre {
  animation: tabSwitch 0.25s var(--transition) both;
}

.console-footer {
  border-top: 1px solid var(--border);
  padding: 10px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(9, 12, 18, 0.85);
  font-size: 11px;
  color: var(--text-dim);
}

.copy-json-btn {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border);
  color: var(--text-muted);
  font-size: 11px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: var(--radius-xs);
  cursor: pointer;
  transition: all var(--transition);
}

.copy-json-btn:hover {
  color: var(--text);
  background: rgba(255, 255, 255, 0.12);
}

/* Feature Cards Grid */
.features-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.feature-card {
  background: var(--bg-card);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 22px;
  transition: transform var(--transition), background var(--transition), border-color var(--transition);
}

.feature-card:hover {
  background: var(--bg-card-hover);
  border-color: var(--border-highlight);
  transform: translateY(-3px);
}

.feature-icon-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-sm);
  background: var(--accent-soft);
  border: 1px solid rgba(56, 189, 248, 0.22);
  color: var(--accent);
  margin-bottom: 16px;
}

.feature-card h3 {
  font-size: 1.08rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 6px;
  letter-spacing: -0.01em;
}

.feature-card p {
  color: var(--text-muted);
  font-size: 0.9rem;
  line-height: 1.55;
}

/* Route Explorer Section */
.explorer-controls {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
}

.search-input-wrapper {
  position: relative;
  width: 100%;
}

.search-icon-svg {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-dim);
  pointer-events: none;
}

.route-filter-input {
  width: 100%;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 12px 14px 12px 42px;
  font-size: 13.5px;
  font-family: inherit;
  color: #fff;
  outline: none;
  transition: border-color var(--transition);
}

.route-filter-input:focus {
  border-color: var(--border-focus);
}

.route-filter-input::placeholder {
  color: var(--text-dim);
}

.category-chips {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.chip-btn {
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--text-muted);
  font-size: 12px;
  font-weight: 700;
  padding: 6px 14px;
  border-radius: var(--radius-xs);
  cursor: pointer;
  transition: all var(--transition);
}

.chip-btn:hover {
  color: var(--text);
  border-color: var(--border-highlight);
}

.chip-btn.active {
  background: var(--accent-soft);
  color: var(--accent);
  border-color: rgba(56, 189, 248, 0.4);
}

/* Route Groups & Tables */
.route-explorer-container {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.route-group-panel {
  background: var(--bg-card);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  overflow: hidden;
  transition: border-color var(--transition);
}

.route-group-header {
  padding: 14px 18px;
  background: rgba(13, 17, 24, 0.85);
  border-bottom: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.route-group-title {
  display: flex;
  align-items: center;
  gap: 10px;
}

.route-group-title h3 {
  font-size: 1rem;
  font-weight: 800;
  color: #fff;
}

.count-badge {
  font-size: 11px;
  font-weight: 700;
  color: var(--accent);
  background: var(--accent-soft);
  padding: 2px 8px;
  border-radius: 999px;
}

.route-table {
  display: flex;
  flex-direction: column;
}

.route-row {
  display: grid;
  grid-template-columns: 56px 1fr 1.3fr auto;
  gap: 14px;
  align-items: center;
  padding: 12px 18px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  transition: background var(--transition);
}

.route-row:last-child {
  border-bottom: none;
}

.route-row:hover {
  background: rgba(255, 255, 255, 0.03);
}

.method-tag {
  display: inline-block;
  font-size: 11px;
  font-weight: 900;
  text-align: center;
  color: #0369a1;
  background: #e0f2fe;
  padding: 2px 0;
  border-radius: 4px;
}

.route-path {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 12.5px;
  font-weight: 700;
  color: #fff;
  overflow-wrap: anywhere;
}

.route-info {
  font-size: 12.5px;
  color: var(--text-muted);
}

.copy-url-btn {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text-dim);
  font-size: 11px;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: var(--radius-xs);
  cursor: pointer;
  transition: all var(--transition);
}

.copy-url-btn:hover {
  color: #fff;
  border-color: var(--border-highlight);
  background: rgba(255, 255, 255, 0.06);
}

/* Footer */
.footer {
  border-top: 1px solid var(--border);
  padding: 32px 20px;
  max-width: 1180px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  color: var(--text-muted);
  flex-wrap: wrap;
  gap: 16px;
}

.footer a {
  color: var(--accent);
  text-decoration: none;
  font-weight: 600;
}

.footer a:hover {
  text-decoration: underline;
}

/* Responsive Media Queries */
@media (max-width: 960px) {
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }
  .features-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 720px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
  .stats-grid {
    grid-template-columns: 1fr;
  }
  .route-row {
    grid-template-columns: 56px 1fr;
    gap: 8px;
  }
  .route-info {
    grid-column: 2 / -1;
  }
  .copy-url-btn {
    grid-column: 2 / -1;
    width: fit-content;
  }
  .topbar-inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
}
`

const clientScript = `
;(() => {
  // Console Tab Switching
  const tabs = document.querySelectorAll('[data-console-tab]')
  const pathDisplay = document.getElementById('console-path')
  const jsonDisplay = document.getElementById('console-json')
  const statusDisplay = document.getElementById('console-status')

  const consolePayloads = {
    search: {
      path: '/api/search?query=Believer',
      status: '200 OK • 16ms',
      json: JSON.stringify({
        success: true,
        data: {
          total: 1,
          start: 0,
          results: [
            {
              id: "0W6DtW_N",
              name: "Believer",
              type: "song",
              year: "2017",
              duration: 204,
              label: "Interscope Records",
              language: "english",
              downloadUrl: "320kbps"
            }
          ]
        }
      }, null, 2)
    },
    songs: {
      path: '/api/songs/0W6DtW_N',
      status: '200 OK • 12ms',
      json: JSON.stringify({
        success: true,
        data: [
          {
            id: "0W6DtW_N",
            name: "Believer",
            type: "song",
            year: "2017",
            duration: 204,
            label: "Interscope Records",
            url: "https://www.jiosaavn.com/song/believer/XScOACV-bVc",
            downloadUrl: [
              { quality: "320kbps", url: "https://aac.saavncdn.com/217/..._320.mp4" }
            ]
          }
        ]
      }, null, 2)
    },
    trending: {
      path: '/api/trending/songs?limit=2',
      status: '200 OK • 22ms',
      json: JSON.stringify({
        success: true,
        data: {
          total: 50,
          page: 1,
          limit: 2,
          results: [
            { id: "sample_1", name: "Kesariya", year: "2022" },
            { id: "sample_2", name: "Believer", year: "2017" }
          ]
        }
      }, null, 2)
    },
    health: {
      path: '/health',
      status: '200 OK • 2ms',
      json: JSON.stringify({
        success: true,
        message: "ok",
        api: "ShnwazDev JioSaavn API",
        version: "1.0.0"
      }, null, 2)
    }
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'))
      tab.classList.add('active')
      const key = tab.getAttribute('data-console-tab')
      const payload = consolePayloads[key]
      if (payload && pathDisplay && jsonDisplay && statusDisplay) {
        pathDisplay.textContent = payload.path
        statusDisplay.textContent = payload.status
        jsonDisplay.textContent = payload.json
      }
    })
  })

  // Copy Curl Command
  const curlBtn = document.getElementById('copy-curl-btn')
  if (curlBtn) {
    curlBtn.addEventListener('click', async () => {
      const text = document.getElementById('curl-text')?.textContent || ''
      await navigator.clipboard.writeText(text)
      const label = curlBtn.querySelector('span')
      if (label) {
        const orig = label.textContent
        label.textContent = 'Copied'
        setTimeout(() => { label.textContent = orig }, 1500)
      }
    })
  }

  // Copy JSON in Console
  const copyJsonBtn = document.getElementById('copy-json-btn')
  if (copyJsonBtn) {
    copyJsonBtn.addEventListener('click', async () => {
      const text = jsonDisplay?.textContent || ''
      await navigator.clipboard.writeText(text)
      const orig = copyJsonBtn.textContent
      copyJsonBtn.textContent = 'Copied'
      setTimeout(() => { copyJsonBtn.textContent = orig }, 1500)
    })
  }

  // Copy Individual Route Path
  document.querySelectorAll('[data-copy-path]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const path = btn.getAttribute('data-copy-path')
      const fullUrl = 'https://' + '${DISPLAY_DOMAIN}' + path
      await navigator.clipboard.writeText(fullUrl)
      const span = btn.querySelector('span')
      if (span) {
        const orig = span.textContent
        span.textContent = 'Copied'
        setTimeout(() => { span.textContent = orig }, 1500)
      }
    })
  })

  // Route Filter & Search
  const filterInput = document.getElementById('route-filter')
  const chipBtns = document.querySelectorAll('[data-chip]')
  const panels = document.querySelectorAll('.route-group-panel')
  let currentCategory = 'all'

  const applyFilters = () => {
    const query = (filterInput?.value || '').toLowerCase().trim()

    panels.forEach((panel) => {
      const cat = panel.getAttribute('data-category')
      const matchesCategory = currentCategory === 'all' || cat === currentCategory

      if (!matchesCategory) {
        panel.style.display = 'none'
        return
      }

      let visibleCount = 0
      const rows = panel.querySelectorAll('.route-row')
      rows.forEach((row) => {
        const path = row.getAttribute('data-path') || ''
        const desc = row.getAttribute('data-desc') || ''
        const matchesQuery = !query || path.includes(query) || desc.includes(query)

        if (matchesQuery) {
          row.style.display = 'grid'
          visibleCount++
        } else {
          row.style.display = 'none'
        }
      })

      panel.style.display = visibleCount > 0 ? 'block' : 'none'
    })
  }

  filterInput?.addEventListener('input', applyFilters)

  chipBtns.forEach((chip) => {
    chip.addEventListener('click', () => {
      chipBtns.forEach((c) => c.classList.remove('active'))
      chip.classList.add('active')
      currentCategory = chip.getAttribute('data-chip') || 'all'
      applyFilters()
    })
  })
})()
`

Home.get('/', (c) => {
  return c.html(`<!doctype html>
<html lang="en">
  <head>
    <title>${escapeHtml(API_NAME)}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="utf-8">
    <meta name="description" content="${escapeHtml(DESCRIPTION)}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <style>${styles}</style>
  </head>
  <body>
    <header class="topbar">
      <div class="topbar-inner">
        <a class="brand" href="/">
          <span class="brand-badge">SD</span>
          <span>${escapeHtml(API_NAME)}</span>
          <span class="domain-chip">
            <span class="pulse-dot"></span>
            ${escapeHtml(DISPLAY_DOMAIN)}
          </span>
        </a>
        <nav class="nav-links">
          <a class="nav-item highlight" href="/docs">Docs</a>
          <a class="nav-item" href="/swagger">OpenAPI</a>
          <a class="nav-item" href="/health">Status</a>
          <a class="nav-item" href="${REPOSITORY_URL}" target="_blank" rel="noreferrer">GitHub</a>
        </nav>
      </div>
    </header>

    <main>
      <section class="hero-grid">
        <div class="hero-content">
          <div class="release-pill">
            <span class="pulse-dot"></span>
            <span>Edge Infrastructure • Zero Rate Limits</span>
          </div>
          <h1>Build faster with the JioSaavn API</h1>
          <p class="hero-lead">
            Access songs, 320kbps audio streams, albums, artists, browse feeds, synced lyrics, playlists, podcasts, and trending routes with clean JSON responses on <strong>${escapeHtml(DISPLAY_DOMAIN)}</strong>.
          </p>

          <div class="hero-actions">
            <a class="btn btn-primary" href="/docs">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
              <span>Explore Docs</span>
            </a>
            <a class="btn btn-secondary" href="/swagger">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              <span>OpenAPI</span>
            </a>
            <a class="btn btn-secondary" href="/api/endpoints">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
              <span>Endpoints</span>
            </a>
            <a class="btn btn-secondary" href="/api/limits">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
              <span>Limits</span>
            </a>
          </div>

          <div class="curl-bar">
            <code id="curl-text">curl "https://${escapeHtml(DISPLAY_DOMAIN)}/api/search?query=Believer"</code>
            <button class="curl-copy-btn" id="copy-curl-btn" type="button">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
              <span>Copy</span>
            </button>
          </div>

          <div class="stats-grid">
            ${renderStats()}
          </div>
        </div>

        <aside class="hero-console">
          <div class="console-topbar">
            <div class="window-dots">
              <span class="window-dot red"></span>
              <span class="window-dot yellow"></span>
              <span class="window-dot green"></span>
            </div>
            <div class="console-tabs">
              <button class="console-tab active" type="button" data-console-tab="search">Search</button>
              <button class="console-tab" type="button" data-console-tab="songs">Songs</button>
              <button class="console-tab" type="button" data-console-tab="trending">Trending</button>
              <button class="console-tab" type="button" data-console-tab="health">Health</button>
            </div>
          </div>
          <div class="console-meta-bar">
            <div class="request-pill">
              <span class="http-method">GET</span>
              <span id="console-path">/api/search?query=Believer</span>
            </div>
            <span class="response-status" id="console-status">200 OK • 16ms</span>
          </div>
          <div class="console-body">
            <pre><code id="console-json">${escapeHtml(JSON.stringify({
              success: true,
              data: {
                total: 1,
                start: 0,
                results: [
                  {
                    id: "0W6DtW_N",
                    name: "Believer",
                    type: "song",
                    year: "2017",
                    duration: 204,
                    label: "Interscope Records",
                    language: "english",
                    downloadUrl: "320kbps"
                  }
                ]
              }
            }, null, 2))}</code></pre>
          </div>
          <div class="console-footer">
            <span>Powered by Hono & Edge Runtimes</span>
            <button class="copy-json-btn" id="copy-json-btn" type="button">Copy JSON</button>
          </div>
        </aside>
      </section>

      <section class="section">
        <div class="section-head">
          <h2>High-Performance Music Infrastructure</h2>
          <p>
            Engineered for developers building music players, bots, mobile apps, and streaming web services without complex setup.
          </p>
        </div>
        <div class="features-grid">
          ${renderFeatures()}
        </div>
      </section>

      <section class="section">
        <div class="section-head">
          <h2>Endpoint Directory (47 Routes)</h2>
          <p>
            Test routes in real time from your custom domain <strong>${escapeHtml(DISPLAY_DOMAIN)}</strong> or through the interactive Scalar API docs.
          </p>
        </div>

        <div class="explorer-controls">
          <div class="search-input-wrapper">
            <svg class="search-icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <input class="route-filter-input" id="route-filter" type="text" placeholder="Filter routes... (e.g. search, songs, trending, lyrics, artists)" autocomplete="off">
          </div>
          <div class="category-chips">
            <button class="chip-btn active" type="button" data-chip="all">All (47)</button>
            <button class="chip-btn" type="button" data-chip="search">Search (6)</button>
            <button class="chip-btn" type="button" data-chip="songs">Songs (5)</button>
            <button class="chip-btn" type="button" data-chip="album">Album (1)</button>
            <button class="chip-btn" type="button" data-chip="artists">Artists (6)</button>
            <button class="chip-btn" type="button" data-chip="browse">Browse (16)</button>
            <button class="chip-btn" type="button" data-chip="lyrics">Lyrics (3)</button>
            <button class="chip-btn" type="button" data-chip="playlists">Playlists (1)</button>
            <button class="chip-btn" type="button" data-chip="podcasts">Podcasts (3)</button>
            <button class="chip-btn" type="button" data-chip="trending">Trending (6)</button>
          </div>
        </div>

        <div class="route-explorer-container">
          ${renderRouteGroups()}
        </div>
      </section>
    </main>

    <footer class="footer">
      <span>Built with Hono, TypeScript, OpenAPI on Cloudflare Workers &amp; <strong>${escapeHtml(DISPLAY_DOMAIN)}</strong></span>
      <div>
        <a href="/docs">Docs</a> &bull;
        <a href="/swagger">Swagger</a> &bull;
        <a href="${REPOSITORY_URL}" target="_blank" rel="noreferrer">GitHub Repository</a>
      </div>
    </footer>

    <script>${clientScript}</script>
  </body>
</html>`)
})
