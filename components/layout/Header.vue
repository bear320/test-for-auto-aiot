<template>
  <header>
    <nav class="container">
      <nuxt-link to="/">
        <LogoImage class="logo" />
      </nuxt-link>
      <div v-if="appStore.width > 768" class="menu">
        <div v-for="(navItem, index) in navList" :key="index" class="link-wrapper">
          <nuxt-link :to="navItem.link" class="link">
            {{ navItem.name }}
            <Icon
              v-if="navItem.dropdown.length > 0"
              name="material-symbols:keyboard-arrow-down-rounded"
              class="arrow"
            />
          </nuxt-link>
          <div class="dropdown">
            <nuxt-link
              v-for="(item, index) in navItem.dropdown"
              :key="index"
              :to="item.link"
              class="item"
            >
              {{ item.item }}
            </nuxt-link>
          </div>
        </div>
      </div>
      <div v-else :class="{ expended: isMobileNavShow }" class="menu-mobile" ref="refMobileNav">
        <Icon
          name="line-md:remove"
          :size="appStore.width > 480 ? '48' : '36'"
          class="icon-close"
          @click="
            () => {
              isMobileNavShow = !isMobileNavShow;
              navList.forEach((nav) => (nav.collapsed = true));
            }
          "
        />
        <ul class="link-wrapper">
          <li v-for="(navItem, index) in navList" :key="index" class="link">
            <nuxt-link
              :to="navItem.link"
              :class="{ active: !navItem.collapsed }"
              @click="
                () => {
                  if (navItem.dropdown.length !== 0) {
                    navList.forEach((nav, navIndex) => {
                      if (index === navIndex) {
                        nav.collapsed = !nav.collapsed;
                      } else {
                        nav.collapsed = true;
                      }
                    });
                  } else {
                    navList.forEach((nav) => (nav.collapsed = true));
                    isMobileNavShow = !isMobileNavShow;
                  }
                }
              "
            >
              {{ navItem.name }}
              <Icon
                v-show="navItem.dropdown.length !== 0"
                :name="navItem.collapsed ? 'ic:round-plus' : 'ic:round-minus'"
              />
            </nuxt-link>
            <ul v-if="navItem.dropdown.length !== 0 && !navItem.collapsed" class="dropdown-wrapper">
              <li
                v-for="(subItem, index) in navItem.dropdown"
                :key="index"
                class="dropdown-link"
                @click="
                  () => {
                    isMobileNavShow = !isMobileNavShow;
                    navItem.collapsed = true;
                  }
                "
              >
                <nuxt-link :to="subItem.link">{{ subItem.item }}</nuxt-link>
              </li>
            </ul>
          </li>
        </ul>
        <ButtonContactUs class="btn-contact-us" />
        <p class="copy-right">
          Copyright © 2023 AutoAiot<br />
          All Rights Reserved.
        </p>
      </div>
      <ButtonContactUs v-if="appStore.width > 768" />
      <Icon
        v-if="appStore.width <= 768"
        name="line-md:menu"
        :size="appStore.width > 480 ? '48' : '36'"
        color="#ff0000"
        class="icon-menu"
        @click="isMobileNavShow = !isMobileNavShow"
      />
    </nav>
  </header>
</template>

<script setup lang="ts">
import type { ILink } from '~/utils/interface';
import LogoImage from '@/assets/images/general/LogoImage.vue';

// store
const appStore = useAppStore();

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

// ref: 行動版 navbar
const refMobileNav = ref(null);

// 切換行動版 navbar
const isMobileNavShow = ref<boolean>(false);
</script>

<style lang="scss" scoped>
@import '~/assets/scss/mixin.scss';

header {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: var(--header-height);
  background-color: #ffffff50;
  backdrop-filter: blur(10px);
  z-index: 99;

  nav.container {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.5rem;
    height: 100%;

    .logo {
      height: calc(var(--header-height) * 0.7);
    }

    .menu {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: clamp(450px, 50%, 600px);
      font: var(--h6);

      .link-wrapper {
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

        .link {
          .arrow {
            color: var(--primary);
          }
        }

        &:hover {
          &::after {
            transform: translateX(-50%) scaleX(1);
            transition: all 0.5s;
          }

          .arrow {
            transform: rotate(180deg);
          }

          .dropdown {
            display: flex;
          }
        }

        .dropdown {
          position: absolute;
          top: 100%;
          left: 50%;
          translate: -50% 0;
          display: none;
          flex-direction: column;
          gap: 0.5rem;
          padding-top: 1rem;
          width: 110%;

          .item {
            border-radius: 0.5rem;
            background-color: var(--text-color-2);
            color: #fff;
            line-height: 2.25;
            text-align: center;

            &:hover {
              background-color: var(--primary);
            }
          }
        }
      }
    }

    .menu-mobile {
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 1.5rem;
      padding: 1.5rem 0;
      width: 60%;
      height: 100dvh;
      border-radius: 2rem 0 0 2rem;
      background-color: var(--background-color);
      color: var(--text-color-2);
      font: var(--h2);
      font-weight: 400;
      transform: translateX(110%);
      transition: all 0.5s ease-in-out;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

      @include media(480) {
        gap: 0.75rem;
        width: 65%;
      }

      &.expended {
        transform: translateX(0);
        transition: all 0.5s ease-in-out;
      }

      .icon-close {
        align-self: flex-end;
        margin-right: 1rem;
      }

      ul.link-wrapper {
        flex-grow: 1;
        font: var(--h2);
        font-weight: 400;

        * {
          user-select: none;
        }

        li.link {
          a {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 1.5rem;
            line-height: 2.5;

            &:active,
            &.active {
              background-color: #555555;
              color: #fff;
            }

            svg {
              position: absolute;
              top: 50%;
              right: 1.5rem;
              transform: translateY(-50%);

              &:active {
                color: #fff;
              }
            }
          }

          ul.dropdown-wrapper {
            li.dropdown-link {
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
          margin-top: 1rem;
          font: var(--h6);
        }
      }
    }
  }

  // .icon {
  //   color: var(--text-color-2);
  // }
}
</style>
