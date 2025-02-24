import React from 'react';
import { VerticalUserWatching } from '../../pages/main/style';
import ProgressBar from '../../ui/ProgressBar';

const UserWatching = () => {
  return (
    <>
      <div className="bg-gr div_top_margin">
        <h2>준용님이 시청중인 컨텐츠</h2>
        <div className="content_wrap">
          <VerticalUserWatching w="45">
            <img src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/main/watching/charChange.png"></img>
            <div>
              <div>
                <div></div>
              </div>
              <p>캐릭캐릭체인지</p>
            </div>
          </VerticalUserWatching>
          <VerticalUserWatching w="90">
            <img src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/main/watching/holidaysVillain.png"></img>
            <div>
              <div>
                <div></div>
              </div>
              <p>휴일의 악당</p>
            </div>
          </VerticalUserWatching>
          <VerticalUserWatching w="60">
            <img src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/main/watching/killersclass.png"></img>
            <div>
              <div>
                <div></div>
              </div>
              <p>암살교실</p>
            </div>
          </VerticalUserWatching>
        </div>
      </div>
    </>
  );
};

export default UserWatching;
