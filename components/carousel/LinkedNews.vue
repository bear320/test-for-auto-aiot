<template>
  <div class="carousel-wrapper">
    <div class="carousel-1">
      <Swiper
        :modules="[SwiperAutoplay, SwiperEffectFade]"
        :slides-per-view="1"
        :space-between="16"
        :effect="appStore.width <= 768 ? 'slide' : 'fade'"
        :simulate-touch="appStore.width <= 768 ? true : false"
        :loop="true"
        :autoplay="{
          delay: 50000
        }"
        :fade-effect="{
          crossFade: true
        }"
        class="main"
      >
        <SwiperSlide v-for="(mainNews, index) in navigation" :key="index">
          <img :src="mainNews.imageUrl" :alt="`【${mainNews.type}】${mainNews.title}}`" />
          <div class="news-wrapper">
            <span class="news-type">{{ mainNews.type }}</span>
            <span class="news-date">{{ mainNews.date }}</span>
            <h3 class="news-title">{{ mainNews.title }}</h3>
            <ButtonArrowLink :link="mainNews.link" class="news-action" />
          </div>
          <p class="news-description">{{ mainNews.description }}</p>
        </SwiperSlide>
      </Swiper>
    </div>

    <div v-show="appStore.width > 768" class="carousel-2">
      <Swiper
        :modules="[SwiperController, SwiperAutoplay, SwiperNavigation, SwiperPagination]"
        :direction="'vertical'"
        :slides-per-view="2"
        :space-between="0"
        :loop="true"
        :controller="{ control: secondSwiper }"
        :autoplay="{
          delay: 50000,
          pauseOnMouseEnter: true
        }"
        :navigation="{
          enabled: true,
          prevEl: '.swiper-btn-prev',
          nextEl: '.swiper-btn-next'
        }"
        :breakpoints="{
          993: { slidesPerView: 3 }
        }"
        class="aside"
        @slide-change="
          (swiper) => {
            secondSwiperRealIndex = swiper.realIndex;
          }
        "
        @autoplay="
          (swiper) => {
            secondSwiperRealIndex = swiper.realIndex;
          }
        "
      >
        <SwiperSlide v-for="(asideNews, index) in navigation" :key="index">
          <div class="news-wrapper">
            <span class="news-type">{{ asideNews.type }}</span>
            <span class="news-date">{{ asideNews.date }}</span>
            <ButtonArrowLink :link="asideNews.link" class="news-action" />
          </div>
          <h3 class="news-title">{{ asideNews.title }}</h3>
          <p class="news-description">{{ asideNews.description }}</p>
          <span class="divider"></span>
        </SwiperSlide>
      </Swiper>
      <div class="control-wrapper">
        <div class="btn-wrapper">
          <button type="button" class="swiper-btn swiper-btn-prev">
            <Icon name="icon-park-outline:left" />
          </button>
          <button type="button" class="swiper-btn swiper-btn-next">
            <Icon name="icon-park-outline:right" />
          </button>
        </div>

        <div class="progress-wrapper">
          <span class="current">{{ secondSwiperRealIndex + 1 }}</span>
          <span class="progress-bar">
            <span class="current" :style="`right: ${100 - progress}%`"></span>
          </span>
          <span v-if="navigation" class="total">{{ navigation.length }}</span>
        </div>

        <span class="space"></span>

        <ButtonViewMore v-if="appStore.width > 992" :link="`/news/company`" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { INews } from '~/utils/interface';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// store
const appStore = useAppStore();

// onMonted
onMounted(() => {
  // handleGetNews();
});

// swiper
const secondSwiper = ref<any>(null);
const secondSwiperRealIndex = ref<number>(0);
const progress = computed<number>(() => {
  if (navigation.value) {
    return Math.floor(((secondSwiperRealIndex.value + 1) / navigation.value.length) * 100);
  } else {
    return 0;
  }
});

// fetch content navigation
const { data: navigation } = await useAsyncData(
  'navigation',
  () =>
    fetchContentNavigation(
      queryContent('news', 'posts').sort({ id: -1, $numeric: true }).limit(10)
    ),
  {
    lazy: true,
    transform: (rawData) => {
      const processedData: INews[] = [];
      rawData[0].children![0].children!.forEach((r) => {
        const news: INews = {
          type: r.type === 'company' ? '公司資訊' : r.type === 'tech' ? '科技新知' : '商圈資訊',
          title: r.title,
          description: r.description,
          date: r.date,
          imageUrl: r.cover,
          link: r._path
        };
        processedData.push(news);
      });
      return processedData.reverse();
    }
  }
);
</script>

