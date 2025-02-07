import styled from 'styled-components';

export const HeaderWrap = styled.div`
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

export const SearchBar = styled.div``;

export const ProfileBox = styled.div``;

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
  top: 72px;
  right: 0;
  width: 300px;
  height: 494px;
  background-color: #fff;
  filter: drop-shadow(0px 4px 25px rgba(0, 0, 0, 0.8));
  border-radius: 20px;
  z-index: 2;
`;
