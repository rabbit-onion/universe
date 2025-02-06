import RecommendItem from './RecommendItem';
import { ListOverlay } from './style';

const RecommendList = ({ videoData }) => {
  return (
    <>
      {videoData.map((video) => (
        <RecommendItem key={video.id} video={video} />
      ))}
      <ListOverlay />
    </>
  );
};

export default RecommendList;
