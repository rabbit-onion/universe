import { configureStore } from '@reduxjs/toolkit';
import videoR from './modules/videoSlice';
import dateslideR from './modules/dateslideSlice';

export const store = configureStore({
  reducer: {
    videoR,
    dateslideR,
  },
});
