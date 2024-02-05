<template>
  <div :style="`background-color: ${props.data!.backgroundColor};`">
    <div
      class="container"
      :class="{'no-pic':props.data!.contentAlign === 'no-pic','align-right':props.data!.contentAlign === 'right','with-bgc':props.data!.backgroundColor}"
    >
      <div class="content-wrapper">
        <h2 class="title" :data-index="$props.data!.index">{{ props.data!.title }}</h2>
        <p class="description">{{ props.data!.description }}</p>
        <p class="sample" v-if="props.data!.hyperlink !== '' && props.data!.hypertext !== ''">
          參考案例：
          <nuxt-link :to="props.data!.hyperlink">{{ props.data!.hypertext }}</nuxt-link>
        </p>
      </div>
      <div v-if="props.data!.imageUrl !== ''" class="image-wrapper">
        <nuxt-img :src="props.data!.imageUrl" :alt="props.data!.title" :title="props.data!.title" />
      </div>
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
@import '~/assets/scss/mixin.scss';

.container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: end;
  gap: 2rem;
  padding: 5rem 1.5rem;

  @include media(768) {
    padding: 2.5rem 1.5rem;
    width: clamp(280px, 100%, 600px);
    text-align: center;
  }

  // @include media(480) {
  //   padding: 2rem 1.5rem;
  // }

  &.no-pic {
    display: block;
    padding: 3rem 1.5rem;

    .content-wrapper {
      padding-left: calc(42px + 1rem);

      @include media(768) {
        padding-left: 0;
      }

      .title {
        &::before {
          top: 50%;
          bottom: unset;
          left: unset;
          right: calc(100% + 1rem);
          transform: translateY(-50%);

          @include media(768) {
            top: unset;
            bottom: 100%;
            left: 50%;
            right: unset;
            transform: translateX(-50%);
          }
        }
      }
      .description {
        color: #fff;
      }
    }

    .image-wrapper {
      display: none;
    }
  }

  &.align-right {
    .content-wrapper {
      order: 2;
    }

    .image-wrapper {
      order: 1;
    }
  }

  &.with-bgc {
    @include media(768) {
      padding: 3.5rem 1.5rem;
    }

    @include media(480) {
      padding: 3rem 1.5rem;
    }
  }

  .content-wrapper {
    grid-column: span 2;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    @include media(768) {
      grid-column: span 5;
      order: 2;
    }

    .title {
      position: relative;
      color: var(--primary);

      @include media(768) {
        margin-top: 1.25rem;
      }

      &::before {
        content: attr(data-index);
        position: absolute;
        bottom: 100%;
        left: 0;
        color: var(--divider-color);

        @include media(768) {
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }

    .description {
      color: var(--text-color-2);
      font: var(--h6);

      @include media(768) {
        text-align: justify;
      }
    }

    .sample {
      color: var(--text-color-2);
      font: var(--h6);
      font-weight: 700;

      a {
        color: var(--primary);
        text-decoration: underline;
      }
    }
  }

  .image-wrapper {
    grid-column: span 3;
    width: 100%;

    @include media(768) {
      grid-column: span 5;
      order: 1;
    }

    img {
      width: 100%;
      aspect-ratio: 16 / 9;
      border-radius: 0.5rem;
      border: 1px solid var(--primary);
      object-fit: cover;
      background-color: var(--background-color);
      vertical-align: top;
    }
  }
}
</style>
