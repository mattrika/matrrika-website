<script setup lang="ts">
import contentErp from '~/assets/images/marquee-logos/content-erp.png'
import lieblingsMode from '~/assets/images/marquee-logos/lieblings-mode.png'
import quizzaro from '~/assets/images/marquee-logos/quizzaro.png'
import sheresta from '~/assets/images/marquee-logos/sheresta.png'

const logos = [
  { src: contentErp, alt: 'ContentERP' },
  { src: lieblingsMode, alt: 'Lieblingsmode' },
  { src: quizzaro, alt: 'Quizzaro' },
  { src: sheresta, alt: 'Sheresta' },
]
</script>

<template>
  <!-- Full-bleed strip — bg-neutral-300 matches Figma's rgb(217,217,217) -->
  <section class="bg-neutral-300 overflow-hidden">
    <div class="relative flex items-center h-[124px]">

      <!-- Fade edges -->
      <div class="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-neutral-300 to-transparent z-10 pointer-events-none" />
      <div class="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-neutral-300 to-transparent z-10 pointer-events-none" />

      <!-- Scrolling track -->
      <div class="flex animate-marquee gap-16 items-center">
        <!-- Render logos 3× for a seamless loop on all screen sizes -->
        <template v-for="rep in 3" :key="`rep-${rep}`">
          <template v-for="(logo, i) in logos" :key="`${rep}-${i}`">
            <div class="flex-shrink-0 px-4">
              <img
                :src="logo.src"
                :alt="logo.alt"
                class="h-10 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          </template>
        </template>
      </div>

    </div>
  </section>
</template>

<style scoped>
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-33.333%); }
}

.animate-marquee {
  animation: marquee 25s linear infinite;
  will-change: transform;
}

.animate-marquee:hover {
  animation-play-state: paused;
}
</style>
