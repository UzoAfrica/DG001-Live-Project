import React, { useState, useEffect } from 'react';
import axios from 'axios';
import bellNotification from '../../images/Icon-notification-removebg-preview.png'
import {
  Nav,
  NavLeft,
  NavMiddle,
  NavRight,
  BrandLogo,
  NotificationIcon,
  NotificationCount,
  UserAvatar,
  AvatarImage,
  DefaultAvatar,
  StartSellingButton,
  SearchInputWrapper,
  SearchInput,
  SearchIcon,
  CancelIcon,
} from './StyledNavbar';
import BellIcon from '../../images/Icon-notification-removebg-preview.png';

interface NavbarProps {
  userProfile: {
    profileImage?: string;
  };
}

const Navbar: React.FC<NavbarProps> = ({ userProfile }) => {
  const [userImage, setUserImage] = useState<string | undefined>('');
  const [notificationCount, setNotificationCount] = useState<number>(0);

  useEffect(() => {
    if (userProfile?.profileImage) {
      setUserImage(userProfile.profileImage);
    }

    const userFromLocalStorage = JSON.parse(localStorage.getItem("user")!)
    setUserImage(userFromLocalStorage.profileImage);
    console.log(userFromLocalStorage);
  }, [userProfile]);

  useEffect(() => {
    const fetchNotificationCount = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5001/api/notifications/count'
        );
        setNotificationCount(response.data.count);
      } catch (error) {
        console.error('Error fetching notification count:', error);
        setNotificationCount(0); 
      }
    };

    fetchNotificationCount();
  }, []);

  // Define the handleStartSellingLinkClick function
  const handleStartSellingLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); 
   
    window.location.href = '/create-shop'; 
  };

  return (
    <Nav>
      <NavLeft>
        <a href="/product">
        <BrandLogo>traïdr</BrandLogo>
        </a>
      </NavLeft>

      <NavMiddle>
        <SearchInputWrapper>
          <SearchInput type="text" placeholder="Search..." />
          <SearchIcon className="fas fa-search" />
          <CancelIcon
            className="fa fa-times"
            onClick={() => {
              /* Clear search logic here */
            }}
          />
        </SearchInputWrapper>
      </NavMiddle>

      <NavRight>
        <NotificationIcon>
        <a href="/product-page">
          <img src={BellIcon} alt="Logo"/>
          </a>
          <i className="fa fa-bell" aria-hidden="true"></i>
          {notificationCount > 0 && (
            <NotificationCount>{notificationCount}</NotificationCount>
          )}
        </NotificationIcon>

        <UserAvatar>
          {userImage ? (
            <AvatarImage src={userImage} alt="User Avatar" />
          ) : (
            <DefaultAvatar>
              <i className="fa fa-user" aria-hidden="true"></i>
            </DefaultAvatar>
          )}
        </UserAvatar>

        <StartSellingButton type="submit">
          <a href="/create-shop" onClick={handleStartSellingLinkClick}>
            Start Selling
          </a>
        </StartSellingButton>
      </NavRight>
    </Nav>
  );
};

export default Navbar;
