<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useTheme } from '@/composables/useTheme'

const { isDark } = useTheme()

const skills = ['Brand Identity', 'UI/UX Design', 'Typography', 'Motion', 'Illustration', 'Creative Direction']
</script>

<template>
  <div class="page" :class="{ dark: isDark }">

    <!-- Mountain background -->
    <div class="mountain-bg" aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 500" preserveAspectRatio="xMidYMax slice">
        <defs>
          <linearGradient id="sky-grad-about" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="var(--sky-top)" />
            <stop offset="100%" stop-color="var(--bg)" />
          </linearGradient>
          <linearGradient id="fog-grad-about" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="var(--bg)" stop-opacity="0" />
            <stop offset="55%" stop-color="var(--bg)" stop-opacity="0.55" />
            <stop offset="100%" stop-color="var(--bg)" stop-opacity="1" />
          </linearGradient>
        </defs>
        <rect width="1200" height="500" fill="url(#sky-grad-about)" />
        <path class="mtn-back" d="M0,360 Q120,210 280,255 Q420,155 580,205 Q730,105 880,185 Q1030,225 1200,205 L1200,500 L0,500 Z" />
        <path class="mtn-mid" d="M0,395 Q80,320 175,338 Q250,265 335,295 Q405,215 465,258 Q535,175 605,215 Q675,248 745,218 Q845,188 930,230 Q1025,275 1100,255 Q1160,242 1200,260 L1200,500 L0,500 Z" />
        <path class="mtn-front" d="M0,435 Q160,405 300,420 Q450,390 600,410 Q750,390 900,415 Q1050,428 1200,410 L1200,500 L0,500 Z" />
        <rect width="1200" height="500" fill="url(#fog-grad-about)" />
      </svg>
    </div>

    <button class="theme-toggle" @click="isDark = !isDark" :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
      {{ isDark ? '☀️' : '🌙' }}
    </button>

    <div class="card">
      <div class="avatar"></div>

      <h1 class="name">Tiffany Johansen</h1>
      <p class="tagline">Designer & Creative</p>

      <p class="bio">
        Hi! I'm a designer passionate about crafting thoughtful, beautiful experiences.
        I love the intersection of aesthetics and function — from brand identity to
        digital product design. When I'm not designing, you'll find me exploring the
        outdoors or hunting for the perfect coffee shop.
      </p>

      <div class="skills">
        <span v-for="skill in skills" :key="skill" class="skill-tag">{{ skill }}</span>
      </div>

      <RouterLink to="/" class="back-link">← Back</RouterLink>
    </div>
  </div>
</template>

<style scoped>
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

.page.dark {
  --bg: #1a1209;
  --sky-top: #0c0d18;
  --text: #f0e8d8;
  --card-bg: rgba(34, 26, 14, 0.88);
  --card-border: #3d2e1a;
  --tagline: #8a7560;
  --mtn-back: #1e150f;
  --mtn-mid: #251c0d;
  --mtn-front: #2e240f;
  --tag-bg: rgba(58, 44, 21, 0.8);
  --tag-border: #4a3520;
}

.page:not(.dark) {
  --bg: #f5ede0;
  --sky-top: #e2cdb8;
  --text: #2c1a0a;
  --card-bg: rgba(255, 250, 244, 0.90);
  --card-border: #e0cdb5;
  --tagline: #7a6250;
  --mtn-back: #d9c8b4;
  --mtn-mid: #c8b09a;
  --mtn-front: #b89882;
  --tag-bg: rgba(239, 228, 214, 0.95);
  --tag-border: #d4bda3;
}

/* Mountain background */
.mountain-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.mountain-bg svg { width: 100%; height: 100%; }
.mtn-back  { fill: var(--mtn-back); }
.mtn-mid   { fill: var(--mtn-mid); }
.mtn-front { fill: var(--mtn-front); }

/* Theme toggle */
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

.theme-toggle:hover { transform: scale(1.1); }

/* Card */
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

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, #c8956c, #8b5e38);
  border: 3px solid var(--card-border);
  margin-bottom: 0.5rem;
}

.name {
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: -0.02em;
}

.tagline {
  font-size: 0.95rem;
  color: var(--tagline);
  margin: 0;
}

.bio {
  font-size: 0.92rem;
  line-height: 1.65;
  color: var(--text);
  text-align: center;
  margin: 0.5rem 0;
  opacity: 0.85;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.25rem;
}

.skill-tag {
  background: var(--tag-bg);
  border: 1px solid var(--tag-border);
  border-radius: 2rem;
  padding: 0.3rem 0.85rem;
  font-size: 0.8rem;
  font-weight: 500;
}

.back-link {
  margin-top: 0.75rem;
  font-size: 0.875rem;
  color: var(--tagline);
  text-decoration: none;
  transition: color 0.2s;
}

.back-link:hover { color: var(--text); }
</style>
