<template>
  <div class="layout">
    <LayoutNewHeader />
    <div class="view">
      <LayoutIntroduction :data="intro" />
      <slot></slot>
    </div>
    <LayoutFooter />
    <div class="action-wrapper">
      <ButtonRoundedIcon
        :icon="`ri:facebook-box-line`"
        :link="`https://www.facebook.com/AutoAiOT?locale=zh_TW`"
      />
      <ButtonRoundedIcon :icon="`ri:line-line`" :link="`https://lin.ee/lElEVsE`" />
      <ButtonRoundedIcon :icon="`ri:tiktok-line`" :link="`https://www.tiktok.com/@autoaiot0`" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IIntro, INewsTab } from '@/utils/interface';

// route
const route = useRoute();

// SEO
useSeoMeta({
  title: '資訊公告',
  ogTitle: '資訊公告',
  description:
    '奧圖數位提供最新的的科技服務及最新技術、中央及地方單位最新計畫消息，我們也發布最即時的行銷數位內容。',
  ogDescription:
    '奧圖數位提供最新的的科技服務及最新技術、中央及地方單位最新計畫消息，我們也發布最即時的行銷數位內容。',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary'
});

// intro
const intro = ref<IIntro>({
  title: '資訊公告',
  engTitle: 'NEWS',
  description:
    '奧圖數位提供最新的的科技服務及最新技術、中央及地方單位最新計畫消息，我們也發布最即時的行銷數位內容。',
  cover: 'https://i.ibb.co/JRb5fRt/a01uw-bilix.webp'
});

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

<style lang="scss" scoped>
@import '~/assets/scss/mixin.scss';

.layout {
  .view {
    margin-top: var(--header-height);
    min-height: calc(100dvh - var(--header-height));

    :deep(.tab-wrapper) {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 1rem auto;
      padding: 0;
      border-top: 1px solid var(--divider-color);
      border-bottom: 1px solid var(--divider-color);

      .tab {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 0.5rem;
        padding: 1rem 2rem calc(1rem - 3px);
        border-bottom: 3px solid transparent;
        color: var(--text-color-2);
        font: var(--h4);
        cursor: pointer;

        @include media(480) {
          padding: 1rem 1rem calc(1rem - 3px);
        }

        &:nth-last-child(1)::after {
          display: none;
        }

        &::after {
          content: '';
          position: absolute;
          top: 50%;
          right: -0.5rem;
          transform: translateY(calc(-50% + 3px));
          width: 1px;
          height: calc(100% - 2rem);
          background-color: var(--divider-color);
        }

        &.active {
          border-bottom: 3px solid var(--primary);
          font-weight: 700;

          a {
            color: var(--primary);
          }
        }
      }
    }

    :deep(.news-wrapper) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);

      @include media(768) {
        grid-template-columns: repeat(2, 1fr);
      }

      @include media(480) {
        grid-template-columns: 100%;
      }

      .news-card {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 1rem;
        width: 100%;
        @include hover-scale();

        &.company::after {
          background-color: var(--company);
        }

        &.shopping-area::after {
          background-color: var(--shopping-area);
        }

        &.tech::after {
          background-color: var(--tech);
        }

        &::after {
          content: attr(data-type);
          position: absolute;
          top: 1.5rem;
          left: 1.5rem;
          display: inline-block;
          padding: 0 0.75rem;
          width: fit-content;
          border-radius: 50px;
          background-color: var(--text-color-3);
          color: #fff;
          font-size: var(--normal-font-size);
          line-height: 2;
        }

        img {
          width: 100%;
          aspect-ratio: 16 / 9;
          border-radius: 0.5rem;
          object-fit: cover;
          vertical-align: top;
          background-color: var(--background-color);
        }

        h3 {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          overflow: hidden;
        }

        p {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
      }
    }
  }

  .action-wrapper {
    position: fixed;
    top: 50%;
    right: 2rem;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    gap: 2rem;
    z-index: 95;

    @include media(1366) {
      right: 1.5rem;
    }
  }
}
</style>
