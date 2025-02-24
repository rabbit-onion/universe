import { configureStore } from '@reduxjs/toolkit';
import videoR from './modules/videoSlice';
import dateslideR from './modules/dateslideSlice';
import hotpostR from './modules/hotpostSlice';
import pagenationR from './modules/paginationSlice';
import postR from './modules/postSlice';
import authR from './modules/authSlice';

export const store = configureStore({
  reducer: {
    videoR,
    dateslideR,
    hotpostR,
    pagenationR,
    postR,
    authR,
  },
});
