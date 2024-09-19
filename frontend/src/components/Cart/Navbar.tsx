import React, { useState, useEffect, useRef } from 'react';
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
  ProfileDropdown,
  DropdownItem, 
} from './StyledNavbar';
// import BellIcon from '../../images/Icon-notification-removebg-preview.png';

interface NavbarProps {
  userProfile: {
    profileImage?: string;
  };
}

const Navbar: React.FC<NavbarProps> = ({ userProfile }) => {
  const [userImage, setUserImage] = useState<string | undefined>('');
  const [notificationCount, setNotificationCount] = useState<number>(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchValue, setSearchValue] = useState<string>('');
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (userProfile?.profileImage) {
      setUserImage(userProfile.profileImage);
    }

    const userFromLocalStorage = JSON.parse(localStorage.getItem("user")!);
    setUserImage(userFromLocalStorage.profileImage);
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

  // Open dropdown when clicking the avatar
  const handleAvatarClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    // Add event listener to close dropdown when clicking outside
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('token'); 
    localStorage.removeItem('user'); 
    window.location.href = '/login';
  };

  // Define the handleStartSellingLinkClick function
  const handleStartSellingLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); 
    window.location.href = '/create-shop'; 
  };

  // Clear search input when CancelIcon is clicked
  const handleClearSearch = () => {
    setSearchValue('');
  };

  return (
    <Nav>
      <NavLeft>
        <a href="/product-list">
          <BrandLogo>traïdr</BrandLogo>
        </a>
      </NavLeft>

      <NavMiddle>
        <SearchInputWrapper>
          <SearchInput 
            type="text" 
            placeholder="Search..." 
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <SearchIcon className="fas fa-search" />
          <CancelIcon
            className="fa fa-times"
            onClick={handleClearSearch}
          />
        </SearchInputWrapper>
      </NavMiddle>

      <NavRight>
        <NotificationIcon>
          {/* <a href=""> */}
            {/* <img src={BellIcon} alt="Logo" /> */}
          {/* </a> */}
          <i className="fa fa-bell" aria-hidden="true"></i>
          {notificationCount > 0 && (
            <NotificationCount>{notificationCount}</NotificationCount>
          )}
        </NotificationIcon>

        <UserAvatar onClick={handleAvatarClick}>
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

        {/* Profile Dropdown */}
        {isDropdownOpen && (
          <ProfileDropdown ref={dropdownRef}>
            <DropdownItem>
              <a href="/wishlist">Wishlist</a>
            </DropdownItem>
            <DropdownItem>
              <a href="/cart">Cart</a>
            </DropdownItem>
            <DropdownItem>
              <a href="/profile">Profile</a>
            </DropdownItem>
            <DropdownItem>
              <a href="/shop">My Shop</a>
            </DropdownItem>
            <DropdownItem>
              <a href="/product-page">Product-page</a>
              </DropdownItem>
              <DropdownItem>
              <a href="/product-list">Product-list</a>
            </DropdownItem>
            <DropdownItem onClick={handleLogout}>
              <span>Logout</span>
            </DropdownItem>
          </ProfileDropdown>
        )}
      </NavRight>
    </Nav>
  );
};

export default Navbar;