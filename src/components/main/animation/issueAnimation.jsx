import React from 'react';

const IssueAnimation = () => {
  return (
    <>
      <div className="inner div_top_margin">
        <h2>2025년 2분기에 공개! 역대급 화제작!</h2>
      </div>
      <div className=" center_wrap">
        <div className="issue_content_wrap">
          <div>
            <div className="black_ophalf">
              <p className="issue_title">펭귄 하이웨이</p>
              <p className="issue_subtitle">2025년도 공개예정작</p>
            </div>
            <div className="issue_contain">
              <div className="issue_right_blur">
                <img className="issue_vertical_img" src="../public/images/pattern/vertical/bleach.jpg"></img>
              </div>
            </div>

            <img className="issueAnimation_img" src="../public/images/pattern/thunail.png"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default IssueAnimation;
