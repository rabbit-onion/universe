import React from 'react';

const UserWatching = () => {
  return (
    <>
      <div className="bg-gr">
        <h2>XX님이 시청중인 컨텐츠</h2>
        <div className="content_wrap">
          <div className="vertical_watching_content">
            <img className="vertical_watching_content" src="../public/images/pattern/thunail.png"></img>
          </div>
          <div className="vertical_watching_content">
            <img className="vertical_watching_content" src="../public/images/pattern/thunail.png"></img>
          </div>
          <div className="vertical_watching_content">
            <img className="vertical_watching_content" src="../public/images/pattern/thunail.png"></img>
          </div>
          <div className="vertical_watching_content">
            <img className="vertical_watching_content" src="../public/images/pattern/thunail.png"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserWatching;
