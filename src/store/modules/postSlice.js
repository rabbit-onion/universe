import { createSlice } from '@reduxjs/toolkit';
import postsdata from '../../assets/api/postsdata';

const initialState = {
  postsdata,
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    onLike: (state, action) => {
      const id = action.payload;
      const newItem = state.postsdata.find((post) => post.id === id);
      if (newItem && newItem.done) {
        newItem.like = newItem.like - 1;
        // newItem.done = false;
      } else if (newItem && !newItem.done) {
        newItem.like = newItem.like + 1;
        // newItem.done = true;
      }
      newItem.done = !newItem.done;
    },
  },
});

export const postActions = postSlice.actions;
export default postSlice.reducer;
