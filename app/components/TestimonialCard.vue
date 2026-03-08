<script setup lang="ts">
defineProps<{
  quote: string
  name: string
  role: string
  avatar: string
}>()
</script>

<template>
  <div class="rounded-2xl px-10 py-10 md:px-14 md:py-12 bg-white">

    <div class="flex gap-4 items-start mb-8">
      <UIcon
        name="material-symbols:format-quote-rounded"
        class="shrink-0 mt-1 rotate-180 text-5xl text-primary-400"
      />
      <p class="font-normal leading-relaxed" style="font-size: 32px; color: rgb(91,91,91);">
        {{ quote }}
      </p>
    </div>


    <hr class="border-neutral-200 mb-6" />


    <div class="flex items-center gap-4">
      <img
        :src="avatar"
        :alt="name"
        class="w-16 h-16 rounded-full object-cover shrink-0"
      />
      <div>
        <p class="font-semibold leading-tight" style="font-size: 36px; color: rgb(0,0,0);">
          {{ name }}
        </p>
        <p class="font-medium mt-1" style="font-size: 20px; color: rgb(126,126,126);">
          {{ role }}
        </p>
      </div>
    </div>

  </div>
</template>