<template>
  <div class="logistic-container">
    <page-header title="管理中心"></page-header>
    <div class="logistic-content">
      <logistic-list
        title="在线修理工"
        icon="phone"
        path="/logistic/repair"
      ></logistic-list>
      <logistic-list
        title="阿姨帮帮忙"
        icon="comment"
        path="/logistic/help"
      ></logistic-list>
      <logistic-list
        title="修改信息"
        icon="setting"
        path="/logistic/info"
      ></logistic-list>
      <logistic-list
        title="关于我们"
        icon="gift"
        path="/logistic/introduction"
      ></logistic-list>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.logistic-container {
  height: 100%;
  display: flex;
  flex-grow: 1;
  .logistic-content {
    width: 80%;
    margin: 20px auto 0;
  }
}
</style>
