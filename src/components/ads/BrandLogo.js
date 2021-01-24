import React, { Component } from 'react';

class BrandLogo extends Component {
    render() {
        return (
            <div className="brands-section section mb-90">
                <div className="container">
                    <div className="row">
                        {/* Brand Slider Start */}
                        <div className="brand-slider col">
                            <div className="brand-item col"><img src="/images/brands/brand-1.png" alt="Brands" /></div>
                            <div className="brand-item col"><img src="/images/brands/brand-2.png" alt="Brands" /></div>
                            <div className="brand-item col"><img src="/images/brands/brand-3.png" alt="Brands" /></div>
                            <div className="brand-item col"><img src="/images/brands/brand-4.png" alt="Brands" /></div>
                            <div className="brand-item col"><img src="/images/brands/brand-5.png" alt="Brands" /></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BrandLogo;
