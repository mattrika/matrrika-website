<script setup lang="ts">
defineProps<{
  quote: string
  name: string
  role: string
  avatar: string
}>()
</script>

<template>
  <div class="rounded-2xl px-6 py-8 sm:px-10 sm:py-10 md:px-14 md:py-12 bg-white">

    <!-- Quote icon + text -->
    <div class="flex gap-3 sm:gap-4 items-start mb-6 sm:mb-8">
      <UIcon
        name="material-symbols:format-quote-rounded"
        class="shrink-0 mt-1 rotate-180 text-primary-400"
        style="font-size: clamp(28px, 4vw, 48px); width: clamp(28px, 4vw, 48px); height: clamp(28px, 4vw, 48px);"
      />
      <p
        class="font-normal leading-relaxed"
        style="font-size: clamp(16px, 2.2vw, 32px); color: rgb(91,91,91);"
      >
        {{ quote }}
      </p>
    </div>

    <hr class="border-neutral-200 mb-5 sm:mb-6" />

    <!-- Author -->
    <div class="flex items-center gap-3 sm:gap-4">
      <img
        :src="avatar"
        :alt="name"
        class="rounded-full object-cover shrink-0"
        style="width: clamp(44px, 6vw, 64px); height: clamp(44px, 6vw, 64px);"
      />
      <div>
        <p
          class="font-semibold leading-tight"
          style="font-size: clamp(18px, 2.5vw, 36px); color: rgb(0,0,0);"
        >
          {{ name }}
        </p>
        <p
          class="font-medium mt-1"
          style="font-size: clamp(13px, 1.5vw, 20px); color: rgb(126,126,126);"
        >
          {{ role }}
        </p>
      </div>
    </div>

  </div>
</template>