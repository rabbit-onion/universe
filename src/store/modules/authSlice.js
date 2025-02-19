import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  isAuthenticated: !!localStorage.getItem('user'),
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    // 로그인 성공
    loginSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
      state.error = null;
      // LocalStorage에 사용자 정보 저장
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    // 로그인 실패
    loginFailure: (state, action) => {
      state.loading = false;
      state.user = null;
      state.isAuthenticated = false;
      state.error = action.payload;
      localStorage.removeItem('user');
    },
    // 로그아웃
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
      localStorage.removeItem('user');
    },
    // 회원가입 시작
    registerStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    // 회원가입 성공
    registerSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
      state.error = null;
      // LocalStorage에 사용자 정보 저장
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    // 회원가입 실패
    registerFailure: (state, action) => {
      state.loading = false;
      state.user = null;
      state.isAuthenticated = false;
      state.error = action.payload;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
