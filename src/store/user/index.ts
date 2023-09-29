import { defineStore } from 'pinia';
import { getState } from './state';

export const useUserStore = defineStore('userInfo', {
  state: getState,
});
