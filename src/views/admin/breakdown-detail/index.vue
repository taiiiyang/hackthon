<template>
  <div class="breakdown-detail-wrapper">
    <div class="simple-info">
      <strong>{{ order.floor }}楼</strong>
      <strong>{{ Gender[order.gender] }}厕所</strong>
      <strong style="flex: 1 0 1rem; word-break: break-all">{{ order.equipment }}</strong>
    </div>
    <span style="display: block; margin-bottom: 0.3rem">{{ order.tmCreate }}</span>
    <div class="info">
      <strong>楼层：</strong>
      <span>{{ order.floor }}楼</span>
    </div>
    <div class="info">
      <strong>故障描述：</strong>
      <span style="flex: auto; word-break: break-all">{{ order.info }}</span>
    </div>
    <div class="info">
      <strong>图片：</strong>
      <div class="img-list" ref="imgList">
        <van-image
          v-for="(image, index) in order.imgList"
          :width="imgSize"
          :height="imgSize"
          :src="image"
          @click="showImg($event, index)"
        ></van-image>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import PhotoPreview from 'lego-photo-preview';
import { BreakdownInfo, Gender } from '../types';

const props = defineProps<{
  order: BreakdownInfo;
}>();

const imgSize = ref('1.5rem');
const photoPreview = new PhotoPreview({
  mode: 'single',
});

const showImg = (e, index: number) => {
  photoPreview.open({
    target: e.target,
    url: props.order.imgList[index],
  });
};
</script>

<style scoped lang="scss">
.breakdown-detail-wrapper {
  height: 100%;
  background-color: white;
  padding: 0.5rem;
  .simple-info {
    margin-bottom: 0.3rem;
    display: flex;
    strong {
      margin-right: 0.2rem;
    }
  }

  .info {
    display: flex;
    margin-bottom: 0.3rem;

    strong {
      flex: 0 0 2.3rem;
    }
  }
  .img-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    :deep(.van-image) {
      margin-bottom: 0.3rem;
    }
  }
}
</style>
