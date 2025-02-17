import { configureStore } from '@reduxjs/toolkit';
import videoR from './modules/videoSlice';
import dateslideR from './modules/dateslideSlice';
import hotpostR from './modules/hotpostSlice';

export const store = configureStore({
  reducer: {
    videoR,
    dateslideR,
    hotpostR,
  },
});
