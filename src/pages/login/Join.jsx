import { Link } from 'react-router-dom';
import { EmailInput, JoinBox, JoinChkboxArea, JoinCont, JoinInputArea, SubmitBtn, ToLogin } from './style';

const Join = () => {
  return (
    <>
      <JoinBox>
        <JoinCont>
          <h1>회원가입</h1>
          <form action="">
            <JoinInputArea>
              <li>
                <label htmlFor="name">
                  이름 <span>*</span>
                </label>
                <input type="text" name="name" id="name" placeholder="이름을 입력해주세요" />
              </li>
              <li>
                <label htmlFor="email">
                  이메일 <span>*</span>
                </label>
                <EmailInput>
                  <input type="email" name="email" id="email" placeholder="example@email.com" />
                  <button>중복확인</button>
                </EmailInput>
              </li>
              <li>
                <label htmlFor="pw">
                  비밀번호 <span>*</span>
                </label>
                <input type="password" name="pw" id="pw" placeholder="비밀번호를 입력해주세요" />
                <p>영문, 숫자, 특수문자 조합 최소 8자리</p>
              </li>
              <li>
                <label htmlFor="pwConfirm">
                  비밀번호 확인 <span>*</span>
                </label>
                <input type="password" name="pwConfirm" id="pwConfirm" placeholder="비밀번호를 입력해주세요" />
              </li>
              <li>
                <label htmlFor="recInfo">추천인 정보</label>
                <input type="text" name="recInfo" id="recInfo" placeholder="추천인 정보를 입력해주세요" />
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
