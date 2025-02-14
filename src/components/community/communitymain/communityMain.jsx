import React from 'react';
import { CommunityBanner, CommunityWrap } from '../styled';

const CommunityMain = () => {
  const menuType = [
    { id: 1, name: '전체' },
    { id: 2, name: '애니메이션 리뷰' },
    { id: 3, name: '애니메이션 추천' },
    { id: 4, name: '잡담' },
  ];

  const HotPost = [
    {
      id: 1,
      src: '../public/images/pattern/thunail.png',
      title: '오늘 본 애니노래 완전 취저',
      tag: '#오늘 #애니 #추천 #ㅈㄱㄴ #노래미침 #사카모토입니다만',
    },

    {
      id: 2,
      src: '../public/images/pattern/thunail.png',
      title: '너에게닿기를 쿠루미 미쳣음,,',
      tag: '#너에게닿기를2기 #쿠루미 #넘이쁨 #덕질',
    },
    {
      id: 3,
      src: '../public/images/pattern/thunail.png',
      title: '아니 오늘 신작애니 보신분',
      tag: '#신작 #애니 #어이없음 #후기 #스포주의',
    },
    {
      id: 4,
      src: '../public/images/pattern/thunail.png',
      title: '결말 미쳣나봐 진짜 하,,',
      tag: '#결말 #스포주의 #뒷통수 #한대',
    },
  ];
  return (
    <CommunityWrap>
      <CommunityBanner>
        <img src="../public/images/pattern/horizon/chihiro.webp"></img>
      </CommunityBanner>
      <div className="div_top_margin inner">
        <h2>오늘의 HOT 게시글 </h2>
        <h3>덕후 심장을 울린 게시글 </h3>
      </div>
      {menuType.map((item) => {
        return (
          <>
            <div key={item.id}>
              <input type="button" value={item.name}></input>
            </div>
          </>
        );
      })}
    </CommunityWrap>
  );
};

export default CommunityMain;

// 전체로 시작해서 끝까지 4개의 버튼을 누르면 각각에 해당하는 게시물들이 표현된다 .

// 그렇게 하려면 ..................................................................  onchange  ??
