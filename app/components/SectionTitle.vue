<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <h2 class="gradient-text font-medium leading-relaxed text-3xl md:text-4xl lg:text-5xl">{{ label }}</h2>
</template>

<style scoped>
.gradient-text {
  background: linear-gradient(90deg, #A49C9C 0%, #4E4E4E 50%, #9C9C9C 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;

  &::after {
    content: '';
    width: clamp(60px, 8vw, 100px);
    height: 5px;
    position: absolute;
    top: 100%;
    left: 0;
    background: #13D6BF;
    border-radius: 4px;
  }
}
</style>