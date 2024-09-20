import React, { useState, useEffect, useRef, useContext } from 'react';
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
  CartIconContainer,
  CartImage,
} from './StyledNavbar';
import BellSVG from '../../images/bell-icon.svg';
import CartIcon from '../../images/Cart-Icon.svg';
import { CartContext, CartContextProps } from './CartProvider';
import { Link } from 'react-router-dom';

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
  const { totalItems } = useContext(CartContext) as CartContextProps;

  useEffect(() => {
    if (userProfile?.profileImage) {
      setUserImage(userProfile.profileImage);
    }

    const userFromLocalStorage = JSON.parse(localStorage.getItem('user')!);
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
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
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
  const handleStartSellingLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();
    window.location.href = '/create-shop';
  };

  // Clear search input when CancelIcon is clicked
  const handleClearSearch = () => {
    setSearchValue('');
  };

  return (
    <div
      style={{
        boxShadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.1)',
        position: 'sticky',
        top: '0px',
        zIndex: '100',
      }}
    >
      <Nav>
        <NavLeft>
          <a href="/ProductList">
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
            <CancelIcon className="fa fa-times" onClick={handleClearSearch} />
          </SearchInputWrapper>
        </NavMiddle>

        <NavRight>
          <NotificationIcon>
            {/* <i className="fa fa-bell" aria-hidden="true"></i> */}
            <img
              src={BellSVG}
              alt="notifications icon"
              width="25px"
              height="25px"
            />

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

          {/* Dynamic Cart Icon  */}
          <Link to="/cart">
            <CartIconContainer>
              <CartImage src={CartIcon} />
              {totalItems > 0 && (
                <NotificationCount>{totalItems}</NotificationCount>
              )}
            </CartIconContainer>
          </Link>

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
                <a href="/ProductList">Product-list</a>
              </DropdownItem>
              <DropdownItem onClick={handleLogout}>
                <span>Logout</span>
              </DropdownItem>
            </ProfileDropdown>
          )}
        </NavRight>
      </Nav>
    </div>
  );
};

export default Navbar;
