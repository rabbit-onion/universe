import styled from 'styled-components';

export const HeaderWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
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
  padding: 0 90px 0 111px;
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
`;

export const SearchBar = styled.div`
  margin-right: 7px;
  form {
    display: none;
    position: relative;
    &.clicked {
      display: block;
    }
    input {
      width: 261px;
      height: 40px;
      background: #ffffff;
      border: 1px solid #0068ff;
      border-radius: 5px;
      padding-left: 45px;
      font-size: 13px;
    }
    img {
      position: absolute;
      top: 12px;
      left: 20px;
    }
  }
`;

export const SearchIcon = styled.div`
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
  &.clicked {
    display: none;
  }
`;

export const SearchContBox = styled.div`
  display: none;
  position: absolute;
  top: 130%;
  left: 0;
  width: 261px;
  height: 332px;
  background: #ffffff;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  &.clicked {
    display: block;
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
  top: 100%;
  right: 0;
  width: 300px;
  height: 494px;
  background-color: #fff;
  filter: drop-shadow(0px 4px 25px rgba(0, 0, 0, 0.8));
  border-radius: 20px;
  z-index: 2;
`;
