import { configureStore } from '@reduxjs/toolkit';
import videoR from './modules/videoSlice';
import dateslideR from './modules/dateslideSlice';
// import mypageR from './modules/mypageSlice';

export const store = configureStore({
  reducer: {
    videoR,
    dateslideR,
    // mypageR,
  },
});
