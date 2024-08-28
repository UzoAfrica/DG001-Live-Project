import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFax } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-info">
          <h3 className="footer-logo">Traidr</h3>
          <p className="footer-description">
            We are a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat... <a href="#">Read More</a>
          </p>
        </div>

        {/* Contact Information */}
        <div className="footer-contact">
          <div className="contact-item">
            <FaPhone /> <span>Tel 310-437-2766</span>
          </div>
          <div className="contact-item">
            <FaEnvelope /> <span>Mail unreal@outlook.com</span>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt /> <span>Address 706 Campfire Ave. Meriden, CT 06450</span>
          </div>
          <div className="contact-item">
            <FaFax /> <span>Fax +1-000-0000</span>
          </div>
        </div>

        {/* Footer Links */}
        <div className="footer-links">
          <div className="links-group">
            <h4>About</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Jobs</a></li>
              <li><a href="#">In Press</a></li>
            </ul>
          </div>
          <div className="links-group">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Online Chat</a></li>
              <li><a href="#">WhatsApp</a></li>
              <li><a href="#">Telegram</a></li>
              <li><a href="#">Ticketing</a></li>
            </ul>
          </div>
          <div className="links-group">
            <h4>FAQ</h4>
            <ul>
              <li><a href="#">Account</a></li>
              <li><a href="#">Manage Deliveries</a></li>
              <li><a href="#">Orders</a></li>
              <li><a href="#">Payments</a></li>
              <li><a href="#">Returns</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <div className="footer-bottom-links">
          <a href="#">About us</a>
          <a href="#">Contact</a>
          <a href="#">Privacy policy</a>
          <a href="#">Sitemap</a>
          <a href="#">Terms of Use</a>
        </div>
        <div className="footer-bottom-text">
          &copy; 2000-2024, All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
