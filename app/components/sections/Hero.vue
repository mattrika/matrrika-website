<script setup lang="ts">
import heroImg from '~/assets/images/hero-img.png'
</script>

<template>
  <section class="py-20 md:py-28">
    <div class="mx-auto max-w-7xl px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        <div class="order-1 lg:order-2 flex justify-center lg:justify-end">
          <img :src="heroImg" alt="Mattrika Technologies"
            class="w-full max-w-[420px] lg:max-w-[521px] aspect-square object-cover rounded-2xl" />
        </div>


        <div class="order-2 lg:order-1 space-y-6">

          <h2 class="main-text text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            The <span class="accent-text">web dev agency</span> that puts you at the center
          </h2>


          <p class="text-lg md:text-xl font-medium max-w-xl leading-relaxed text-neutral-500">
            Mattrika Technologies is a full-service web design and development agency specializing
            in creating custom, high-performing websites tailored to meet diverse business needs.
          </p>

          <div class="pt-2">
            <UButton label="Book a call" color="primary" size="xl" class="rounded-lg px-8 text-lg font-medium cursor-pointer" />
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.main-text {
  background: linear-gradient(90deg, #A49C9C 0%, #4E4E4E 50%, #9C9C9C 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.accent-text {
  background: linear-gradient(90deg, #059584 0%, #B5FFF6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>