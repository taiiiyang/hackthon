import { defineStore } from 'pinia';
import { toiletState, userState } from './state';

export const useToiletUserStore = defineStore('toiletUser', {
  state: () => userState,
});

export const useToiletStore = defineStore('toilet', {
  state: () => toiletState,
});
