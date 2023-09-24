<template>
  <div>
    <div>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component"></component>
        </keep-alive>
      </router-view>
    </div>
    <tab-views></tab-views>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
