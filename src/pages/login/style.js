import styled from 'styled-components';

// Login.jsx style
export const LoginBox = styled.div`
  position: absolute;
  top: calc((100vh - 45.4rem) / 2);
  left: 50%;
  transform: translateX(-50%);
  width: 40.4rem;
  background: #121212;
  box-shadow: 0rem 0.2667rem 2rem rgba(0, 0, 0, 0.5);
  border-radius: 3.3333rem;
`;

export const LoginCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 3.8667rem 4rem 2.8667rem 4rem;
  h1 {
    img {
      width: 12.8667rem;
      height: auto;
    }
  }
  form {
    margin-top: 4.2rem;
    button {
      display: block;
      width: 21.4667rem;
      height: 3.4667rem;
      background: #0068ff;
      box-shadow: 0rem 0.2667rem 0.2667rem rgba(0, 0, 0, 0.25);
      border-radius: 2.9333rem;
      font-weight: 700;
      font-size: 1.3333rem;
      line-height: 1.6rem;
      color: #ffffff;
      margin: 4.2667rem auto 1.6rem auto;
    }
  }
`;

export const TypingArea = styled.div`
  input {
    width: 32.2667rem;
    height: 3.8667rem;
    background-color: transparent;
    border: none;
    border-bottom: 0.0667rem solid #525252;
    color: #fff;
    margin-top: 0.3333rem;
    &::placeholder {
      font-weight: 500;
      font-size: 1.3333rem;
      line-height: 1.6rem;
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
  margin-top: 1.2667rem;
  input[type='checkbox'] {
    appearance: none;
    width: 1.0667rem;
    height: 1.0667rem;
    border: 0.1333rem solid #acacac;
    border-radius: 0.2667rem;
    background-color: transparent;
    margin-right: 0.8rem;
    &:checked {
      background-color: #0066ff;
      background-image: url('https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/icons/check-white.svg');
      background-size: cover;
      border-color: #fff;
    }
  }

  label {
    font-weight: 500;
    font-size: 1.3333rem;
    line-height: 1.6rem;
    color: #636363;
    margin-right: 1.5333rem;
  }
`;

export const FindAndJoin = styled.div`
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.2rem;
  color: #5f5f5f;
  strong {
    padding: 0 0.8rem;
    a {
      color: #5f5f5f;
    }
  }
`;

export const SnsLoginBtns = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2.8rem;
  margin-bottom: 4.2667rem;
  button,
  img {
    width: 4rem;
    height: 4rem;
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
  width: 40.4rem;
  background: #121212;
  box-shadow: 0rem 0.2667rem 2rem rgba(0, 0, 0, 0.5);
  border-radius: 3.3333rem;
`;

export const JoinCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 4.3333rem 6.2rem 2.4667rem 6.2rem;
  h1,
  label {
    color: #fff;
  }
  h1 {
    width: 100%;
    margin-bottom: 2.8667rem;
    font-weight: 700;
    font-size: 1.6667rem;
    line-height: 2rem;
  }
`;

export const PwHint = styled.p``;
export const IsValid = styled.p``;

export const JoinInputArea = styled.ul`
  margin-bottom: 2.0667rem;
  li {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    label {
      font-weight: 600;
      font-size: 1rem;
      line-height: 1.2rem;
      /* margin-bottom: .6667rem; */
      span {
        color: #0068ff;
        margin-left: 0.0667rem;
      }
    }
    button {
      width: 5.6667rem;
      background: #0068ff;
      border-radius: 1.4333rem;
      padding: 0.6667rem 1.0667rem;
      font-size: 1rem;
      color: #fff;
    }
    input::placeholder {
      font-size: 0.8667rem;
      line-height: 0.9333rem;
      color: #959595;
      margin-top: 0.7333rem;
      margin-left: 1.6rem;
    }
  }
  input {
    width: 24.4rem;
    align-self: center;
    padding: 0.6667rem 0;
    border: none;
    border-bottom: 0.0667rem solid #959595;
    background-color: transparent;
    color: #fff;
    font-size: 0.9333rem;
    &::-webkit-search-cancel-button {
      color: white;
    }
    &:focus {
      outline: none;
      border-bottom: 0.0667rem solid #fff;
    }
  }
  p {
    width: 24.4rem;
    margin: auto;
    margin-top: 0.7333rem;
    font-size: 0.7333rem;
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
  gap: 1.9333rem;
  input {
    width: 70%;
  }
`;

export const JoinChkboxArea = styled.ul`
  padding: 0 0.1333rem;
  li {
    display: flex;
    align-items: center;
    gap: 0.4667rem;
    margin-bottom: 0.8667rem;
  }
  input[type='checkbox'] {
    appearance: none;
    width: 0.8rem;
    height: 0.8rem;
    border: 0.0667rem solid #acacac;
    border-radius: 0.1333rem;
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
    font-size: 0.8667rem;
    line-height: 1;
    color: #acacac;
    span {
      color: #0066ff;
    }
  }
`;

export const SubmitBtn = styled.div`
  padding-top: 1.1333rem;
  text-align: center;
  button {
    width: 21.4667rem;
    height: 3.4667rem;
    background: #0068ff;
    box-shadow: 0rem 0.2667rem 0.2667rem rgba(0, 0, 0, 0.25);
    border-radius: 2.9333rem;
    font-weight: 700;
    font-size: 1.1333rem;
    line-height: 1;

    color: #ffffff;
  }
`;

export const ToLogin = styled.p`
  width: 100%;
  margin-top: 1.7333rem;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.2rem;
  color: #656161;
  span {
    color: #0068ff;
  }
`;
