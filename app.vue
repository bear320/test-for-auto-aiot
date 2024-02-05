<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
// route
const route = useRoute();

// head
useHead({
  htmlAttrs: {
    lang: 'zh-TW'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/ico',
      href: '/favicon.ico'
    }
  ]
});

// SEO
useSeoMeta({
  ogUrl: `https://auto-aiot.com${route.fullPath}`
});
</script>

<style lang="scss">
@import 'assets/scss/main.scss';

body {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
}
.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}
</style>
