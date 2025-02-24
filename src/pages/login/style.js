import styled from 'styled-components';

// Login.jsx style
export const LoginBox = styled.div`
  position: absolute;
  top: calc((100vh - 681px) / 2);
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
    color: #fff;
    &::placeholder {
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      color: #707070;
    }
    &:focus {
      outline: none;
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
    &:checked {
      background-color: #0066ff;
      background-image: url('https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/icons/check-white.svg');
      background-size: cover;
      border-color: #fff;
    }
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
  button,
  img {
    width: 60px;
    height: 60px;
  }
  button {
    position: relative;
    border: none;
    border-radius: 100%;
    background-color: transparent;
    overflow: hidden;
    img {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
`;

// ========================================
// Join.jsx style

export const JoinBox = styled.div`
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  width: 606px;
  background: #121212;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.5);
  border-radius: 50px;
`;

export const JoinCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 65px 93px 37px 93px;
  h1,
  label {
    color: #fff;
  }
  h1 {
    width: 100%;
    margin-bottom: 43px;
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
  }
`;

export const PwHint = styled.p``;
export const IsValid = styled.p``;

export const JoinInputArea = styled.ul`
  margin-bottom: 31px;
  li {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    label {
      font-weight: 600;
      font-size: 15px;
      line-height: 18px;
      /* margin-bottom: 10px; */
      span {
        color: #0068ff;
        margin-left: 1px;
      }
    }
    button {
      width: 85px;
      background: #0068ff;
      border-radius: 21.5px;
      padding: 10px 16px;
      font-size: 15px;
      color: #fff;
    }
    input::placeholder {
      font-size: 13px;
      line-height: 14px;
      color: #959595;
      margin-top: 11px;
      margin-left: 24px;
    }
  }
  input {
    width: 366px;
    align-self: center;
    padding: 10px 0;
    border: none;
    border-bottom: 1px solid #959595;
    background-color: transparent;
    color: #fff;
    font-size: 14px;
    &::-webkit-search-cancel-button {
      color: white;
    }
    &:focus {
      outline: none;
      border-bottom: 1px solid #fff;
    }
  }
  p {
    width: 366px;
    margin: auto;
    margin-top: 11px;
    font-size: 11px;
    color: red;
  }
  ${PwHint} {
    color: #878181;
  }
  ${IsValid} {
    color: lime;
  }
`;

export const EmailInput = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 29px;
  input {
    width: 70%;
  }
`;

export const JoinChkboxArea = styled.ul`
  padding: 0 2px;
  li {
    display: flex;
    align-items: center;
    gap: 7px;
    margin-bottom: 13px;
  }
  input[type='checkbox'] {
    appearance: none;
    width: 12px;
    height: 12px;
    border: 1px solid #acacac;
    border-radius: 2px;
  }
  input[type='checkbox']:checked {
    background-color: #0066ff;
    background-image: url('https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/icons/check-white.svg');
    background-size: cover;
    border-color: #fff;
  }
  label {
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 1;
    color: #acacac;
    span {
      color: #0066ff;
    }
  }
`;

export const SubmitBtn = styled.div`
  padding-top: 17px;
  text-align: center;
  button {
    width: 322px;
    height: 52px;
    background: #0068ff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 44px;
    font-weight: 700;
    font-size: 17px;
    line-height: 1;

    color: #ffffff;
  }
`;

export const ToLogin = styled.p`
  width: 100%;
  margin-top: 26px;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #656161;
  span {
    color: #0068ff;
  }
`;
