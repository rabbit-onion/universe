import { useEffect, useState } from 'react';
import { ChkboxArea, FindAndJoin, LoginBox, LoginCont, SnsLoginBtns, TypingArea } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../store/modules/authSlice';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isAuthenticated, loading, error } = useSelector((state) => state.authR);
  const [loginUser, setLoginUser] = useState({
    email: '',
    pw: '',
  });

  useEffect(() => {
    if (!loading && isAuthenticated && user) {
      navigate('/main');
    } else if (!loading && error) {
      alert(error);
    }
  }, [isAuthenticated, loading, error, user, navigate]);

  const changeInput = (e) => {
    const { name, value } = e.target;
    setLoginUser({ ...loginUser, [name]: value.replace(/\s/g, '') });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (loginUser.email === '' || loginUser.pw === '') {
      alert('이메일과 비밀번호를 입력해주세요.');
    } else {
      dispatch(authActions.login(loginUser));
    }
  };

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
          <form onSubmit={onSubmit}>
            <TypingArea>
              <label htmlFor="email" className="hide">
                이메일 주소
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="이메일 주소"
                value={loginUser.email}
                onChange={changeInput}
              />
              <label htmlFor="pw" className="hide">
                비밀번호
              </label>
              <input
                type="password"
                name="pw"
                id="pw"
                placeholder="비밀번호"
                value={loginUser.pw}
                onChange={changeInput}
              />
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

            <strong>
              <Link to="/auth/join">회원가입</Link>
            </strong>
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
