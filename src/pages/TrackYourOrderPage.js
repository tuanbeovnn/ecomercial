import React, { Component } from 'react'

export default class TrackYourOrderPage extends Component {
    render() {
        return (
            <div>
                {/* Page Banner Section Start */}
                <div className="page-banner-section section">
                    <div className="page-banner-wrap row row-0 d-flex align-items-center ">
                        {/* Page Banner */}
                        <div className="col-lg-4 col-12 order-lg-2 d-flex align-items-center justify-content-center">
                            <div className="page-banner">
                                <h1>Track your order</h1>
                                <p>EASILY TRACK YOUR PARCELS USING OUR WEBSITE</p>
                                <div className="breadcrumb">
                                    <ul>
                                        <li><a href="#">HOME</a></li>
                                        <li><a href="#">Track your order</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Banner */}
                        <div className="col-lg-4 col-md-6 col-12 order-lg-1">
                            <div className="banner"><a><img src="/images/banner/Track-your-order.png" alt="Banner" /></a></div>
                        </div>
                        {/* Banner */}
                        <div className="col-lg-4 col-md-6 col-12 order-lg-3">
                            <div className="banner"><a href="#"><img src="/images/banner/delivery-banner.png" alt="Banner" /></a></div>
                        </div>
                    </div>
                </div>{/* Page Banner Section End */}
                {/* Track Order Section Start */}
                <div className="track-order-section section mt-90 mb-50">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="track-order-title text-center col-12 mb-80">
                                <h2>Track your order...</h2>
                                <p>Enter the item ID in the field below. The item ID is a combination of letters and numbers that you can find next to the barcode on the address label.</p>
                            </div>
                            <div className="col-lg-6 col-md-7 col-12 mb-40">
                                <div className="track-order-form">
                                    <form action="#">
                                        <label htmlFor="order_id">Order ID</label>
                                        <input type="text" id="order_id" placeholder="Find it in your order confirmation email" />
                                        <label htmlFor="billing_email">Billing Email Address</label>
                                        <input type="email" id="billing_email" placeholder="Email you used during checkout" />
                                        <input type="submit" defaultValue="Track Order" />
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-5 col-12 ml-auto mb-40">
                                <div className="banner"><a href="#"><img src="/images/banner/3D-jantunen-parcel-small.jpg" alt="Banner" /></a></div>
                            </div>
                        </div>
                    </div>
                </div>{/* Track Order Section End */}</div>

        )
    }
}
