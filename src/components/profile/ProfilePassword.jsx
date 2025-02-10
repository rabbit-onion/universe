import {
  Comment,
  ConBox,
  Option,
  OptionWrap,
  PasswordBox,
  PassWords,
  PasswordWrap,
  Text,
  Texts,
  TextWrap,
  Unit,
} from './style';

const ProfilePassword = () => {
  return (
    <>
      <PasswordWrap>
        <ConBox>
          <Comment>프로필 만들기</Comment>
          <PasswordBox>
            <TextWrap>
              <Text>비밀번호 입력</Text>
              <Texts>사용 할 비밀번호 4자리를 입력해주세요</Texts>
            </TextWrap>
            <PassWords>
              <Unit></Unit>
              <Unit></Unit>
              <Unit></Unit>
              <Unit></Unit>
            </PassWords>
          </PasswordBox>
          <OptionWrap>
            <Option>확인</Option>
            <Option>취소</Option>
          </OptionWrap>
        </ConBox>
      </PasswordWrap>
    </>
  );
};

export default ProfilePassword;
