import { Comment, Comments, Edit, Plus, PlusWrap, ProfileName, UserChoice } from './style';

const AddProfile = () => {
  return (
    <>
      <Comment>프로필 선택</Comment>
      <Comments>시청할 프로필을 선택해 주세요</Comments>
      <UserChoice>
        <PlusWrap>
          <Plus>+</Plus>
          <ProfileName>박준용</ProfileName>
        </PlusWrap>
        <PlusWrap>
          <Plus>+</Plus>
        </PlusWrap>
      </UserChoice>
      <Edit>프로필 편집</Edit>
    </>
  );
};

export default AddProfile;
