import type { flattenDiagnosticMessageText } from 'typescript';
<template>
  <div class="container">
    <Icon
      name="noto:construction"
      :size="appStore.width > 768 ? '10%' : appStore.width > 480 ? '17.5%' : '25%'"
    />
    <p>COMING SOON</p>
  </div>
</template>

<script setup lang="ts">
// store
const appStore = useAppStore();
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  min-height: 60dvh;

  p {
    font: var(--h1);
    text-align: center;
    font-style: italic;
    color: var(--text-color-3);
  }
}
</style>
