import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Toast, {
    transition: 'Vue-Toastification__fade',
    position: 'top-right',
    timeout: 5000,
    pauseOnHover: true,
    showCloseButtonOnHover: true,
    closeButton: 'button',
    icon: true,
    maxToasts: 2
  });
});
