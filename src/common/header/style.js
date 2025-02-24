import styled from 'styled-components';

export const HeaderWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  width: 100%;
  height: 5.3333rem;
  padding: 0 6rem;
  color: #151515;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.2rem;
`;

export const NavBarWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  padding-left: 7.4rem;
`;

export const NavLeft = styled.ul`
  display: flex;
  gap: 4rem;
`;

export const NavRight = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.7333rem;
`;

export const SearchBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.2667rem;
  height: 2.2667rem;
  cursor: pointer;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 1.1333rem;
  }
  img {
    width: 1.0667rem;
    height: 1.0667rem;
  }
`;

export const SearchBox = styled.div`
  form {
    position: relative;
    input {
      width: 17.4rem;
      height: 2.6667rem;
      padding: 0 0.9333rem 0 3rem;
      background: #ffffff;
      border: 0.0667rem solid #0068ff;
      border-radius: 0.3333rem;
      font-weight: 500;
      font-size: 0.8667rem;
      line-height: 1.0667rem;
      & ::placeholder {
        color: #404040;
        font-weight: 500;
        font-size: 0.8667rem;
        line-height: 1.0667rem;
        opacity: 1; /* Firefox에서 필요 */
      }
      &::-webkit-search-cancel-button {
        appearance: none;
        width: 1rem;
        height: 1rem;
        background: url('https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/icons/close.svg')
          no-repeat 0 0 / cover;
      }
    }
    img {
      position: absolute;
      top: 50%;
      left: 1.3333rem;
      transform: translateY(-50%);
      width: 1.0667rem;
      height: 1.0667rem;
    }
  }
`;

export const CloseIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 15.3333rem;
  transform: translateY(-50%);
`;

export const SearchContBox = styled.div`
  position: absolute;
  top: 3.4667rem;
  left: 0;
  width: 17.4rem;
  background: #ffffff;
  box-shadow: 0rem 0.2667rem 2.6667rem rgba(0, 0, 0, 0.4);
  border-radius: 0.3333rem;
  padding: 0.6667rem 1.3333rem;
  z-index: 1;
  .nowTitle {
    font-weight: 600;
    font-size: 0.8rem;
    line-height: 0.9333rem;
    color: #0068ff;
  }
  ul {
    margin-top: 1.0667rem;
    font-weight: 600;
    font-size: 0.8rem;
    line-height: 0.9333rem;
    color: #000;
    li {
      display: flex;
      margin-bottom: 0.9333rem;
      cursor: pointer;
      z-index: 2;
      span {
        display: block;
        width: 1.6rem;
      }
      strong {
        flex-grow: 1;
        width: 2rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
`;

export const ProfileBox = styled.div`
  position: relative;
  cursor: pointer;
  &:hover {
    .menubox {
      /* width: 20rem;
      height: auto; */
      display: block;
    }
  }
`;

export const ProfileIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.4667rem;
`;

export const ProfilePic = styled.div`
  overflow: hidden;
  border-radius: 0.6667rem;
  img {
    width: 2.2667rem;
    height: 2.2667rem;
  }
`;

export const MenuBox = styled.div`
  display: none;
  position: absolute;
  top: 200%;
  right: 0;
  /* width: 0;
  height: 0; */
  width: 20rem;
  height: auto;
  background-color: #fff;
  filter: drop-shadow(0rem 0.2667rem 1.6667rem rgba(0, 0, 0, 0.8));
  border-radius: 1.3333rem;
  padding-bottom: 0.6667rem;
  /* z-index: 2; */
  /* overflow: hidden; */
  &::before {
    content: '';
    position: absolute;
    top: -7%; // top 값과 맞춰서 조정
    left: 0;
    width: 100%;
    height: 10%;
  }
`;

export const MenuBoxTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  button {
    width: 16.6667rem;
    height: 3.2667rem;
    background: #0068ff;
    border-radius: 0.6667rem;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      font-weight: 600;
      font-size: 1.2rem;
      line-height: 1.4rem;
      color: #ffffff;
    }
  }
  hr {
    width: 100%;
    height: 7.0005px;
    border: none;
    background: #f4f4f4;
  }
`;

export const MenuBoxProfile = styled.div`
  padding-top: 24px;
  width: 250.0005px;
  margin-bottom: 10.0005px;
  a {
    display: flex;
    div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 4.9995px 16.9995px;
    }
  }
  p {
    display: flex;
    align-items: center;
    gap: 0.3333rem;
    font-weight: 500;
    line-height: 18px;
    img {
      height: 0.9333rem;
      width: auto;
    }
  }
`;

export const MenuboxProfilePic = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 15px;
`;

export const Username = styled.strong`
  display: flex;
  align-items: center;
  gap: 7.0005px;
  font-weight: 700;
  font-size: 1.1333rem;
  line-height: 1.4667rem;
  letter-spacing: -0.02em;
`;

export const ProfileMoreIcon = styled.img`
  width: 6px;
  height: 12px;
`;

export const StorageBox = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 55.0005px;
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10.0005px;
    font-weight: 700;
    font-size: 19.9995px;
    line-height: 24px;
    color: #555454;
  }
  span {
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    color: #9b9b9b;
  }
`;

export const MenuBoxBottom = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 1.2667rem 31.9995px;
  a {
    display: flex;
    align-items: center;
    gap: 9px;
    font-weight: 700;
    line-height: 18px;
    color: #555454;
  }
`;

export const MembershipLi = styled.li`
  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: -0.1333rem;
  }
  p {
    display: flex;
    align-items: center;
    gap: 0.4667rem;
  }
  span {
    font-weight: 600;
    color: #b0b0b0;
  }
`;

export const LogoutLi = styled.li`
  display: flex;
  align-items: center;
  gap: 9px;
`;

export const HomeNavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  a {
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #303030;
  }
`;
