import { createSlice } from '@reduxjs/toolkit';
import { getVideo, searchVideos } from './getThunk';

const initialState = {
  videoData: [],
  loading: true,
  error: null,
  currentData: [],
  monsterData: [],
  relatedData: [],
  searchResults: [],
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
      .addCase(getVideo.rejected, (state, action) => {})
      .addCase(searchVideos.pending, (state, action) => {})
      .addCase(searchVideos.fulfilled, (state, action) => {
        const searchedMovies = action.payload.movies.results;
        const searchedTv = action.payload.tvShows.results;
        state.searchResults = [...searchedTv, ...searchedMovies];
      })
      .addCase(searchVideos.rejected, (state, action) => {});
  },
});

export const videoActions = videoSlice.actions;
export default videoSlice.reducer;
