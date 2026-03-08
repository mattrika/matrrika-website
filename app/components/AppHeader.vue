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
    root: 'border-b border-neutral-200',
    title: 'text-xl font-medium'
  }">
    <template #title>
      <NuxtLink to="/" aria-label="Mattrika Technologies">
        <img :src="logo" alt="Mattrika Technologies" class="h-10 w-auto">
      </NuxtLink>
    </template>

    <template #default>
      <UNavigationMenu :items="navItems"
        class="text-lg font-medium text-neutral-900 cursor-pointer transition-colors hover:text-primary active:text-primary" />
    </template>

    <template #right>
      <UButton label="Book a call" color="primary" size="xl" class="font-medium hover:bg-primary/90 transition-all" />
    </template>

    <template #body>
      <UNavigationMenu :items="navItems" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>
