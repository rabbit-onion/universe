import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: JSON.parse(localStorage.getItem('users')) || [],
  user: JSON.parse(localStorage.getItem('user')) || null,
  isAuthenticated: !!localStorage.getItem('user'),
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.loading = true;
      const loginUser = action.payload;
      const matchedUser = state.users.find((user) => user.email === loginUser.email && user.pw === loginUser.pw);
      if (matchedUser) {
        state.loading = false;
        state.user = matchedUser;
        state.isAuthenticated = true;
        state.error = null;
        localStorage.setItem('user', JSON.stringify(matchedUser));
      } else {
        state.loading = false;
        state.user = null;
        state.isAuthenticated = false;
        state.error = '일치하는 회원정보가 없습니다.';
      }
    },
    // 로그아웃
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
      localStorage.removeItem('user');
    },
    // 회원가입 성공
    register: (state, action) => {
      state.loading = false;
      state.users.push(action.payload);
      localStorage.setItem('users', JSON.stringify(state.users));

      state.user = action.payload;
      state.isAuthenticated = true;
      state.error = null;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
