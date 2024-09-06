import React from 'react';
import { Container, Image, Paragraph } from './styles/index';
import LogoSVG from '../../images/logo.svg';
import BellSVG from '../../images/bell-icon.svg';
import DefaultAvatarImage from '../../images/default-avatar.png';

const NavBar: React.FC = () => {
  return (
    <Container
      $display="flex"
      $justifyContent="space-between"
      $alignItems="center"
      $maxWidth="1300px"
      $width="100%"
      $height="75px"
      className="nav-bar"
    >
      <Container>
        <Image src={LogoSVG} alt="logo" />
      </Container>

      <Container $display="flex" $alignItems="center" $columnGap="1rem">
        <Container $position="relative" $display="flex" $width="40px">
          <Image
            src={BellSVG}
            alt="notifications icon"
            width="25px"
            height="25px"
          />
          <Container
            $display="flex"
            $alignItems="center"
            $justifyContent="center"
            $border="2px solid white"
            $backgroundColor="rgba(242, 153, 74, 1)"
            $borderRadius="50%"
            $width="15px"
            $height="15px"
            $padding="15px"
            $position="absolute"
            $right="-10px"
            $top="-17px"
            $boxShadow="0px 1px 3px 0px rgba(0, 0, 0, 0.6)"
          >
            <Paragraph $color="white" $fontSize="13px" $fontWeight="500">
              3
            </Paragraph>
          </Container>
        </Container>
        <Container>
          <Image
            src={DefaultAvatarImage}
            alt="user-avatar"
            width="55px"
            height="57px"
            $borderRadius="50%"
            $border="2px solid black"
          />
        </Container>
      </Container>
    </Container>
  );
};

export default NavBar;
