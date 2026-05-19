import './assets/main.css'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import App from './App.vue'
import router from './router'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        dark: true,
        colors: {
          background: '#1a1209',
          surface: '#221a0e',
          primary: '#c8956c',
          'on-surface': '#f0e8d8',
          'on-background': '#f0e8d8',
        },
      },
      light: {
        dark: false,
        colors: {
          background: '#f5ede0',
          surface: '#fffaf4',
          primary: '#8b5e38',
          'on-surface': '#2c1a0a',
          'on-background': '#2c1a0a',
        },
      },
    },
  },
  icons: {
    defaultSet: 'mdi',
  },
})

const app = createApp(App)

app.use(router)
app.use(vuetify)

app.mount('#app')
