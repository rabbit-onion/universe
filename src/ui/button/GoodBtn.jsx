import React from 'react';
import styled from 'styled-components';

export const Good = styled.button`
  width: 68px;
  height: 68px;
  left: 20px;
  top: 20px;
  background: #ffffff;
  border: 3px solid #000000;
  border-radius: 68px;
`;

const GoodBtn = () => {
  return (
    <>
      <Good>
        <svg
          width="30"
          height="31"
          viewBox="0 0 30 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="thumbs-up-icon"
        >
          <path
            d="M8.66536 29V14.15M2 16.85V26.3C2 27.7912 3.19367 29 4.66615 29H22.5643C24.5382 29 26.2169 27.5416 26.517 25.5658L27.9526 16.1158C28.3253 13.6625 26.451 11.45 23.9999 11.45H19.3299C18.5937 11.45 17.9969 10.8456 17.9969 10.1V5.32888C17.9969 3.49039 16.5252 2 14.7097 2C14.2767 2 13.8843 2.25825 13.7085 2.65897L9.01721 13.3483C8.80325 13.8358 8.32585 14.15 7.79904 14.15H4.66615C3.19367 14.15 2 15.3588 2 16.85Z"
            stroke="black"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Good>
    </>
  );
};

export default GoodBtn;
