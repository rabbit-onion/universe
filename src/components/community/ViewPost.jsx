import {
  AtherBtn,
  AtherComment,
  AtherImg,
  AtherProfile,
  BottomUtility,
  CommentArea,
  CommentAther,
  CommentBtn,
  CommentCount,
  CommentForm,
  CommentWrap,
  HartCount,
  PagiNation,
  ProfileImg,
  TagList,
  UserLine,
  UserProfile,
  UserWrap,
  UtilityButtons,
  ViewImg,
  ViewInner,
  ViewLine,
  ViewText,
  ViewTitle,
} from './style';

const ViewPost = () => {
  return (
    <>
      <ViewInner>
        <ViewTitle>
          <h2>로맨스</h2>
          <span>너에게닿기를 시즌2 후기</span>
          <p>아니 너에게닿기를 시즌2가 그냥 미쳤어 내 심장을 뛰게 만든다 너네 꼭 결혼까지해라</p>
        </ViewTitle>
        <ViewLine>
          <h1>박준용</h1>
          <p>2025년 2월 11일</p>
          <hr />
        </ViewLine>
        <ViewText>
          <ViewImg>
            <img src="/images/pattern/horizon/frommetoyou1.png" alt="" />
          </ViewImg>
          <p>
            ‘너에게닿기를’ 시즌2 진짜 대박이었음! 시즌1에서 설렘 제대로 느끼고, 이젠 그 감정이 더 깊어지고 진지해져서
            진짜 몰입감 장난 아니었음. 주인공들이 서로의 마음을 알아가고, 갈등도 많아지면서 감정선이 훨씬 복잡해지는데,
            그걸 배우들이 정말 잘 살려서 보는 내내 찡하고 울컥했어. 특히 두 사람 사이의 미묘한 감정 변화, 그게 진짜 잘
            표현됐음! 그리고 배경 음악이랑 색감도 완전 대박! 음악이 장면마다 딱 맞아떨어지면서 감정을 제대로
            끌어올려줬고, 촬영도 너무 예쁘고 감성적이어서 분위기 제대로 살았어. 유머도 적당히 섞여 있어서 너무 무겁지
            않게 볼 수 있었고, 감동적인 장면에선 확 울리기도 하고, 그런 변화가 진짜 재밌었음. 전체적으로 시즌1보다 훨씬
            더 감동적이고, 주인공들이 성장하는 모습이 진짜 뭉클했어. 후반부 갈수록 더 몰입해서 봤고, 마지막엔 뭔가 꽉 찬
            느낌이었음! 정말 시즌1을 재밌게 봤다면 시즌2는 절대 놓치지 말아야 할 작품! 진짜 추천!
          </p>
          <ViewImg>
            <img src="/images/pattern/horizon/frommetoyou2.png" alt="" />
          </ViewImg>
          <p>
            결국, 시즌2는 시즌1보다 훨씬 더 감동적이고 여운이 많이 남았어. 두 사람의 성장 이야기가 너무 진짜 같고,
            끝까지 놓칠 수 없었음.
          </p>
        </ViewText>
        <HartCount>
          <div>
            <em>
              <img src="/images/pattern/hartcountIcon.svg" alt="" />
            </em>
            <p>136</p>
          </div>
        </HartCount>
        <BottomUtility>
          <TagList>
            <ul>
              <li>#너에게닿기를</li>
              <li>#시즌2</li>
              <li>#미쳤다</li>
              <li>#추천</li>
              <li>#감동</li>
            </ul>
          </TagList>
          <UtilityButtons>
            <ul>
              <li>
                <button>
                  <img src="/images/pattern/Iconutility1.png" alt="" />
                </button>
              </li>
              <li>
                <button>
                  <img src="/images/pattern/Iconutility2.png" alt="" />
                </button>
              </li>
              <li>
                <button>
                  <img src="/images/pattern/Iconutility3.png" alt="" />
                </button>
              </li>
            </ul>
          </UtilityButtons>
        </BottomUtility>
        <CommentArea>
          <UserProfile>
            <UserWrap>
              <ProfileImg>
                <img src="/images/pattern/horizon/userprofile.png" alt="프로필사진" />
              </ProfileImg>
              <p>박준용</p>
            </UserWrap>
            <div>
              <button>팔로우</button>
            </div>
          </UserProfile>
          <UserLine>
            <hr />
          </UserLine>

          <CommentWrap>
            <CommentCount>
              <p>00개의 댓글</p>
            </CommentCount>
            <CommentForm>
              <div>댓글을 작성하세요.</div>
            </CommentForm>
            <CommentBtn>
              <button>댓글작성</button>
            </CommentBtn>
          </CommentWrap>
          <CommentAther>
            <AtherProfile>
              <AtherImg>
                <img src="/images/pattern/horizon/commentprofile.jpg" alt="댓글프로필" />
              </AtherImg>
              <div>
                <h2>오늘은맑음</h2>
                <p>2025년 2월 11일 </p>
              </div>
            </AtherProfile>
            <AtherComment>
              <p>
                와 이런 리뷰 완전 좋아요! 볼까말까 너무 고민 중이었는데, 준용님 리뷰 보고 용기를 내서 우선 시즌1부터
                정주행 들어갑니다!
              </p>
            </AtherComment>
            <AtherBtn>
              <div>
                <img src="/images/pattern/plusIcon.svg" alt="" />
                <button>답글달기</button>
              </div>
              <div>
                <img src="/images/pattern/heartIcon.svg" alt="" />
                <button>34</button>
              </div>
            </AtherBtn>
            <hr />
          </CommentAther>
        </CommentArea>
        <PagiNation>
          <ul>
            <li>&lt;&lt;</li>
            <li>&lt;</li>
            <li>1</li>
            <li>2</li>
            <li>&gt;</li>
            <li>&gt;&gt;</li>
          </ul>
        </PagiNation>
      </ViewInner>
    </>
  );
};

export default ViewPost;
