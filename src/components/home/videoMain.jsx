import React from 'react';
import { VideoMainWrap } from './styled';
import { BlackBlur } from './styled';

const VideoMain = () => {
  return (
    <div>
      <VideoMainWrap>
        <video src="/video/membership_video.mp4" autoPlay muted loop></video>
        <h2>
          동시 방영 신작부터 <br></br>역대 인기작까지 한번에
        </h2>
        {/* <button className="membership_button">멤버쉽 시작하기</button> */}
        <div className="black_blur"> </div>
      </VideoMainWrap>
    </div>
  );
};

export default VideoMain;
