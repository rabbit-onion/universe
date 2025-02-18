import CommunityMain from '../../components/community/communitymain/communityMain';
import PostForGenre from '../../components/community/communitymain/postForGenre';
import RecentlyPost from '../../components/community/communitymain/recentlyPost';
import Pagination from '../../components/pagination/pagination';
import BottomBanner from '../../components/banner/bottomBanner';
import { CommunityContainer } from './style';

const Community = () => {
  return (
    <CommunityContainer>
      <CommunityMain />
      <PostForGenre />
      <RecentlyPost />
      <Pagination />
      <BottomBanner />
    </CommunityContainer>
  );
};

export default Community;
