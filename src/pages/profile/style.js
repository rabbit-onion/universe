import styled from 'styled-components';

export const ProfileWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #111111;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column; /* ✅ 세로 정렬을 위한 설정 */
  align-items: center; /* ✅ 자식 요소들을 중앙 정렬 */
`;
