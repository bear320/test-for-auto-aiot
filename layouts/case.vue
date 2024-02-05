<template>
  <div class="layout">
    <!-- <LayoutHeader /> -->
    <LayoutNewHeader />
    <div class="view">
      <slot></slot>
    </div>
    <LayoutFooter />
    <div class="action-wrapper">
      <ButtonRoundedIcon
        :icon="`ri:facebook-box-line`"
        :link="`https://www.facebook.com/AutoAiOT?locale=zh_TW`"
      />
      <ButtonRoundedIcon :icon="`ri:line-line`" :link="`https://lin.ee/lElEVsE`" />
      <ButtonRoundedIcon :icon="`ri:tiktok-line`" :link="`https://www.tiktok.com/@autoaiot0`" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import '~/assets/scss/mixin.scss';

.layout {
  .view {
    margin-top: var(--header-height);
    min-height: calc(100dvh - var(--header-height));

    main {
      margin: auto;
      width: clamp(280px, 100%, 768px);

      .type {
        display: inline-block;
        padding: 0 0.75rem;
        width: fit-content;
        border-radius: 50px;
        background-color: var(--text-color-3);
        color: #fff;
        font-size: var(--normal-font-size);
        line-height: 2;

        &.DI {
          background-color: var((--text-color-3));
        }

        &.CMS {
          background-color: var((--primary));
        }

        &.WEB {
          background-color: var((--secondary));
          color: var(--text-color-2);
        }

        &.SHI {
          background-color: var((--quaternary));
        }

        &.HI {
          background-color: var((--tertiary));
        }
      }

      .title {
        margin: 0.75rem 0;
      }

      .info-wrapper {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin: 0.75rem 0;
        padding-bottom: 1rem;
        border-bottom: 1px solid var(--primary);

        .user {
          width: 3rem;
          aspect-ratio: 1 / 1;
          vertical-align: top;
        }

        .content-wrapper {
          flex: 1;
        }

        .link {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 3rem;
          aspect-ratio: 1 / 1;
          border-radius: 50%;
          background-color: var(--primary);
          color: #fff;
        }
      }
    }

    .recommendation {
      margin-top: 2rem;
      background-color: var(--background-color);

      .container {
        padding: 3rem 1.5rem;

        h2 {
          margin-bottom: 1rem;
          font: var(--h3);
          text-align: center;
        }
      }
    }
  }

  .action-wrapper {
    position: fixed;
    top: 50%;
    right: 2rem;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    gap: 2rem;
    z-index: 95;

    @include media(1366) {
      right: 1.5rem;
    }
  }
}
</style>
