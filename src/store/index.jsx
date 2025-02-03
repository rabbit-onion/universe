import { configureStore } from '@reduxjs/toolkit';

const dummyReducer = (state = {}) => state; // 빈 리듀서

export const store = configureStore({
  reducer: {
    dummy: dummyReducer, // 임시 리듀서 추가
  },
});
