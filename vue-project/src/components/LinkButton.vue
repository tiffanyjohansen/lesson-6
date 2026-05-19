<script setup lang="ts">
defineProps<{
  label: string
  url: string
  icon: string
}>()
</script>

<template>
  <v-btn
    :href="url"
    :prepend-icon="icon"
    variant="outlined"
    color="primary"
    block
    size="large"
    target="_blank"
    rel="noopener noreferrer"
    rounded="lg"
    class="link-btn"
  >
    {{ label }}
  </v-btn>
</template>

<style scoped>
.link-btn {
  transition: transform 0.2s, box-shadow 0.2s !important;
}

.link-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.18) !important;
}
</style>
