<script setup lang="ts">
import contactBg from '~/assets/images/contact-us.png'
import locationIcon from '~/assets/images/location.png'
</script>

<template>
  <section id="contact" class="relative py-16 md:py-24 overflow-hidden">

    <img :src="contactBg" alt="" aria-hidden="true"
      class="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none" />

    <div class="relative z-10 mx-auto max-w-7xl px-6">

      <SectionTitle label="Contact Us" class="mb-12" />

      <div class="flex flex-col gap-8 md:gap-10">

        <!-- Address -->
        <div class="flex gap-4 items-start">
          <img :src="locationIcon" alt="Location" class="w-10 h-10 md:w-16 md:h-16 object-contain shrink-0 mt-1" />
          <p class="font-medium leading-snug text-xl md:text-3xl lg:text-4xl text-[#5C5C5C]">
            18 Macalister Drive<br />
            Northborough, MA 01532, USA
          </p>
        </div>

        <!-- Email + Phone -->
        <div class="flex flex-col sm:flex-row gap-8 sm:gap-16 lg:gap-24 pl-1">

          <div class="flex flex-col gap-1">
            <span class="font-medium text-[#A49C9C] text-base md:text-xl lg:text-3xl">EMAIL</span>
            <a href="mailto:info@mattrika.com"
              class="font-medium hover:text-primary-600 transition-colors underline underline-offset-4 text-lg md:text-2xl lg:text-4xl break-all">
              info@mattrika.com
            </a>
          </div>

          <div class="flex flex-col gap-1">
            <span class="font-medium text-[#A49C9C] text-base md:text-xl lg:text-3xl">PHONE</span>
            <a href="tel:+1234567890"
              class="font-medium hover:text-primary-600 transition-colors text-lg md:text-2xl lg:text-4xl break-all">
              info@mattrika.com
            </a>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>