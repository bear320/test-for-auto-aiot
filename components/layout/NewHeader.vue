<template>
  <input type="checkbox" id="menu-switch" v-model="checked" />
  <header>
    <!-- Desktop -->
    <div v-if="appStore.width > 768" class="container menu">
      <nuxt-link to="/" class="logo-wrapper">
        <LogoImage class="logo" />
      </nuxt-link>
      <nav class="nav-bar">
        <div v-for="(nav, index) in navList" :key="index" class="nav-item">
          <nuxt-link :to="nav.link" class="category">
            {{ nav.name }}
            <Icon
              v-if="nav.dropdown.length > 0"
              name="material-symbols:keyboard-arrow-down-rounded"
              class="icon-arrow-down"
            />
          </nuxt-link>
          <div class="link-wrapper">
            <nuxt-link v-for="(subNav, index) in nav.dropdown" :key="index" :to="subNav.link">
              {{ subNav.item }}
            </nuxt-link>
          </div>
        </div>
      </nav>
      <ButtonContactUs />
    </div>

    <!-- Mobile -->
    <div v-else class="container menu-mobile">
      <nuxt-link to="/" class="logo-wrapper">
        <LogoImage class="logo" />
      </nuxt-link>
      <label for="menu-switch">
        <Icon name="line-md:menu" size="36" style="color: var(--primary)" />
      </label>
      <div class="sidebar">
        <label for="menu-switch">
          <Icon name="line-md:remove" size="36" />
        </label>
        <nav class="nav-bar">
          <div v-for="(nav, index) in navList" :key="index" class="nav-item">
            <nuxt-link
              :to="nav.link"
              class="category"
              :class="{ active: !nav.collapsed }"
              @click="
                () => {
                  if (nav.dropdown.length !== 0) {
                    navList.forEach((nav, navIndex) => {
                      if (index === navIndex) {
                        nav.collapsed = !nav.collapsed;
                      } else {
                        nav.collapsed = true;
                      }
                    });
                  } else {
                    navList.forEach((nav) => (nav.collapsed = true));
                    checked = false;
                  }
                }
              "
            >
              {{ nav.name }}
              <Icon
                v-if="nav.dropdown.length > 0"
                :name="nav.collapsed ? 'ic:round-plus' : 'ic:round-minus'"
                class="icon-collapse"
              />
            </nuxt-link>
            <div v-show="!nav.collapsed" class="link-wrapper">
              <nuxt-link
                v-for="(subNav, index) in nav.dropdown"
                :key="index"
                :to="subNav.link"
                @click="
                  () => {
                    navList.forEach((nav) => (nav.collapsed = true));
                    checked = false;
                  }
                "
              >
                {{ subNav.item }}
              </nuxt-link>
            </div>
          </div>
        </nav>
        <ButtonContactUs class="btn-contact-us" />
        <p class="copy-right">
          Copyright © 2023 AutoAiot<br />
          All Rights Reserved.
        </p>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import type { ILink } from '~/utils/interface';
import LogoImage from '@/assets/images/general/LogoImage.vue';

// store
const appStore = useAppStore();

// ref: checkbox
const checked = ref<boolean>(false);

// interface: INav
interface INav extends ILink {
  collapsed: boolean;
}

// navbar 列表
const navList = ref<INav[]>([
  {
    name: '資訊公告',
    link: '',
    dropdown: [
      {
        item: '公司資訊',
        link: '/news/company'
      },
      {
        item: '商圈資訊',
        link: '/news/shopping-area'
      },
      {
        item: '科技新知',
        link: '/news/tech'
      }
    ],
    collapsed: true
  },
  {
    name: '關於我們',
    link: '/about',
    dropdown: [],
    collapsed: true
  },
  {
    name: '奧圖服務',
    link: '',
    dropdown: [
      {
        item: '服務介紹',
        link: '/service'
      },
      {
        item: '服務內容',
        link: '/service/offering'
      }
    ],
    collapsed: true
  },
  {
    name: '成功案例',
    link: '/cases',
    dropdown: [],
    collapsed: true
  }
]);
</script>

