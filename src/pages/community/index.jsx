import CommunityMain from '../../components/community/communitymain/communityMain';
import PostForGenre from '../../components/community/communitymain/postForGenre';
import RecentlyPost from '../../components/community/communitymain/recentlyPost';
import Pagination from '../../components/pagination/pagination';
import BottomBanner from '../../components/banner/bottomBanner';

const Community = () => {
  return (
    <div>
      <CommunityMain />
      <PostForGenre />
      <RecentlyPost />
      <Pagination />
      <BottomBanner />
    </div>
  );
};

export default Community;
