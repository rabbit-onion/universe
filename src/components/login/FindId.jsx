import { FindWrap, MainTitle, Wrap, EmailWrap, SubTitle, SubText, MailBox, FindBtn, AuthBtn } from './style';

const FindId = () => {
  return (
    <>
      <FindWrap>
        <Wrap>
          <MainTitle>아이디 찾기</MainTitle>

          <EmailWrap>
            <SubTitle>이메일로 찾기</SubTitle>
            <SubText>계정 가입 시 등록한 이메일을 입력해주세요</SubText>
            <MailBox>이메일</MailBox>
            <FindBtn>확인</FindBtn>
          </EmailWrap>

          <div>
            <div></div>
            <span>또는</span>
            <div></div>
          </div>

          <div>
            <SubTitle>본인인증으로 찾기</SubTitle>
            <SubText>이미 본인인증이 완료된 계정에 한하여 찾기가 가능합니다</SubText>
            <AuthBtn>본인인증하기</AuthBtn>
          </div>
        </Wrap>
      </FindWrap>
    </>
  );
};

export default FindId;
