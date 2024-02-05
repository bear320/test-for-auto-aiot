<template>
  <LayoutIntroduction :data="intro" />
  <LayoutBreadcrumb />
  <SelectServiceSelect
    :type="currentType"
    @handle-type="
      (type) => {
        currentType = type;
      }
    "
  />
  <div v-if="navigation && navigation.length !== 0" class="container case-wrapper">
    <template v-for="(item, index) in navigation" :key="index">
      <a v-if="index < showNumber" :href="item._path" class="case-card">
        <div class="image-wrapper" :class="item.type" :data-type="computedCaseType(item.type)">
          <img :src="item.cover" :alt="`【案例】${item.title}`" :title="`【案例】${item.title}`" />
        </div>
        <div class="text-wrapper">
          <span v-if="index === 0" :class="item.type">{{ computedCaseType(item.type) }}</span>
          <h2 :data-type="computedCaseType(item.type)">{{ item.title }}</h2>
          <p>{{ item.description }}</p>
        </div>
      </a>
    </template>
  </div>
  <DisplayNoData v-else />
  <div v-if="navigation && navigation.length > showNumber" class="container">
    <ButtonViewMore style="margin: auto" @click="handleShowMore" />
  </div>
</template>

<script setup lang="ts">
import { computedCaseType } from '@/utils/functions';
import { caseType } from '@/utils/interface';
import type { IIntro } from '@/utils/interface';

// metadata
definePageMeta({
  name: '成功案例'
});

// SEO
useSeoMeta({
  title: '成功案例',
  ogTitle: '成功案例',
  description:
    '奧圖數位舉凡從小會議室建置到大型展覽活動展演，我們都將最好的結果呈現給客戶！贏得最好的局面！',
  ogDescription:
    '奧圖數位舉凡從小會議室建置到大型展覽活動展演，我們都將最好的結果呈現給客戶！贏得最好的局面！',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary'
});

// intro
const intro = ref<IIntro>({
  title: '成功案例',
  engTitle: 'SUCCESSFUL CASES',
  description:
    '奧圖數位舉凡從小會議室建置到大型展覽活動展演，我們都將最好的結果呈現給客戶！贏得最好的局面！',
  cover: 'https://i.ibb.co/Pjhsnn9/ryan-stone.webp'
});

// 案例分類
const currentType = ref<caseType>(caseType.ALL);

// query builder
const queryBuilder = computed(() => {
  switch (currentType.value) {
    case caseType.ALL:
      return queryContent('cases', 'posts');

    case caseType.DI:
      return queryContent('cases', 'posts').where({ type: 'DI' });

    case caseType.CMS:
      return queryContent('cases', 'posts').where({ type: 'CMS' });

    case caseType.WEB:
      return queryContent('cases', 'posts').where({ type: 'WEB' });

    case caseType.SHI:
      return queryContent('cases', 'posts').where({ type: 'SHI' });

    case caseType.HI:
      return queryContent('cases', 'posts').where({ type: 'HI' });

    default:
      break;
  }
});

// fetch content navigation
const { data: navigation } = await useAsyncData(
  'navigation',
  () => fetchContentNavigation(queryBuilder.value),
  {
    watch: [currentType],
    transform: (rawData) => {
      return rawData[0].children![0].children?.reverse();
    }
  }
);

// 顯示內容數量
const showNumber = ref<number>(10);

// 顯示更多內容
const handleShowMore = () => {
  showNumber.value += 10;
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/mixin.scss';

.case-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @include media(768) {
    grid-template-columns: repeat(2, 1fr);
  }

  @include media(480) {
    display: flex;
    flex-direction: column;
  }

  .case-card {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    cursor: pointer;
    @include hover-scale();

    &:nth-child(1) {
      grid-column: span 3;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      align-items: flex-end;
      gap: 2rem;

      @include media(768) {
        grid-column: span 2;
        grid-template-columns: repeat(5, 1fr);
      }

      @include media(480) {
        display: flex;
        gap: 0.5rem;
      }

      .image-wrapper {
        grid-column: span 2;

        @include media(768) {
          grid-column: span 3;
        }

        @include media(480) {
          grid-column: unset;
        }

        &::after {
          display: none;

          @include media(480) {
            display: block;
          }
        }
      }

      .text-wrapper {
        @include media(768) {
          grid-column: span 2;
        }

        @include media(480) {
          grid-column: unset;
        }

        span {
          padding: 0rem 0.75rem;
          width: fit-content;
          border-radius: 50px;
          background-color: var(--text-color-3);
          color: #fff;
          font-size: var(--normal-font-size);
          line-height: 2;

          &.DI {
            background-color: var((--text-color-3));
          }

          &.CMS {
            background-color: var((--primary));
          }

          &.WEB {
            background-color: var((--secondary));
            color: var(--text-color-2);
          }

          &.SHI {
            background-color: var((--quaternary));
          }

          &.HI {
            background-color: var((--tertiary));
          }

          @include media(480) {
            display: none;
          }
        }

        h2 {
          font: var(--h4);

          @include media(480) {
            font: var(--h5);
          }
        }

        p {
          font: var(--h5);

          @include media(480) {
            font: var(--h6);
          }
        }
      }
    }

    .image-wrapper {
      position: relative;

      &::after {
        content: attr(data-type);
        position: absolute;
        top: 1rem;
        left: 1rem;
        padding: 0 0.75rem;
        border-radius: 50px;
        background-color: var(--text-color-3);
        color: #fff;
        line-height: 2;
      }

      &.DI::after {
        background-color: var((--text-color-3));
      }

      &.CMS::after {
        background-color: var((--primary));
      }

      &.WEB::after {
        background-color: var((--secondary));
        color: var(--text-color-2);
      }

      &.SHI::after {
        background-color: var((--quaternary));
      }

      &.HI::after {
        background-color: var((--tertiary));
      }

      img {
        width: 100%;
        aspect-ratio: 16 /9;
        border-radius: 0.5rem;
        object-fit: cover;
        background-color: var(--background-color);
        vertical-align: top;
      }
    }

    .text-wrapper {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      h2 {
        font: var(--h5);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      p {
        color: var(--text-color-3);
        font: var(--h6);
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
    }
  }
}
</style>