<style lang="scss" scoped>
@import '~/assets/scss/mixin.scss';

#menu-switch {
  position: absolute;
  top: 0;
  left: 0;
  display: none;
  appearance: checkbox;
  -webkit-appearance: checkbox;

  & + header .container .sidebar {
    left: 110%;
    transition: all 0.5s ease-in-out;
  }

  &:checked + header .container .sidebar {
    left: 40%;
    transition: all 0.5s ease-in-out;
  }
}

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #ffffff50;
  backdrop-filter: blur(10px);
  z-index: 99;

  .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: var(--header-height);

    .logo-wrapper {
      height: 100%;

      .logo {
        height: 100%;
      }
    }

    .nav-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: clamp(450px, 50%, 600px);
      font: var(--h6);

      .nav-item {
        position: relative;

        &:hover {
          .category::after {
            transform: translateX(-50%) scaleX(1);
            transition: all 0.5s;
          }

          .icon-arrow-down {
            transform: rotate(180deg);
          }

          .link-wrapper {
            display: flex;
          }
        }

        .category {
          position: relative;

          &::after {
            content: '';
            position: absolute;
            top: calc(100% + 5px);
            left: 50%;
            width: 102%;
            height: 0.125rem;
            background-color: var(--primary);
            transform: translateX(-50%) scaleX(0);
            transition: all 0.5s;
          }

          .icon-arrow-down {
            color: var(--primary);
          }
        }

        .link-wrapper {
          position: absolute;
          top: 100%;
          left: 50%;
          translate: -50% 0;
          display: none;
          flex-direction: column;
          gap: 0.5rem;
          padding-top: 1rem;
          width: 110%;

          a {
            display: block;
            border-radius: 0.5rem;
            background-color: var(--text-color-2);
            color: #fff;
            line-height: 2.5;
            text-align: center;

            &:hover {
              background-color: var(--primary);
            }
          }
        }
      }
    }
  }

  .menu-mobile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: var(--header-height);

    * {
      user-select: none;
    }

    .logo-wrapper {
      height: 100%;

      .logo {
        height: 100%;
      }
    }

    .sidebar {
      position: absolute;
      top: 0;
      left: 40%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
      padding: 1.5rem 0;
      width: 60dvw;
      height: 100dvh;
      border-radius: 2rem 0 0 2rem;
      background-color: var(--background-color);
      color: var(--text-color-2);
      font: var(--h2);
      font-weight: 400;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

      label {
        width: 100%;
        padding: 0 1rem;
        text-align: right;
      }

      .nav-bar {
        flex: 1;
        display: flex;
        flex-direction: column;
        width: 100%;
        line-height: 2.5;
        text-align: center;

        .nav-item {
          a.category {
            position: relative;
            display: block;
            padding: 0 1rem;
            width: 100%;

            &:active,
            &.active {
              background-color: #555555;
              color: #fff;
            }

            .icon-collapse {
              position: absolute;
              top: 50%;
              right: 1rem;
              translate: 0 -50%;

              &:active {
                color: #fff;
              }
            }
          }

          .link-wrapper {
            display: flex;
            flex-direction: column;

            a {
              color: var(--text-color-3);
              font: var(--h3);
              font-weight: 400;
              text-decoration: underline;
              text-underline-offset: 0.5rem;
              line-height: 2.5;
            }
          }
        }
      }

      .btn-contact-us {
        margin: auto;
        border: none;
        background-color: var(--primary);
        color: #fff;
        font: var(--h4);
        font-weight: 400;

        &:active {
          background-color: var(--text-color-2);
        }
      }

      .copy-right {
        padding: 0 1rem;
        color: var(--text-color-3);
        font: var(--h5);
        font-weight: 300;
        text-align: center;
        line-height: 1.5;

        @include media(480) {
          font: var(--h6);
        }
      }
    }
  }
}
</style>
