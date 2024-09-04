import React from 'react';
// import '../styles/TrendingSales.css';
import Iron from '../../assets/images/iron.png';
import Blender from '../../assets/images/blender.png';
import Washing from '../../assets/images/wash.png';
import Wood from '../../assets/images/woodChair.png';
import Cups from '../../assets/images/cups.png';
import Mixer from '../../assets/images/mixer.png';
import PillowChair from '../../assets/images/pillowChair.png';
import Kitchen from '../../assets/images/kitchen.png';
import CeramicCups from '../../assets/images/ceramics.png';
import Wooden from '../../assets/images/wooden.png';
import Microwave from '../../assets/images/microwave.png';
import Utensil from '../../assets/images/utensil.png';
import { useNavigate } from 'react-router-dom';

import {
  TrendingSalesSection,
  Title,
  SalesGrid,
  SaleItem,
  ImageContainer,
  ProductImage,
  WriteUp
} from './StyledTrending';


const TrendingSales: React.FC = () => {

   const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  };
  return (
    <TrendingSalesSection>
      <Title>Trending Sales</Title>
      <SalesGrid>
      <div onClick={handleClick} style={{ cursor: 'pointer' }}>
        <SaleItem>
          <ImageContainer>
            <ProductImage src={Iron} alt="Iron" />
          </ImageContainer>
          <WriteUp>
            <p>Iron</p>
            <p>NGN 20,000</p>
          </WriteUp>
        </SaleItem>
   </div>

   <div onClick={handleClick} style={{ cursor: 'pointer' }}>
        <SaleItem>
          <ImageContainer>
            <ProductImage src={Blender} alt="Blender" />
          </ImageContainer>
          <WriteUp>
            <p>Blender</p>
            <p>NGN 30,000</p>
          </WriteUp>
        </SaleItem>
        </div>

        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
        <SaleItem>
          <ImageContainer>
            <ProductImage src={Washing} alt="Washing Machine" />
          </ImageContainer>
          <WriteUp>
            <p>Washing-machine</p>
            <p>NGN 250,000</p>
          </WriteUp>
        </SaleItem>
        </div>

        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
        <SaleItem>
          <ImageContainer>
            <ProductImage src={Wood} alt="Chair" />
          </ImageContainer>
          <WriteUp>
            <p>Chair</p>
            <p>NGN 25,000</p>
          </WriteUp>
        </SaleItem>
        </div>

        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
        <SaleItem>
          <ImageContainer>
            <ProductImage src={Cups} alt="Cups" />
          </ImageContainer>
          <WriteUp>
            <p>Cups</p>
            <p>NGN 20,000</p>
          </WriteUp>
        </SaleItem>
        </div>

        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
        <SaleItem>
          <ImageContainer>
            <ProductImage src={Mixer} alt="Mixer" />
          </ImageContainer>
          <WriteUp>
            <p>Mixer</p>
            <p>NGN 20,000</p>
          </WriteUp>
        </SaleItem>
        </div>

        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
        <SaleItem>
          <ImageContainer>
            <ProductImage src={PillowChair} alt="Pillow Chair" />
          </ImageContainer>
          <WriteUp>
            <p>Pillow Chair</p>
            <p>NGN 10,000</p>
          </WriteUp>
        </SaleItem>
        </div>

        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
        <SaleItem>
          <ImageContainer>
            <ProductImage src={Kitchen} alt="Kitchen Appliances" />
          </ImageContainer>
          <WriteUp>
            <p>Kitchen Appliances</p>
            <p>NGN 80,000</p>
          </WriteUp>
        </SaleItem>
        </div>

        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
        <SaleItem>
          <ImageContainer>
            <ProductImage src={CeramicCups} alt="Colour Cups" />
          </ImageContainer>
          <WriteUp>
            <p>Colour Cups</p>
            <p>NGN 20,000</p>
          </WriteUp>
        </SaleItem>
</div>

<div onClick={handleClick} style={{ cursor: 'pointer' }}>
        <SaleItem>
          <ImageContainer>
            <ProductImage src={Microwave} alt="Microwave" />
          </ImageContainer>
          <WriteUp>
            <p>Microwave</p>
            <p>NGN 28,000</p>
          </WriteUp>
        </SaleItem>
        </div>

        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
        <SaleItem>
          <ImageContainer>
            <ProductImage src={Wooden} alt="Wooden Chair 2" />
          </ImageContainer>
          <WriteUp>
            <p>Wooden Chair 2</p>
            <p>NGN 200,000</p>
          </WriteUp>
        </SaleItem>
</div>

<div onClick={handleClick} style={{ cursor: 'pointer' }}>
        <SaleItem>
          <ImageContainer>
            <ProductImage src={Utensil} alt="Utensil" />
          </ImageContainer>
          <WriteUp>
            <p>Utensil</p>
            <p>NGN 20,000</p>
          </WriteUp>
        </SaleItem>
</div>
      </SalesGrid>
    </TrendingSalesSection>
  );
};

export default TrendingSales;