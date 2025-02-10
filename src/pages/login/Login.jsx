import { ChkboxArea, FindAndJoin, LoginBox, LoginCont, SnsLoginBtns, TypingArea } from './style';

const Login = () => {
  return (
    <>
      <LoginBox>
        <LoginCont>
          <h1>
            <img
              src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/logo.svg"
              alt=""
            />
          </h1>
          <form action="">
            <TypingArea>
              <label htmlFor="idOrEmail" className="hide">
                이메일 주소 또는 아이디
              </label>
              <input type="text" name="idOrEmail" id="idOrEmail" placeholder="이메일 주소 또는 아이디" />
              <label htmlFor="pw" className="hide">
                비밀번호
              </label>
              <input type="password" name="pw" id="pw" placeholder="비밀번호" />
            </TypingArea>

            <ChkboxArea>
              <input type="checkbox" name="saveID" id="saveID" />
              <label htmlFor="saveID">아이디 저장</label>
              <input type="checkbox" name="autoLogin" id="autoLogin" />
              <label htmlFor="autoLogin">자동 로그인</label>
            </ChkboxArea>

            <button type="submit">로그인</button>
          </form>

          <FindAndJoin>
            <strong>아이디 찾기</strong>
            <span>|</span>
            <strong>비밀번호 재설정</strong>
            <span>|</span>
            <strong>회원가입</strong>
          </FindAndJoin>

          <SnsLoginBtns>
            <button>
              <img
                src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/login/kakao.png"
                alt=""
              />
            </button>
            <button>
              <img
                src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/login/google.png"
                alt=""
              />
            </button>
            <button>
              <img
                src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/login/naver.png"
                alt=""
              />
            </button>
            <button>
              <img
                src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/login/x.png"
                alt=""
              />
            </button>
            <button>
              <img
                src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/login/apple.png"
                alt=""
              />
            </button>
          </SnsLoginBtns>

          <p>SNS계정으로 간편하게 가입하여 서비스를 이용하실 수 있습니다.</p>
        </LoginCont>
      </LoginBox>
    </>
  );
};

export default Login;
