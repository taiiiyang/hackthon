<template>
  <div class="talk-container">
    <div class="talk-title">吐槽室</div>
    <talk-header></talk-header>
    <talk-content></talk-content>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.talk-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  .talk-title {
    display: flex;
    margin-top: .1rem;
    justify-content: center;
    text-align: 15px;
    font-weight: bold;
    font-size: .5rem;
    color: var(--main-color);
  }
}
</style>
