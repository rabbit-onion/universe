import React from 'react';
import { VerticalUserWatching } from '../../pages/main/style';

const UserWatching = () => {
  return (
    <>
      <div className="bg-gr div_top_margin">
        <h2>XX님이 시청중인 컨텐츠</h2>
        <div className="content_wrap">
          <VerticalUserWatching>
            <img src="/images/pattern/vertical/keroro.jpg"></img>
            <div>
              <p>캐릭캐릭체인지</p>
            </div>
          </VerticalUserWatching>
          <VerticalUserWatching>
            <img src="/images/pattern/vertical/keroro.jpg"></img>
            <div>
              <p>캐릭캐릭체인지</p>
            </div>
          </VerticalUserWatching>
          <VerticalUserWatching>
            <img src="/images/pattern/vertical/keroro.jpg"></img>
            <div>
              <p>캐릭캐릭체인지</p>
            </div>
          </VerticalUserWatching>
        </div>
      </div>
    </>
  );
};

export default UserWatching;
