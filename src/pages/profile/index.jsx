import { AddProfile } from '../../components';
import { ProfileWrap, Container } from './style';

const Profile = () => {
  return (
    <ProfileWrap>
      <Container>
        <AddProfile />
        {/* <PicProfile />
        <ProfileImage />
        <ProfilePassword /> */}
      </Container>
    </ProfileWrap>
  );
};

export default Profile;
