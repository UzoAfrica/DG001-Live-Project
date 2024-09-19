import React from 'react';
import heroImage from '../../assets/images/hero-image.png';
import {
  HeroSection,
  HeroImage,
  HeroText,
  TradeSpan,
  SearchContainer,
  SearchButton,
  SearchInput,
} from './StyledHero';

const Hero: React.FC = () => {
  return (
    <HeroSection>
      <HeroText>
        <h1>
          Start <TradeSpan>Trading </TradeSpan>Today - Sign up <br/>and begin buying
          and selling
        </h1>
        <br/>
        <h6>
          Never Pay Retail Again - Find great discounts on pre-owned items.
          <br /><br/>
          Trade Your Way - Barter for goods and services on our platform.
        </h6>
        <br/>
        <SearchContainer>
          <SearchInput type="text"
                       placeholder="I am looking for..."/>
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
