import React from 'react';
import { useSelector } from 'react-redux';

const HotPost = () => {
  const { id, title, tag } = useSelector;
  return (
    <>
      <div className="bg-gr">
        <h2>오늘 HOT한 게시물</h2>
        <div className="content_wrap">
          <div className="hotpost_content">
            <img className="hotpost_content_img" src="../public/images/pattern/thunail.png"></img>
            <div className="hotpost_content_title">
              <label>HOT</label>
              <p>캐릭캐릭체인지</p>
              <p>#오늘 #애니 #추천 #ㅈㄱㄴ #노래미침 #사카모토입니다만'</p>
            </div>
          </div>
        </div>{' '}
        {/*  content_wrap */}
      </div>
    </>
  );
};

export default HotPost;
