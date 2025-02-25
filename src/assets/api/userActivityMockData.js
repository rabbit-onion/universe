export const userActivityMockData = {
  // 최근 본 작품 (8개)
  recentlyViewed: [
    {
      id: 1,
      tmdbId: 12345,
      title: '귀멸의 칼날',
      episodeInfo: '17/118화',
      thumbnail:
        'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/thumnails/animation-horizon/blade.webp',
      lastWatched: '2024-02-17',
    },
    {
      id: 2,
      tmdbId: 23456,
      title: '괴수 8호',
      episodeInfo: '13/38화',
      thumbnail:
        'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/thumnails/animation-horizon/monster8.webp',

      lastWatched: '2024-02-16',
    },
    {
      id: 3,
      tmdbId: 34567,
      title: '블리치',
      episodeInfo: '23/128화',
      thumbnail:
        'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/thumnails/animation-horizon/bleach.webp',

      lastWatched: '2024-02-15',
    },
    {
      id: 4,
      tmdbId: 45678,
      title: '도라에몽',
      episodeInfo: '17/38화',
      thumbnail:
        'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/thumnails/animation-horizon/doraemon.webp',

      lastWatched: '2024-02-14',
    },
    {
      id: 5,
      tmdbId: 56789,
      title: '에반게리온',
      episodeInfo: '17/68화',
      thumbnail:
        'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/thumnails/animation-horizon/evangelion.webp',

      lastWatched: '2024-02-13',
    },
    {
      id: 6,
      tmdbId: 67890,
      title: '주술회전',
      episodeInfo: '17/88화',
      thumbnail:
        'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/thumnails/animation-horizon/jusul.webp',

      lastWatched: '2024-02-12',
    },
    {
      id: 7,
      tmdbId: 78901,
      title: '마슐',
      episodeInfo: '14/88화',
      thumbnail:
        'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/thumnails/animation-horizon/mashle.webp',

      lastWatched: '2024-02-11',
    },
    {
      id: 8,
      tmdbId: 89012,
      title: '원피스',
      episodeInfo: '57/68화',
      thumbnail:
        'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/thumnails/animation-horizon/onepiece.webp',

      lastWatched: '2024-02-10',
    },
  ],

  // 찜한 작품 (5개)
  favorites: [
    {
      id: 1,
      tmdbId: 34567,
      title: '하이큐 !!',
      thumbnail:
        'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/thumnails/animation-horizon/haikyu.webp',

      addedDate: '2024-02-15',
    },
    {
      id: 2,
      tmdbId: 45678,
      title: '하울의 움직이는 성',
      thumbnail:
        'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/thumnails/animation-horizon/howlscastle.webp',

      addedDate: '2024-02-14',
    },
    {
      id: 3,
      tmdbId: 56789,
      title: '지옥락',
      thumbnail:
        'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/thumnails/animation-horizon/hell.webp',

      addedDate: '2024-02-13',
    },
    {
      id: 4,
      tmdbId: 67890,
      title: '포켓몬스터',
      thumbnail:
        'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/thumnails/animation-horizon/poketmon.webp',

      addedDate: '2024-02-12',
    },
    {
      id: 5,
      tmdbId: 78901,
      title: '슬램덩크',
      thumbnail:
        'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/thumnails/animation-horizon/slamdunk.webp',

      addedDate: '2024-02-11',
    },
  ],

  // 나의 게시글 (3개)
  myPosts: [
    {
      id: 1,
      title: '미녀 노총각 리뷰어입니다',
      content: '이번화 작화퀄리티 미쳤네요...',
      thumbnail:
        'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/mypage/myPostThumb.png',

      date: '2024년 02월 15일 15:30',
      heartCount: 17,
      commentCount: 5,
    },
    {
      id: 2,
      title: '오늘 첫 방영 리뷰',
      content: '기대했던 만큼 재미있었습니다...',
      thumbnail:
        'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/mypage/ratingThumb.png',

      date: '2024년 02월 14일 13:45',
      heartCount: 5,
      commentCount: 3,
    },
    {
      id: 3,
      title: '굿즈 모집 설명글',
      content: '다음 달 예정된 굿즈 공구...',
      thumbnail:
        'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/mypage/reviewThumb.png',

      date: '2024년 02월 13일 10:20',
      heartCount: 10,
      commentCount: 8,
    },
  ],

  // 임시저장 (2개)
  draftPosts: [
    {
      id: 1,
      title: '애니보니까 온천가고 싶ㄷr..',
      thumbnail: '/thumbnails/draft1.jpg',
      lastSaved: '2024년 02월 20일 23:32',
    },
  ],

  // 별점 정보 (2개)
  ratings: [
    {
      id: 1,
      tmdbId: 62741,
      title: '오늘부터 신령님',
      rating: 5,
      date: '2024년 02월 16일',
      thumbnail:
        'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/thumnails/animation-horizon/kamisama.webp',
    },
    {
      id: 2,
      tmdbId: 46260,
      title: '흑집사',
      rating: 4,
      date: '2024년 02월 15일',
      thumbnail:
        'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/thumnails/animation-horizon/blackmaid.webp',
    },
  ],

  // 리뷰 정보 (3개)
  reviews: [
    {
      id: 1,
      tmdbId: 34567,
      title: '도쿄리벤저스',
      reviewContent: '타케미치의 성장이 인상적이네요. 시간여행이라는 설정을 잘 활용한 작품입니다.',
      date: '2024년 02월 16일',
      rating: 4.5,
      thumbnail:
        'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/thumnails/animation-horizon/tokyoRevengers.webp',
      likes: 12,
      comments: 5,
    },
    {
      id: 2,
      tmdbId: 56789,
      title: '헌터헌터',
      reviewContent: '고다 장편의 완결판! 오랜 시간 기다린 만큼 더욱 감동적이었습니다.',
      date: '2024년 02월 15일',
      rating: 5,
      thumbnail:
        'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/thumnails/animation-horizon/hunterXhunter.webp',
      likes: 24,
      comments: 8,
    },
    {
      id: 3,
      tmdbId: 89012,
      title: '귀멸의 칼날',
      reviewContent: '무한열차편은 애니메이션의 새로운 기준을 제시했다고 봅니다. 작화와 연출이 특히 인상적이었어요.',
      date: '2024년 02월 14일',
      rating: 5,
      thumbnail:
        'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/thumnails/animation-horizon/blade.webp',
      likes: 35,
      comments: 15,
    },
  ],

  // 댓글 정보 (1개)
  comments: [
    {
      id: 1,
      tmdbId: 67890,
      title: '원피스',
      commentContent: '오늘 방영된 에피소드도 정말 재미있었어요! 다음화가 너무 기대됩니다.',
      date: '2024년 02월 17일',
      episodeInfo: '1094화',
      thumbnail:
        'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/thumnails/animation-horizon/onepiece.webp',
      likes: 8,
    },
  ],
};
