import { WholeFloor, UserInfo } from './types';

export interface ToiletState {
  info: WholeFloor;
}

export const toiletState: ToiletState = {
  info: [],
};

export const userState: UserInfo = {
  userName: '',
  gender: 'men',
  floor: 1,
};
