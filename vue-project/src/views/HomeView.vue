<script setup lang="ts">
import { useTheme } from '@/composables/useTheme'

const { isDark } = useTheme()

const links = [
  { label: 'Portfolio', href: 'https://www.instagram.com/tiffanyjo.design', icon: '🎨' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tiffanyjohansendesign/', icon: '💼' },
  { label: 'Email', href: 'mailto:tiffanyjo.design@gmail.com', icon: '✉️' },
]
</script>

<template>
  <div class="page" :class="{ dark: isDark }">

    <!-- Mountain background -->
    <div class="mountain-bg" aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 500" preserveAspectRatio="xMidYMax slice">
        <defs>
          <linearGradient id="sky-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="var(--sky-top)" />
            <stop offset="100%" stop-color="var(--bg)" />
          </linearGradient>
          <linearGradient id="fog-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="var(--bg)" stop-opacity="0" />
            <stop offset="55%" stop-color="var(--bg)" stop-opacity="0.55" />
            <stop offset="100%" stop-color="var(--bg)" stop-opacity="1" />
          </linearGradient>
        </defs>
        <!-- Sky -->
        <rect width="1200" height="500" fill="url(#sky-grad)" />
        <!-- Back mountains -->
        <path class="mtn-back" d="M0,360 Q120,210 280,255 Q420,155 580,205 Q730,105 880,185 Q1030,225 1200,205 L1200,500 L0,500 Z" />
        <!-- Mid mountains -->
        <path class="mtn-mid" d="M0,395 Q80,320 175,338 Q250,265 335,295 Q405,215 465,258 Q535,175 605,215 Q675,248 745,218 Q845,188 930,230 Q1025,275 1100,255 Q1160,242 1200,260 L1200,500 L0,500 Z" />
        <!-- Front hills -->
        <path class="mtn-front" d="M0,435 Q160,405 300,420 Q450,390 600,410 Q750,390 900,415 Q1050,428 1200,410 L1200,500 L0,500 Z" />
        <!-- Fog overlay -->
        <rect width="1200" height="500" fill="url(#fog-grad)" />
      </svg>
    </div>

    <button class="theme-toggle" @click="isDark = !isDark" :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
      {{ isDark ? '☀️' : '🌙' }}
    </button>

    <div class="card">
      <div class="avatar-wrapper">
        <div class="avatar"></div>
      </div>

      <h1 class="name">Tiffany Johansen</h1>
      <p class="tagline">Designer & Creative</p>

      <nav class="links">
        <a
          v-for="link in links"
          :key="link.label"
          :href="link.href"
          class="link-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="link-icon">{{ link.icon }}</span>
          {{ link.label }}
        </a>
      </nav>

      <footer class="footer">Made with Claude</footer>
    </div>
  </div>
</template>

<style scoped>
/* ── Base ── */
.page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  background-color: var(--bg);
  color: var(--text);
  transition: background-color 0.3s, color 0.3s;
  position: relative;
  overflow: hidden;
}

/* ── Dark mode (default) ── */
.page.dark {
  --bg: #1a1209;
  --sky-top: #0c0d18;
  --text: #f0e8d8;
  --card-bg: rgba(34, 26, 14, 0.88);
  --card-border: #3d2e1a;
  --btn-bg: rgba(46, 34, 16, 0.9);
  --btn-border: #4a3520;
  --btn-hover-bg: rgba(58, 44, 21, 0.95);
  --btn-hover-border: #7a5c38;
  --tagline: #8a7560;
  --mtn-back: #1e150f;
  --mtn-mid: #251c0d;
  --mtn-front: #2e240f;
}

/* ── Light mode ── */
.page:not(.dark) {
  --bg: #f5ede0;
  --sky-top: #e2cdb8;
  --text: #2c1a0a;
  --card-bg: rgba(255, 250, 244, 0.90);
  --card-border: #e0cdb5;
  --btn-bg: rgba(239, 228, 214, 0.95);
  --btn-border: #d4bda3;
  --btn-hover-bg: rgba(229, 213, 194, 1);
  --btn-hover-border: #b89878;
  --tagline: #7a6250;
  --mtn-back: #d9c8b4;
  --mtn-mid: #c8b09a;
  --mtn-front: #b89882;
}

/* ── Mountain background ── */
.mountain-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.mountain-bg svg {
  width: 100%;
  height: 100%;
}

.mtn-back  { fill: var(--mtn-back); }
.mtn-mid   { fill: var(--mtn-mid); }
.mtn-front { fill: var(--mtn-front); }

/* ── Theme toggle ── */
.theme-toggle {
  position: fixed;
  top: 1.25rem;
  right: 1.25rem;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s, border-color 0.3s, transform 0.2s;
  z-index: 10;
}

.theme-toggle:hover {
  transform: scale(1.1);
}

/* ── Card ── */
.card {
  position: relative;
  z-index: 1;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 1.5rem;
  padding: 2.5rem 2rem;
  width: 100%;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  transition: background-color 0.3s, border-color 0.3s;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

/* ── Avatar ── */
.avatar-wrapper {
  margin-bottom: 0.5rem;
}

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, #c8956c, #8b5e38);
  border: 3px solid var(--card-border);
}

/* ── Text ── */
.name {
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: -0.02em;
}

.tagline {
  font-size: 0.95rem;
  color: var(--tagline);
  margin: 0 0 0.75rem;
}

/* ── Link buttons ── */
.links {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.link-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  width: 100%;
  padding: 0.85rem 1.25rem;
  border-radius: 0.75rem;
  border: 1px solid var(--btn-border);
  background: var(--btn-bg);
  color: var(--text);
  font-family: inherit;
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 0.2s, border-color 0.2s, transform 0.2s, box-shadow 0.2s;
}

.link-btn:hover {
  background: var(--btn-hover-bg);
  border-color: var(--btn-hover-border);
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.18);
}

.link-btn:active {
  transform: translateY(0);
}

.link-icon {
  font-size: 1rem;
}

/* ── Footer ── */
.footer {
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: var(--tagline);
  opacity: 0.7;
}
</style>
