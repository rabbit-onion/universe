import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVideo } from '../../store/modules/getThunk';
import {
  Btns,
  FlexBox,
  InfoDetail,
  ModalMain,
  ModalTop,
  Overlay,
  ProgressBar,
  TopInner,
  VideoBox,
  VideoDesc,
  EpisodeSec,
  EpisodeTop,
  EpisodeItem,
  EpisodeNum,
  EpisodeTitle,
  EpisodeDesc,
  EpisodeInfo,
  SeasonSelect,
} from './style';

const VideoInfo = () => {
  const { monsterData } = useSelector((state) => state.videoR);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideo());
  }, []);

  if (!monsterData || monsterData.length === 0) {
    return <div>Loading . . . </div>;
  }

  const { backdrop_path } = monsterData;
  const bgurl = 'https://image.tmdb.org/t/p/w500/';

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
        <VideoBox
          width="100%"
          height="950px"
          src={`https://www.youtube.com/embed/${videoId}?${opts}`}
          title="애니메이션 '괴수 8호' 제1기 총집편"
          frameBorder="0"
          allow="autoplay; encrypted-media;"
          allowFullScreen
          style={{ pointerEvents: 'none' }}
        />
        <Overlay />

        <TopInner>
          <h1>
            <img src="/images/video/monsterTitle.png" alt="" />
          </h1>
          <ProgressBar>
            <div></div>
          </ProgressBar>
          {/* flex줄 박스 */}
          <Btns>
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
          </Btns>

          <VideoDesc>
            <strong>2025년 리미티드 시리즈</strong>
            <FlexBox>
              <p>
                일상적으로 괴수가 사람들을 위협하는 세계.
                <br />
                괴수를 토벌하는 '일본방위대' 입대에 뜻을 두었던 히비노 카프카는, 어느덧 그 꿈을 접고 괴수 전문
                청소업에서 일하고 있었다.
                <br />
                일찍이 그렇게 맹세했던 소꿉친구인 제3부대 대장·아시로 미나의 활약과,
                <br />
                방위대를 목표로 하는 후배·이치카와 레노와의 만남을 계기로 다시 꿈을 쫓기 시작하는 카프카.
                <br />
                그러나 그 순간, 수수께끼의 소형 괴수에 의해 강대한 힘을 가진 '괴수로 변신'하고 만다!
                <br />
                '괴수 8호'라는 이름으로 일본 전역에서 쫓기는 존재가 된 카프카는, 그래도 방위대원에 대한 꿈을 포기하지
                않고,괴수 재해에 맞서는 것이었다
              </p>
              <InfoDetail>
                <p>
                  <strong>제작</strong>
                  프로덕션LG
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
          <div className="episodes__list">
            {/* item 컴포넌트 map처리 */}
            <EpisodeItem>
              <EpisodeNum>1</EpisodeNum>
              <div>
                <img src={`${bgurl}${backdrop_path}`} alt="" />
              </div>
              <EpisodeInfo>
                <EpisodeTitle>
                  <div>
                    <span>1화</span>
                    <h3>괴수가 된 남자</h3>
                  </div>
                  <span>60분</span>
                </EpisodeTitle>
                <EpisodeDesc>
                  일상적인 괴수의 위협에 노출된 일본.
                  <br />
                  괴수를 토벌하는 「일본 방위대」 입대를 지망했던 히비노 카프카는 꿈을 포기하고 괴수 전문 청소업자로서
                  일하고 있었다.
                  <br />
                  방위대 제3부대의 대장으로서 활약하는 소꿉친구･아시로 미나와 나눴던 함께 괴수와 싸우자는 약속을
                  떠올리며 안타까움을 느끼는 나날을 보내던 중,
                  <br />
                  카프카는 방위 대원을 지망하는 후배 이치카와 레노를 만났는데.
                </EpisodeDesc>
              </EpisodeInfo>
            </EpisodeItem>
            <hr />
          </div>
          <button>회차 더보기 버튼</button>
        </EpisodeSec>

        <div className="rec-contents-sec">
          <h2>함께 시청된 콘텐츠</h2>
          <div className="recList">
            {/* item map처리 */}
            <div className="recItem">
              <div className="card">
                <div className="top">
                  <img src="" alt="" />
                </div>
                <div className="bottom">
                  <h4>도쿄리벤저스</h4>
                  <span>학원 청춘</span> | <span>TVA 완결</span>
                  <button>+</button>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <button>더보기버튼</button>
        </div>

        <div className="related-sec">
          <div>
            <img src="" alt="" />
          </div>
          <h4>괴수 8호 (공식 예고편)</h4>
        </div>
      </ModalMain>
      <div className="modalFooter">
        <h2>괴수 8호 상세 정보</h2>
        <div className="desc">
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
        </div>
      </div>
    </>
  );
};

export default VideoInfo;
