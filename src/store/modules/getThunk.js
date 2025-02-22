import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const movieUrl = `https://api.themoviedb.org/3/discover/movie`;
const tvUrl = 'https://api.themoviedb.org/3/discover/tv';
const searchMovieUrl = 'https://api.themoviedb.org/3/search/movie';
const searchTvUrl = 'https://api.themoviedb.org/3/search/tv';
const API_KEY = import.meta.env.VITE_APP_TMDB_KEY;

// 전체 작품 정보 가져오기
export const getVideo = createAsyncThunk('video/getVideo', async (pageNumber = 1) => {
  try {
    // 장르가 애니메이션인 영화정보 가져오기
    const movieRes = await axios.get(movieUrl, {
      params: {
        api_key: API_KEY,
        language: 'ko-KR',
        with_genres: '16', // 애니메이션 장르 ID
        include_adult: true,
        page: pageNumber,
      },
    });

    // 장르가 애니메이션인 tv프로그램 정보 가져오기
    const tvRes = await axios.get(tvUrl, {
      params: {
        api_key: API_KEY,
        language: 'ko-KR',
        with_genres: '16',
        include_adult: true,
        page: pageNumber,
      },
    });

    // tvRes의 기본정보 최적화(사용할 항목만 넣기)
    const tvShows = tvRes.data.results.map((show) => ({
      adult: show.adult,
      backdrop_path: show.backdrop_path,
      episode_run_time: show.episode_run_time,
      genres: show.genres,
      id: show.id,
      name: show.name,
      original_language: show.original_language,
      overview: show.overview,
      popularity: show.popularity,
      poster_path: show.poster_path,
      production_companies: show.production_companies,
      seasons: show.seasons,
      type: show.type,
      vote_average: show.vote_average,
    }));

    // 각 영화의 비디오정보 가져오기
    const movieVideosPromises = movieRes.data.results.map((movie) =>
      axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/videos`, {
        params: {
          api_key: API_KEY,
          language: 'ko-KR',
        },
      })
    );

    // 각 TV 쇼의 비디오정보 가져오기
    const tvVideosPromises = tvRes.data.results.map((show) =>
      axios.get(`https://api.themoviedb.org/3/tv/${show.id}/videos`, {
        params: {
          api_key: API_KEY,
          language: 'ko-KR',
        },
      })
    );

    // 모든 비디오 데이터 요청을 병렬로 처리
    const movieVideosRes = await Promise.all(movieVideosPromises);
    const tvVideosRes = await Promise.all(tvVideosPromises);

    // 영화 데이터에 비디오 정보 추가
    const moviesWithVideos = movieRes.data.results.map((movie, index) => ({
      ...movie,
      type: 'movie',
      videos: movieVideosRes[index].data.results,
    }));

    // TV 쇼 데이터에 비디오 정보 추가
    const tvShowsWithVideos = tvRes.data.results.map((show, index) => ({
      ...show,
      type: 'tv',
      videos: tvVideosRes[index].data.results,
    }));

    // ==============================================================================
    // 확인용 임시코드(나중에 지울거임)
    // monster의 기본정보, 비디오정보 가져오기
    const monsterRes = await axios.get(`https://api.themoviedb.org/3/tv/207468`, {
      params: {
        api_key: API_KEY,
        language: 'ko-KR',
      },
    });

    const monsterVideoRes = await axios.get(`https://api.themoviedb.org/3/tv/207468/videos`, {
      params: {
        api_key: API_KEY,
        language: 'ko-KR',
      },
    });

    // 몬스터의 특정 시즌 정보 가져오기
    const monterSeason1Res = await axios.get(`https://api.themoviedb.org/3/tv/207468/season/1`, {
      params: {
        api_key: API_KEY,
        language: 'ko-KR',
      },
    });

    const monsterWithSeason = {
      ...monsterRes.data,
      type: 'tv',
      videos: monsterVideoRes.data.results,
      seasons: monterSeason1Res.data,
    };

    //================================================================================

    return {
      movies: {
        results: moviesWithVideos,
        totalPages: movieRes.data.total_pages,
        currentPage: movieRes.data.page,
        totalResults: movieRes.data.total_results,
      },
      tvShows: {
        results: tvShowsWithVideos,
        totalPages: tvRes.data.total_pages,
        currentPage: tvRes.data.page,
        totalResults: tvRes.data.total_results,
      },
      monster: {
        results: monsterWithSeason,
      },
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
});

// 특정 작품 정보, 연관작품 가져오기
export const getSelectedVideo = createAsyncThunk('video/getSelectedVideo', async (pageNumber = 1) => {
  try {
  } catch (error) {
    console.log(error);
    throw error;
  }
});

// ==============================================================
// 실시간 검색 데이터
export const searchVideos = createAsyncThunk('video/searchVideos', async (searchQuery, { signal }) => {
  try {
    if (!searchQuery.trim()) {
      return {
        movies: { results: [] },
        tvShows: { results: [] },
      };
    }

    // 영화와 TV 프로그램 검색을 동시에 실행
    const [movieRes, tvRes] = await Promise.all([
      axios.get(searchMovieUrl, {
        params: {
          api_key: API_KEY,
          language: 'ko-KR',
          query: searchQuery,
          with_genres: '16', // 애니메이션으로 필터링
          include_adult: true,
        },
        signal, // 이전 요청 취소를 위한 signal
      }),
      axios.get(searchTvUrl, {
        params: {
          api_key: API_KEY,
          language: 'ko-KR',
          query: searchQuery,
          with_genres: '16',
          include_adult: true,
        },
        signal,
      }),
    ]);

    // 장르 ID가 16(애니메이션)인 작품만 필터링
    const filteredMovies = movieRes.data.results.filter((movie) => movie.genre_ids && movie.genre_ids.includes(16));

    const filteredTvShows = tvRes.data.results.filter((show) => show.genre_ids && show.genre_ids.includes(16));

    return {
      movies: {
        results: filteredMovies,
        totalPages: movieRes.data.total_pages,
        totalResults: filteredMovies.length, // 필터링된 결과의 개수로 수정
      },
      tvShows: {
        results: filteredTvShows,
        totalPages: tvRes.data.total_pages,
        totalResults: filteredTvShows.length, // 필터링된 결과의 개수로 수정
      },
    };
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log('Request canceled:', error.message);
    } else {
      console.error('Search error:', error);
      throw error;
    }
  }
});
