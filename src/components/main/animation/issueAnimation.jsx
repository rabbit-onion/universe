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
              <h2>펭귄 하이웨이</h2>
              <p>2025년도 공개예정작</p>
            </BlackBlur>
            <IssueContain>
              <div>
                <img src="/images/pattern/vertical/bleach.jpg"></img>
                <button>공식 예고편 보러가기</button>
              </div>
            </IssueContain>
            <IssueAnimationImg src="/images/pattern/thunail.png" />
          </div>
        </IssueContentWrap>
      </div>
    </>
  );
};

export default IssueAnimation;
