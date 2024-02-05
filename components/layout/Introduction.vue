<template>
  <div class="container">
    <div class="content-wrapper" :style="`background-image: url(${props.data!.cover});`">
      <h1 class="title" :data-eng="props.data!.engTitle">{{ props.data!.title }}</h1>
      <p v-if="props.data!.description" class="description">{{ props.data!.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
// props
const props = defineProps({
  data: Object
});
</script>

<style lang="scss" scoped>
.container {
  padding: 1rem 0;

  .content-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.25rem;
    padding: 2rem 1.5rem;
    height: 250px;
    border-radius: 2rem 2rem 0 0;
    background: var(--background-color) no-repeat center/cover;
    color: #fff;

    .title {
      position: relative;
      font: var(--h2);
      text-align: center;

      &::before {
        content: attr(data-eng);
        position: absolute;
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        color: #fff;
        font: var(--h4);
        text-wrap: nowrap;
      }
    }

    .description {
      width: clamp(280px, 100%, 992px);
      font: var(--h5);
      text-align: center;
    }
  }
}
</style>
