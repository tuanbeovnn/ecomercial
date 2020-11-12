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
import NewArrival from '../components/products/NewArrival';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="mini-cart-wrap">
                    {/* Mini Cart Top */}
                    <div className="mini-cart-top">
                        <button className="close-cart">Close Cart<i className="icofont icofont-close" /></button>
                    </div>
                    {/* Mini Cart Products */}
                    <ul className="mini-cart-products">
                        <li>
                            <a className="image"><img src="/images/product/product-1.png" alt="Product" /></a>
                            <div className="content">
                                <a href="single-product.html" className="title">Waxon Note Book Pro 5</a>
                                <span className="price">Price: $295</span>
                                <span className="qty">Qty: 02</span>
                            </div>
                            <button className="remove"><i className="fa fa-trash-o" /></button>
                        </li>
                        <li>
                            <a className="image"><img src="/images/product/product-2.png" alt="Product" /></a>
                            <div className="content">
                                <a href="single-product.html" className="title">Aquet Drone D 420</a>
                                <span className="price">Price: $275</span>
                                <span className="qty">Qty: 01</span>
                            </div>
                            <button className="remove"><i className="fa fa-trash-o" /></button>
                        </li>
                        <li>
                            <a className="image"><img src="/images/product/product-3.png" alt="Product" /></a>
                            <div className="content">
                                <a href="single-product.html" className="title">Game Station X 22</a>
                                <span className="price">Price: $295</span>
                                <span className="qty">Qty: 01</span>
                            </div>
                            <button className="remove"><i className="fa fa-trash-o" /></button>
                        </li>
                    </ul>
                    {/* Mini Cart Bottom */}
                    <div className="mini-cart-bottom">
                        <h4 className="sub-total">Total: <span>$1160</span></h4>
                        <div className="button">
                            <a href="checkout.html">CHECK OUT</a>
                        </div>
                    </div>
                </div>
                <div className="cart-overlay" />
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
