import styled from 'styled-components';

export const PaginationWrap = styled.div`
  div {
    margin-top: 30px;
    text-align: center;
    button {
      font-size: 25px;
      width: 50px;
      height: 30px;
      border: none;
      margin-right: 5px;
      background: #fff;
      /* &:first-child {
                border: none;
            }
            &:last-child {
                border: none;
            } */
      &.on {
        color: #0066ff;
        font-weight: bold;
      }
    }
  }
`;
