<template>
  <nuxt-link :to="props.link" target="_blank" class="btn-icon">
    <Icon :name="(props.icon as string)" size="24" />
  </nuxt-link>
</template>

<script setup lang="ts">
const props = defineProps({
  link: String,
  icon: String
});
</script>

<style lang="scss" scoped>
a {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  border-radius: 50%;
  border: 1px solid #fff;
  background-color: #fff;
  color: var(--primary);
  aspect-ratio: 1 / 1;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  transition: all 0.5s;

  &:hover,
  &:active {
    border-color: var(--primary);
    background-color: var(--primary);
    color: #fff;
    transition: all 0.5s;

    &::before {
      animation: pulsing 2s ease-out 0s infinite;
    }

    &::after {
      animation: pulsing 2s ease-out 1s infinite;
    }
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background-color: var(--primary);
    opacity: 0.4;
    z-index: -1;
  }

  @keyframes pulsing {
    to {
      transform: scale(2);
      opacity: 0;
    }
  }
}
</style>
