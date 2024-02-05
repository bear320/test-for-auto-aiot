<template>
  <Swiper
    :modules="[SwiperScrollbar]"
    :slides-per-view="1"
    :space-between="32"
    :grab-cursor="true"
    :scrollbar="{
      enabled: true,
      draggable: true
    }"
    :breakpoints="{
      481: { slidesPerView: 2 },
      993: { slidesPerView: 3 }
    }"
  >
    <SwiperSlide
      v-for="(demo, index) in caseList"
      :key="index"
      :title="demo.case"
      :class="{ fliped: demo.fliped }"
    >
      <div class="card">
        <div class="card-front" @click="demo.fliped = !demo.fliped">
          <img :src="demo.coverUrl" :alt="`【成功案例】${demo.case}`" class="case-cover" />
          <div class="tip-wrapper">
            <Icon name="fluent:cursor-click-24-filled" size="30%" />
            <p>點擊查看更多</p>
          </div>
        </div>
        <div class="card-back" @click="demo.fliped = !demo.fliped">
          <a :href="demo.link" target="_blank" @click.stop>
            {{ demo.type }} <Icon name="icon-park-outline:right" />
          </a>
          <h3 class="case-name">{{ demo.case }}</h3>
          <img :src="demo.imageUrl" :alt="`【成功案例】${demo.case}`" class="case-img" />
          <span class="case-date">{{ demo.date }}</span>
          <div class="case-description">
            <p>{{ demo.description }}</p>
          </div>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
import type { ICase } from '~/utils/interface';

const caseList = ref<ICase[]>([
  {
    case: '安聯人壽 獎章系統',
    type: '互動系統',
    date: '2023. 06',
    description:
      '透過使用感應卡，讓每位得獎者透過大螢幕展示自己在安聯人壽的輝煌成績，融合了數位科技和設計創新，為安聯人壽的活動提供嶄新的體驗。',
    coverUrl: 'https://i.ibb.co/rbR4YVG/1.webp',
    imageUrl: 'https://i.ibb.co/rbR4YVG/1.webp',
    link: 'https://www.facebook.com/mindnodeair/videos/926047211807610/',
    fliped: false
  },
  {
    case: '成大 智慧運動系統',
    type: '雲控播',
    date: '2023. 06',
    description:
      '將一般使用的 CMS 放到運動場域中，調整並研發出現在成熟的 CMS-SPORT，專為運動場域進行運動員的訓練輔助工作。',
    coverUrl: 'https://i.ibb.co/WpGcr8P/5.webp',
    imageUrl: 'https://i.ibb.co/WpGcr8P/5.webp',
    link: 'https://youtu.be/Yd2NA4fF90A',
    fliped: false
  },
  {
    case: '嘉義商圈 超跑底嘉',
    type: '數位轉型',
    date: '2023. 10. 08 ~ 2023. 10. 10',
    description:
      '「2022嘉義市文化商圈成果發表嘉年華」，超跑現場氣派展示，吸睛度百分百；還有洋溢嘉義市商圈魅力的行動支付市集，以及精彩舞台表演。',
    coverUrl: 'https://i.ibb.co/9q8DshL/3.webp',
    imageUrl: 'https://i.ibb.co/9q8DshL/3.webp',
    link: 'https://youtu.be/srcpcla_eMo',
    fliped: false
  },
  {
    case: '大南方展 簽署儀式',
    type: '互動系統',
    date: '2022. 08. 26',
    description:
      '簽約簽名是一件非常隆重及重要的儀式，通常需要公開，需要多人一起見證，媒體更需要報導的畫面，因應場域數位行銷的發展開發-簽名即時互動系統。',
    coverUrl: 'https://i.ibb.co/jfRfs4r/4.webp',
    imageUrl: 'https://i.ibb.co/jfRfs4r/4.webp',
    link: 'https://youtu.be/-91j8gZCZgE',
    fliped: false
  },
  {
    case: '透明直播間驗證計畫',
    type: '互動系統',
    date: '2022. 11. 26',
    description:
      '結合透明顯示屏技術團隊、鋼構屋業者、直播行銷整合團隊、美術園道商圈、甲蟲市集、台中購物節來進行5G直播技術驗證。',
    coverUrl: 'https://i.ibb.co/McJ86N0/2.webp',
    imageUrl: 'https://i.ibb.co/McJ86N0/2.webp',
    link: 'https://fb.watch/nymie6ilD5/',
    fliped: false
  }
]);
</script>

<style lang="scss" scoped>
@import '~/assets/scss/mixin.scss';

.swiper {
  padding-bottom: 1rem;
  width: 100%;
  height: fit-content;

  .swiper-wrapper {
    .swiper-slide {
      width: 100%;
      aspect-ratio: 5 / 6;
      color: #fff;

      @include media(768) {
        width: calc(100% - 1.5rem);
      }

      &.fliped > .card {
        transform: rotateY(180deg);
      }

      .card {
        position: relative;
        width: 100%;
        height: 100%;
        transition: transform 1500ms;
        transform-style: preserve-3d;

        > div {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 1rem;
          backface-visibility: hidden;

          img {
            width: 100%;
            object-fit: cover;
            vertical-align: top;
          }

          &.card-front {
            display: flex;
            justify-content: center;
            align-items: center;
            background-image: linear-gradient(to bottom, var(--primary), var(--secondary));
            cursor: pointer;

            &:hover,
            &:active {
              .tip-wrapper {
                display: flex;
              }
            }

            .tip-wrapper {
              position: absolute;
              inset: 0;
              display: none;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              gap: 1rem;
              border-radius: inherit;
              background-color: var(--text-color-2);
              opacity: 0.75;

              svg {
                animation: scale 2s linear 0s infinite;

                @keyframes scale {
                  0% {
                    transform: scale(0.95);
                  }
                  50% {
                    transform: scale(1.05);
                  }
                  100% {
                    transform: scale(0.95);
                  }
                }
              }

              p {
                font-size: var(--h5-font-size);
              }
            }

            .case-cover {
              aspect-ratio: 1 / 1;
            }
          }
          &.card-back {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
            padding: 1.5rem;
            background-color: var(--text-color-1);
            transform: rotateY(180deg);
            cursor: pointer;

            > *::before {
              color: var(--divider-color);
            }

            a {
              position: absolute;
              top: 1.5rem;
              right: 1.5rem;
              padding: 0.25rem 0.75rem;
              border-radius: 1rem;
              background-color: var(--secondary);
            }

            .case-name {
              position: relative;
              margin-top: calc(var(--h5-font-size) * var(--line-height));
              width: 100%;

              &::before {
                content: '專案名稱';
                position: absolute;
                bottom: 100%;
                left: 0;
                font: var(--h5);
              }
            }

            .case-img {
              aspect-ratio: 16 / 9;
            }

            .case-date {
              position: relative;
              display: block;
              margin-top: calc(var(--h6-font-size) * var(--line-height));
              font: var(--text-normal);

              &::before {
                content: '日期';
                position: absolute;
                bottom: 100%;
                left: 0;
                font: var(--h6);
              }
            }

            .case-description {
              position: relative;
              margin-top: calc(var(--h6-font-size) * var(--line-height));
              width: 100%;
              font: var(--text-normal);

              &::before {
                content: '專案介紹';
                position: absolute;
                bottom: 100%;
                left: 0;
                font: var(--h6);
              }

              p {
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 4;
                overflow: hidden;
              }
            }
          }
        }
      }
    }
  }
}
</style>
