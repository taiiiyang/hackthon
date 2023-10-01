<template>
  <div class="title">{{ title }}</div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<style scoped lang="scss">
.title {
  display: flex;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
  justify-content: center;
  text-align: 15px;
  font-weight: bold;
  font-size: 0.5rem;
  color: var(--main-color);
}
</style>
