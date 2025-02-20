// addressLogic.js
export const isDaumPostcodeLoaded = () => {
  return window.daum && window.daum.Postcode;
};

export const initAddressSearch = (onComplete) => {
  // 현재 보이는 화면의 크기
  const viewportWidth = Math.min(window.innerWidth, document.documentElement.clientWidth);
  const viewportHeight = Math.min(window.innerHeight, document.documentElement.clientHeight);

  // 팝업 크기 설정 (반응형)
  const width = viewportWidth > 500 ? 500 : viewportWidth - 40;
  const height = viewportHeight > 600 ? 600 : viewportHeight - 40;

  // 스크롤 위치를 고려한 중앙 정렬
  const left = (viewportWidth - width) / 2 + window.pageXOffset;
  const top = (viewportHeight - height) / 2 + window.pageYOffset;

  return new window.daum.Postcode({
    oncomplete: (data) => {
      // 도로명 주소의 노출 규칙에 따라 주소를 조합한다.
      let roadAddr = data.roadAddress; // 도로명 주소
      let extraRoadAddr = ''; // 참고 항목

      // 법정동명이 있을 경우 추가
      if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
        extraRoadAddr += data.bname;
      }
      // 건물명이 있고, 공동주택일 경우 추가
      if (data.buildingName !== '' && data.apartment === 'Y') {
        extraRoadAddr += extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName;
      }
      // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
      if (extraRoadAddr !== '') {
        extraRoadAddr = ` (${extraRoadAddr})`;
      }

      onComplete({
        zonecode: data.zonecode,
        roadAddress: roadAddr,
        jibunAddress: data.jibunAddress,
        extraAddress: extraRoadAddr,
      });
    },
    width: width,
    height: height,
    left: left,
    top: top,
    maxSuggestItems: 5,
    animation: true,
  }).open();
};
