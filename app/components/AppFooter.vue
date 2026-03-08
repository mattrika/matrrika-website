<script setup lang="ts">
import logo from '~/assets/images/logo.png'
</script>

<template>
  <footer class="bg-custom border-t border-neutral-200">
    <div class="mx-auto max-w-7xl px-6 py-3">
      <!-- Bottom Section: Logo and Social Icons -->
      <div class="flex items-center justify-between">
        <!-- MAT Logo -->
        <div class="w-20 h-8">
          <img
            :src="logo"
            alt="MAT"
            class="w-full h-full object-contain"
          />
        </div>

        <!-- Social Icons -->
        <div class="flex items-center gap-3">
          <!-- Facebook -->
          <a
            href="#"
            aria-label="Facebook"
            class="text-[#0566ff] hover:opacity-80 transition-opacity"
          >
            <UIcon name="logos:facebook" class="w-6 h-6" />
          </a>

          <!-- WhatsApp -->
          <a
            href="#"
            aria-label="WhatsApp"
            class="text-[#25D366] hover:opacity-80 transition-opacity"
          >
            <UIcon name="logos:whatsapp-icon" class="w-6 h-6" />
          </a>

          <!-- LinkedIn -->
          <a
            href="#"
            aria-label="LinkedIn"
            class="text-[#0A66C2] hover:opacity-80 transition-opacity"
          >
            <UIcon name="logos:linkedin-icon" class="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
