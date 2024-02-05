<template>
  <nav class="container">
    <ul>
      <li>
        <nuxt-link to="/">
          <Icon name="ion:home" size="18" />
        </nuxt-link>
      </li>
      <li v-for="(crumb, index) in handleGetBreadcrumb()" :key="index">
        <nuxt-link :to="crumb.path">
          {{ crumb.name }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import type { RouteRecordNormalized } from 'vue-router';

// route & router
const route = useRoute();
const router = useRouter();

const handleGetBreadcrumb = () => {
  const fullpath = route.fullPath.substring(1);
  const crumbs = fullpath.split('/');
  const breadcrumb: RouteRecordNormalized[] = [];
  let path: string = '';
  crumbs.forEach((crumb) => {
    if (crumb) {
      path = `${path}/${crumb}`;
      const newCrumb: RouteRecordNormalized = router
        .getRoutes()
        .find((r) => r.path === path) as RouteRecordNormalized;
      breadcrumb.push(newCrumb);
    }
  });
  return breadcrumb;
};
</script>

<style lang="scss" scoped>
nav {
  padding: 0.5rem 1.5rem;

  ul {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    li {
      position: relative;
      line-height: 18px;

      &::after {
        content: '>';
        position: absolute;
        top: 50%;
        left: calc(100% + 0.75rem);
        transform: translate(-0.25rem, -50%);
        color: var(--primary);
      }

      &:nth-last-child(1) {
        &::after {
          display: none;
        }
        a {
          color: var(--text-color-3);
        }
      }

      a {
        color: var(--primary);
      }
    }
  }
}
</style>
