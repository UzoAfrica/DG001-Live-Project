import React from 'react';
import Woman from '../assets/Rectangle 2.png'
import Icon from '../assets/images/delivery.png'
import bagLike from '../assets/images/baggs.svg'
import people from '../assets/images/people.png'
import shop from '../assets/images/shop.png'
import { Container, Boxes, Box, WomanImage} from './StyledWhyUseUs';

const WhyUseUs: React.FC = () => {
    return (
      <Container>
        <div>
          <h1>Why use <span>traïdr</span>?</h1>
          <Boxes>
            <Box>
              <img src={Icon} alt="delivery" />
              <p>Find great discounts on pre-owned items. Trade Your Way - Barter for goods and services on our platform.</p>
            </Box>
            <Box>
              <img src={bagLike} alt="bag" />
              <p>Find great discounts on pre-owned items. Trade Your Way - Barter for goods and services on our platform.</p>
            </Box>
            <Box>
              <img src={people} alt="people" />
              <p>Find great discounts on pre-owned items. Trade Your Way - Barter for goods and services on our platform.</p>
            </Box>
            <Box>
              <img src={shop} alt="shop" />
              <p>Find great discounts on pre-owned items. Trade Your Way - Barter for goods and services on our platform.</p>
            </Box>
          </Boxes>
        </div>
        <div>
          <WomanImage src={Woman} alt="woman" />
        </div>
      </Container>
    );
  };
  
  export default WhyUseUs;
  