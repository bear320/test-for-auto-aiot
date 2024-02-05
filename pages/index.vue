<template>
  <!-- 輪播圖 -->
  <section class="container hero">
    <CarouselVerticalHero />
  </section>

  <!-- 關於我們 -->
  <section class="container about" data-aos="fade-up">
    <div class="slogan-wrapper">
      <p class="slogan">場域展示融合互動數位</p>
      <p class="slogan">科技創意來自貼近人性</p>
      <p class="slogan">專業用心創造安心服務</p>
    </div>
    <div class="content-wrapper">
      <h2 class="title">關於我們</h2>
      <p class="description">
        奧圖數位2020年正式成立，我們秉持著以服務及應用創新為基礎蘊育符合跨界跨業的生態圈整合性產品。
        <br />
        【知化】數位內容數據及媒體互動，【知能】場域服務智能自動化。
      </p>
      <ButtonViewMore :link="`/about`" />
    </div>
  </section>

  <!-- 資訊公告 -->
  <section class="container news" data-aos="fade-up">
    <h2 class="title">資訊公告</h2>
    <CarouselLinkedNews />
    <ButtonViewMore v-if="appStore.width <= 992" :link="`/news/company`" />
  </section>

  <!-- 服務項目 -->
  <section class="service" data-aos="fade-up">
    <div class="container">
      <div class="content-wrapper">
        <h2 class="title">服務介紹</h2>
        <p class="description">
          我們相信科技始終來自人性，而服務以人為本，給您安心、實在的服務建議。
        </p>
        <ButtonViewMore :link="`/service`" v-if="appStore.width > 768" />
      </div>
      <CarouselHorizontalCatalog />
      <ButtonViewMore :link="`/service`" v-if="appStore.width <= 768" />
    </div>
  </section>

  <!-- 成功案例 -->
  <section class="container case" data-aos="fade-up">
    <h2 class="title">成功案例</h2>
    <ButtonViewMore :link="`/cases`" />
    <CarouselHorizontalCase />
  </section>

  <!-- 合作夥伴 -->
  <section class="container partner">
    <h2 class="title">合作夥伴</h2>
    <CarouselHorizontalPartner />
  </section>
</template>

<script setup lang="ts">
// store
const appStore = useAppStore();

// metadata
definePageMeta({
  name: '首頁'
});

// SEO
useSeoMeta({
  title: '奧圖數位互動科技 | 互動系統、創意提案、軟硬整合的服務團隊',
  ogTitle: '奧圖數位互動科技 | 互動系統、創意提案、軟硬整合的服務團隊',
  description:
    '奧圖數位提供最安心的專案服務，所有的建置從頭到尾皆由一群富有經驗的年輕夥伴精心打造最人性的服務內容。',
  ogDescription:
    '奧圖數位提供最安心的專案服務，所有的建置從頭到尾皆由一群富有經驗的年輕夥伴精心打造最人性的服務內容。',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary',
  twitterTitle: '[twitter:title]',
  twitterDescription: '[twitter:description]',
  twitterImage: '[twitter:image]'
});
</script>

<style lang="scss" scoped>
@import '~/assets/scss/mixin.scss';

