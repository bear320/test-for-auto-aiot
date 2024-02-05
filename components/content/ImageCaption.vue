<template>
  <figure>
    <slot name="image" />
    <figcaption>
      <Icon name="ph:triangle-fill" />
      <slot name="caption" />
    </figcaption>
  </figure>
</template>

<style lang="scss" scoped>
figure {
  figcaption {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    margin: auto;
    width: clamp(280px, 100%, 768px);
    color: var(--text-color-3);
    text-align: center;

    p {
      margin: 0 !important;
    }
  }
}
</style>

<style lang="scss">
figure {
  padding: 1rem 0;

  figcaption {
    p {
      margin: 0 !important;
    }
  }
}
</style>
