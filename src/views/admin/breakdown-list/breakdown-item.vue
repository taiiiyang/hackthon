<template>
  <div class="breakdown-item-card">
    <div class="breakdown-info">
      <div class="simple-info">
        <span>{{ order.floor }}楼</span>
        <span>{{ Gender[order.gender] }}厕所</span>
        <span class="ellipsis">{{ order.equipment }}</span>
        <span>{{ order.tmCreate }}</span>
      </div>
      <div v-if="role === 1" class="detail-info">
        <strong>故障描述：</strong>
        <span class="ellipsis">{{ order.info }}</span>
      </div>
      <div v-else style="text-align: center; height: 1rem; line-height: 1rem">
        <span>{{ order.equipment }}</span>
      </div>
      <van-image
        width="2rem"
        height="2rem"
        :src="order.imgList[0]"
        v-if="role === 1"
      ></van-image>
      <div class="operation">
        <van-button
          size="mini"
          plain
          class="detail"
          @click="showDetail"
          v-if="role === 1"
        >
          显示详情
        </van-button>
        <van-button
          size="mini"
          color="#e56a05"
          @click="changeBreakdown"
          v-if="role === 1"
        >
          {{ changePitButtonName }}
        </van-button>
        <van-button
          color="#6478d3"
          size="mini"
          v-if="order.status !== ORDER_STATUS['done']"
          @click="changeStatus"
        >
          {{ processButtonName }}
        </van-button>
      </div>
    </div>
    <van-dialog
      :title="dialogInfo.title"
      v-model:show="dialogInfo.dialogVisible"
      v-if="dialogInfo.dialogVisible"
      show-cancel-button
      :beforeClose="beforeClose"
    >
      <component
        :is="dialogInfo.componentName"
        v-bind="dialogInfo.injectData"
        @changePit="changePit"
      ></component>
    </van-dialog>
  </div>
</template>

<script setup lang="ts">
import { BreakdownInfo, Gender, ORDER_STATUS } from '../types';
import { ref, computed, reactive, shallowRef, watch } from 'vue';
import { useUserStore } from '@/store/user';
import { showDialog } from 'vant';
import breakdownEdit from './breakdown-edit.vue';
import breakdownDetail from '../breakdown-detail/index.vue';
import api from '../api';

const props = defineProps<{
  order: BreakdownInfo;
}>();
const emit = defineEmits(['query']);
const userStore = useUserStore();
const role = userStore.role;

const order = computed(() => props.order);

const changePitButtonName = ref('');
watch(
  () => order.value.pit,
  () => {
    changePitButtonName.value =
      typeof order.value.pit === 'number' ? '编辑故障' : '报故障';
  },
  {
    immediate: true,
  },
);
const processButtonName = ref('');
watch(
  () => order.value.status,
  () => {
    processButtonName.value =
      order.value.status === ORDER_STATUS['wait-process'] ? '前往处理' : '处理完成';
  },
  {
    immediate: true,
  },
);

const dialogInfo = reactive({
  dialogVisible: false,
  title: '',
  injectData: {},
  componentName: {},
});

// 详情弹窗
const showDetail = () => {
  dialogInfo.dialogVisible = true;
  dialogInfo.title = '详情';
  dialogInfo.injectData = {
    order: order.value,
  };
  dialogInfo.componentName = shallowRef(breakdownDetail);
};
// 事件处理
const changeBreakdown = () => {
  dialogInfo.dialogVisible = true;
  dialogInfo.title = changePitButtonName.value;
  dialogInfo.injectData = {
    order: order.value,
  };
  dialogInfo.componentName = shallowRef(breakdownEdit);
};

// 改变工单状态
const changeStatus = async () => {
  try {
    const params = {
      ...order.value,
      userId: userStore.userId,
    };
    await showDialog({
      message: '确定处理该工单？',
      showCancelButton: true,
    });
    await api.updateOrder(params);
    emit('query', params.status);
  } catch (e) {}
};

const tempPit = ref(0);
const changePit = (pit: number) => {
  // 先用一个临时位置代替
  tempPit.value = pit;
};

const beforeClose = (action: string) => {
  // prettier-ignore
  if (
    (action === 'confirm') 
			&& ((dialogInfo.title == '编辑故障') || (dialogInfo.title == '报故障'))
  ) {
		order.value.pit = tempPit.value;
  } else {
		tempPit.value = 0;
	}
  return true;
};
</script>

<style scoped lang="scss">
.breakdown-item-card {
  box-sizing: border-box;
  padding: 0.5rem;
  padding-bottom: 0;
  height: auto;
  font-size: 0.3rem;
  .breakdown-info {
    border-bottom: 1px solid #00000088;
    padding-bottom: 0.5rem;
    .simple-info {
      display: flex;
      margin-bottom: 0.1rem;
      font-weight: bold;
      height: 0.4rem;
      line-height: 0.4rem;
      .ellipsis {
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
        white-space: nowrap;
        width: 30%;
        margin-right: 0;
      }
      span {
        margin-right: 0.5em;
      }
      span:last-child {
        margin-left: auto;
        margin-right: 0;
      }
    }

    .detail-info {
      display: flex;
      margin-bottom: 0.1rem;
      .ellipsis {
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
        white-space: nowrap;
        width: 60%;
        margin-right: 0;
      }
    }

    .operation {
      display: flex;
      justify-content: flex-end;

      :deep(.van-button) {
        background-color: transparent;
        border: 0;
        width: 1.5rem;
      }

      .detail {
        color: var(--main-color);
        margin-right: auto;
        padding-left: 0;

        :deep(.van-button__content) {
          justify-content: start;
        }
      }
    }
  }
}
</style>
