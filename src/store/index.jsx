import { configureStore } from '@reduxjs/toolkit';
import videoR from './modules/videoSlice';

export const store = configureStore({
  reducer: {
    videoR,
  },
});
