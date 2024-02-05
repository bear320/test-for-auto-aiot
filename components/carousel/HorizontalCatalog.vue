<template>
  <Swiper
    :modules="[SwiperPagination]"
    :slides-per-view="1"
    :space-between="16"
    :pagination="{
      enabled: true,
      clickable: true
    }"
    :breakpoints="{ 481: { slidesPerView: 2 }, 769: { slidesPerView: 3 } }"
  >
    <SwiperSlide v-for="(category, index) in catalog" :key="index">
      <a href="#javascript" :title="category.type" class="category">
        <div class="service-img">
          <!-- <nuxt-img :src="category.imageUrl" :alt="category.type" :title="category.type" /> -->
          <!-- <ServiceDI /> -->
          <component :is="category.image" />
        </div>
        <h3 class="service-type">{{ category.type }}</h3>
      </a>
    </SwiperSlide>
  </Swiper>
</template>

<script lang="ts" setup>
import type { IService } from '~/utils/interface';
import 'swiper/css';
import 'swiper/css/pagination';
import ServiceSP from '~/assets/images/icon/ServiceSP.vue';
import ServiceSHI from '~/assets/images/icon/ServiceSHI.vue';
import ServiceSI from '~/assets/images/icon/ServiceSI.vue';
import ServiceDM from '~/assets/images/icon/ServiceDM.vue';
import ServiceDI from '~/assets/images/icon/ServiceDI.vue';

// 服務列表
const catalog = ref<IService[]>([
  {
    type: '服務流程',
    image: markRaw(ServiceSP)
  },
  {
    type: '軟硬體整合',
    image: markRaw(ServiceSHI)
  },
  {
    type: '系統整合',
    image: markRaw(ServiceSI)
  },
  {
    type: '數位行銷',
    image: markRaw(ServiceDM)
  },
  {
    type: '數位互動',
    image: markRaw(ServiceDI)
  }
]);
</script>

<style lang="scss" scoped>
@import '~/assets/scss/mixin.scss';

.swiper {
  width: 100%;
  height: fit-content;

  .swiper-wrapper {
    .swiper-slide {
      &:last-child .category::after {
        display: none;
      }

      .category {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
        padding: 1rem;

        &:after {
          content: '';
          position: absolute;
          top: 50%;
          right: -0.5rem;
          translate: 0 -50%;
          width: 1px;
          height: 90%;
          background-color: var(--divider-color);

          @include media(480) {
            display: none;
          }
        }

        .service-img {
          position: relative;
          width: clamp(125px, 100%, 200px);
          border-radius: 50%;
          background-color: #ffffff;
          aspect-ratio: 1 / 1;

          svg {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 65%;
            aspect-ratio: 1 / 1;
          }
        }

        .service-type {
          color: var(--text-color-2);
          font: var(--h4);
          text-align: center;
        }
      }
    }
  }

  :deep(.swiper-pagination) {
    position: unset;
    margin: 1rem 0 0;
  }

  :deep(.swiper-pagination-bullet) {
    margin: 0 15px;
    width: 10px;
    height: 10px;
    outline: 1px solid var(--text-color-2);
    background-color: transparent;
    opacity: 1;
  }

  :deep(.swiper-pagination-bullet-active) {
    outline: 1px solid var(--text-color-2);
    outline-offset: 0.25rem;
    background-color: var(--text-color-2);
  }
}
</style>
