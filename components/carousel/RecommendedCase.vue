<template>
  <Swiper
    :modules="[SwiperAutoplay]"
    :slides-per-view="1"
    :space-between="16"
    :loop="true"
    :autoplay="{
      delay: 5000
    }"
    :breakpoints="{
      481: { slidesPerView: 2 },
      769: { slidesPerView: 3 }
    }"
  >
    <SwiperSlide
      v-for="(recommended, index) in navigation"
      :key="index"
      class="recommended-wrapper"
    >
      <a :href="recommended.path" class="recommended-card">
        <div
          class="image-wrapper"
          :class="recommended.type"
          :data-type="computedCaseType(recommended.type)"
        >
          <img
            :src="recommended.cover"
            :alt="recommended.title"
            :title="recommended.title"
            class="recommended-image"
          />
        </div>

        <h3 class="recommended-title">{{ recommended.title }}</h3>
        <p class="recommended-description">{{ recommended.description }}</p>
      </a>
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
import { computedCaseType, handleGetRandomElements } from '@/utils/functions';
import type { IRecommemded } from '@/utils/interface';

// fetch content navigation
const { data: navigation } = await useAsyncData(
  'navigation',
  () => fetchContentNavigation(queryContent('cases', 'posts')),
  {
    lazy: true,
    transform: (rawData) => {
      const randomData = handleGetRandomElements(rawData[0].children![0].children, 3);
      const processedData: IRecommemded[] = [];
      randomData.forEach((r) => {
        const recommendation: IRecommemded = {
          title: r.title,
          description: r.description,
          type: r.type,
          path: r._path,
          cover: r.cover
        };
        processedData.push(recommendation);
      });
      return processedData;
    }
  }
);
</script>

<style lang="scss" scoped>
@import '~/assets/scss/mixin.scss';

.recommended-wrapper {
  padding: 1rem;

  .recommended-card {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    @include hover-scale();

    .image-wrapper {
      position: relative;

      &::after {
        content: attr(data-type);
        position: absolute;
        top: 0.5rem;
        left: 0.5rem;
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

      .recommended-image {
        width: 100%;
        aspect-ratio: 16 /9;
        border-radius: 0.5rem;
        object-fit: cover;
        background-color: var(--background-color);
        vertical-align: top;
      }
    }

    .recommended-title {
      font: var(--h5);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .recommended-description {
      color: var(--text-color-3);
      font: var(--h6);
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
  }
}
</style>
