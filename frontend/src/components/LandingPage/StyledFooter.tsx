import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #000;
  color: #fff;
  padding: 40px 20px;
  font-family: Arial, sans-serif;
`;

export const FooterInnerContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterInfo = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

export const FooterLogo = styled.h3`
  color: orange;
  font-size: 24px;
  margin-bottom: 10px;
`;

export const FooterDescription = styled.p`
  margin-bottom: 20px;

  a {
    color: #fff;
    text-decoration: underline;
  }
`;

export const FooterContact = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-bottom: 20px;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-bottom: 20px;
`;

export const LinksGroup = styled.div`
  h4 {
    color: orange;
    margin-bottom: 10px;
    text-align: center;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: center;
  }

  ul li {
    margin-bottom: 10px;
  }

  ul li a {
    color: #fff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const FooterBottom = styled.div`
  border-top: 1px solid #444;
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const FooterBottomLinks = styled.div`
  display: flex;
  gap: 15px;

  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const FooterBottomText = styled.div`
  text-align: right;
  flex-grow: 1;
`;
