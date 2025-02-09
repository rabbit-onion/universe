import { RecCard, RecCardBottom, RecCardTop } from './style';

const RecommendItem = ({ video }) => {
  // const posterUrl =
  // const {} = video;
  return (
    <>
      <RecCard>
        <RecCardTop>
          <img
            src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/modal/tokyoR.png"
            alt=""
          />
        </RecCardTop>
        <RecCardBottom>
          <div>
            <h4>도쿄리벤저스</h4>
            <span>학원 청춘</span> | <span>TVA 완결</span>
          </div>
          <button>
            <img
              src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/icons/plusIcon.svg"
              alt=""
            />
          </button>
        </RecCardBottom>
      </RecCard>
    </>
  );
};

export default RecommendItem;
