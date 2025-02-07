import { RecCard, RecCardBottom, RecCardTop } from './style';

const RecommendItem = ({ video }) => {
  // const posterUrl =
  // const {} = video;
  return (
    <>
      <RecCard>
        <RecCardTop>
          <img src="/images/video/tokyoR.png" alt="" />
        </RecCardTop>
        <RecCardBottom>
          <div>
            <h4>도쿄리벤저스</h4>
            <span>학원 청춘</span> | <span>TVA 완결</span>
          </div>
          <button>
            <img src="/images/video/icon/plusIcon.svg" alt="" />
          </button>
        </RecCardBottom>
      </RecCard>
    </>
  );
};

export default RecommendItem;
