<template>
  <nuxt-link
    :to="props.link"
    @mouseover="iconName = 'icon-park-outline:right-c'"
    @mouseout="iconName = 'radix-icons:dot-filled'"
    class="btn-view-more"
  >
    VIEW MORE
    <Icon :name="iconName" />
  </nuxt-link>
</template>

<script setup lang="ts">
const props = defineProps({
  link: String
});

const iconName = ref<string>('radix-icons:dot-filled');
</script>

<style lang="scss" scoped>
a {
  --gap: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: calc(var(--gap) / 4);
  padding: 0.25rem calc(var(--gap) / 2) 0.25rem var(--gap);
  width: fit-content;
  height: fit-content;
  border: 2px solid var(--text-color-2);
  border-radius: 50px;
  color: var(--text-color-2);
  font: var(--h6);

  &:hover {
    background-color: var(--text-color-2);
    color: #fff;
  }

  svg {
    display: inline-block;
    width: calc(var(--h6-font-size) * var(--line-height));
    aspect-ratio: 1 / 1;
    color: var(--secondary);
  }
}
</style>
