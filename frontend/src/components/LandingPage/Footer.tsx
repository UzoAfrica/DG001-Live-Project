import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFax } from 'react-icons/fa';
import {
  FooterContact,
  FooterContainer,
  FooterInnerContainer,
  FooterInfo,
  FooterLinks,
  FooterLogo,
  FooterDescription,
  ContactItem,
  LinksGroup,
  FooterBottom,
  FooterBottomLinks,
  FooterBottomText,
} from './StyledFooter';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterInnerContainer>
        <FooterInfo>
          <FooterLogo>Traidr</FooterLogo>
          <FooterDescription>
            We are a lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat...{' '}
            <a href="#">Read More</a>
          </FooterDescription>
        </FooterInfo>

        <FooterContact>
          <ContactItem>
            <FaPhone /> <span>Tel 310-437-2766</span>
          </ContactItem>
          <ContactItem>
            <FaEnvelope /> <span>Mail unreal@outlook.com</span>
          </ContactItem>
          <ContactItem>
            <FaMapMarkerAlt />{' '}
            <span>Address 706 Campfire Ave. Meriden, CT 06450</span>
          </ContactItem>
          <ContactItem>
            <FaFax /> <span>Fax +1-000-0000</span>
          </ContactItem>
        </FooterContact>

        <FooterLinks>
          <LinksGroup>
            <h4>About</h4>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">In Press</a>
              </li>
            </ul>
          </LinksGroup>
          <LinksGroup>
            <h4>Support</h4>
            <ul>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Online Chat</a>
              </li>
              <li>
                <a href="#">WhatsApp</a>
              </li>
              <li>
                <a href="#">Telegram</a>
              </li>
              <li>
                <a href="#">Ticketing</a>
              </li>
            </ul>
          </LinksGroup>
          <LinksGroup>
            <h4>FAQ</h4>
            <ul>
              <li>
                <a href="#">Account</a>
              </li>
              <li>
                <a href="#">Manage Deliveries</a>
              </li>
              <li>
                <a href="#">Orders</a>
              </li>
              <li>
                <a href="#">Payments</a>
              </li>
              <li>
                <a href="#">Returns</a>
              </li>
            </ul>
          </LinksGroup>
        </FooterLinks>
      </FooterInnerContainer>

      <FooterBottom>
        <FooterBottomLinks>
          <a href="#">About us</a>
          <a href="#">Contact</a>
          <a href="#">Privacy policy</a>
          <a href="#">Sitemap</a>
          <a href="#">Terms of Use</a>
        </FooterBottomLinks>
        <FooterBottomText>
          &copy; 2000-2024, All Rights Reserved
        </FooterBottomText>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
