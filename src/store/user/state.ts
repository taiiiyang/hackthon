type UserInfo = {
  userId: string;
  gender: 0 | 1;
  floor: number;
};

export const getState = (): UserInfo => {
  return {
    userId: '',
    gender: 1,
    floor: 1,
  };
};
