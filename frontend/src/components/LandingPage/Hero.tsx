import React from 'react';
import heroImage from '../assets/images/hero-image.png'
import { HeroSection, HeroImage, HeroText, TradeSpan,
  SearchContainer, SearchButton, SearchInput
} from './StyledHero';

const Hero: React.FC = () => {
  return (
    <HeroSection>
      <HeroText>
        <h1>Start <TradeSpan>Trading </TradeSpan>Today - Sign 
          up and begin buying and selling</h1>
        <h6>Never Pay Retail Again - Find great discounts on pre-owned items.<br />
          Trade Your Way - Barter for goods and services on our platform.</h6>
        <SearchContainer>
          <SearchInput />
          <SearchButton>Search</SearchButton>
        </SearchContainer>
      </HeroText>
      <HeroImage>
        <img src={heroImage} alt="Trading" />
      </HeroImage>
    </HeroSection>
  );
};

export default Hero;