section {
  &.hero {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100dvh - var(--header-height));

    @include media(768) {
      padding: 1rem 0 0;
      height: calc(70dvh - var(--header-height));
    }

    @include media(480) {
      height: calc(100dvh - var(--header-height));
    }
  }

  &.about {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    padding: 2rem 1.5rem;

    @include media(768) {
      grid-template-columns: 100%;
      grid-template-rows: auto;
    }

    .slogan-wrapper {
      position: relative;
      width: 100%;
      aspect-ratio: 4 / 3;

      @include media(768) {
        margin: auto;
        width: 80%;
        aspect-ratio: 5 / 3;
      }

      .slogan {
        position: absolute;
        left: 50%;
        padding: 0.5rem;
        width: fit-content;
        color: var(--primary);
        font-weight: 700;
        font-size: 3dvw;
        white-space: nowrap;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

        @include media(768) {
          font-size: 6dvw;
        }

        &:nth-child(odd) {
          background-color: #d9d9d9;
        }

        &:nth-child(even) {
          background-color: #c8c8c8;
        }

        &:nth-child(1) {
          top: 27.5%;
          transform: translate(-50%, -72.5%) rotate(-6deg);

          @include media(768) {
            top: 24%;
            transform: translate(-50%, -76%) rotate(-6deg);
          }
        }

        &:nth-child(2) {
          top: 49%;
          transform: translate(-50%, -51%) rotate(3deg);

          @include media(768) {
            top: 47.5%;
            transform: translate(-50%, -52.5%) rotate(1deg);
          }
        }

        &:nth-child(3) {
          top: 70%;
          transform: translate(-50%, -30%) rotate(-4deg);

          @include media(768) {
            top: 72.5%;
            ransform: translate(-50%, -27.5%) rotate(-4deg);
          }
        }
      }
    }

    .content-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      gap: 1.5rem;

      @include media(768) {
        align-items: center;
      }

      .title {
        position: relative;

        &::before {
          content: 'ABOUT US';
          position: absolute;
          bottom: 100%;
          right: 0;
          font: var(--h4);
          white-space: nowrap;
          @include gradient-text(180, var(--primary), var(--secondary));

          @include media(768) {
            left: 50%;
            right: unset;
            text-align: justify;
            transform: translateX(-50%);
          }
        }
      }

      .description {
        width: clamp(300px, 80%, 400px);
        font: var(--h6);
        text-align: right;

        @include media(768) {
          text-align: justify;
        }
      }
    }
  }

  &.news {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 3rem 1.5rem 6rem;

    @include media(768) {
      padding-bottom: 4.5rem;
    }

    @include media(480) {
      padding-bottom: 3rem;
    }

    .title {
      position: relative;
      text-align: center;

      &::before {
        content: 'NEWS';
        position: absolute;
        bottom: 100%;
        left: 50%;
        font: var(--h4);
        transform: translateX(-50%);
        @include gradient-text(180, var(--primary), var(--secondary));

        @include media(768) {
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
  }

  &.service {
    padding: 3rem 0;
    width: 100%;
    background-color: var(--background-color);

    .container {
      display: grid;
      grid-template-columns: 24% 65%;
      justify-content: space-around;
      align-items: center;

      height: 100%;

      @include media(768) {
        grid-template-columns: 100%;
        justify-items: center;
        gap: 1.5rem;
      }

      .content-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1.5rem;

        @include media(768) {
          align-items: center;
          width: clamp(300px, 60%, 410px);
        }

        .title {
          position: relative;

          @include media(768) {
            width: fit-content;
          }

          &::before {
            content: 'SERVICE';
            position: absolute;
            bottom: 100%;
            left: 0;
            font: var(--h4);
            @include gradient-text(180, var(--primary), var(--secondary));

            @include media(768) {
              left: 50%;
              transform: translateX(-50%);
            }
          }
        }

        .description {
          color: var(--text-color-3);
          text-align: justify;
        }
      }
    }
  }

  &.case {
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 2rem;
    padding: 5rem 1.5rem;

    @include media(480) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .title {
      position: relative;

      @include media(480) {
        order: 1;
      }

      &::before {
        content: 'SUCCESSFUL CASES';
        position: absolute;
        bottom: 100%;
        left: 0;
        font: var(--h4);
        white-space: nowrap;
        @include gradient-text(180, var(--primary), var(--secondary));

        @include media(480) {
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }

    :deep(.btn-view-more) {
      justify-self: flex-end;

      @include media(480) {
        order: 3;
      }
    }

    :deep(.swiper) {
      grid-area: 2/1/3/3;

      @include media(480) {
        order: 2;
      }
    }
  }

  &.partner {
    padding: 5rem 1.5rem;

    @supports (animation-timeline: view()) {
      animation: fade-up ease;
      animation-timeline: view();
      animation-range: cover 0% cover 40%;

      @keyframes fade-up {
        from {
          opacity: 0;
          transform: translateY(100%);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    }

    @include media(768) {
      padding: 5rem 0;
    }

    .title {
      position: relative;
      margin-bottom: 3rem;
      text-align: center;

      &::before {
        content: 'PARTNERS';
        position: absolute;
        bottom: 100%;
        left: 50%;
        font: var(--h4);
        transform: translateX(-50%);
        @include gradient-text(180, var(--primary), var(--secondary));

        @include media(768) {
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
  }
}
</style>
