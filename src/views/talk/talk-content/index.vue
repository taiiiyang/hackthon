<template>
  <div class="talk-content">
    <div class="content">
      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        v-model:error="error"
        error-text="请求失败，点击重新加载"
        @load="onLoad"
      >
        <div
          class="comment"
          v-for="comment in comments"
          :key="comment.commentId"
        >
          <span style="margin-right: 0.1rem">{{ comment.comment }}</span>
          <van-icon name="good-job" v-if="comment.thumb" color="#6478d3" />
          <van-icon name="good-job-o" v-else color="#6478d3" />
          <van-badge
            @click="handleThumb(comment)"
            :content="`+${comment.likes}`"
            :offset="['-.40rem', '.1rem']"
            :show-zero="false"
            color="transparent"
          ></van-badge>
        </div>
      </van-list>
    </div>
    <div class="comment-input">
      <van-field
        v-model="comment"
        placeholder="在这里你可以畅所欲言"
      ></van-field>
      <van-button
        :disabled="!comment.length"
        size="mini"
        color="#6478d3"
        @click="onSubmit"
      >
        发送
      </van-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import type { Comment } from '../talk-types';
import api from '@/views/talk/api';
import { useUserStore } from '@/store/user';

const userStore = useUserStore();
// 初始获取评论
const comments = ref<Comment[]>([]);

// 虚拟滚动
const loading = ref(false);
const finished = ref(false);
const error = ref(false);
const pagination = reactive({
  pageNum: 1,
  pageSize: 20,
  userId: userStore.userId,
});
const onLoad = async () => {
  // 查询
  try {
    error.value = false;
    loading.value = true;
    const res = await api.getComments<FenyeResponse<Comment[]>>(pagination);
    const newComment = res.data.data;
    pagination.pageNum += 1;
    comments.value.push(...newComment);
    loading.value = false;
    if (res.data.data.length === 0 || comments.value.length > 30) {
      finished.value = true;
    }
  } catch (e) {
    error.value = true;
    return false;
  }
};
// 发送评论
const comment = ref('');

const onSubmit = async () => {
  try {
    const params = {
      userId: userStore.userId,
      comment: comment.value,
    };
    await api.sendComments(params);
    // 评论接口需要返回新评论的id
    // const newComment: Comment = {
    //   comment: comment.value,
    //   thumb: false,
    //   likes: 0,
    // };
    // comments.value.unshift(newComment);
  } catch (e) {
    return false;
  }
};

// 点赞
const handleThumb = async (comment: Comment) => {
  try {
    const { commentId, thumb } = comment;
    if (thumb) return;
    const params = {
      commentId,
      userId: userStore.userId,
    };
    await api.sendThumb(params);
    const curComment = comments.value.find(
      (item) => item.commentId === commentId,
    );
    if (curComment) {
      curComment.likes += 1;
      curComment.thumb = true;
    }
    console.log(curComment);
  } catch (e) {
    return false;
  }
};
</script>

<style scoped lang="scss">
.talk-content {
  height: 100%;
  width: 100%;
  padding: 0.3rem 0.8rem;
  flex: auto;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .content {
    height: 100%;
    border: 0.05rem solid var(--main-color);
    border-radius: 0.3rem;
    overflow: -moz-hidden-unscrollable;
    overflow-y: auto;
    -ms-overflow-style: none;

    .comment {
      display: flex;
      font-size: 0.3rem;
      height: var(--talk-comment-height);
      padding: 0.1rem 0.4rem;
      line-height: var(--talk-comment-height);
      text-align: center;
      .thumb {
        position: relative;
        span {
          position: absolute;
          font-size: 0.05rem;
          top: 0;
          right: 0;
        }
      }

      :deep(.van-badge) {
        border: 0;
      }

      :deep(.van-badge__wrapper) {
        line-height: var(--talk-comment-height);
      }
    }

    :deep(.van-list__loading, .van-list__finished-text, .van-list__error-text) {
      font-size: 0.33rem;
      line-height: 0.1rem;
      height: 0.1rem;
    }
  }

  .comment-input {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0.3rem;

    :deep(.van-cell) {
      padding-left: 0;
    }

    :deep(.van-cell__value) {
      border: var(--main-color) solid 0.05rem;
      border-radius: 0.5rem;
      padding-left: 0;
    }

    :deep(.van-field__body) {
      padding: 0 0.3rem;
    }

    :deep(.van-button) {
      width: 1rem;
    }
  }
}

.comment::webkit-scrollbar {
  display: none;
}
</style>
