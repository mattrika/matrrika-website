<script setup lang="ts">
import webDevImg from '~/assets/web-dev.png'


const services = [
  {
    name: 'Web Development',
    badges: ['WEB APPLICATION', 'FRONT-END DEVELOPMENT', 'WEB PORTAL', 'SINGLE PAGE APPLICATION'],
    description: 'We specialize in developing dynamic, responsive, and scalable web applications tailored to your business needs.',
    image: webDevImg,
  },
  {
    name: 'Mobile App Development',
    badges: ['iOS', 'ANDROID', 'CROSS-PLATFORM', 'REACT NATIVE'],
    description: 'We build high-performance mobile applications for iOS and Android that deliver seamless user experiences.',
    image: webDevImg,
  },
  {
    name: 'UI/UX Development',
    badges: ['FIGMA', 'PROTOTYPING', 'USER RESEARCH', 'DESIGN SYSTEMS'],
    description: 'We craft intuitive and visually compelling interfaces that enhance user engagement and satisfaction.',
    image: webDevImg,
  },
  {
    name: 'Maintenance',
    badges: ['BUG FIXES', 'PERFORMANCE', 'UPDATES', 'MONITORING'],
    description: 'We provide ongoing support and maintenance to keep your digital products running smoothly and securely.',
    image: webDevImg,
  },
  {
    name: 'IT Consultation',
    badges: ['STRATEGY', 'ARCHITECTURE', 'TECH STACK', 'ROADMAP'],
    description: 'We help businesses make smart technology decisions with expert consultation tailored to your goals.',
    image: webDevImg,
  },
  {
    name: 'Security',
    badges: ['AUDITS', 'PENETRATION TESTING', 'COMPLIANCE', 'SSL'],
    description: 'We protect your digital assets with comprehensive security assessments and implementation.',
    image: webDevImg,
  },
]

const activeIndex = ref(0)
const isAnimating = ref(false)

function selectService(i: number) {
  if (i === activeIndex.value) return
  isAnimating.value = true
  setTimeout(() => {
    activeIndex.value = i
    isAnimating.value = false
  }, 250)
}

const active = computed(() => services[activeIndex.value])
</script>

<template>
  <section id="what-we-do" class="py-20 md:py-28">
    <div class="mx-auto max-w-7xl px-6">

      <SectionTitle label="Services We Provide" class="mb-4" />

      <p class="font-normal mb-14 max-w-2xl" style="font-size: 20px; color: rgb(152,151,151);">
        We realize that every business is unique and has its own set of requirements.
        That's why we offer customized web development
      </p>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

        <!-- Left: image — updates with fade animation -->
        <div class="flex justify-center lg:justify-start order-2 lg:order-1">
          <Transition name="fade">
            <img
              :key="activeIndex"
              :src="active?.image"
              :alt="active?.name"
              class="w-full max-w-[420px] object-contain"
            />
          </Transition>
        </div>

        <!-- Right: active service info + service list -->
        <div class="order-1 lg:order-2 flex flex-col gap-8">

          <!-- Active service details — fades on change -->
          <div
            class="transition-opacity duration-250"
            :class="isAnimating ? 'opacity-0' : 'opacity-100'"
          >
            <!-- Active title with teal gradient -->
            <h3
              class="font-semibold mb-5 leading-tight"
              style="font-size: clamp(32px, 3.5vw, 48px); background: linear-gradient(to right, #059584, #b4fff6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;"
            >
              {{ active?.name }}
            </h3>

            <!-- Badges -->
            <div class="flex flex-wrap gap-3 mb-5">
              <span
                v-for="badge in active?.badges"
                :key="badge"
                class="px-4 py-2 rounded-full text-sm font-normal"
                style="background-color: rgb(217,217,217); color: rgb(74,74,74); font-size: 16px;"
              >
                {{ badge }}
              </span>
            </div>

            <!-- Description -->
            <p class="font-normal leading-relaxed" style="font-size: 20px; color: rgb(0,0,0);">
              {{ active?.description }}
            </p>
          </div>

          <!-- Divider -->
          <hr class="border-neutral-200" />

          <!-- Other services list -->
          <div class="flex flex-col gap-1">
            <button
              v-for="(service, i) in services"
              :key="i"
              class="text-left py-3 font-semibold transition-colors duration-200 border-b border-neutral-100 last:border-0"
              :style="{
                fontSize: 'clamp(22px, 2.5vw, 36px)',
                color: i === activeIndex ? 'transparent' : 'rgb(91,91,91)',
                background: i === activeIndex
                  ? 'linear-gradient(to right, #059584, #b4fff6)'
                  : 'none',
                WebkitBackgroundClip: i === activeIndex ? 'text' : 'unset',
                backgroundClip: i === activeIndex ? 'text' : 'unset',
                WebkitTextFillColor: i === activeIndex ? 'transparent' : 'rgb(91,91,91)',
              }"
              @click="selectService(i)"
            >
              {{ service.name }}
            </button>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.fade-leave-active {
  position: absolute;
}
</style>