import { defineStore } from 'pinia';

export const useAppStore = defineStore(
  'app',
  () => {
    const { width, height } = useWindowSize();
    return { width, height };
  },
  { persist: true }
);
