<template>
  <footer>
    <div class="container">
      <div class="logo-wrapper">
        <Logo />
      </div>
      <div class="info-wrapper">
        <p class="info">ADD | 台中市西區美村路一段22號7樓之5</p>
        <p class="info">TEL | <a href="tel:+886422256161">04-22256161</a></p>
        <p class="info">EMAIL | <a href="mailto:service@autoaiot.com">service@autoaiot.com</a></p>
      </div>
      <div class="cta-wrapper">
        <p class="cta">FOLLOW US</p>
        <div class="link-wrapper">
          <a
            v-for="(icon, index) in socialMedia"
            :key="index"
            class="link"
            :href="icon.link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon :name="icon.name" :class="icon.class" class="icon" />
          </a>
        </div>
      </div>
    </div>
    <p class="copyright">Copyright © 2023 AutoAiot. All Rights Reserved.</p>
  </footer>
</template>

<script setup lang="ts">
import type { IIcon } from '~/utils/interface';
import Logo from '@/assets/images/general/LogoImageText.vue';

const socialMedia = ref<IIcon[]>([
  {
    name: 'ri:facebook-box-line',
    class: 'facebook',
    link: 'https://www.facebook.com/AutoAiOT?locale=zh_TW'
  },
  { name: 'ri:line-line', class: 'line', link: 'https://lin.ee/lElEVsE' },
  { name: 'ri:tiktok-line', class: 'tiktok', link: 'https://www.tiktok.com/@autoaiot0' },
  {
    name: 'ri:youtube-line',
    class: 'youtube',
    link: 'https://www.youtube.com/channel/UC1w8TZnvjZfYYvN8pdBZ2LQ'
  }
]);
</script>

<style lang="scss" scoped>
@import '~/assets/scss/mixin.scss';

footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 30dvh;
  color: var(--text-color-2);
  font: var(--h6);

  .container {
    display: flex;
    justify-content: space-around;
    align-items: center;

    @include media(768) {
      flex-direction: column;
      gap: 1rem;
    }

    a {
      color: var(--text-color-2);
    }

    div {
      @include media(768) {
        text-align: center;
      }

      &.logo-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &.info-wrapper {
        .info + .info {
          margin-top: 1rem;
        }
      }

      &.cta-wrapper {
        .cta + .link-wrapper {
          margin-top: 1rem;
        }

        .link-wrapper {
          .link {
            & + .link {
              margin-left: 15px;
            }

            .icon {
              color: var(--primary);
              font-size: 24px;
            }
          }
        }
      }
    }
  }

  .copyright {
    padding: 1.5rem;
    width: 100%;
    border-top: 1px solid var(--divider-color);
    font-size: var(--small-font-size);
    text-align: center;
  }
}
</style>
