<template>
  <nuxt-link :to="props.link" class="btn-arrow-link">
    <Icon name="icon-park-outline:right" />
  </nuxt-link>
</template>

<script setup lang="ts">
const props = defineProps({
  link: String
});
</script>

<style lang="scss" scoped>
a {
  position: relative;
  display: block;
  width: 27px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  border: 1px solid var(--primary);
  color: var(--primary);
  font-size: var(--h3-font-size);
  font-weight: 400;
  line-height: 1;

  &:hover {
    background-color: var(--primary);
    color: #fff;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
