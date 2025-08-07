import React from 'react';
import Banner from '../Banner/Banner';
import Banner2 from '../Banner2/Banner2';
import Banner3 from '../Banner3/Banner3';
import Banner4 from '../Banner4/Banner4';
import Banner5 from '../Banner5/Banner5';
import Banner6 from '../Banner6/Banner6';
import Banner7 from '../Banner7/Banner7';
import Banner8 from '../Banner8/Banner8';
import Banner9 from '../Home9/Home9';
import Unlocksystem from '../UnlockSystem/Unlocksystem';
import BannerHero from '../../../components/BannerHero';
import AnimationCard from '../../../Hotel_Animation/AnimationCard/AnimationCard'

const Home = () => {
    return (
        <div className="space-y-10"> {/* Adds vertical spacing between all children */}
            <div className="mt-4">
                <Banner />
            </div>
            <div>
                <Banner2 />
            </div>
            <div>
                <BannerHero/>
            </div>
            <div>
                <Banner4 />
            </div>
            <div>
                <Banner5 />
            </div>
            <div>
                <Banner6 />
            </div>
            <div>
                <Banner7 />
            </div>
            <div >
              <AnimationCard/>
            </div>
            <div>
                <Banner8 />
            </div>
            <div>
                <Banner9 />
            </div>
          
        </div>
    );
};

export default Home;
