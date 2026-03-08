import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/main.css'],


  app: {
    head: {
      title: 'Mattrika'
    }
  },


  vite: {
    //@ts-ignore
    plugins: [tailwindcss()]
  },
  icon: {
    mode: 'css',
    cssLayer: 'base'
  },
  modules: ['@nuxt/icon', '@nuxt/image', '@nuxt/ui'],
  image: {
    dir: 'assets',
    format: ['webp'],
    quality: 75,
    densities: [1, 2],
    provider: 'ipx',
    ipx: {
      maxAge: 60 * 60 * 24 * 365
    }
  }
})