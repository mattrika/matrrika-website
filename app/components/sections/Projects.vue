<script setup lang="ts">
import sherestaBg from '~/assets/sheresta.png'
import contentErp from '~/assets/contenterp.png'
import lieblingsMode from '~/assets/lieblingsmode.png'
import quezziro from '~/assets/quizzaro.png'

const projects = [
  {
    name: 'Content ERP',
    description: 'Sheresta helps clients find trusted lawyers and law firms, while lawyers can manage cases, clients, documents, and digital diary easily.',
    link: 'https://sheresta.com',
    image: contentErp,
  },
  {
    name: 'Lieblingsmode',
    description: 'Sheresta helps clients find trusted lawyers and law firms, while lawyers can manage cases, clients, documents, and digital diary easily.',
    link: 'https://sheresta.com',
    image: lieblingsMode,
  },
  {
    name: 'Sheresta',
    description: 'Sheresta helps clients find trusted lawyers and law firms, while lawyers can manage cases, clients, documents, and digital diary easily.',
    link: 'https://sheresta.com',
    image: sherestaBg,
  },
]

const openIndex = ref<number | null>(null)

function toggle(i: number) {
  openIndex.value = openIndex.value === i ? null : i
}

function isOpen(i: number) {
  return openIndex.value === i
}
</script>

<template>
  <section id="projects" class="py-20 md:py-28">
    <div class="mx-auto max-w-7xl px-6">

      <SectionTitle label="Our Projects" class="mb-4" />

      <p class="font-normal mb-12 max-w-2xl" style="font-size: 20px; color: rgb(152,151,151);">
        Transforming ideas into reality<br />
        Some of our ongoing and completed projects that we are proud of.
      </p>

      <div>
        <div
          v-for="(project, i) in projects"
          :key="i"
          class="overflow-hidden transition-all duration-500 ease-in-out"
          :class="[
            i < projects.length - 1 ? 'border-b-2 border-dashed border-neutral-300' : '',
            'group'
          ]"
        >
          <!-- Project name — click on mobile, hover on desktop -->
          <div
            class="py-5 md:py-6 cursor-pointer md:cursor-default flex items-center justify-between"
            @click="toggle(i)"
          >
            <h3
              class="font-medium transition-colors duration-300"
              :style="{
                fontSize: 'clamp(28px, 4vw, 48px)',
                color: isOpen(i) ? 'rgb(30,30,30)' : 'rgb(91,91,91)'
              }"
            >
              {{ project.name }}
            </h3>

            <!-- Mobile-only chevron -->
            <UIcon
              name="i-lucide-chevron-down"
              class="md:hidden w-6 h-6 text-neutral-400 transition-transform duration-300 shrink-0"
              :class="isOpen(i) ? 'rotate-180' : ''"
            />
          </div>

          <!-- Expanded content -->
          <!-- Mobile: controlled by click (isOpen) -->
          <!-- Desktop: controlled by CSS group-hover -->
          <div
            class="overflow-hidden transition-all duration-500 ease-in-out"
            :class="[
              isOpen(i)
                ? 'max-h-[800px] opacity-100 pb-10'
                : 'max-h-0 opacity-0 pb-0 md:group-hover:max-h-[800px] md:group-hover:opacity-100 md:group-hover:pb-12'
            ]"
          >
            <div class="flex flex-col gap-8 md:grid md:grid-cols-2 md:gap-10 items-start md:items-center">

              <!-- Description + link -->
              <div class="flex flex-col gap-4 md:gap-6">
                <p
                  v-if="project.description"
                  class="font-normal leading-relaxed"
                  style="font-size: clamp(18px, 2.5vw, 36px); color: rgb(91,91,91);"
                >
                  {{ project.description }}
                </p>
                <a
                  v-if="project.link"
                  :href="project.link"
                  target="_blank"
                  rel="noopener"
                  class="font-medium w-fit hover:opacity-80 transition-opacity"
                  style="color: rgb(18,214,191); font-size: clamp(18px, 2.5vw, 36px);"
                >
                  Visit site
                </a>
              </div>

              <!-- Screenshot -->
              <div v-if="project.image" class="rounded-xl overflow-hidden shadow-md w-full">
                <img
                  :src="project.image"
                  :alt="project.name"
                  class="w-full h-auto object-cover"
                />
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>