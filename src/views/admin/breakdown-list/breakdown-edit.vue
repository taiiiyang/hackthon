<template>
  <div class="pit-wrapper">
    <div class="simple-info">
      <span>{{ order.floor }}楼</span>
      <span>{{ Gender[order.gender] }}厕所</span>
      <span>{{ order.equipment }}</span>
    </div>
    <span style="padding-left: 0.3rem">请选择</span>
    <div class="pit-content">
      <svg-icon
        :class="{ active: active === index }"
        v-for="index in [1, 2, 3]"
        name="toilet-leisure"
        :size="size"
        @click="togglePit(index)"
      ></svg-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { BreakdownInfo, Gender } from '../types';

const props = defineProps<{
  order: BreakdownInfo;
}>();
const emit = defineEmits(['changePit']);
const size = ref('1.5rem');
const active = ref(0);

onMounted(() => {
  if (typeof props.order.pit === 'number') active.value = props.order.pit;
});
const togglePit = (index: number) => {
  active.value = index;
  emit('changePit', index);
};
</script>

<style scoped lang="scss">
.pit-wrapper {
  margin-top: 0.3rem;
  padding: 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .simple-info {
    padding-bottom: 0.3rem;
    display: flex;
    font-weight: bold;
    height: 0.4rem;
    padding-left: 0.3rem;
    line-height: 0.4rem;
    span {
      margin-right: 0.5em;
    }
    span:last-child {
      margin-right: 0;
    }
  }

  .pit-content {
    display: flex;
    margin-top: 0.3rem;
    justify-content: space-around;

    svg {
      box-sizing: border-box;
    }

    .active {
      border: 1px solid var(--main-color);
    }
  }
}
</style>
