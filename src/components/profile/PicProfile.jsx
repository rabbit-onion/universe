import { Comment, Option, OptionWrap, Plus, ProfileBox, ProfileRock } from './style';

const PicProfile = () => {
  return (
    <>
      <Comment>프로필 선택</Comment>
      <Plus>+</Plus>
      <ProfileBox></ProfileBox>
      <ProfileRock>프로필 잠금 설정</ProfileRock>
      <OptionWrap>
        <Option>확인</Option>
        <Option>취소</Option>
      </OptionWrap>
    </>
  );
};

export default PicProfile;
