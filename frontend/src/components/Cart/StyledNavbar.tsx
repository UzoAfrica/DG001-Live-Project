import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: white;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const NavLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  min-width: 0;
`;

export const NavMiddle = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  min-width: 0;

  @media (max-width: 768px) {
    flex: 2;
    margin-right: 0;
    justify-content: flex-start;
  }
`;

export const CancelIcon = styled.i`
  cursor: pointer;
  margin-left: 8px;
  color: grey;
  &:hover {
    color: black;
  }
`;

export const SearchInputWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 250px;

  @media (max-width: 768px) {
    max-width: 180px;
  }

  @media (max-width: 480px) {
    max-width: 120px;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 6px 10px;
  border: 1px solid #ddd;
  border-radius: 20px;
  font-size: 14px;
  padding-right: 30px;

  &:focus {
    outline: none;
    border-color: #d35d2c;
  }

  @media (max-width: 800px){
    width: 45%;
    margin-left: 15px;
  }
`;

export const SearchIcon = styled.i`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #888;
  cursor: pointer;
`;

export const NavRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;
  min-width: 0;

  @media (max-width: 768px) {
    gap: 10px;
  }

  @media (max-width: 480px) {
    gap: 5px;
  }
`;

export const BrandLogo = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #d35d2c;
  white-space: nowrap;
  text-decoration: none !important;

   &:hover {
    text-decoration: none !important;
`;

export const NotificationIcon = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .fa-bell {
    font-size: 20px;
    cursor: pointer;
  }
`;

export const NotificationCount = styled.div`
  position: absolute;
  top: -5px;
  right: -10px;
  background-color: orange;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 12px;
`;

export const UserAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
`;

export const AvatarImage = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  overflow: hidden;
`;

export const DefaultAvatar = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;

  .fa-user {
    font-size: 20px;
    color: #888;
  }
`;

export const StartSellingButton = styled.button`
  background-color: #d35d2c;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 12px;
  white-space: nowrap;
  text-decoration: none !important;

  &:hover {
    background-color: #b04a22;
    text-decoration: none !important;
  }

  @media (max-width: 768px) {
    padding: 5px 10px;
    font-size: 11px;
  }

  @media (max-width: 480px) {
    padding: 4px 8px;
    font-size: 10px;
  }
`;
