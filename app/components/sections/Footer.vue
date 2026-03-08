<script setup lang="ts">
import logo from '~/assets/images/logo.png'
</script>

<template>
  <footer id="contact" class="border-t border-neutral-200">
    <div class="bg-custom-100">
      <div class="mx-auto max-w-7xl px-6 py-4">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4">

          <!-- Logo -->
          <NuxtLink to="/" aria-label="Mattrika Technologies">
            <img :src="logo" alt="Mattrika Technologies" class="h-10 w-auto object-contain" />
          </NuxtLink>

          <!-- Copyright — centered on mobile -->
          <p class="text-sm text-neutral-400 order-3 sm:order-2">
            ©2026 Mattrika Technologies
          </p>

          <!-- Social Icons -->
          <div class="flex items-center gap-3 order-2 sm:order-3">
            <a href="#" aria-label="Facebook" class="hover:opacity-75 transition-opacity">
              <UIcon name="logos:facebook" class="w-6 h-6" />
            </a>
            <a href="#" aria-label="WhatsApp" class="hover:opacity-75 transition-opacity">
              <UIcon name="logos:whatsapp-icon" class="w-6 h-6" />
            </a>
            <a href="#" aria-label="LinkedIn" class="hover:opacity-75 transition-opacity">
              <UIcon name="logos:linkedin-icon" class="w-6 h-6" />
            </a>
          </div>

        </div>
      </div>
    </div>

  </footer>
</template>