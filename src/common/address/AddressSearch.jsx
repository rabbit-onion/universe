import React from 'react';
import { AddressWrapper, ZipCodeInput, ZipCodeWrapper, SearchButton } from './style';

const AddressSearch = ({ onAddressComplete }) => {
  const handleSearch = () => {
    if (!window.daum || !window.daum.Postcode) {
      alert('주소검색 스크립트가 로드되지 않았습니다.');
      return;
    }

    new window.daum.Postcode({
      oncomplete: (data) => {
        // input 필드 값 설정
        document.getElementById('postcode').value = data.zonecode;
        document.getElementById('address').value = data.roadAddress || data.jibunAddress;

        // 부모 컴포넌트에 데이터 전달
        onAddressComplete({
          zonecode: data.zonecode,
          address: data.roadAddress || data.jibunAddress,
        });

        // 상세주소로 포커스 이동
        document.getElementById('detailAddress').focus();
      },
    }).open();
  };

  return (
    <AddressWrapper>
      <ZipCodeWrapper>
        <ZipCodeInput type="text" id="postcode" placeholder="우편번호" readOnly />
        <SearchButton type="button" onClick={handleSearch}>
          우편번호 찾기
        </SearchButton>
      </ZipCodeWrapper>
      <input type="text" id="address" placeholder="주소" readOnly />
      <input type="text" id="detailAddress" placeholder="상세주소" />
    </AddressWrapper>
  );
};

export default AddressSearch;
