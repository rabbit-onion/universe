import React from 'react';
import { InfoBtnImg, MainThumbnailWrap, PlayBtnImg, TxtBox, WhiteBlur } from '../../../pages/main/style';
import { Link } from 'react-router-dom';

const HorizontalThumbnail = () => {
  const pathSegments = location.pathname.split('/').filter(Boolean);
  const currentPage = pathSegments[0] || 'main';

  const opts = [
    'autoplay=1',
    'mute=1',
    'modestbranding=1',
    'controls=0',
    'loop=1',
    'rel=0',
    'playlist=rZEc41jPypQ',
    'vq=hd1080',
  ].join('&');

  return (
    <MainThumbnailWrap>
      <iframe
        width="100%"
        height="970px"
        src={`https://www.youtube.com/embed/rZEc41jPypQ?${opts}`}
        title="펭귄 하이웨이 - 아오야마 탐험일지 영상"
        frameborder="0"
        allow="autoplay; encrypted-media;"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        style={{ pointerEvents: 'none' }}
      ></iframe>
      <WhiteBlur />
      <TxtBox>
        <img
          src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/main/penguin-logo.svg"
          alt=""
        />
        <p>
          <Link to="/video/play">
            <PlayBtnImg
              src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/main/playBtn.svg"
              alt=""
            />
          </Link>
          <Link to={`/${currentPage}/videoinfo`}>
            <InfoBtnImg
              src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/main/infoBtn.svg"
              alt=""
            />
          </Link>
        </p>
      </TxtBox>
    </MainThumbnailWrap>
  );
};

export default HorizontalThumbnail;
