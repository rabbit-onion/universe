import styled from 'styled-components';

export const LoginBg = styled.div`
  position: relative;
  margin-top: -80px;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: url('https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/login/loginbg.png')
    no-repeat 0 0;
  background-size: cover;
`;

export const Dimmed = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const LoginBox = styled.div`
  position: absolute;
  top: 125px;
  left: 50%;
  transform: translateX(-50%);
  width: 606px;
  height: 681px;
  background: #121212;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.5);
  border-radius: 50px;
`;

export const LoginCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 58px 60px 43px 60px;
  h1 {
    img {
      width: 193px;
      height: auto;
    }
  }
  form {
    margin-top: 63px;
    button {
      display: block;
      width: 322px;
      height: 52px;
      background: #0068ff;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 44px;
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
      color: #ffffff;
      margin: 64px auto 24px auto;
    }
  }
`;

export const TypingArea = styled.div`
  input {
    width: 484px;
    height: 58px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #525252;
    &::placeholder {
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      color: #707070;
    }
  }
`;

export const ChkboxArea = styled.div`
  display: flex;
  align-items: center;
  margin-top: 19px;
  input[type='checkbox'] {
    appearance: none;
    width: 16px;
    height: 16px;
    border: 2px solid #acacac;
    border-radius: 4px;
    background-color: transparent;
    margin-right: 12px;
  }
  input[type='checkbox']:checked {
    /* background-color: #;
    border-color: ; */
  }
  label {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #636363;
    margin-right: 23px;
  }
`;

export const FindAndJoin = styled.div`
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #5f5f5f;
  strong {
    padding: 0 12px;
  }
`;

export const SnsLoginBtns = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 42px;
  margin-bottom: 64px;
  button {
    position: relative;
    width: 38px;
    height: 38px;
    border: none;
    border-radius: 100%;
    background-color: transparent;
    overflow: hidden;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 38px;
      height: 38px;
    }
  }
`;
