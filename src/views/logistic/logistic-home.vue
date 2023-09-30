<template>
  <div class="logistic-container">
    <div class="logistic-title">管理中心</div>
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

<style lang="scss" scoped>
.logistic-container {
  .logistic-content {
    width: 80%;
    margin: 20px auto 0;
  }
}

.logistic-title {
  text-align: center;
  display: flex;
  font-weight: bold;
  font-size: 0.5rem !important;
  color: var(--main-color);
}
</style>
