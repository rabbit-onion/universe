import React from 'react';

const UserWatching = () => {
  return (
    <>
      <div className="bg-gr div_top_margin">
        <h2>XX님이 시청중인 컨텐츠</h2>
        <div className="content_wrap">
          <div className="vertical_watching_content">
            <img className="vertical_userwatching_content_img" src="../public/images/pattern/vertical/keroro.jpg"></img>
            <div className="vertical_userwatching_content_title_container">
              <p className="vertical_userwatching_content_title">캐릭캐릭체인지</p>
            </div>
          </div>
          <div className="vertical_watching_content">
            <img className="vertical_userwatching_content_img" src="../public/images/pattern/vertical/keroro.jpg"></img>
            <div className="vertical_userwatching_content_title_container">
              <p className="vertical_userwatching_content_title">캐릭캐릭체인지</p>
            </div>
          </div>
          <div className="vertical_watching_content">
            <img className="vertical_userwatching_content_img" src="../public/images/pattern/vertical/keroro.jpg"></img>
            <div className="vertical_userwatching_content_title_container">
              <p className="vertical_userwatching_content_title">캐릭캐릭체인지</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserWatching;
