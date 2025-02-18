import { Link } from 'react-router-dom';
import { EmailInput, JoinBox, JoinChkboxArea, JoinCont, JoinInputArea, PwHint, SubmitBtn, ToLogin } from './style';
import AddressSearch from '../../common/address/AddressSearch';
import { useRef, useState } from 'react';

const Join = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    pw: '',
    pwConfirm: '',
    address: '',
    recommenderId: '',
  });
  const [error, setError] = useState({
    name: '',
    email: '',
    pw: '',
    pwConfirm: '',
    address: '',
    recommenderId: '',
  });
  const [isNone, setIsNone] = useState(false);

  const nameRef = useRef(null);
  const emailRef = useRef(null);

  // 주소 검색이 완료되었을 때 호출되는 함수
  const handleAddressComplete = (data) => {
    console.log('받은 주소 데이터:', data); // 데이터가 제대로 전달되는지 확인
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOnFocus = () => {
    setIsNone(false);
  };

  // 어째서 이메일이 계속 있다고 나오는가
  const chkEmailDuplicate = () => {
    const existUserDatas = JSON.parse(localStorage.getItem('user')) || [];
    if (formData.email) {
      if (existUserDatas) {
        if (existUserDatas.some((data) => data.email === formData.email)) {
          setError(true);
        }
      }
    } else {
      setIsNone(true);
    }
  };

  return (
    <>
      <JoinBox>
        <JoinCont>
          <h1>회원가입</h1>
          <form>
            <JoinInputArea>
              <li>
                <label htmlFor="name">
                  이름 <span>*</span>
                </label>
                <input
                  type="text"
                  ref={nameRef}
                  name="name"
                  id="name"
                  value={formData.name}
                  placeholder="이름을 입력해주세요"
                  onChange={handleOnChange}
                  onFocus={handleOnFocus}
                />
                {/* {isNone && <p>이름은 필수 항목입니다.</p>} */}
              </li>
              <li>
                <label htmlFor="email">
                  이메일 <span>*</span>
                </label>
                <EmailInput>
                  <input
                    type="email"
                    ref={emailRef}
                    name="email"
                    id="email"
                    value={formData.email}
                    placeholder="example@email.com"
                    onChange={handleOnChange}
                    onFocus={handleOnFocus}
                  />
                  <button type="button" onClick={chkEmailDuplicate}>
                    중복확인
                  </button>
                </EmailInput>
                {error && <p>이미 존재하는 이메일입니다.</p>}
                {isNone && <p>이메일은 필수 항목입니다.</p>}
              </li>
              <li>
                <label htmlFor="password">
                  비밀번호 <span>*</span>
                </label>
                <input type="password" name="password" id="password" placeholder="비밀번호를 입력해주세요" />
                <PwHint>영문, 숫자, 특수문자 조합 최소 8자리</PwHint>
              </li>
              <li>
                <label htmlFor="passwordConfirm">
                  비밀번호 확인 <span>*</span>
                </label>
                <input
                  type="password"
                  name="passwordConfirm"
                  id="passwordConfirm"
                  placeholder="비밀번호를 입력해주세요"
                />
              </li>
              <li>
                <label htmlFor="address">
                  주소 <span>*</span>
                </label>
                <AddressSearch onAddressComplete={handleAddressComplete} />
              </li>
              <li>
                <label htmlFor="recommenderId">추천인 정보</label>
                <input type="text" name="recommenderId" id="recommenderId" placeholder="추천인 정보를 입력해주세요" />
              </li>
            </JoinInputArea>

            <JoinChkboxArea>
              <li>
                <input type="checkbox" name="up14" id="up14" />
                <label htmlFor="up14">(필수) 만 14세 이상입니다</label>
              </li>
              <li>
                <input type="checkbox" name="termAgree" id="termAgree" />
                <label htmlFor="termAgree">
                  (필수) <span>서비스 이용약관</span>에 동의합니다
                </label>
              </li>
              <li>
                <input type="checkbox" name="personalAgree" id="personalAgree" />
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
