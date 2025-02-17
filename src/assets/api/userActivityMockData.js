export const userActivityMockData = {
  // 최근 본 작품 (8개)
  recentlyViewed: [
    {
      id: 1,
      tmdbId: 12345,
      title: '귀멸의 칼날',
      episodeInfo: '17/118화',
      thumbnail: '/thumbnails/demon-slayer.jpg',
      lastWatched: '2024-02-17',
    },
    {
      id: 2,
      tmdbId: 23456,
      title: '제일수련',
      episodeInfo: '13/38화',
      thumbnail: '/thumbnails/cultivation.jpg',
      lastWatched: '2024-02-16',
    },
    {
      id: 3,
      tmdbId: 34567,
      title: '스킨타',
      episodeInfo: '23/128화',
      thumbnail: '/thumbnails/skinta.jpg',
      lastWatched: '2024-02-15',
    },
    {
      id: 4,
      tmdbId: 45678,
      title: '닥터네페스트',
      episodeInfo: '17/38화',
      thumbnail: '/thumbnails/dr-nepest.jpg',
      lastWatched: '2024-02-14',
    },
    {
      id: 5,
      tmdbId: 56789,
      title: '우당타다',
      episodeInfo: '17/68화',
      thumbnail: '/thumbnails/udang.jpg',
      lastWatched: '2024-02-13',
    },
    {
      id: 6,
      tmdbId: 67890,
      title: '나조메타야',
      episodeInfo: '17/88화',
      thumbnail: '/thumbnails/nazometa.jpg',
      lastWatched: '2024-02-12',
    },
    {
      id: 7,
      tmdbId: 78901,
      title: '란마와 아이',
      episodeInfo: '14/88화',
      thumbnail: '/thumbnails/ranma.jpg',
      lastWatched: '2024-02-11',
    },
    {
      id: 8,
      tmdbId: 89012,
      title: '소드아트라인',
      episodeInfo: '57/68화',
      thumbnail: '/thumbnails/swordart.jpg',
      lastWatched: '2024-02-10',
    },
  ],

  // 찜한 작품 (5개)
  favorites: [
    {
      id: 1,
      tmdbId: 34567,
      title: '도쿄리벤저스',
      thumbnail: '/thumbnails/tokyo.jpg',
      addedDate: '2024-02-15',
    },
    {
      id: 2,
      tmdbId: 45678,
      title: '제이수련',
      thumbnail: '/thumbnails/cultivation.jpg',
      addedDate: '2024-02-14',
    },
    {
      id: 3,
      tmdbId: 56789,
      title: '헌터헌터',
      thumbnail: '/thumbnails/hunter.jpg',
      addedDate: '2024-02-13',
    },
    {
      id: 4,
      tmdbId: 67890,
      title: '닥터네페스트',
      thumbnail: '/thumbnails/dr-nepest.jpg',
      addedDate: '2024-02-12',
    },
    {
      id: 5,
      tmdbId: 78901,
      title: '우당타다S2',
      thumbnail: '/thumbnails/udang2.jpg',
      addedDate: '2024-02-11',
    },
  ],

  // 나의 게시글 (3개)
  myPosts: [
    {
      id: 1,
      title: '미녀 노총각 리뷰어입니다',
      content: '이번화 작화퀄리티 미쳤네요...',
      thumbnail: '/thumbnails/post1.jpg',
      date: '2024-02-15 15:30',
      commentCount: 5,
    },
    {
      id: 2,
      title: '오늘 첫 방영 리뷰',
      content: '기대했던 만큼 재미있었습니다...',
      thumbnail: '/thumbnails/post2.jpg',
      date: '2024-02-14 13:45',
      commentCount: 3,
    },
    {
      id: 3,
      title: '굿즈 모집 설명글',
      content: '다음 달 예정된 굿즈 공구...',
      thumbnail: '/thumbnails/post3.jpg',
      date: '2024-02-13 10:20',
      commentCount: 8,
    },
  ],

  // 임시저장 (1개)
  draftPosts: [
    {
      id: 1,
      title: '재미있게 봤습니다 글보다...',
      thumbnail: '/thumbnails/draft1.jpg',
      lastSaved: '2024-02-17 09:20',
    },
  ],

  // 별점 정보 (3개)
  ratings: [
    {
      id: 1,
      tmdbId: 56789,
      title: '귀신조용',
      rating: 5,
      reviewContent: '미치도록 히트하는 내용 가슴 깊이 남네 이게 추천작이다',
      date: '2024년 02월 16일',
      thumbnail: '/thumbnails/ghost.jpg',
    },
    {
      id: 2,
      tmdbId: 67890,
      title: '오늘부터1일러',
      rating: 4,
      reviewContent: '내 마음 속에 영원히 남아있을 신작이네요',
      date: '2024년 02월 15일',
      thumbnail: '/thumbnails/today.jpg',
    },
    {
      id: 3,
      tmdbId: 78901,
      title: '스킨타 조미',
      rating: 3,
      reviewContent: '무심한 매력이지만 은근 매력있게하면서 나만의 매력을 만드는군요 멋짐 남자매력이다',
      date: '2024년 02월 14일',
      thumbnail: '/thumbnails/skinta.jpg',
    },
  ],

  // 리뷰 정보 (3개)
  reviews: [
    {
      id: 1,
      tmdbId: 34567,
      title: '도쿄리벤저스',
      reviewContent: '타케미치의 성장이 인상적이네요. 시간여행이라는 설정을 잘 활용한 작품입니다.',
      date: '2024-02-16',
      rating: 4.5,
      thumbnail: '/thumbnails/tokyo.jpg',
      likes: 12,
      comments: 5,
    },
    {
      id: 2,
      tmdbId: 56789,
      title: '헌터헌터',
      reviewContent: '고다 장편의 완결판! 오랜 시간 기다린 만큼 더욱 감동적이었습니다.',
      date: '2024-02-15',
      rating: 5,
      thumbnail: '/thumbnails/hunter.jpg',
      likes: 24,
      comments: 8,
    },
    {
      id: 3,
      tmdbId: 89012,
      title: '귀멸의 칼날',
      reviewContent: '무한열차편은 애니메이션의 새로운 기준을 제시했다고 봅니다. 작화와 연출이 특히 인상적이었어요.',
      date: '2024-02-14',
      rating: 5,
      thumbnail: '/thumbnails/demon-slayer.jpg',
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
      thumbnail: '/thumbnails/onepiece.jpg',
      likes: 8,
    },
  ],
};
