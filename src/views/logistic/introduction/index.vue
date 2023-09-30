<template>
  <maintain-title style="width: 85%" title="关于我们"></maintain-title>
  <div class="intro-title">
    <van-image fit="cover" src="src/assets/logistic/introduction/crayon.png" />
    <div
      style="display: flex; align-items: center; justify-content: space-between"
    >
      <div></div>
      <div style="color: var(--main-color); font-size: 14px">
        ---一个属于技术新人的TEAM
      </div>
    </div>
  </div>
  <div class="intro-content">
    <p>
      我们的故事开始与2023年6月，相信&帮助让我们汇聚在了一起。作为小“新”，我们满怀活力，充满热情。
      “兴盛卫生间”便由此而起。每次高峰期找厕所都是一件可怕的事情，
      经常往返于各个楼层，在抱怨的同时浪费了太多时间。
      我们期望通过我们的努力真正做到
    </p>
    <div style="color: #e56a05; text-align: center">让世界没有难上的厕所</div>
    <p>能帮您提供哪怕一次的“方便”，也是我们很大的荣幸！</p>
    <van-image
      style="margin-top: 10px"
      src="src/assets/logistic/introduction/work.png"
    />
  </div>
</template>
<script setup lang="ts"></script>

<style scoped>
.intro-title {
  width: 80%;
  margin: 15px auto 0;
}
.intro-content {
  width: 80%;
  margin: 10px auto 0;
  font-size: 10px;
  color: #313030;
}
</style>
