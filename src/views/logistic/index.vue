<template>
  <div class="logistic-container">
    <div class="logistic-title">
      管理中心
    </div>
    <div class="logistic-content">
      <logistic-list title="在线修理工" icon="phone" path="/repair"></logistic-list>
      <logistic-list title="阿姨帮帮忙" icon="comment" path="/help"></logistic-list>
      <logistic-list title="修改信息" icon="setting" path="/info"></logistic-list>
      <logistic-list title="关于我们" icon="gift" path="/introduction"></logistic-list>
    </div>
  </div>

</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
  @import "../../styles/base.css";
  .logistic-container{
    .logistic-title{
      margin: 0px auto 0;
      text-align: center;
      color: #6478d3;
      font-size: 16px;
      font-weight: bold;
    }
    .logistic-content{
      width: 80%;
      margin: 20px auto 0;
    }

  }

</style>
