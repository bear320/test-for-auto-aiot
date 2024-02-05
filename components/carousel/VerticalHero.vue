<template>
  <Swiper
    :modules="[SwiperAutoplay, SwiperPagination]"
    :direction="'vertical'"
    :effect="'slide'"
    :slides-per-view="1"
    :space-between="16"
    :loop="true"
    :autoplay="{
      delay: 5000,
      pauseOnMouseEnter: true
    }"
    :pagination="{
      enabled: true,
      clickable: true
    }"
  >
    <SwiperSlide
      v-for="carousel in carouselList"
      :key="carousel.index"
      :style="`background-image: linear-gradient(180deg, #ffffff30 0%, #000000 100%), url(${carousel.imageUrl});`"
    >
      <Logo />
      <div class="content-wrapper">
        <p class="title">{{ carousel.title }}</p>
        <p class="description">{{ carousel.description }}</p>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script lang="ts" setup>
import type { ICarousel } from '~/utils/interface';
import Logo from '~/assets/images/general/LogoText.vue';
import 'swiper/css';
import 'swiper/css/pagination';

const carouselList = ref<ICarousel[]>([
  {
    index: 1,
    title: '教育部網站-技職大玩Job',
    description:
      '一個多元化技職教育資訊網站，推廣和提升對技職教育的認識，提供職業體驗展、職業達人講座、互動遊戲和教育資源，讓使用者深入了解及體驗技職領域。',
    imageUrl: 'https://i.ibb.co/pJvXZJV/1.jpg'
  },
  {
    index: 2,
    title: '安聯人壽-數位互動獎章系統',
    description:
      '透過輸入ID或是感應專屬卡片即可展示出過去業務人員的輝煌成績，讓整體頒獎活動及辦公室公共區域更加多元，讓科技數位展示出身為業務的榮耀時刻！',
    imageUrl: 'https://i.ibb.co/k3q260R/7.jpg'
  },
  {
    index: 3,
    title: '雲控播系統 CloudManSystem',
    description:
      '高傳輸、低延遲的多節點影像及裝置控制系統，傳送影像音源，整合互動性切換、NDI、GIGE串接和物聯網技術。網路連接設備，實現智慧靈活控制。',
    imageUrl: 'https://i.ibb.co/nwjqf93/4.jpg'
  }
]);
</script>

<style lang="scss" scoped>
@import '~/assets/scss/mixin.scss';

.swiper {
  width: 100%;
  aspect-ratio: 2 / 1;

  @include media(768) {
    aspect-ratio: 4 / 3;
  }

  @include media(480) {
    aspect-ratio: 3 / 4;
  }

  .swiper-wrapper {
    .swiper-slide {
      position: relative;
      width: 100%;
      height: 100%;
      border-radius: 2rem 2rem 0 0;
      background: #fff no-repeat center/cover;
      overflow: hidden;

      svg {
        position: absolute;
        top: 2rem;
        left: 4rem;

        @include media(992) {
          left: 2.5rem;
        }

        @include media(768) {
          left: 1.5rem;
        }
      }

      .content-wrapper {
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 0 2rem 2rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        align-items: end;
        gap: 1.5rem;
        width: 100%;
        color: #fff;

        @include media(992) {
          grid-template-columns: repeat(2, 1fr);
        }

        @include media(768) {
          grid-template-columns: 50%;
          justify-content: end;
        }

        @include media(480) {
          grid-template-columns: 100%;
          gap: 1rem;
          padding: 0 1.5rem 1.5rem;
        }

        p {
          &.title {
            grid-column: span 2;
            font: var(--h2);
            text-align: left;

            @include media(992) {
              grid-column: unset;
            }

            @include media(768) {
              text-align: right;
            }

            @include media(480) {
              text-align: center;
            }
          }

          &.description {
            font: var(--h6);
            text-align: justify;

            @include media(992) {
              font: var(--text-normal);
            }
          }
        }
      }
    }
  }

  :deep(.swiper-pagination) {
    left: 2rem;
    right: unset;

    @include media(992) {
      left: 1rem;
    }

    @include media(768) {
      // display: none;
    }
  }

  :deep(.swiper-pagination-bullet) {
    margin: 15px 0;
    width: 10px;
    height: 10px;
    background-color: #fff;
    opacity: 1;
  }

  :deep(.swiper-pagination-bullet-active) {
    outline: 1px solid #fff;
    outline-offset: 0.25rem;
  }
}
</style>
