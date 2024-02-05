<template>
  <nuxt-link to="/contact">商洽聯繫</nuxt-link>
</template>

<style lang="scss" scoped>
a {
  position: relative;
  padding: 0.25rem 1.75rem;
  width: fit-content;
  height: fit-content !important;
  border-radius: 50px;
  border: 1.5px solid var(--primary);
  font: var(--h6);

  &:hover,
  &:active {
    background-color: var(--primary);
    color: #fff;

    &::before {
      background-color: var(--primary);
      animation: pulsing 2s ease-out 0s infinite;
    }

    &::after {
      background-color: var(--primary);
      animation: pulsing 2s ease-out 1s infinite;
    }
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    opacity: 0.4;
    z-index: -1;
  }

  @keyframes pulsing {
    to {
      transform: scaleX(1.35) scaleY(1.8);
      opacity: 0;
    }
  }
}
</style>
