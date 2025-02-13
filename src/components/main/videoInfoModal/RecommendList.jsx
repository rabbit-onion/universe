import RecommendItem from './RecommendItem';
import { ListOverlay, RecItemWrap } from './style';

const RecommendList = ({ videoData }) => {
  return (
    <>
      <RecItemWrap>
        {videoData.map((video) => (
          <RecommendItem key={video.id} video={video} />
        ))}
        <ListOverlay />
      </RecItemWrap>
    </>
  );
};

export default RecommendList;
