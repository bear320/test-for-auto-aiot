<template>
  <LayoutIntroduction :data="intro" />
  <LayoutBreadcrumb />
  <LazyHeroServiceHero v-for="(hero, index) in heroList" :key="index" :data="hero" />
</template>

<script setup lang="ts">
import type { IIntro, IServiceHero } from '~/utils/interface';

// metadata
definePageMeta({
  name: '服務介紹'
});

// SEO
useSeoMeta({
  title: '服務介紹',
  ogTitle: '服務介紹',
  description: '我們相信科技始終來自人性，而服務以人為本，給您安心、實在的服務建議。',
  ogDescription: '我們相信科技始終來自人性，而服務以人為本，給您安心、實在的服務建議。',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary'
});

// intro
const intro = ref<IIntro>({
  title: '服務介紹',
  engTitle: 'SERVICE',
  description: '我們相信科技始終來自人性，而服務以人為本，給您安心、實在的服務建議。',
  cover: 'https://i.ibb.co/Pjhsnn9/ryan-stone.webp'
});

// hero 列表
const heroList = ref<IServiceHero[]>([
  {
    contentAlign: 'left',
    index: '01',
    title: '積極用心的專案服務',
    description: '從接洽到討論執行，皆由專業團隊進行專屬服務，並給您安心、實在的服務建議。',
    imageUrl: 'https://i.ibb.co/JtHpYGY/image.webp',
    hypertext: '',
    hyperlink: ''
  },
  {
    contentAlign: 'right',
    index: '02',
    title: '從無到有，互動數位系統開發到整合服務',
    description:
      '奧圖數位專長就是在開發互動數位模組，各式各樣的互動系統都可為您量身打造，依照需求完成您可望的服務，並且我們可以從您現有的硬體進行系統軟體的整合，讓您不用花費更多的成本就可以完成心目中的成效！',
    imageUrl: 'https://i.ibb.co/MDRdbCN/image.webp',
    hypertext: 'DEMO',
    hyperlink: '/cases'
  },
  {
    contentAlign: 'left',
    index: '03',
    title: '專業親切的專人，服務您的大小需求',
    description:
      '科技始終來自人性，而服務專業來自奧圖，從您說明需求的開端，奧圖優秀的專案團隊就開始策畫最適合您的服務方案，並隨時依您的需要進行立即的調整，就為給您最完善、最貼心的服務體驗。',
    imageUrl: 'https://i.ibb.co/Q9wyrW8/image.webp',
    hypertext: 'DEMO',
    hyperlink: '/cases',
    backgroundColor: '#f0f1f2'
  },
  {
    contentAlign: 'right',
    index: '04',
    title: '軟硬實力，我們都兼具',
    description:
      '奧圖的服務由淺到深，從簡單的模板互動系統到客製界接的整合服務，我們通通做得到，想要將原有的硬體或功能合併成一個系統控制，硬體的安裝建置，軟體的開發測試，對我們來說，這絕對沒問題！',
    imageUrl: 'https://i.ibb.co/tL2Trkf/image.webp',
    hypertext: 'DEMO',
    hyperlink: '/cases'
  },
  {
    contentAlign: 'no-pic',
    index: '05',
    title: '售後服務絕不馬虎',
    description:
      '買完一整套服務後，最怕出狀況沒辦法解決，但別擔心，奧圖的專案團隊絕對為您使命必達，即使問題不大，我們的人員肯定以最快速的方式給予您安心的回應及處理方式，讓您不必再煩惱找不到人解決問題！',
    imageUrl: '',
    hypertext: '',
    hyperlink: '',
    backgroundColor: '#353535'
  }
]);
</script>
