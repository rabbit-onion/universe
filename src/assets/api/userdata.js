// userInfoMock.js
export const userInfoMockData = {
  // 기본 회원정보
  id: 'park123',
  email: 'park123@gmail.com',
  password: 'park1234',
  nickname: '박준용',
  profileImage: '/assets/profiles/profile1.jpg',

  // 주소 정보
  address: {
    zipCode: '06134',
    address1: '서울특별시 강남구 테헤란로 123',
    address2: '456동 789호',
  },

  // 활동 통계
  activityCount: {
    ratings: 2, // 별점 준 횟수
    reviews: 3, // 리뷰 작성 횟수
    comments: 1, // 댓글 작성 횟수
  },

  // 계정 정보
  accountInfo: {
    joinDate: '2024-01-15',
    lastLogin: '2024-02-17 15:30:00',
    isVerified: true,
    status: 'active',
  },

  // 알림 설정
  preferences: {
    newsletter: true,
    pushNotification: true,
    emailNotification: false,
  },
};
