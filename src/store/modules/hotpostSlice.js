import { createSlice } from '@reduxjs/toolkit';
import { hotpostmainData } from '../../assets/api/hotpostmaindata';

const initialState = {
  hotpostmainData,
  currentMenu: '전체',
};

export const hotpostSlice = createSlice({
  name: 'hotpostslice',
  initialState,
  reducers: {
    onMenuChange: (state, action) => {
      state.currentMenu = action.payload;
    },
  },
});

export const hotpostActions = hotpostSlice.actions;
export default hotpostSlice.reducer;
