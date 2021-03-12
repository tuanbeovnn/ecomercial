import React, { Component } from 'react';
import Slider from "react-slick";

class BrandLogo extends Component {
    
    render() {
        const settings = {
            dots: false,
            slidesToShow: 5,
            arrows: false
        };
       
        return (

            <div className="brands-section section mb-90">
                <div className="container">
                    <div className="row">
                            <Slider className="brand-slider col" {...settings} >
                            <div className="brand-item col"><img src="/images/brands/brand-1.png" alt="Brands" /></div>
                            <div className="brand-item col"><img src="/images/brands/brand-2.png" alt="Brands" /></div>
                            <div className="brand-item col"><img src="/images/brands/brand-3.png" alt="Brands" /></div>
                            <div className="brand-item col"><img src="/images/brands/brand-4.png" alt="Brands" /></div>
                            <div className="brand-item col"><img src="/images/brands/brand-5.png" alt="Brands" /></div>
                            </Slider>
                        </div>
                    </div>
                </div>

        );
    }
}

export default BrandLogo;
