import { Link, useNavigate } from 'react-router-dom';
import {
  EmailInput,
  JoinBox,
  JoinChkboxArea,
  JoinCont,
  JoinInputArea,
  PwHint,
  IsValid,
  SubmitBtn,
  ToLogin,
} from './style';
import { AddressWrapper, SearchButton, ZipCodeInput, ZipCodeWrapper } from './addressStyle';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/modules/authSlice';

const Join = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isValid, setIsValid] = useState(false);
  const [isEqual, setIsEqual] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    pw: '',
    pwConfirm: '',
    zonecode: '',
    address: '',
    detailAddress: '',
    recommenderId: '',
    up14: '',
    termAgree: '',
    personalAgree: '',
  });
  const [error, setError] = useState({
    name: '',
    email: '',
    pw: '',
    pwConfirm: '',
    zonecode: '',
    address: '',
    detailAddress: '',
    recommenderId: '',
    up14: '',
    termAgree: '',
    personalAgree: '',
  });

  const handleOnChange = (e) => {
    const { name, type, value, checked } = e.target;
    if (type === 'email') {
      setIsValid(false);
    }
    if (type === 'pwConfirm') {
      setIsEqual(false);
    }
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleOnFocus = (e) => {
    const { name } = e.target;
    setError({ ...error, [name]: '' });
  };

  const handleOnBlur = (e) => {
    const { name, value } = e.target;
    if (!value || value === '') {
      setError({ ...error, [name]: '필수 항목입니다' });
    } else {
      setError({ ...error, [name]: '' });
    }

    if (name === 'pwConfirm') {
      if (!value || value === '') {
        setIsEqual(null);
      } else {
        if (value === formData.pw) {
          setIsEqual(true);
        } else {
          setIsEqual(false);
        }
      }
    }
  };

  const chkEmailDuplicate = () => {
    const existUserDatas = JSON.parse(localStorage.getItem('users')) || [];
    if (!formData.email || formData.email === '') {
      setError({ ...error, email: '이메일은 필수 항목입니다.' });
    } else {
      if (existUserDatas) {
        if (existUserDatas.some((data) => data.email === formData.email)) {
          setError({ ...error, email: '이미 존재하는 이메일입니다.' });
        } else {
          // 이메일 형식 검사
          const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          if (!emailRegex.test(formData.email)) {
            setError({ ...error, email: '올바른 이메일 형식이 아닙니다' });
          } else {
            setError({ ...error, email: '' });
            setIsValid(true);
          }
        }
      }
    }
  };

  const handleAddressSearch = () => {
    if (!window.daum || !window.daum.Postcode) {
      alert('주소검색 스크립트가 로드되지 않았습니다.');
      return;
    }

    new window.daum.Postcode({
      oncomplete: (data) => {
        setFormData({
          ...formData,
          zonecode: data.zonecode,
          address: data.roadAddress || data.jibunAddress,
        });
      },
    }).open();
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const hasError = Object.values(error).some((errorMessage) => errorMessage !== '');

    if (hasError) {
      alert('필수정보를 확인해주세요.');
    } else if (!isValid) {
      alert('이메일 중복확인이 필요합니다.');
    } else if (!formData.up14 || !formData.termAgree || !formData.personalAgree) {
      alert('필수 약관에 동의해주세요.');
    } else {
      dispatch(authActions.register(formData));
      navigate('/');
    }
  };

  return (
    <>
      <JoinBox>
        <JoinCont>
          <h1>회원가입</h1>
          <form onSubmit={onSubmit}>
            <JoinInputArea>
              <li>
                <label htmlFor="name">
                  이름 <span>*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  placeholder="이름을 입력해주세요"
                  onChange={handleOnChange}
                  onFocus={handleOnFocus}
                  onBlur={handleOnBlur}
                />
                {error.name && <p>{error.name}</p>}
              </li>
              <li>
                <label htmlFor="email">
                  이메일 <span>*</span>
                </label>
                <EmailInput>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    placeholder="example@email.com"
                    onChange={handleOnChange}
                    onFocus={handleOnFocus}
                    onBlur={handleOnBlur}
                  />
                  <button type="button" onClick={chkEmailDuplicate}>
                    중복확인
                  </button>
                </EmailInput>
                {error.email && <p>{error.email}</p>}
                {error.emailValid && <IsValid>사용가능한 이메일입니다.</IsValid>}
              </li>
              <li>
                <label htmlFor="pw">
                  비밀번호 <span>*</span>
                </label>
                <input
                  type="password"
                  name="pw"
                  id="pw"
                  value={formData.pw}
                  placeholder="비밀번호를 입력해주세요"
                  onChange={handleOnChange}
                  onFocus={handleOnFocus}
                  onBlur={handleOnBlur}
                />
                <PwHint>영문, 숫자, 특수문자 조합 최소 8자리</PwHint>
                {error.pw && <p>{error.pw}</p>}
              </li>
              <li>
                <label htmlFor="pwConfirm">
                  비밀번호 확인 <span>*</span>
                </label>
                <input
                  type="password"
                  name="pwConfirm"
                  id="pwConfirm"
                  value={formData.pwConfirm}
                  placeholder="비밀번호를 입력해주세요"
                  onChange={handleOnChange}
                  onFocus={handleOnFocus}
                  onBlur={handleOnBlur}
                />
                {error.pwConfirm && <p>{error.pwConfirm}</p>}
                {isEqual && <IsValid>비밀번호 일치</IsValid>}
                {isEqual === false && <p>비밀번호가 일치하지 않습니다.</p>}
              </li>
              <li>
                <label htmlFor="address">
                  주소 <span>*</span>
                </label>
                <AddressWrapper>
                  <ZipCodeWrapper>
                    <ZipCodeInput type="text" value={formData.zonecode} placeholder="우편번호" readOnly />
                    <SearchButton type="button" onClick={handleAddressSearch}>
                      우편번호 찾기
                    </SearchButton>
                  </ZipCodeWrapper>
                  <input type="text" value={formData.address} placeholder="주소" readOnly />
                  <input
                    type="text"
                    name="detailAddress"
                    value={formData.detailAddress}
                    placeholder="상세주소"
                    onChange={handleOnChange}
                    onFocus={handleOnFocus}
                    onBlur={handleOnBlur}
                  />
                </AddressWrapper>
                {error.detailAddress && <p>{error.detailAddress}</p>}
              </li>
              <li>
                <label htmlFor="recommenderId">추천인 정보</label>
                <input
                  type="text"
                  name="recommenderId"
                  id="recommenderId"
                  value={formData.recommenderId}
                  placeholder="추천인 정보를 입력해주세요"
                  onChange={handleOnChange}
                />
              </li>
            </JoinInputArea>

            <JoinChkboxArea>
              <li>
                <input type="checkbox" name="up14" id="up14" onChange={handleOnChange} />
                <label htmlFor="up14">(필수) 만 14세 이상입니다</label>
              </li>
              <li>
                <input type="checkbox" name="termAgree" id="termAgree" onChange={handleOnChange} />
                <label htmlFor="termAgree">
                  (필수) <span>서비스 이용약관</span>에 동의합니다
                </label>
              </li>
              <li>
                <input type="checkbox" name="personalAgree" id="personalAgree" onChange={handleOnChange} />
                <label htmlFor="personalAgree">
                  (필수) <span>개인정보 수집/이용</span>에 동의합니다
                </label>
              </li>
            </JoinChkboxArea>

            <SubmitBtn>
              <button type="submit">회원가입</button>
            </SubmitBtn>
          </form>

          <ToLogin>
            이미 계정이 있으신가요?{' '}
            <Link to="/auth/login">
              <span>로그인</span>
            </Link>
          </ToLogin>
        </JoinCont>
      </JoinBox>
    </>
  );
};

export default Join;
