import ReactPlayer from 'react-player/youtube';
import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

{
  /* <iframe width="1280" height="720" src="https://www.youtube.com/embed/O-IWJk6K8IY" title="🔥마침내 올 것이 왔따!!🔥 [PV 공개] 귀멸의 칼날: 도공 마을편 - 4월 10일 월요일 밤 11시 첫 방송!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */
}

const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25%; /* 16:9 비율 */

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }

  .controls {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.6);
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .progress-bar {
    flex-grow: 1;
    height: 5px;
    background: #666;
    cursor: pointer;
  }

  .progress {
    height: 100%;
    background: #1aafff;
  }

  .volume-range {
    width: 80px;
    height: 5px;
    appearance: none;
    background: #666;
    outline: none;
    border-radius: 3px;
    &::-webkit-slider-thumb {
      appearance: none;
      width: 12px;
      height: 12px;
      background: #1aafff;
      border-radius: 50%;
      cursor: pointer;
    }
  }
  .time-tooltip {
    position: absolute;
    bottom: 20px;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
    pointer-events: none;
  }
`;

const Video = () => {
  const [playing, setPlaying] = useState(false);
  const [played, setPlayed] = useState(0);
  const [seeking, setSeeking] = useState(false);
  const [volume, setVolume] = useState(1);
  const [duration, setDuration] = useState(0);
  const [previewPos, setPreviewPos] = useState({ x: 0, y: 0 });
  const [showPreview, setShowPreview] = useState(false);
  const playerRef = useRef(null);
  const progressRef = useRef(null);

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handleProgress = (state) => {
    if (!seeking) {
      setPlayed(state.played);
    }
  };

  const handleMouseMove = (e) => {
    if (progressRef.current) {
      const bounds = progressRef.current.getBoundingClientRect();
      const percent = Math.min(Math.max((e.clientX - bounds.left) / bounds.width, 0), 1);
      const currentProgressWidth = played * bounds.width;

      const isNearProgress = Math.abs(e.clientX - (bounds.left + currentProgressWidth)) <= 5;
      setShowPreview(isNearProgress);

      setPreviewPos({
        x: e.clientX - bounds.left,
        y: bounds.top,
      });

      if (seeking) {
        setPlayed(percent);
      }
    }
  };

  const handleSeekMouseDown = () => {
    setSeeking(true);
  };

  const handleSeekMouseUp = (e) => {
    if (seeking) {
      setSeeking(false);
      if (progressRef.current) {
        const bounds = progressRef.current.getBoundingClientRect();
        const percent = Math.min(Math.max((e.clientX - bounds.left) / bounds.width, 0), 1);
        playerRef.current.seekTo(percent);
      }
    }
  };

  // 시간 포맷팅 함수
  const formatTime = (seconds) => {
    const date = new Date(seconds * 1000);
    const hh = date.getUTCHours();
    const mm = date.getUTCMinutes();
    const ss = date.getUTCSeconds().toString().padStart(2, '0');
    if (hh) {
      return `${hh}:${mm.toString().padStart(2, '0')}:${ss}`;
    }
    return `${mm}:${ss}`;
  };

  // 마우스가 window 밖으로 나갔을 때도 드래그 종료
  useEffect(() => {
    const handleMouseUp = () => {
      if (seeking) {
        setSeeking(false);
      }
    };

    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [seeking]);

  return (
    <PlayerWrapper>
      <ReactPlayer
        ref={playerRef}
        className="react-player"
        url="https://www.youtube.com/watch?v=O-IWJk6K8IY"
        width="100%"
        height="100%"
        playing={playing}
        volume={volume}
        controls={false}
        onProgress={handleProgress}
        onDuration={setDuration}
        onClick={handlePlayPause} // 화면 클릭 시 재생/정지
        onPlay={() => setPlaying(true)} // 재생 상태 동기화
        onPause={() => setPlaying(false)} // 정지 상태 동기화
        config={{
          youtube: {
            playerVars: {
              rel: 0, // 관련 동영상 숨기기
              showinfo: 0, // 동영상 정보 숨기기
              modestbranding: 1, // YouTube 로고 최소화
              controls: 0, // YouTube 기본 컨트롤 숨기기
              iv_load_policy: 3, // 동영상 어노테이션 숨기기
              disablekb: 1, // 키보드 컨트롤 비활성화
              fs: 0, // 전체화면 버튼 숨기기
              annotations: 0, // 어노테이션 숨기기
              endscreen: 0, // 종료 화면 숨기기
            },
            embedOptions: {
              controls: 0,
              title: 0,
              rel: 0,
            },
          },
        }}
      />
      <div className="controls">
        <button onClick={handlePlayPause}>{playing ? '∥' : '▶'}</button>
        <div
          ref={progressRef}
          className="progress-bar"
          onMouseMove={handleMouseMove}
          onMouseDown={handleSeekMouseDown}
          onMouseUp={handleSeekMouseUp}
          onMouseLeave={() => setShowPreview(false)}
        >
          <div className="progress" style={{ width: `${played * 100}%` }} />
          {showPreview && (
            <div className="time-tooltip" style={{ left: previewPos.x }}>
              {formatTime(duration * played)}
            </div>
          )}
        </div>
        <input
          type="range"
          className="volume-range"
          min={0}
          max={1}
          step="any"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
        />
        <button onClick={() => playerRef.current.wrapper.requestFullscreen()}>⛶</button>
      </div>
    </PlayerWrapper>
  );
};

export default Video;
