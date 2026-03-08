<script setup lang="ts">
import logo from '~/assets/images/logo.png'

const navItems = [
  { label: 'About Us', to: '#about' },
  { label: 'What We Do', to: '#what-we-do' },
  { label: 'Testimonials', to: '#testimonials' },
  { label: 'Contact', to: '#contact' }
]
</script>

<template>
  <UHeader to="/" :ui="{
    root: 'border-b border-neutral-200 bg-custom-100 data-[sticky=true]:bg-custom-50 data-[sticky=true]:shadow-sm transition-all',
  }">

    <template #title>
      <NuxtLink to="/" aria-label="Mattrika Technologies">
        <img :src="logo" alt="Mattrika Technologies" class="h-10 w-auto" />
      </NuxtLink>
    </template>


    <template #default>
      <UNavigationMenu :items="navItems" :ui="{
        link: 'text-base font-medium text-neutral-900 hover:text-primary transition-colors duration-200',
      }" />
    </template>


    <template #right>
      <UButton label="Book a call" color="primary" size="lg" class="font-medium text-base rounded-lg cursor-pointer" />
    </template>

    <template #body>
      <UNavigationMenu :items="navItems" orientation="vertical" class="-mx-2.5" :ui="{
        link: 'text-base font-medium text-neutral-900 hover:text-primary transition-colors duration-200',
      }" />
    </template>
  </UHeader>
</template>