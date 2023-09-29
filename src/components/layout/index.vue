<template>
  <div class="main">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component"></component>
      </keep-alive>
    </router-view>
    <tab-views></tab-views>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.main {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 1.3333rem); // 底部导航条为 1.333rem
}
</style>
