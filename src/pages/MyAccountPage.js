import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class MyAccountPage extends Component {
    render() {
        return (
            <div>
                {/* Page Banner Section Start */}
                <div className="page-banner-section section">
                    <div className="page-banner-wrap row row-0 d-flex align-items-center ">
                        {/* Page Banner */}
                        <div className="col-lg-4 col-12 order-lg-2 d-flex align-items-center justify-content-center">
                            <div className="page-banner">
                                <h1>My Account</h1>
                                <p></p>
                                <div className="breadcrumb">
                                    <ul>
                                        <li><Link to="/">HOME</Link></li>
                                        <li><a>My Infomation</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Banner */}
                        <div className="col-lg-4 col-md-6 col-12 order-lg-1">
                            <div className="banner"><a href="#"><img src="/images/banner/banner-15.jpg" alt="Banner" /></a></div>
                        </div>
                        {/* Banner */}
                        <div className="col-lg-4 col-md-6 col-12 order-lg-3">
                            <div className="banner"><a href="#"><img src="/images/banner/banner-14.jpg" alt="Banner" /></a></div>
                        </div>
                    </div>
                </div>{/* Page Banner Section End */}
                {/* Register Section Start */}
                <div className="register-section section mt-90 mb-90">
                    <div className="container">
                        <div className="row">
                            {/* Register */}
                            <div className="col-md-6 col-12 d-flex">
                                <div className="ee-register">
                                    <h3>We will need for your registration</h3>
                                    <p>E&amp;E provide how all this mistaken idea of denouncing pleasure and sing pain born an will give you a complete account of the system, and expound</p>
                                    {/* Register Form */}
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-12 mb-30"><input type="text" placeholder="Your name here" /></div>
                                            <div className="col-12 mb-30"><input type="email" placeholder="Your email here" /></div>
                                            <div className="col-12 mb-30"><input type="password" placeholder="Enter passward" /></div>
                                            <div className="col-12 mb-30"><input type="password" placeholder="Conform password" /></div>
                                            <div className="col-12"><input type="submit" defaultValue="register" /></div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-1 col-12 d-flex">
                                <div className="login-reg-vertical-boder" />
                            </div>
                            {/* Account Image */}
                            <div className="col-md-5 col-12 d-flex">
                                <div className="ee-account-image">
                                    <h3>Upload your Image</h3>
                                    <img src="/images/account-image-placeholder.jpg" alt="Account Image Placeholder" className="image-placeholder" />
                                    <div className="account-image-upload">
                                        <input type="file" name="chooseFile" id="account-image-upload" />
                                        <label className="account-image-label" htmlFor="account-image-upload">Choose your image</label>
                                    </div>
                                    <p>jpEG 250x250</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>{/* Register Section End */}
            </div>

        )
    }
}
