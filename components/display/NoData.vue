<template>
  <div class="container no-data">
    <Icon
      name="fluent:mail-inbox-dismiss-24-filled"
      :size="appStore.width > 768 ? '10%' : appStore.width > 480 ? '17.5%' : '25%'"
    />
    <p>沒有內容</p>
  </div>
</template>

<script setup lang="ts">
// store
const appStore = useAppStore();
</script>

<style lang="scss" scoped>
.no-data {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  min-height: 50dvh;
  color: var(--divider-color);

  p {
    font: var(--h3);
    font-weight: 400;
  }
}
</style>
