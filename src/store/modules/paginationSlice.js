import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  postData: [],
  postsPerPage: 4,
  currPage: 1,
  totalPage: 1,
};

export const pagenationSlice = createSlice({
  name: 'pagenation',
  initialState,
  reducers: {
    addData: (state, action) => {
      state.postData = action.payload;
      state.currPage = 1;
    },
    totalData: (state, action) => {
      state.totalPage = Math.ceil(state.postData.length / state.postsPerPage);
    },
    nextPage: (state, action) => {
      if (state.currPage < state.totalPage) {
        state.currPage++;
      }
    },
    prevPage: (state, action) => {
      if (state.currPage > 1) {
        state.currPage--; //if문
      }
    },
    firstPage: (state, action) => {
      state.currPage = 1;
    },
    lastPage: (state, action) => {
      state.currPage = state.totalPage;
    },
    currentPage: (state, action) => {
      state.currPage = action.payload;
    },
  },
});

export const pagenationActions = pagenationSlice.actions;
export default pagenationSlice.reducer;
