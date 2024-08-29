import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #f8f8f8;
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: coral;
`;

export const Nav = styled.nav`
  a {
    margin: 0 10px;
    text-decoration: none;
    color: coral;

    button {
      background-color: coral;
      border: none;
      color: white;
      padding: 5px 10px;
      cursor: pointer;
    }
  }
`;
