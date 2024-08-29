import React from 'react';
import '../styles/TrendingSales.css';
import Iron from '../assets/images/iron.png'
import Blender from '../assets/images/blender.png'
import Washing from '../assets/images/wash.png'
import Wood   from '../assets/images/woodChair.png';
import Cups  from   '../assets/images/cups.png';
import Mixer  from  '../assets/images/mixer.png';
import PillowChair  from  '../assets/images/pillowChair.png';
import Kitchen from '../assets/images/kitchen.png';
import CeramicCups from '../assets/images/ceramics.png';
import Wooden from '../assets/images/wooden.png';
import Microwave  from '../assets/images/microwave.png';
import Utensil from  '../assets/images/utensil.png';
import image4 from '../assets/images/redBlender.png';
import pillow from '../assets/images/pillow.png'
import { TrendingSalesSection, Title, SalesGrid,
   SaleItem, SaleImage, SaleText, 
 } from './StyledTrending';



const TrendingSales: React.FC = () => {
  return (
    <TrendingSalesSection>
      <Title>Trending Sales</Title>
      <SalesGrid>
        <SaleItem>
          <SaleImage src={Iron} alt="Iron" />
          <SaleText>Iron</SaleText>
          <SaleText>NGN 20,000</SaleText>
        </SaleItem>

        <SaleItem>
          <SaleImage src={Blender} alt="Blender" />
          <SaleText>Blender</SaleText>
          <SaleText>NGN 30,000</SaleText>
        </SaleItem>

        <SaleItem>
          <SaleImage src={Washing} alt="Washing Machine" />
          <SaleText>Washing-machine</SaleText>
          <SaleText>NGN 250,000</SaleText>
        </SaleItem>

        <SaleItem>
          <SaleImage src={Wood} alt="Wooden Chair" />
          <SaleText>Chair</SaleText>
          <SaleText>NGN 25,000</SaleText>
        </SaleItem>

        <SaleItem>
          <SaleImage src={Cups} alt="Cups" />
          <SaleText>Cups</SaleText>
          <SaleText>NGN 20,000</SaleText>
        </SaleItem>

        <SaleItem>
          <SaleImage src={Mixer} alt="Mixer" />
          <SaleText>Mixer</SaleText>
          <SaleText>NGN 20,000</SaleText>
        </SaleItem>

        <SaleItem>
          <SaleImage src={PillowChair} alt="Pillow Chair" />
          <SaleText>Pillow Chair</SaleText>
          <SaleText>NGN 10,000</SaleText>
        </SaleItem>

        <SaleItem>
          <SaleImage src={Kitchen} alt="Kitchen Appliances" />
          <SaleText>Kitchen Appliances</SaleText>
          <SaleText>NGN 80,000</SaleText>
        </SaleItem>

        <SaleItem>
          <SaleImage src={CeramicCups} alt="Ceramic Cups" />
          <SaleText>Colour Cups</SaleText>
          <SaleText>NGN 20,000</SaleText>
        </SaleItem>

        <SaleItem>
          <SaleImage src={Microwave} alt="Microwave" />
          <SaleText>Microwave</SaleText>
          <SaleText>NGN 28,000</SaleText>
        </SaleItem>

        <SaleItem>
          <SaleImage src={Wooden} alt="Wooden Chair 2" />
          <SaleText>Wooden Chair 2</SaleText>
          <SaleText>NGN 200,000</SaleText>
        </SaleItem>

        <SaleItem>
          <SaleImage src={Utensil} alt="Utensil" />
          <SaleText>Utensil</SaleText>
          <SaleText>NGN 20,000</SaleText>
        </SaleItem>

        <SaleItem>
          <SaleImage src={image4} alt="Image " />
          <SaleText>Blender</SaleText>
          <SaleText>NGN 10,000</SaleText>
        </SaleItem>

        <SaleItem>
          <SaleImage src={pillow} alt="Image " />
          <SaleText>Pillow</SaleText>
          <SaleText>NGN 17,000</SaleText>
        </SaleItem>
      </SalesGrid>
    </TrendingSalesSection>
  );
};

export default TrendingSales;
