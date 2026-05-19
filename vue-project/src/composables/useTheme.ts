import { ref } from 'vue'

const isDark = ref(true)

export function useTheme() {
  return { isDark }
}
