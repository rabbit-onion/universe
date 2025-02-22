import { createSlice } from '@reduxjs/toolkit';
import { dateslideData } from '../../assets/api/dateslidedata';

const initialState = {
  dateslideData,
  currentDate: '월',
};

export const dateslideSlice = createSlice({
  name: 'dateslide',
  initialState,
  reducers: {
    onDateChange: (state, action) => {
      state.currentDate = action.payload;
    },
  },
});

export const dateslideActions = dateslideSlice.actions;
export default dateslideSlice.reducer;
