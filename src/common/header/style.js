import styled from 'styled-components';

export const HeaderWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  width: 100%;
  height: 80px;
  padding: 0 90px;
  color: #151515;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
`;

export const NavBarWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  padding-left: 111px;
`;

export const NavLeft = styled.ul`
  display: flex;
  gap: 60px;
`;

export const NavRight = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 11px;
`;

export const SearchBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  cursor: pointer;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 17px;
  }
  img {
    width: 16px;
    height: 16px;
  }
`;

export const SearchBox = styled.div`
  form {
    position: relative;
    input {
      width: 261px;
      height: 40px;
      padding: 0 14px 0 45px;
      background: #ffffff;
      border: 1px solid #0068ff;
      border-radius: 5px;
      font-weight: 500;
      font-size: 13px;
      line-height: 16px;
      & ::placeholder {
        color: #404040;
        font-weight: 500;
        font-size: 13px;
        line-height: 16px;
        opacity: 1; /* Firefox에서 필요 */
      }
      &::-webkit-search-cancel-button {
        appearance: none;
        width: 15px;
        height: 15px;
        background: url('https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/icons/close.svg')
          no-repeat 0 0 / cover;
      }
    }
    img {
      position: absolute;
      top: 50%;
      left: 20px;
      transform: translateY(-50%);
      width: 16px;
      height: 16px;
    }
  }
`;

export const CloseIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 230px;
  transform: translateY(-50%);
`;

export const SearchContBox = styled.div`
  position: absolute;
  top: 52px;
  left: 0;
  width: 261px;
  height: 332px;
  background: #ffffff;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  padding: 18px 20px;
  > strong {
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
    color: #0068ff;
  }
  ul {
    margin-top: 16px;
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
    color: #000;
    li {
      display: flex;
      margin-bottom: 14px;
      span {
        display: block;
        width: 24px;
      }
      strong {
        flex-grow: 1;
        width: 30px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
`;

export const ProfileBox = styled.div`
  cursor: pointer;
`;

export const ProfileIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 7px;
`;

export const ProfilePic = styled.div`
  overflow: hidden;
  border-radius: 10px;
  img {
    width: 34px;
    height: 34px;
  }
`;

export const MenuBox = styled.div`
  display: none;
  position: absolute;
  top: 200%;
  right: 0;
  width: 300px;
  height: 494px;
  background-color: #fff;
  filter: drop-shadow(0px 4px 25px rgba(0, 0, 0, 0.8));
  border-radius: 20px;
  z-index: 2;
`;
