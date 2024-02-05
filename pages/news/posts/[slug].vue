<template>
  <main class="container">
    <span class="type" :class="data!.type"># {{ computedNewsType(data!.type) }}</span>
    <h1 class="title">{{ data!.title }}</h1>
    <div class="info-wrapper">
      <component :is="ArticleAuthor" class="user" />
      <div class="content-wrapper">
        <p class="author">作者：{{ data!.author }}</p>
        <p class="date">日期：{{ data!.date }}</p>
      </div>
      <nuxt-link v-if="data!.link" :to="data!.link" target="_blank" class="link">
        <Icon name="uil:link" size="24" />
      </nuxt-link>
    </div>
    <div class="markdown">
      <ContentDoc />
    </div>
  </main>
  <div class="news">
    <div class="container">
      <h2>更多資訊公告</h2>
      <ClientOnly>
        <CarouselRecommendedNews />
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computedNewsType } from '@/utils/functions';
import ArticleAuthor from '~/assets/images/icon/ArticleAuthor.vue';

// route
const route = useRoute();

// data
const { data } = await useAsyncData(`content-${route.path}`, () =>
  queryContent().where({ _path: route.path }).findOne()
);

// SEO
useSeoMeta({
  ogTitle: data.value!.title,
  ogDescription: data.value!.description,
  ogImage: '[og:image]',
  twitterTitle: data.value!.title,
  twitterDescription: data.value!.description,
  twitterImage: '[twitter:image]',
  twitterCard: 'summary'
});
</script>

<style lang="scss" scoped>
main {
  margin: auto;
  width: clamp(280px, 100%, 768px);

  .type {
    display: inline-block;
    padding: 0 0.75rem;
    width: fit-content;
    border-radius: 50px;
    background-color: var(--text-color-3);
    color: #fff;
    font-size: var(--normal-font-size);
    line-height: 2;

    &.company {
      background-color: var(--company);
    }

    &.shopping-area {
      background-color: var(--shopping-area);
    }

    &.tech {
      background-color: var(--tech);
    }
  }

  .title {
    margin: 0.75rem 0;
  }

  .info-wrapper {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 0.75rem 0;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--primary);

    .user {
      width: 3rem;
      aspect-ratio: 1 / 1;
      vertical-align: top;
    }

    .content-wrapper {
      flex: 1;
    }

    .link {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 3rem;
      aspect-ratio: 1 / 1;
      border-radius: 50%;
      background-color: var(--primary);
      color: #fff;
    }
  }
}

.news {
  margin-top: 2rem;
  background-color: var(--background-color);

  .container {
    padding: 3rem 1.5rem;

    h2 {
      margin-bottom: 1rem;
      font: var(--h3);
      text-align: center;
    }
  }
}
</style>
