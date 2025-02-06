import RecommendItem from './RecommendItem';
import { ListOverlay } from './style';

const RecommendList = ({ videoData }) => {
  return (
    <>
      {videoData.map((video) => (
        <RecommendItem key={videoData.id} video={video} />
      ))}
      <ListOverlay />
    </>
  );
};

export default RecommendList;
