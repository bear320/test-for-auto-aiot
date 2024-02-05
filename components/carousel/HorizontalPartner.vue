<template>
  <Swiper
    :modules="[SwiperAutoplay, SwiperNavigation]"
    :slides-per-view="1.5"
    :space-between="48"
    :loop="true"
    :centered-slides="true"
    :autoplay="{
      delay: 5000,
      pauseOnMouseEnter: true
    }"
    :navigation="{
      enabled: true
    }"
    :breakpoints="{
      481: { slidesPerView: 2.5, spaceBetween: 48, centeredSlides: true },
      769: { slidesPerView: 4, spaceBetween: 16, centeredSlides: false },
      993: { slidesPerView: 5, spaceBetween: 16, centeredSlides: false }
    }"
  >
    <SwiperSlide v-for="(partner, index) in partnerList" :key="index">
      <a :href="partner.link" target="_blank" :title="partner.name" class="partner">
        <img :src="partner.imageUrl" :alt="`【夥伴】${partner.name}`" />
      </a>
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
import type { IPartner } from '~/utils/interface';
import 'swiper/css';
import 'swiper/css/navigation';

const partnerList = ref<IPartner[]>([
  {
    name: '經濟部',
    imageUrl: 'https://i.ibb.co/9TZM25h/image.png',
    link: 'https://www.moea.gov.tw/Mns/populace/home/Home.aspx'
  },
  {
    name: '勞動部',
    imageUrl: 'https://i.ibb.co/McXMw59/image.png',
    link: 'https://www.mol.gov.tw/'
  },
  {
    name: '教育部',
    imageUrl: 'https://i.ibb.co/8m1RmyM/image.png',
    link: 'https://www.edu.tw/Default.aspx'
  },
  {
    name: '國立成功大學',
    imageUrl: 'https://i.ibb.co/C6VG56J/image.png',
    link: ''
  },
  {
    name: '財團法人資訊工業策進會',
    imageUrl: 'https://i.ibb.co/pwLVqdb/image.png',
    link: 'https://www.iii.org.tw/'
  },
  {
    name: '工業技術研究院',
    imageUrl: 'https://i.ibb.co/d55dqLQ/image.png',
    link: 'https://www.itri.org.tw/'
  },
  {
    name: '台北市電腦商業同業公會',
    imageUrl: 'https://i.ibb.co/L1MbvQX/TCA.png',
    link: 'https://www.tca.org.tw/'
  },
  {
    name: 'HYUNDAI 現代汽車',
    imageUrl: 'https://i.ibb.co/KG5Z3tv/image.png',
    link: 'https://www.hyundai-motor.com.tw/'
  },
  {
    name: '中國信託銀行',
    imageUrl: 'https://i.ibb.co/p1gGX9Q/image.png',
    link: 'https://www.ctbcbank.com/twrbo/zh_tw/index.html'
  },
  {
    name: '安聯人壽 Alianz',
    imageUrl: 'https://i.ibb.co/vDz14tQ/image.png',
    link: 'https://www.allianz.com.tw/zh_TW.html'
  },
  {
    name: '海底撈火鍋',
    imageUrl: 'https://i.ibb.co/XXDcKS9/image.png',
    link: 'https://www.facebook.com/HaidilaoTaiwan/'
  },
  {
    name: '新楓之谷',
    imageUrl: 'https://i.ibb.co/7pFDjvM/image.png',
    link: 'https://maplestory.beanfun.com/main'
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
      .partner {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0.125rem;
        padding: 0.25rem;
        border-radius: 1.25rem;
        border: 1px solid var(--text-color-2);
      }
    }
  }

  :deep(.swiper-button-prev),
  :deep(.swiper-button-next) {
    display: none;
    color: var(--primary);

    &::after {
      font-size: 22px;
      font-weight: bold;
    }

    @include media(768) {
      display: flex;
    }
  }

  :deep(.swiper-button-prev) {
    left: 26.5%;

    @include media(480) {
      left: 8.5%;
    }
  }

  :deep(.swiper-button-next) {
    right: 26.5%;

    @include media(480) {
      right: 8.5%;
    }
  }
}
</style>
