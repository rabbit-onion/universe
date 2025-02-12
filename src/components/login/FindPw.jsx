import { FindWrap, MainTitle, Wrap, EmailWrap, SubTitle, SubText, MailBox, FindBtn, AuthBtn, Line } from './style';

const FindPw = () => {
  return (
    <>
      <FindWrap>
        <Wrap>
          <MainTitle>비밀번호 찾기</MainTitle>

          <EmailWrap>
            <SubTitle>아이디로 비밀번호 찾기</SubTitle>
            <SubText>
              회원가입 시 등록된 이메일로 전송됩니다
              <br /> 단, 인증URL은 12시간동안 유효하며, 12시간 내 접속해서 비밀번호를 변경해주셔야 합니다
            </SubText>
            <MailBox>아이디</MailBox>
            <FindBtn>확인</FindBtn>
          </EmailWrap>

          <Line>
            <hr />
            또는
            <hr />
          </Line>

          <div>
            <SubTitle>본인인증으로 찾기</SubTitle>
            <SubText>본인인증을 완료 후 비밀번호를 변경하실 수 있습니다</SubText>
            <AuthBtn>본인인증하기</AuthBtn>
          </div>
        </Wrap>
      </FindWrap>
    </>
  );
};

export default FindPw;
