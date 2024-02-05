<template>
  <LayoutIntroduction :data="intro" />
  <LayoutBreadcrumb />
  <DisplayComingSoon />
</template>

<script setup lang="ts">
import type { IIntro } from '~/utils/interface';

// metadata
definePageMeta({
  name: '服務內容'
});

// SEO
useSeoMeta({
  title: '服務內容',
  ogTitle: '服務內容',
  description:
    '奧圖數位專精服務在於數位互動、系統開發，將場域進行軟硬體整合，所有服務都可建立於公家單位或商業品牌。',
  ogDescription:
    '奧圖數位專精服務在於數位互動、系統開發，將場域進行軟硬體整合，所有服務都可建立於公家單位或商業品牌。',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary'
});

// intro
const intro = ref<IIntro>({
  title: '服務內容',
  engTitle: 'SERVICE OFFERING',
  description:
    '奧圖數位專精服務在於數位互動、系統開發，將場域進行軟硬體整合，所有服務都可建立於公家單位或商業品牌。',
  cover: 'https://i.ibb.co/Pjhsnn9/ryan-stone.webp'
});
</script>
