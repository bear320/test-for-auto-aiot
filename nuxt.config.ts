// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@vueuse/nuxt',
    '@nuxt/content',
    'nuxt-icon',
    '@vite-pwa/nuxt',
    'nuxt-swiper',
    '@nuxt/image',
    'nuxt-og-image',
    'nuxt-aos'
  ],
  typescript: {
    typeCheck: true
  },
  components: {
    global: true,
    dirs: ['~/components']
  },
  content: {
    highlight: {
      theme: 'github-light',
      preload: ['diff', 'json', 'js', 'ts', 'css', 'shell', 'html', 'md', 'yaml', 'vue', 'vue-html']
    },
    navigation: {
      fields: ['description', 'id', 'date', 'type', 'cover']
    }
  },
  image: {
    dir: 'assets/images'
  },
  build: {
    transpile: ['vue-toastification']
  }
});
