<template>
  <div class="container">
    <div class="select-wrapper" @click="isDropdownShow = !isDropdownShow">
      <Icon name="uil:list-ul" size="24" />
      <p class="current-type">{{ props.type }}</p>
      <Icon
        :name="isDropdownShow ? 'iconamoon:arrow-up-2-bold' : 'iconamoon:arrow-down-2-bold'"
        size="24"
      />
      <div v-show="isDropdownShow" class="dropdown-wrapper">
        <p
          v-for="(type, index) in typeList"
          :key="index"
          class="option"
          @click.stop="
            () => {
              emits('handleType', type);
              isDropdownShow = false;
            }
          "
        >
          {{ type }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { caseType } from '@/utils/interface';

// props
const props = defineProps({
  type: String
});

// emits
const emits = defineEmits(['handleType']);

// 顯示 / 關閉 dropdown
const isDropdownShow = ref<boolean>(false);

// 案例分類
const typeList = ref<caseType[]>([
  caseType.ALL,
  caseType.DI,
  caseType.CMS,
  caseType.WEB,
  caseType.SHI,
  caseType.HI
]);
</script>

<style lang="scss" scoped>
@import '~/assets/scss/mixin.scss';

.container {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @include media(768) {
    justify-content: center;
  }

  .select-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.5rem 0.75rem;
    width: 280px;
    height: 3rem;
    border-radius: 0.5rem;
    border: 1px solid var(--text-color-3);
    background-color: var(--text-color-3);
    background-color: #fff;
    color: var(--text-color-3);
    z-index: 5;

    p {
      font: var(--h4);
      font-weight: 400;
    }

    .current-type {
      flex: 1;
    }

    .dropdown-wrapper {
      position: absolute;
      top: calc(100% + 0.5rem);
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      z-index: 5;

      .option {
        padding: 0.625rem 1rem;
        border-radius: 0.5rem;
        background-color: var(--text-color-2);
        color: #fff;
        font: var(--h5);

        &:hover,
        &:active {
          background-color: var(--primary);
        }

        & + .option {
          margin-top: 0.375rem;
        }
      }
    }
  }
}
</style>
