<template>
  <div class="callout-wrapper" :class="props.type">
    <Icon
      :name="props.type === 'note' ? 'fluent:note-24-regular' : 'fluent:warning-24-regular'"
      size="24"
    />
    <slot name="content" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({ type: String });
</script>

<style lang="scss" scoped>
.callout-wrapper {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: 0.5rem;

  &.note {
    background-color: var(--background-color);
  }

  &.warning {
    background-color: var(--secondary);
  }

  svg,
  p {
    flex-shrink: 0;
  }
}
</style>

<style lang="scss">
.callout-wrapper {
  p {
    margin: 0;
    line-height: 2;
  }
}
</style>
