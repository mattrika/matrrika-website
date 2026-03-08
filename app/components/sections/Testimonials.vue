<script setup lang="ts">
import shannonAvatar from '~/assets/testimonial-img1.jpg'

const testimonials = [
  {
    quote: "Of everything I've done in this project, deciding to work with Mattrika Technologies has been by far the best decision I have made, truly. And I cannot thank them enough.",
    name: 'Shannon Kempenich',
    role: 'CEO, ContentERP, USA',
    avatar: shannonAvatar,
  },
  {
    quote: "Of everything I've done in this project, deciding to work with Mattrika Technologies has been by far the best decision I have made, truly. And I cannot thank them enough.",
    name: 'Shannon Kempenich',
    role: 'CEO, ContentERP, USA',
    avatar: shannonAvatar,
  },
  {
    quote: "Of everything I've done in this project, deciding to work with Mattrika Technologies has been by far the best decision I have made, truly. And I cannot thank them enough.",
    name: 'Shannon Kempenich',
    role: 'CEO, ContentERP, USA',
    avatar: shannonAvatar,
  },
]
</script>

<template>
  <section id="testimonials" class="py-20 md:py-28">
    <div class="mx-auto max-w-7xl px-6">


      <SectionTitle label="Clients' Testimonials" class="mb-4" />


      <p class="font-normal mb-12 max-w-2xl" style="font-size: 20px; color: rgb(152,151,151);">
        Our satisfied customers share their success stories, highlighting the
        quality and reliability of our services.
      </p>
      <UCarousel v-slot="{ item }" :items="testimonials" loop arrows :prev="{
        variant: 'outline',
        color: 'neutral',
        size: 'xl',
        class: 'rounded-full border-neutral-300 text-neutral-400 hover:text-neutral-600 -translate-x-4',
      }" :next="{
          variant: 'outline',
          color: 'neutral',
          size: 'xl',
          class: 'rounded-full border-neutral-300 text-neutral-400 hover:text-neutral-600 translate-x-4',
        }" :ui="{
          item: 'basis-full',
          prev: 'sm:-start-10',
          next: 'sm:-end-10',
        }">
        <TestimonialCard :quote="item.quote" :name="item.name" :role="item.role" :avatar="item.avatar" />
      </UCarousel>

    </div>
  </section>
</template>