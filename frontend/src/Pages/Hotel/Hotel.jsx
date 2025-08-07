import React from 'react';
import HotelBanner from '../../Hotel_Animation/HotelBanner/HotelBanner';
import AnimatedCard from '../../Hotel_Animation/AnimatedCard/AnimatedCard';
import AnimationCard from '../../Hotel_Animation/AnimationCard/AnimationCard';
import BannerHero from '../../components/BannerHero';
import Banner3 from '../Home/Banner3/Banner3';
import Unlocksystem from '../Home/UnlockSystem/Unlocksystem';
import { BackgroundLinesDemo } from '../../SmartHotelBanner/BackgroundLines';
import { FocusCardsDemo } from '../../FocusCard/FocusCardsDemo';
import { CompareDemo } from '../../CompareDemo/CompareDemo';
import { ParallaxScroll } from '../../ParallaxScroll/ParallaxScroll';

const Hotel = () => {
    return (
        <div className="space-y-10">
            <BackgroundLinesDemo></BackgroundLinesDemo>
           {/* <HotelBanner></HotelBanner> */}
           <FocusCardsDemo></FocusCardsDemo>
           {/* <AnimatedCard></AnimatedCard> */}
           <CompareDemo></CompareDemo>
          <ParallaxScroll></ParallaxScroll>
           <Banner3></Banner3>
           <Unlocksystem></Unlocksystem>
          

           
           
        </div>
    );
};

export default Hotel;