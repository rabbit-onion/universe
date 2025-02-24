import React from 'react';
import { BlackBlur, IssueAnimationImg, IssueContain, IssueContentWrap } from '../../../pages/main/style';

const IssueAnimation = () => {
  return (
    <>
      <div className="inner div_top_margin">
        <h2>2025년 2분기에 공개! 역대급 화제작!</h2>
      </div>
      <div className=" center_wrap">
        <IssueContentWrap>
          <div>
            <BlackBlur>
              <h2>약사의 혼잣말</h2>
              <p>2025년도 공개예정작</p>
              <img
                className="release-playBtn"
                src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/main/release-playBtn.svg"
              />
            </BlackBlur>
            <IssueContain>
              <div>
                <img src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/main/release-thumb.png"></img>
                <button>공식 예고편 보러가기</button>
              </div>
            </IssueContain>
            <IssueAnimationImg src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/main/pharmacist.png" />
          </div>
        </IssueContentWrap>
      </div>
    </>
  );
};

export default IssueAnimation;
