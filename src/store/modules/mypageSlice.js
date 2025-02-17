// import { createSlice } from '@reduxjs/toolkit';

// const mypageSlice = createSlice({
//   name: 'mypage',
//   initialState: {
//     pageTitle: '보관함',
//     currentSection: 'mybox', // 현재 선택된 섹션
//   },
//   reducers: {
//     setPageTitle: (state, action) => {
//       state.pageTitle = action.payload;
//     },
//     setCurrentSection: (state, action) => {
//       state.currentSection = action.payload;
//       // 섹션에 따라 타이틀 자동 변경
//       state.pageTitle = action.payload === 'mybox' ? '보관함' : '저장소';
//     },
//   },
// });

// export const { setPageTitle, setCurrentSection } = mypageSlice.actions;
// export default mypageSlice.reducer;
