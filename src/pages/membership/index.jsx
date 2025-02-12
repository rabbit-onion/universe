import {
  MembershipWrap,
  DivWrap,
  Section,
  Ad,
  List,
  MembershipAd,
  Pay,
  ShortCut,
  MembershipBox,
  DivBox,
} from './style';

const Membership = () => {
  return (
    <MembershipWrap>
      <MembershipBox>
        <MembershipAd>
          <img src="/public/images/pattern/membershipadd.png" alt="광고화면" />
        </MembershipAd>
        <DivBox>
          <List>
            <li>
              <DivWrap>
                <Ad>스탠다드</Ad>
                <Section>광고 없이 감상</Section>
                <Section>프로필 1인 동시재생 1회선</Section>
                <Section>최신화 시청</Section>
                <Section>다운로드 지원</Section>
                <Section>FHD 화질 지원</Section>
                <Section>TV 앱 지원</Section>
              </DivWrap>
            </li>
            <li>
              <DivWrap>
                <Ad>프리미엄</Ad>
                <Section>광고 없이 감상</Section>
                <Section>프로필 4인 동시재생 4회선</Section>
                <Section>최신화 시청</Section>
                <Section>다운로드 지원</Section>
                <Section>FHD 화질 지원</Section>
                <Section>TV 앱 지원</Section>
              </DivWrap>
            </li>
          </List>
          <Pay>이용권 구매하기</Pay>
          <ShortCut>광고형 스텐다드 이용권이 궁금하시다면?</ShortCut>
        </DivBox>
      </MembershipBox>
    </MembershipWrap>
  );
};

export default Membership;