<style lang="scss" scoped>
@import '~/assets/scss/mixin.scss';

.carousel-wrapper {
  display: grid;
  grid-template-columns: calc(50% - 1.5rem) calc(50% - 1.5rem);
  align-items: center;
  gap: 3rem;
  width: 100%;
  height: fit-content;

  @include media(992) {
    grid-template-columns: calc(50% - 1rem) calc(50% - 1rem);
    gap: 2rem;
  }

  @include media(768) {
    grid-template-columns: 100%;
  }

  > div {
    &.carousel-1 {
      .swiper {
        width: 100%;

        @include media(768) {
          margin: auto;
          width: 75%;
        }

        @include media(480) {
          width: 95%;
        }

        .swiper-wrapper {
          .swiper-slide {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            color: var(--text-color-1);

            img {
              width: 100%;
              border-radius: 0.5rem;
              aspect-ratio: 16 / 9;
              vertical-align: top;
              object-fit: cover;
            }

            .news-wrapper {
              display: flex;
              justify-content: space-between;
              align-items: center;
              gap: 1rem;

              .news-type {
                flex-shrink: 0;
                padding: 0.2rem 0.75rem;
                border-radius: 1rem;
                background-color: var(--secondary);
                font: var(--text-normal);
              }

              .news-date {
                flex-shrink: 0;
                font: var(--h6);
                color: var(--text-color-3);
              }

              .news-title {
                flex-grow: 1;
                font: var(--h6);
                color: var(--text-color-1);
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }

              .news-action {
                flex-shrink: 0;
                justify-self: flex-end;
              }
            }

            .news-description {
              padding-top: 1rem;
              border-top: 1px solid var(--divider-color);
              color: var(--text-color-3);
              font: var(--text-small);
              text-align: justify;
              line-height: 1.5;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
            }
          }
        }
      }
    }

    &.carousel-2 {
      .swiper {
        width: 100%;
        height: clamp(375px, 32.5dvw, 432px);

        @include media(992) {
          height: clamp(280px, 32.5dvw, 370px);
        }

        .swiper-wrapper {
          .swiper-slide {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            width: 100%;
            min-height: 125px;

            @include media(1366) {
              gap: 0.5rem;
            }

            .news-wrapper {
              position: relative;
              display: flex;
              align-items: center;
              gap: 1rem;
              padding-top: 1px;

              .news-type {
                flex-shrink: 0;
                padding: 0.2rem 0.75rem;
                border-radius: 1rem;
                background-color: var(--secondary);
                font: var(--text-normal);
              }

              .news-date {
                flex-shrink: 0;
                font: var(--h6);
                color: var(--text-color-3);
              }

              .news-action {
                position: absolute;
                top: 50%;
                right: 0;
                transform: translateY(-50%);
              }
            }

            .news-title {
              flex-shrink: 0;
              color: var(--text-color-1);
              font: var(--h6);
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }

            .news-description {
              min-height: calc(var(--small-font-size) * 1.5 * 2);
              color: var(--text-color-3);
              font: var(--text-small);
              text-align: justify;
              line-height: 1.5;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
            }

            .divider {
              width: 100%;
              height: 1px;
              background-color: var(--divider-color);
            }
          }
        }
      }

      .control-wrapper {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        margin-top: 0.25rem;

        .btn-wrapper {
          .swiper-btn {
            border: none;
            background: none;
            color: var(--primary);
            font-size: 1rem;
            cursor: pointer;
          }
        }

        .progress-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 0.5rem;

          .progress-bar {
            position: relative;
            display: block;
            width: 125px;
            height: 5px;
            border-radius: 0.25rem;
            background-color: #d9d9d9;
            overflow: hidden;

            .current {
              position: absolute;
              top: 50%;
              right: 100%;
              width: 100%;
              height: 100%;
              border-radius: 0.25rem;
              background-color: var(--primary);
              transform: translateY(-50%);
              transition: all 0.5s;
            }
          }
        }

        .space {
          flex-grow: 1;
        }
      }
    }
  }
}
</style>
