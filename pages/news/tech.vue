<template>
  <LayoutBreadcrumb />
  <ul class="container tab-wrapper">
    <li
      v-for="(tab, index) in tabList"
      :key="index"
      class="tab"
      :class="{ active: route.path === tab.type }"
    >
      <nuxt-link :to="tab.type">{{ tab.label }}</nuxt-link>
    </li>
  </ul>
  <div v-if="navigation && navigation.length !== 0" class="container news-wrapper">
    <template v-for="(news, index) in navigation" :key="index">
      <a
        v-if="index < showNumber"
        :href="news._path"
        class="news-card"
        :class="news.type"
        :data-type="computedNewsType(news.type)"
      >
        <nuxt-img :src="news.cover" :alt="news.title" :title="news.title" />
        <h3>{{ news.title }}</h3>
        <p>{{ news.description }}</p>
      </a>
    </template>
  </div>
  <DisplayNoData v-else />
  <div v-if="navigation && navigation.length > showNumber" class="container">
    <ButtonViewMore style="margin: auto" @click="handleShowMore" />
  </div>
</template>

<script setup lang="ts">
import { computedNewsType } from '@/utils/functions';

// route
const route = useRoute();
const params = route.path.split('/')[2];

// metadata
definePageMeta({
  layout: 'news-list',
  name: '科技新知'
});

// fetch content navigation
const { data: navigation } = await useAsyncData(
  'navigation',
  () => fetchContentNavigation(queryContent('news', 'posts').where({ type: params })),
  {
    transform: (rawData) => {
      return rawData[0].children![0].children!.reverse();
    }
  }
);

// 顯示內容數量
const showNumber = ref<number>(10);

// 顯示更多內容
const handleShowMore = () => {
  showNumber.value += 10;
};

// Tab 列表
const tabList = ref<INewsTab[]>([
  {
    label: '公司資訊',
    type: '/news/company'
  },
  {
    label: '商圈資訊',
    type: '/news/shopping-area'
  },
  {
    label: '科技新知',
    type: '/news/tech'
  }
]);
</script>
