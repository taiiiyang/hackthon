import { defineStore } from 'pinia';
import { getState } from './state';

export const useUserStore = defineStore('userInfo', {
  state: getState,
  actions: {
    setUserInfo(userInfo: UserInfo) {
      this.gender = userInfo.gender;
      this.floor = userInfo.floor;
      this.userId = userInfo.userId;
      this.role = userInfo.role;
    },
    setUserId(userId: number) {
      this.userId = userId;
    },
  },
});
