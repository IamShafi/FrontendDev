import React from 'react';

import IconView from '../assets/images/icon-view.svg'
import ImgEq from '../assets/images/image-equilibrium.jpg'
import IconEq from '../assets/images/icon-ethereum.svg'
import IconClock from '../assets/images/icon-clock.svg'
import ImgAvt from '../assets/images/image-avatar.png'

const NFTCard = () => {
  return (

    <div className='container'>
      <section className='main-card'>
        {/* Icon will be shown when hover over */}
        <div className='image-container'>
          <img src={ImgEq} alt="nft" />
          <div className='image-overlay'>
          <img src={IconView} alt="view icon" />
          </div>
        </div>
        {/* inside the text container there is h1 & p tage, benith div contains two divs each with img & span */}
        <div className='text-container'>
          <h1 class="title">Equilibrium #3429</h1>
          <p class="description">Our Equilibrium collection promotes balance and calm.</p>
          
          <div class="eth-info">
            <div class="info">
              <img src={IconEq} alt="ETH" className="eth-icon" /><span className="eth-span">0.041 ETH</span>
            </div>
            <div class="info">
              <img src={IconClock} alt="clock" className="clock-icon" /><span className='clock-span'>3 days left</span>
            </div>
          </div>

          <hr></hr>
          <div class="creator-info">
            <img src={ImgAvt} alt="Jules Wyvern" className="avatar" />
            <p class="creator-text">Creation of <span className="creator-name">Jules Wyvern</span></p>
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default NFTCard;
