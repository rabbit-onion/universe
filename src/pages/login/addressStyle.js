// AddressSearch.styles.js
import styled from 'styled-components';

export const ZipCodeInput = styled.input``;
export const SearchButton = styled.button``;

export const AddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${ZipCodeInput} {
    width: 60%;
  }
  ${SearchButton} {
    width: auto;
    height: auto;
    cursor: pointer;
  }
`;

export const ZipCodeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 29px;
`;
