import styled from 'styled-components';

export const ModalTop = styled.div`
  width: 1440px;
  height: 950px;
  background-color: gray;
`;

export const ModalMain = styled.div`
  width: 1440px;
  height: 950px;
  background-color: lavender;
`;

const VideoInfo = () => {
  return (
    <>
      <ModalTop>
        <div>bg영상 재생부분</div>
        <h1>괴수 8호</h1>
        <div>재생바 컴포넌트</div>

        {/* flex줄 박스 */}
        <div>
          <div>
            <button>재생버튼 컴포넌트</button>
            <button>+버튼 컴포넌트</button>
            <button>따봉버튼 컴포넌트</button>
          </div>
          <button>뮤트버튼 컴포넌트</button>
        </div>
      </ModalTop>
      <ModalMain>
        <div className="videoDesc">
          <strong>2025년 리미티드 시리즈</strong>
          <div>
            <p>
              일상적으로 괴수가 사람들을 위협하는 세계.
              <br />
              괴수를 토벌하는 '일본방위대' 입대에 뜻을 두었던 히비노 카프카는, 어느덧 그 꿈을 접고 괴수 전문 청소업에서
              일하고 있었다.
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
            <div>
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
            </div>
          </div>
        </div>

        <div className="episodes-sec">
          <div className="episodes__top">
            <h2>회차</h2>
            <select name="series" id="series">
              <option>=== 시즌 ===</option>
              <option value="1">1기</option>
              <option value="2">2기</option>
              <option value="3">3기</option>
            </select>
          </div>
          <div className="episodes__list">
            {/* item 컴포넌트 map처리 */}
            <div className="episodes__item">
              <div>1</div>
              <div>thumbnail</div>
              <div className="episode__info">
                <div className="episode__title">
                  <span>1화</span>
                  <h3>괴수가 된 남자</h3>
                  <span>60분</span>
                </div>
                <div className="episode__desc">
                  일상적인 괴수의 위협에 노출된 일본.
                  <br />
                  괴수를 토벌하는 「일본 방위대」 입대를 지망했던 히비노 카프카는 꿈을 포기하고 괴수 전문 청소업자로서
                  일하고 있었다.
                  <br />
                  방위대 제3부대의 대장으로서 활약하는 소꿉친구･아시로 미나와 나눴던 함께 괴수와 싸우자는 약속을
                  떠올리며 안타까움을 느끼는 나날을 보내던 중,
                  <br />
                  카프카는 방위 대원을 지망하는 후배 이치카와 레노를 만났는데.
                </div>
              </div>
            </div>
            <hr />
          </div>
          <button>회차 더보기 버튼</button>
        </div>

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
