<template>
  <LayoutIntroduction :data="intro" />
  <LayoutBreadcrumb />
  <div class="container timestamp">
    <div
      v-for="(milestone, index) in milestoneList"
      :key="index"
      class="milestone"
      :class="{ now: index === milestoneList.length - 1 }"
    >
      <div class="deco-wrapper">
        <span class="time-point">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
          >
            <circle
              cx="10.5"
              cy="10.5"
              r="9"
              stroke="url(#paint0_linear_544_249)"
              stroke-width="3"
            />
            <defs>
              <linearGradient
                id="paint0_linear_544_249"
                x1="10.5"
                y1="0"
                x2="10.5"
                y2="21"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.442708" stop-color="#FF0000" />
                <stop offset="1" stop-color="#FFCC80" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </div>
      <div class="content-wrapper">
        <span class="time">{{ milestone.time }}</span>
        <h2 class="title">{{ milestone.title }}</h2>
        <p class="description">{{ milestone.description }}</p>
      </div>
    </div>
  </div>
  <div class="org-wrapper">
    <div class="container">
      <h2 class="title" data-eng="ORGANISATION">組織架構</h2>
      <p class="description">
        每一個執行，從專業管理到場域規劃及研發皆由專業團隊專業分工執行，完善的前後端機制人員為每位客戶進行服務。
      </p>
      <div v-if="appStore.width > 768" class="dept-wrapper">
        <div v-for="(dept, index) in departmentList" :key="index" class="dept-card">
          <div class="dept-img">
            <component :is="dept.image" />
          </div>
          <h3 class="dept">{{ dept.department }}</h3>
          <p class="description">{{ dept.description }}</p>
        </div>
      </div>
      <Swiper
        v-else
        :modules="[SwiperAutoplay, SwiperPagination]"
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
        :breakpoints="{ 481: { slidesPerView: 2 } }"
      >
        <SwiperSlide v-for="(dept, index) in departmentList" :key="index">
          <div class="dept-img">
            <component :is="dept.image" />
          </div>
          <h3 class="dept">{{ dept.department }}</h3>
          <p class="description">{{ dept.description }}</p>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IIntro, IMilestone, IDepartment } from '@/utils/interface';
import 'swiper/css';
import 'swiper/css/pagination';
import DeptAdmin from '~/assets/images/icon/DeptAdmin.vue';
import DeptPlanning from '~/assets/images/icon/DeptPlanning.vue';
import DeptRD from '~/assets/images/icon/DeptRD.vue';
import DeptSupport from '~/assets/images/icon/DeptSupport.vue';

// store
const appStore = useAppStore();

// metadata
definePageMeta({
  name: '關於我們'
});

// SEO
useSeoMeta({
  title: '關於我們',
  ogTitle: '關於我們',
  description:
    '奧圖數位以應用創新為運行基礎，蘊育跨界的生態圈整合性產品，提供場域智慧服務，我們相信科技來自人性，以人為本進行全方面服務。',
  ogDescription:
    '奧圖數位以應用創新為運行基礎，蘊育跨界的生態圈整合性產品，提供場域智慧服務，我們相信科技來自人性，以人為本進行全方面服務。',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary'
});

// intro
const intro = ref<IIntro>({
  title: '關於我們',
  engTitle: 'ABOUT US',
  description:
    '奧圖數位以應用創新為運行基礎，蘊育跨界的生態圈整合性產品，提供場域智慧服務，我們相信科技來自人性，以人為本進行全方面服務。',
  cover: 'https://i.ibb.co/pXLVCwh/aapa1-8akjn.webp'
});

// 里程碑列表
const milestoneList = ref<IMilestone[]>([
  {
    time: '2016年',
    title: '脈動心聯 成立',
    description: '應用整合服務為核心的新創團隊。'
  },
  {
    time: '2018年',
    title: '工研院 解密科技寶藏',
    description: '與工研院合作大型互動場域建置。'
  },
  {
    time: '2019年',
    title: '5G Fun 基隆 - 饗食零距離',
    description: '與經濟部、資策會合作 5G 驗證計畫。'
  },
  {
    time: '2020年',
    title: '奧圖數位 成立',
    description: '脈動心聯成立以數位創新服務進行推廣的 - 奧圖數位。'
  },
  {
    time: '2021年',
    title: '雲控播導入校園',
    description: '與佳世達科技深入合作，將雲控播系統導入進成大校園。'
  },
  {
    time: '2021年',
    title: '教育部 技職大玩Job',
    description: '與教育部合作開發技職教育宣導網站 - 技職大玩Job。'
  },
  {
    time: '2022年',
    title: '透明直播間 服務驗證',
    description: '再次與資策會合作進行 HUD 透明直播間的服務驗證計畫。'
  },
  {
    time: '至今',
    title: '',
    description: ''
  }
]);

