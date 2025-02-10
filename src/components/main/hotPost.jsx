import React from 'react';
import { useSelector } from 'react-redux';

const HotPost = () => {
  const { id, title, tag } = useSelector;
  return (
    <>
      <div className="bg-gr div_top_margin">
        <h2>오늘 HOT한 게시물</h2>
        <div className="content_wrap">
          <div className="hotpost_content">
            <div className="hotpost_content_oplow"></div>
            <img className="hotpost_content_img" src="../public/images/pattern/thunail.png"></img>
            <div className="hotpost_content_title">
              <div className="hotpost_label_div">
                <label>HOT</label>
                <label>TOP3</label>
              </div>
              <p className="hotpost_content_maintitle">캐릭캐릭체인지</p>
              <p>#오늘 #애니 #추천 #ㅈㄱㄴ #노래미침 #사카모토입니다만</p>
            </div>
          </div>
          <div className="hotpost_content">
            <div className="hotpost_content_oplow"></div>
            <img className="hotpost_content_img" src="../public/images/pattern/thunail.png"></img>
            <div className="hotpost_content_title">
              <div className="hotpost_label_div">
                <label>HOT</label>
                <label>TOP3</label>
              </div>
              <p className="hotpost_content_maintitle">캐릭캐릭체인지</p>
              <p>#오늘 #애니 #추천 #ㅈㄱㄴ #노래미침 #사카모토입니다만</p>
            </div>
          </div>
          <div className="hotpost_content">
            <div className="hotpost_content_oplow"></div>
            <img className="hotpost_content_img" src="../public/images/pattern/thunail.png"></img>
            <div className="hotpost_content_title">
              <div className="hotpost_label_div">
                <label>HOT</label>
                <label>TOP3</label>
              </div>
              <p className="hotpost_content_maintitle">캐릭캐릭체인지</p>
              <p>#오늘 #애니 #추천 #ㅈㄱㄴ #노래미침 #사카모토입니다만</p>
            </div>
          </div>
        </div>{' '}
        {/*  content_wrap */}
      </div>
    </>
  );
};

export default HotPost;
