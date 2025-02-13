import styled from 'styled-components';

export const Plus = styled.button`
  width: 68px;
  height: 68px;
  left: 20px;
  top: 20px;
  background: #ffffff;
  border: 3px solid #000000;
  border-radius: 68px;
`;

const PlusBtn = ({ width = 29, height = 29 }) => {
  return (
    <Plus>
      <svg
        width={width}
        height={height}
        viewBox="0 0 29 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="plus-icon"
      >
        <path d="M14.5 2V27M2 14.5H27" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Plus>
  );
};

export default PlusBtn;
