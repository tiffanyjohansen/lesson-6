<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useTheme } from 'vuetify'
import LinkButton from '@/components/LinkButton.vue'

const theme = useTheme()
const isDark = computed(() => theme.global.current.value.dark)

function toggleTheme() {
  theme.global.name.value = isDark.value ? 'light' : 'dark'
}

const mtn = computed(() => isDark.value
  ? { back: '#1e150f', mid: '#251c0d', front: '#2e240f', skyTop: '#0c0d18', bg: '#1a1209' }
  : { back: '#d9c8b4', mid: '#c8b09a', front: '#b89882', skyTop: '#e2cdb8', bg: '#f5ede0' }
)

const links = [
  { label: 'Portfolio', url: 'https://www.instagram.com/tiffanyjo.design', icon: 'mdi-instagram' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/tiffanyjohansendesign/', icon: 'mdi-linkedin' },
  { label: 'Email', url: 'mailto:tiffanyjo.design@gmail.com', icon: 'mdi-email-outline' },
]
</script>

<template>
  <!-- Mountain background -->
  <div class="mountain-bg" aria-hidden="true">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 500" preserveAspectRatio="xMidYMax slice">
      <defs>
        <linearGradient id="sky-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" :stop-color="mtn.skyTop" />
          <stop offset="100%" :stop-color="mtn.bg" />
        </linearGradient>
        <linearGradient id="fog-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" :stop-color="mtn.bg" stop-opacity="0" />
          <stop offset="55%" :stop-color="mtn.bg" stop-opacity="0.55" />
          <stop offset="100%" :stop-color="mtn.bg" stop-opacity="1" />
        </linearGradient>
      </defs>
      <rect width="1200" height="500" fill="url(#sky-grad)" />
      <path :fill="mtn.back" d="M0,360 Q120,210 280,255 Q420,155 580,205 Q730,105 880,185 Q1030,225 1200,205 L1200,500 L0,500 Z" />
      <path :fill="mtn.mid" d="M0,395 Q80,320 175,338 Q250,265 335,295 Q405,215 465,258 Q535,175 605,215 Q675,248 745,218 Q845,188 930,230 Q1025,275 1100,255 Q1160,242 1200,260 L1200,500 L0,500 Z" />
      <path :fill="mtn.front" d="M0,435 Q160,405 300,420 Q450,390 600,410 Q750,390 900,415 Q1050,428 1200,410 L1200,500 L0,500 Z" />
      <rect width="1200" height="500" fill="url(#fog-grad)" />
    </svg>
  </div>

  <!-- Fixed theme toggle -->
  <v-btn
    icon
    class="theme-toggle"
    elevation="2"
    @click="toggleTheme"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <v-icon>{{ isDark ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
  </v-btn>

  <v-container class="fill-height" fluid>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="5" lg="4">
        <v-card
          rounded="xl"
          class="pa-6 text-center card-glass mx-auto"
          elevation="3"
          style="max-width: 400px"
        >
          <v-avatar
            size="120"
            class="mb-4"
            style="background: linear-gradient(135deg, #c8956c, #8b5e38)"
          />

          <v-card-title class="text-h5 font-weight-bold pb-1">Tiffany Johansen</v-card-title>
          <v-card-subtitle class="pb-5">Designer & Creative</v-card-subtitle>

          <v-card-text class="px-2">
            <LinkButton
              v-for="link in links"
              :key="link.label"
              :label="link.label"
              :url="link.url"
              :icon="link.icon"
              class="mb-3"
            />
          </v-card-text>

          <v-card-actions class="flex-column ga-1 pb-2">
            <span class="text-caption text-medium-emphasis">Made with Claude</span>
            <RouterLink to="/about" class="text-caption text-medium-emphasis text-decoration-none">About Me →</RouterLink>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.mountain-bg {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.mountain-bg svg {
  width: 100%;
  height: 100%;
}

.theme-toggle {
  position: fixed;
  top: 1.25rem;
  right: 1.25rem;
  z-index: 10;
}

.card-glass {
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}


</style>
