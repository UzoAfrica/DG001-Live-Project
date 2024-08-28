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



const TrendingSales: React.FC = () => {
  return (
    <section className="trending-sales">
      <h2>Trending Sales</h2>
      <div className="sales-grid">
       
        <div className="sale-item">
          <img src= { Iron} alt="Item" />

          <p>Iron</p>
          <p>NGN 20,000</p>
        </div>
      

        <div className="sale-item">
          <img src={ Blender} alt="Item" />
          <p>Blender</p>
          <p>NGN 30,000</p>
        </div>

        <div className="sale-item">
          <img src= {Washing} alt="Item" />
          <p>Washing-machine</p>
          <p>NGN 250,000</p>
        </div>

        <div className="sale-item">
          <img src={Wood} alt="Item" />
          <p>Chair</p>
          <p>NGN 25,000</p>
        </div>

        <div className="sale-item">
          <img src={ Cups} alt="Item" />
          <p>cups</p>
          <p>NGN 20,000</p>
        </div>

        <div className="sale-item">
          <img src={ Mixer} alt="Item" />
          <p>Mixer</p>
          <p>NGN 20,000</p>
        </div>

        <div className="sale-item">
          <img src={PillowChair} alt="Item" />
          <p>pillowChiar</p>
          <p>NGN 10,000</p>
        </div>

        <div className="sale-item">
          <img src={ Kitchen} alt="Item" />
          <p>Kitchen Appliances</p>
          <p>NGN 80,000</p>
        </div>

        <div className="sale-item">
          <img src={CeramicCups}alt="Item" />
          <p>colour Cups</p>
          <p>NGN 20,000</p>
        </div>

        <div className="sale-item">
          <img src={ Microwave}alt="Item" />
          <p></p>
          <p>NGN 28,000</p>
        </div>

        <div className="sale-item">
          <img src={Wooden} alt="Item" />
          <p>Wooden Chair 2</p>
          <p>NGN 200,000</p>
        </div>

        <div className="sale-item">
          <img src={ Utensil} alt="Item" />
          <p>Utensil</p>
          <p>NGN 20,000</p>
        </div>

      </div>
    </section>
  );
};

export default TrendingSales;
