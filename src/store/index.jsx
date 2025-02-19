import { configureStore } from '@reduxjs/toolkit';
import videoR from './modules/videoSlice';
import dateslideR from './modules/dateslideSlice';
import hotpostR from './modules/hotpostSlice';
import pagenationR from './modules/paginationSlice';

export const store = configureStore({
  reducer: {
    videoR,
    dateslideR,
    hotpostR,
    pagenationR,
  },
});
