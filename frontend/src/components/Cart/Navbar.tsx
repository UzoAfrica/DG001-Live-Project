import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
        setNotificationCount(0); // Default to 0 if there's an error
      }
    };

    fetchNotificationCount();
  }, []);

  // Define the handleStartSellingLinkClick function
  const handleStartSellingLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevent default navigation if needed
    // Custom logic can go here, or you can just allow navigation
    window.location.href = '/create-shop'; // Navigate to create shop page
  };

  return (
    <Nav>
      <NavLeft>
        <BrandLogo>traïdr</BrandLogo>
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
          <img src="src/images/Icon-notification.png" alt="Logo" />
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
