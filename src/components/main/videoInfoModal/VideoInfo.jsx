import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVideo } from '../../store/modules/getThunk';
import {
  ModalTop,
  VideoWrap,
  Overlay,
  VideoBox,
  TopInner,
  ProgressBar,
  TopBtns,
  VideoDesc,
  InfoDetail,
  FlexBox,
  ModalMain,
  EpisodeSec,
  EpisodeTop,
  SeasonSelect,
  MoreBtn,
  RecContentSec,
  RecList,
  RecItem,
  RecCard,
  RecCardTop,
  RecCardBottom,
  ListOverlay,
  PvSec,
  PvCard,
  ModalFooter,
  ModalFooterDesc,
} from './style';
import EpisodeList from './EpisodeList';

const VideoInfo = () => {
  const { monsterData } = useSelector((state) => state.videoR);
  const { genres, id, name, origin_country, overview, production_companies, seasons, type } = monsterData;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideo());
  }, []);

  if (!monsterData || monsterData.length === 0) {
    return <div>Loading . . . </div>;
  }

  const videoId = 'eBivqKyjiqA';
  const opts = [
    'autoplay=1',
    'mute=1',
    'modestbranding=1',
    'controls=0',
    'loop=1',
    'rel=0',
    'playlist=' + videoId,
  ].join('&');

  return (
    <>
      <ModalTop>
        <VideoWrap>
          <VideoBox
            src={`https://www.youtube.com/embed/${videoId}?${opts}`}
            title="애니메이션 '괴수 8호' 제1기 총집편"
            allow="autoplay; encrypted-media;"
            allowFullScreen
            style={{ pointerEvents: 'none' }}
          />
          <Overlay />
        </VideoWrap>

        <TopInner>
          <h1>
            <img src="/images/video/monsterTitle.png" alt="" />
          </h1>
          <ProgressBar>
            <div></div>
          </ProgressBar>
          <TopBtns>
            <div>
              <button>
                <img src="/images/video/playBtn.svg" alt="" />
              </button>
              <button>
                <img src="/images/video/plusBtn.svg" alt="" />
              </button>
              <button>
                <img src="/images/video/goodBtn.svg" alt="" />
              </button>
            </div>
            <button>
              <img src="/images/video/muteBtn.svg" alt="" />
            </button>
          </TopBtns>

          <VideoDesc>
            <strong>2025년 리미티드 시리즈</strong>
            <FlexBox>
              <p>{overview}</p>
              <InfoDetail>
                <p>
                  <strong>제작</strong>
                  {production_companies.map((item) => `${item.name}`)}
                </p>
                <p>
                  <strong>감독</strong>
                  미야 시게유키, 카미야 토모미
                </p>
                <p>
                  <strong>시리즈 특징 </strong>
                  #액션 #재난 #먼치킨 #배틀 #성장
                </p>
              </InfoDetail>
            </FlexBox>
          </VideoDesc>
        </TopInner>
      </ModalTop>

      <ModalMain>
        <EpisodeSec>
          <EpisodeTop>
            <h2>회차</h2>
            <SeasonSelect name="series" id="series">
              <option>리미티드 시리즈</option>
              <option value="1">1기</option>
              <option value="2">2기</option>
              <option value="3">3기</option>
            </SeasonSelect>
          </EpisodeTop>
          <EpisodeList />
          <MoreBtn>
            <img src="/images/video/icon/downArrow.svg" alt="" />
          </MoreBtn>
        </EpisodeSec>

        <RecContentSec>
          <h2>함께 시청된 콘텐츠</h2>
          <RecList>
            {/* item map처리 */}
            <RecItem>
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
            </RecItem>
            <ListOverlay />
          </RecList>
          <hr />
          <MoreBtn>
            <img src="/images/video/icon/downArrow.svg" alt="" />
          </MoreBtn>
        </RecContentSec>

        <PvSec>
          <h2>예고편 및 다른 영상</h2>
          <PvCard>
            <img src="/images/video/monsterPV.png" alt="" />
          </PvCard>
          <p>괴수 8호 (공식 예고편)</p>
        </PvSec>
      </ModalMain>

      <ModalFooter>
        <h2>괴수 8호 상세 정보</h2>
        <ModalFooterDesc>
          <p>
            <strong>제작</strong>프로덕션LG
          </p>
          <p>
            <strong>감독</strong>미야 시게유키, 카미야 토모미
          </p>
          <p>
            <strong>시리즈 특징</strong>#액션 #재난 #먼치킨 #배틀 #성장
          </p>
          <p>
            <strong>관람등급</strong>18+
          </p>
          <p>2025-18-22T09:00:00:00 000Z</p>
        </ModalFooterDesc>
      </ModalFooter>
    </>
  );
};

export default VideoInfo;
