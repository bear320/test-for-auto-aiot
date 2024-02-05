<template>
  <br v-for="(item, index) in Number(props.line)" :key="index" />
</template>

<script setup lang="ts">
const props = defineProps({ line: Number });
</script>
