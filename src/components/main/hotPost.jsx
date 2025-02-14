import React from 'react';
import { useSelector } from 'react-redux';
import { HotpostContent, HotpostContentCover, HotpostContentTitle } from '../../pages/main/style';

const HotPost = () => {
  const { id, title, tag } = useSelector;
  return (
    <>
      <div className="bg-gr div_top_margin">
        <h2>오늘 HOT한 게시물</h2>
        <div className="content_wrap">
          <HotpostContent>
            <HotpostContentCover />
            <img src="../public/images/pattern/thunail.png"></img>
            <HotpostContentTitle>
              <div>
                <label>HOT</label>
                <label>TOP3</label>
              </div>
              <h2>캐릭캐릭체인지</h2>
              <p>#오늘 #애니 #추천 #ㅈㄱㄴ #노래미침 #사카모토입니다만</p>
            </HotpostContentTitle>
          </HotpostContent>
          <HotpostContent>
            <HotpostContentCover />
            <img src="../public/images/pattern/thunail.png"></img>
            <HotpostContentTitle>
              <div>
                <label>HOT</label>
                <label>TOP3</label>
              </div>
              <h2>캐릭캐릭체인지</h2>
              <p>#오늘 #애니 #추천 #ㅈㄱㄴ #노래미침 #사카모토입니다만</p>
            </HotpostContentTitle>
          </HotpostContent>
          <HotpostContent>
            <HotpostContentCover />
            <img src="../public/images/pattern/thunail.png"></img>
            <HotpostContentTitle>
              <div>
                <label>HOT</label>
                <label>TOP3</label>
              </div>
              <h2>캐릭캐릭체인지</h2>
              <p>#오늘 #애니 #추천 #ㅈㄱㄴ #노래미침 #사카모토입니다만</p>
            </HotpostContentTitle>
          </HotpostContent>
        </div>
      </div>
    </>
  );
};

export default HotPost;
