import React, { Component } from 'react';
import BannerHome from '../components/ads/BannerHome';
import BannerHome_2 from '../components/ads/BannerHome_2';
import BannerHome_3 from '../components/ads/BannerHome_3';
import BannerHome_4 from '../components/ads/BannerHome_4';
import BannerHome_5 from '../components/ads/BannerHome_5';
import BrandLogo from '../components/ads/BrandLogo';
import BestDeals from '../components/products/BestDeals';
import BestSeller from '../components/products/BestSeller';
import Feature from '../components/products/Feature';
import MiniCart from '../components/products/MiniCart';
import NewArrival from '../components/products/NewArrival';

class Home extends Component {
    render() {
        return (
            <div>
                <MiniCart />
                <BannerHome />
                <BannerHome_2 />
                <Feature />
                <BestSeller />
                <BannerHome_3 />
                <BannerHome_4 />
                <BestDeals />
                <NewArrival />
                <BannerHome_5 />
                <BrandLogo />
            </div>
        );
    }
}

export default Home;
