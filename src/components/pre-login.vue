<template>
  <div class="pre-login-container">
    <div class="toilet"></div>
    <div class="slogan"></div>
    <van-button class="next-step" @click="nextStep" round>下一步</van-button>
  </div>
</template>

<script setup lang="ts">
import router from '@/router';

const nextStep = () => {
  router.push('/login');
};
</script>

<style scoped lang="scss">
.pre-login-container {
  height: 100vh;
  background-image: url('../assets/common/home.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .toilet {
    position: absolute;
    bottom: 6rem;
    left: 0.5rem;
    font-size: 3rem;
    background-image: url('../assets/common/xs-toilet.webp');
    background-repeat: no-repeat;
    background-size: cover;
    width: 4rem;
    height: 1rem;
  }

  .slogan {
    position: absolute;
    bottom: 5rem;
    left: 0.5rem;
    background-image: url('../assets/common/xs-slogan.webp');
    background-repeat: no-repeat;
    background-size: cover;
    width: 5rem;
    height: 0.5rem;
  }

  .next-step {
    width: 3rem;
    position: absolute;
    bottom: 1rem;
    left: 0.5rem;
    color: var(--main-color);
    font-weight: bold;
  }
}
</style>
