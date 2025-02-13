import { createSlice } from '@reduxjs/toolkit';
import { getVideo } from './getThunk';

const initialState = {
  videoData: [],
  loading: true,
  error: null,
  currentData: [],
  monsterData: [],
  relatedData: [],
};

const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getVideo.pending, (state, action) => {})
      .addCase(getVideo.fulfilled, (state, action) => {
        const movies = action.payload.movies;
        const tvShows = action.payload.tvShows;
        const monster = action.payload.monster;
        const movieData = movies.results;
        const tvShowsData = tvShows.results;
        state.videoData = [...tvShowsData, ...movieData];
        state.monsterData = monster.results;
      })
      .addCase(getVideo.rejected, (state, action) => {});
  },
});

export const videoActions = videoSlice.actions;
export default videoSlice.reducer;
