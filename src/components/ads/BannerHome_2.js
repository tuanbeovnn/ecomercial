import React, { Component } from 'react';

class BannerHome_2 extends Component {
    render() {
        return (
            <div className="banner-section section mb-60">
                <div className="container">
                    <div className="row row-10">
                        {/* Banner */}
                        <div className="col-md-8 col-12 mb-30">
                            <div className="banner"><a href="#"><img src="/images/banner/banner-1.jpg" alt="Banner" /></a></div>
                        </div>
                        {/* Banner */}
                        <div className="col-md-4 col-12 mb-30">
                            <div className="banner"><a href="#"><img src="/images/banner/banner-2.jpg" alt="Banner" /></a></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BannerHome_2;
