import React from 'react';
import '../styles/WhyUseUs.css';
import Woman from '../assets/Rectangle 2.png'
import Icon from '../assets/images/delivery.png'
import bagLike from '../assets/images/baggs.svg'
import people from '../assets/images/people.png'
import shop from '../assets/images/shop.png'

const WhyUseUs: React.FC = () => {
  return (
    <div className='container'>
        <div>
            <h1>Why use <span>traïdr</span>?</h1>
            <div className='boxes'>
                <div>
                    <img src={Icon} alt="delivery" />
                    <p>Find great discounts on pre-owned items.Trade Your Way- Barter for goods and services on our platform.
                    </p>
                </div>
                <div>
                    <img src={bagLike} alt="bag" />
                    <p>Find great discounts on pre-owned items.Trade Your Way- Barter for goods and services on our platform.
                    </p>
                </div>
                <div>
                    <img src={people} alt="people" />
                    <p>Find great discounts on pre-owned items.Trade Your Way- Barter for goods and services on our platform.
                    </p>
                </div>
                <div>
                    <img src={shop} alt="shop" />
                    <p>Find great discounts on pre-owned items.Trade Your Way- Barter for goods and services on our platform.
                    </p>
                </div>
            </div>
        </div>
        <div>
            <img className='woman_image' src={Woman} alt="" />
        </div>
    </div>
  )
}

export default WhyUseUs;
