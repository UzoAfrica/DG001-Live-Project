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
    color: #e04f16;
`;

export const Nav = styled.nav`
    a {
        margin: 0 10px;
        text-decoration: none;
        color: #e04f16;

        button {
            background-color: #e04f16;
            border: none;
            color: white;
            padding: 5px 10px;
            cursor: pointer;
        }
    }
`;
