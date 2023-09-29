<template>
  <div class="talk-header">
    <Danmaku
      ref="danmakuRef"
      class="danmaku"
      :danmus="danmus"
      :loop="true"
      :speeds="50"
      :randomChannel="true"
      :fontSize="15"
      :top="10"
      :isSuspend="true"
      :extraStyle="extraStyle"
    ></Danmaku>
  </div>
</template>

<script setup lang="ts">
import Danmaku from 'danmaku-vue';
import { ref, onMounted, nextTick } from 'vue';
import api from '../api';

const danmakuRef = ref<InstanceType<typeof Danmaku>>(null);

const danmus = ref<string[]>(['']);

onMounted(async () => {
  const res = await api.getDanmu<string[]>();
  // 触发刷新
  danmus.value = [];
  danmus.value = res.data;
});

nextTick(() => {
  danmakuRef.value.play();
});

const extraStyle = ref(
  `background-color: #6478d366; 
  height: .4rem; 
  width: auto; 
  display: block; 
  color: rgba(0,0,0, .77); 
  font-size: 1px;
  text-align: center;
  border-radius: 15px;
  box-sizing: content-box;
  padding: 5px;
  `,
);
</script>

<style scoped lang="scss">
.talk-header {
  margin-top: 0.4rem;
  color: var(--main-color);

  .danmaku {
    width: 100%;
    height: 3.5rem;
  }

  :deep(.move) {
    line-height: 0.4rem !important;
  }
}
</style>
