type UserInfo = {
  userId: number;
  gender: 0 | 1;
  floor: number;
};

export const getState = (): UserInfo => {
  return {
    userId: 0,
    gender: 1,
    floor: 1,
  };
};
