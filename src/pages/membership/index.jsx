import { MembershipWrap, DivWrap, Section, Ad, List, MembershipAd, Pay, ShortCut } from './style';

const Membership = () => {
  return (
    <MembershipWrap>
      <div>
        <MembershipAd>광고화면</MembershipAd>
        <div>
          <List>
            <li>
              <DivWrap>
                <Ad>광고 스탠다드</Ad>
                <Section>월간요금</Section>
                <Section>동시시청</Section>
                <Section>프로필</Section>
                <Section>화질</Section>
                <Section>광고</Section>
                <Section>콘텐츠 다운로드</Section>
                <Section>태블릿, PC, TV 지원</Section>
              </DivWrap>
            </li>
            <li>
              <DivWrap>
                <Ad>스탠다드</Ad>
                <Section>월간요금</Section>
                <Section>동시시청</Section>
                <Section>프로필</Section>
                <Section>화질</Section>
                <Section>광고</Section>
                <Section>콘텐츠 다운로드</Section>
                <Section>태블릿, PC, TV 지원</Section>
              </DivWrap>
            </li>
            <li>
              <DivWrap>
                <Ad>프리미엄</Ad>
                <Section>월간요금</Section>
                <Section>동시시청</Section>
                <Section>프로필</Section>
                <Section>화질</Section>
                <Section>광고</Section>
                <Section>콘텐츠 다운로드</Section>
                <Section>태블릿, PC, TV 지원</Section>
              </DivWrap>
            </li>
          </List>
          <Pay>이용권 구매하기</Pay>
          <ShortCut>광고형 스텐다드 이용권이 궁금하시다면?</ShortCut>
        </div>
      </div>
    </MembershipWrap>
  );
};

export default Membership;
