import {
  MembershipWrap,
  DivWrap,
  Section,
  Ad,
  List,
  MembershipAd,
  MembershipBox,
  DivBox,
  TextBox,
  PayBox,
  ShortcutBox,
  ContInner,
} from './style';

const Membership = () => {
  return (
    <MembershipWrap>
      <MembershipBox>
        <MembershipAd>
          <img src="/images/pattern/membershipadd.png" alt="광고화면" />
        </MembershipAd>

        <ContInner>
          <h2>이용권 구독</h2>
          <TextBox>
            <h1>나에게 맞는 멤버십을 확인하세요</h1>
            <p>멤버십은 언제든 해지가 가능해요.</p>
          </TextBox>
          <DivBox>
            <List>
              <li>
                <DivWrap>
                  <div>
                    <Ad>스텐다드</Ad>
                    <span>월 9,900원</span>
                  </div>
                  <Section>
                    <div>
                      <img src="/images/pattern/cheak.svg" alt="" />
                      광고 없이 감상
                    </div>
                  </Section>
                  <Section>
                    <div>
                      <img src="/images/pattern/cheak.svg" alt="" />
                      프로필 1인 동시재생 1회선
                    </div>
                  </Section>
                  <Section>
                    <div>
                      <img src="/images/pattern/cheak.svg" alt="" />
                      최신화 시청
                    </div>
                  </Section>
                  <Section>
                    <div>
                      <img src="/images/pattern/cheak.svg" alt="" />
                      다운로드 지원
                    </div>
                  </Section>
                  <Section>
                    <div>
                      <img src="/images/pattern/cheak.svg" alt="" />
                      FHD 화질 지원
                    </div>
                  </Section>
                  <Section>
                    <div>
                      <img src="/images/pattern/cheak.svg" alt="" />
                      TV 앱 지원
                    </div>
                  </Section>
                </DivWrap>
              </li>
              <li>
                <DivWrap>
                  <div>
                    <Ad>프리미엄</Ad>
                    <span>월 14,900원</span>
                  </div>
                  <Section>
                    <div>
                      <img src="/images/pattern/cheak.svg" alt="" />
                      광고 없이 감상
                    </div>
                  </Section>
                  <Section>
                    <div>
                      <img src="/images/pattern/cheak.svg" alt="" />
                      프로필 4인 동시재생 4회선
                    </div>
                  </Section>
                  <Section>
                    <div>
                      <img src="/images/pattern/cheak.svg" alt="" />
                      최신화 시청
                    </div>
                  </Section>
                  <Section>
                    <div>
                      <img src="/images/pattern/cheak.svg" alt="" />
                      다운로드 지원
                    </div>
                  </Section>
                  <Section>
                    <div>
                      <img src="/images/pattern/cheak.svg" alt="" />
                      FHD 화질 지원
                    </div>
                  </Section>
                  <Section>
                    <div>
                      <img src="/images/pattern/cheak.svg" alt="" />
                      TV 앱 지원
                    </div>
                  </Section>
                </DivWrap>
              </li>
            </List>
            <PayBox>
              <button>이용권 구매하기</button>
            </PayBox>
            <ShortcutBox>
              <button>광고형 스텐다드 이용권이 궁금하시다면?</button>
            </ShortcutBox>
          </DivBox>
        </ContInner>
      </MembershipBox>
    </MembershipWrap>
  );
};

export default Membership;
