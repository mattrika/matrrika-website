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


const marqueeLogos = [...logos, ...logos, ...logos]
</script>

<template>
  <section class="bg-[#D9D9D9] overflow-hidden">
    <div class="relative flex items-center h-24">


      <div class="marquee-fade-left" />
      <div class="marquee-fade-right" />


      <div class="marquee-track">
        <div v-for="(logo, i) in marqueeLogos" :key="i" class="logo-item">
          <img :src="logo.src" :alt="logo.alt" class="logo-img" />
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.marquee-track {
  display: flex;
  align-items: center;
  gap: 4rem;
  animation: marquee 25s linear infinite;
  will-change: transform;
}

.marquee-track:hover {
  animation-play-state: paused;
}

.logo-item {
  flex-shrink: 0;
  padding: 0 1rem;
}

.logo-img {
  height: 2.5rem;
  width: auto;
  object-fit: contain;
  filter: grayscale(100%);
  opacity: 0.5;
  transition: all 0.3s;
}

.logo-img:hover {
  filter: grayscale(0);
  opacity: 1;
}

.marquee-fade-left,
.marquee-fade-right {
  position: absolute;
  top: 0;
  height: 100%;
  width: 6rem;
  z-index: 10;
  pointer-events: none;
}

.marquee-fade-left {
  left: 0;
  background: linear-gradient(to right, #D9D9D9, transparent);
}

.marquee-fade-right {
  right: 0;
  background: linear-gradient(to left, #D9D9D9, transparent);
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-33.333%);
  }
}
</style>