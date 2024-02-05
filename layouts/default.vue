<template>
  <div class="layout">
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

<style lang="scss" scoped>
@import '~/assets/scss/mixin.scss';

.layout {
  .view {
    margin-top: var(--header-height);
    min-height: calc(100dvh - var(--header-height));
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
