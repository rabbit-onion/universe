import styled from 'styled-components';

export const PreviewBtn = styled.button`
  width: 344.83px;
  height: 65px;
  left: 20px;
  top: 151px;
  background-color: transparent;
  border-radius: 20px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 16px 28px;
  color: #ffffff;
  border: 3px solid #2b96ff;
  border-radius: 65.5px;
`;

const GotoPreviewBtn = () => {
  return (
    <PreviewBtn>
      공식 예고편 보러가기
      <svg width="12" height="23" viewBox="0 0 12 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1.00593 1.47363L1.0167 1.50103L1.00593 1.47363Z"
          fill="white"
          stroke="white"
          strokeWidth="3"
          fillOpacity="1"
          strokeOpacity="1"
        />
      </svg>
    </PreviewBtn>
  );
};

export default GotoPreviewBtn;
