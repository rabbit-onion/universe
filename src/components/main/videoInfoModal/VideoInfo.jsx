import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVideo } from '../../../store/modules/getThunk';
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
  RecContentSec,
  PvSec,
  PvCard,
  ModalFooter,
  ModalFooterDesc,
  MoreBtn,
  MoreBox,
} from './style';
import EpisodeList from './EpisodeList';
import RecommendList from './RecommendList';

const VideoInfo = () => {
  const { monsterData } = useSelector((state) => state.videoR);
  const { videoData } = useSelector((state) => state.videoR);
  const dispatch = useDispatch();

  const [visibleItem, setVisibleItem] = useState(8);
  const [moreItem, setMoreItem] = useState(false);

  useEffect(() => {
    dispatch(getVideo());
  }, []);

  if (!monsterData || !videoData || monsterData.length === 0 || videoData.length === 0) {
    return <div>Loading . . . </div>;
  }

  if (!monsterData.seasons || !videoData) {
    return <div>Loading . . .</div>;
  }

  const { genres, id, name, overview, production_companies, seasons, backdrop_path, type } = monsterData;
  const formattedOverview = overview.replace(/\. /g, '.\n');

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

  const handleViewEpisodeNum = () => {
    setVisibleItem((prev) => prev + 8);
    if (visibleItem >= seasons.episodes.length) {
      setVisibleItem(8);
    }
  };

  const viewEpisodes = seasons.episodes.slice(0, visibleItem);

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
            <img
              src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/modal/monsterTitle.png"
              alt=""
            />
          </h1>
          <ProgressBar>
            <div></div>
          </ProgressBar>
          <TopBtns>
            <div>
              <button>
                <img
                  src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/modal/playBtn.svg"
                  alt=""
                />
              </button>
              <button>
                <img
                  src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/modal/plusBtn.svg"
                  alt=""
                />
              </button>
              <button>
                <img
                  src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/modal/goodBtn.svg"
                  alt=""
                />
              </button>
            </div>
            <button>
              <img
                src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/modal/muteBtn.svg"
                alt=""
              />
            </button>
          </TopBtns>

          <VideoDesc>
            <strong>2025년 리미티드 시리즈</strong>
            <FlexBox>
              <p>{formattedOverview}</p>
              <InfoDetail>
                <div>
                  <strong>제작</strong>
                  <p>
                    {production_companies.map((item, idx) => (
                      <span key={item.id}>{item.name}</span>
                    ))}
                  </p>
                </div>
                <div>
                  <strong>시리즈 특징 </strong>
                  <p>
                    {genres.map((item, idx) => (
                      <span key={item.id}>
                        {item.name}
                        <br />
                      </span>
                    ))}
                  </p>
                </div>
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
              <option value="1">스페셜</option>
              <option value="2">1기</option>
              <option value="3">2기</option>
            </SeasonSelect>
          </EpisodeTop>

          <EpisodeList id={id} name={name} viewEpisodes={viewEpisodes} backdrop_path={backdrop_path} />
          <hr />

          <MoreBtn onClick={handleViewEpisodeNum}>
            <img
              src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/icons/downArrow.svg"
              alt={moreItem ? '더보기' : '접기'}
              style={{ transform: moreItem ? 'none' : 'rotate(180deg)' }}
            />
          </MoreBtn>
        </EpisodeSec>

        <RecContentSec>
          <h2>함께 시청된 콘텐츠</h2>
          <RecommendList videoData={videoData} />
          <MoreBox>
            <hr />
            <button>
              <img
                src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/icons/downArrow.svg"
                alt=""
              />
            </button>
          </MoreBox>
        </RecContentSec>

        <PvSec>
          <h2>예고편 및 다른 영상</h2>
          <PvCard>
            <img
              src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/modal/monsterPV.png"
              alt=""
            />
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
