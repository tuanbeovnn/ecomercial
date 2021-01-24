import React, { Component } from 'react';

class BannerHome_4 extends Component {
    render() {
        return (

            <div className="feature-section section mb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12 mb-30">
                            {/* Feature Start */}
                            <div className="feature feature-shipping">
                                <div className="feature-wrap">
                                    <div className="icon"><img src="/images/icons/feature-van.png" alt="Feature" /></div>
                                    <h4>FREE SHIPPING</h4>
                                    <p>Start from $100</p>
                                </div>
                            </div>{/* Feature End */}
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 mb-30">
                            {/* Feature Start */}
                            <div className="feature feature-guarantee">
                                <div className="feature-wrap">
                                    <div className="icon"><img src="/images/icons/feature-walet.png" alt="Feature" /></div>
                                    <h4>MONEY BACK GUARANTEE</h4>
                                    <p>Back within 15 days</p>
                                </div>
                            </div>{/* Feature End */}
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 mb-30">
                            {/* Feature Start */}
                            <div className="feature feature-security">
                                <div className="feature-wrap">
                                    <div className="icon"><img src="/images/icons/feature-shield.png" alt="Feature" /></div>
                                    <h4>SECURE PAYMENTS</h4>
                                    <p>Payment Security</p>
                                </div>
                            </div>{/* Feature End */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BannerHome_4;
