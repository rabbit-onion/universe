import { Choose, Container, ImageBox, Item, ItemBox, List, ListText } from './style';

const ProfileImage = () => {
  return (
    <>
      <ImageBox>
        <Container>
          <Choose>이미지 선택</Choose>
          <List>
            <ListText>기본 이미지</ListText>
            <ItemBox>
              <Item></Item>
              <Item></Item>
              <Item></Item>
              <Item></Item>
              <Item></Item>
              <Item></Item>
            </ItemBox>
          </List>
          <List>
            <ListText>준용을너무너무좋아하는3명의그녀</ListText>
            <ItemBox>
              <Item></Item>
              <Item></Item>
              <Item></Item>
              <Item></Item>
              <Item></Item>
              <Item></Item>
            </ItemBox>
          </List>
          <List>
            <ListText>체인소맨</ListText>
            <ItemBox>
              <Item></Item>
              <Item></Item>
              <Item></Item>
              <Item></Item>
              <Item></Item>
              <Item></Item>
            </ItemBox>
          </List>
        </Container>
      </ImageBox>
    </>
  );
};

export default ProfileImage;