// 部門列表
const departmentList = ref<IDepartment[]>([
  {
    department: '運營發展部',
    description: '各項行政、財會、採購管理及資源整合。',
    image: markRaw(DeptAdmin)
  },
  {
    department: '企劃項目部',
    description: '企劃、規劃撰寫、策展規劃及專案執行。',
    image: markRaw(DeptPlanning)
  },
  {
    department: '科技研發部',
    description: '美術設計及系統軟體前後端開發服務。',
    image: markRaw(DeptRD)
  },
  {
    department: '技術支援部',
    description: '系統測試、維運及故障排除服務。',
    image: markRaw(DeptSupport)
  }
]);
</script>

<style lang="scss" scoped>
@import '~/assets/scss/mixin.scss';

.timestamp {
  padding: 3rem 1.5rem;

  .milestone {
    --size: 45px;
    display: flex;
    gap: 1rem;

    @include media(480) {
      --size: 32px;
    }

    & + .milestone {
      margin-top: 1rem;
    }

    &.now {
      .deco-wrapper::before {
        display: none;
      }

      .content-wrapper {
        .title,
        .description {
          display: none;
        }
      }
    }

    .deco-wrapper {
      position: relative;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 1px;
        background-color: var(--divider-color);
      }

      .time-point {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        width: var(--size);
        height: var(--size);
        border-radius: 50%;
        border: 1px solid var(--divider-color);
        background-color: #fff;

        @include media(480) {
          svg {
            width: 15px;
            height: 15px;
          }
        }
      }
    }

    .content-wrapper {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      gap: 0.5rem;

      .time {
        @include gradient-text(180, var(--primary), var(--secondary));
        font: var(--h3);
        line-height: var(--size);
      }

      .title {
        color: var(--text-color-2);
        font: var(--h3);
      }

      .description {
        min-height: 64px;
        color: var(--text-color-3);
        font: var(--h5);
        text-align: justify;
      }
    }
  }
}

.org-wrapper {
  background-color: var(--background-color);

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 5rem 1.5rem 3rem;

    .title {
      position: relative;
      color: var(--text-color-2);
      font: var(--h2);
      text-align: center;

      &::before {
        content: attr(data-eng);
        position: absolute;
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        font: var(--h4);
        text-wrap: nowrap;
        @include gradient-text(
          $deg: 180,
          $start-color: var(--primary),
          $end-color: var(--secondary)
        );
      }
    }

    .description {
      width: clamp(280px, 100%, 992px);
      color: var(--text-color-3);
      font: var(--h6);
      text-align: center;
    }

    .dept-wrapper {
      position: relative;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      justify-items: center;
      gap: 2rem;
      margin: 1.5rem;
      width: clamp(280px, 100%, 992px);

      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 1px;
        height: 100%;
        background-color: var(--divider-color);
      }

      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 1px;
        background-color: var(--divider-color);
      }

      .dept-card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        margin: 1.5rem;
        width: 300px;

        .dept-img {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 10rem;
          border-radius: 50%;
          background-color: #fff;
          aspect-ratio: 1 / 1;

          img {
            width: 65%;
          }
        }

        .dept {
          color: var(--text-color-2);
          font: var(--h3);
        }

        .description {
          color: var(--text-color-3);
          font: var(--h5);
          text-align: justify;
        }
      }
    }

    .swiper {
      padding-top: 2rem;
      width: 100%;
      height: fit-content;

      .swiper-wrapper {
        .swiper-slide {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
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
          }

          .dept-img {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 10rem;
            border-radius: 50%;
            background-color: #fff;
            aspect-ratio: 1 / 1;

            img {
              width: 65%;
            }
          }

          .dept {
            color: var(--text-color-2);
            font: var(--h3);
          }

          .description {
            color: var(--text-color-3);
            font: var(--h5);
            text-align: center;
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
  }
}
</style>
