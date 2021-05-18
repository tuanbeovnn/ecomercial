import React, { Component } from 'react';
import { Chat } from 'react-chat-popup';
import ChatBoxPopup from '../components/chat/ChatBoxPopup';
import { connect } from 'react-redux';
import { subscribeRequest } from '../redux/actions';
import { Link } from 'react-router-dom';

class Footer extends Component {


    onChange = (e) => {
        this.setState(
            {
                [e.target.name]: e.target.value,
                error: false
            }
        )
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { email } = this.state;
        const body = { email };
        this.props.subcribeEmail(body, (data) => {
            console.log(data);
            if (!data) {
                this.setState(
                    {
                        error: true
                    }
                )
            } else {
                this.setState({
                    success: true
                })
            }

        });
    }

    render() {
        return (
            <div>
                <div className="subscribe-section section bg-gray pt-55 pb-55">
                    <div className="container">
                        <div className="row align-items-center">
                            {/* Mailchimp Subscribe Content Start */}
                            <div className="col-lg-6 col-12 mb-15 mt-15">
                                <div className="subscribe-content">
                                    <h2>SUBSCRIBE <span>OUR NEWSLETTER</span></h2>
                                    <h2><span>TO GET LATEST</span> PRODUCT UPDATE</h2>
                                </div>
                            </div>{/* Mailchimp Subscribe Content End */}
                            {/* Mailchimp Subscribe Form Start */}
                            <div className="col-lg-6 col-12 mb-15 mt-15">
                                <form onSubmit={this.handleSubmit} className="subscribe-form">
                                    <input
                                        onChange={this.onChange}
                                        type="email" autoComplete="off"
                                        placeholder="Enter your email here"
                                        name="email"
                                    />
                                    <button>subscribe</button>
                                </form>
                                {/* mailchimp-alerts Start */}
                                <div className="mailchimp-alerts text-centre">
                                    <div className="mailchimp-submitting" />{/* mailchimp-submitting end */}
                                    <div className="mailchimp-success" />{/* mailchimp-success end */}
                                    <div className="mailchimp-error" />{/* mailchimp-error end */}
                                </div>{/* mailchimp-alerts end */}
                            </div>{/* Mailchimp Subscribe Form End */}
                        </div>
                    </div>
                </div>{/* Subscribe Section End */}
                {/* Footer Section Start */}
                <div className="footer-section section bg-ivory">
                    {/* Footer Top Section Start */}
                    <div className="footer-top-section section pt-90 pb-50">
                        <div className="container">
                            {/* Footer Widget Start */}
                            <div className="row">
                                <div className="col mb-90">
                                    <div className="footer-widget text-center">
                                        <div className="footer-logo">
                                            <img src="/images/dd.png" alt="E&E - Electronics eCommerce Bootstrap4 HTML Template" />
                                            <img className="theme-dark" src="/images/logo-light.png" alt="E&E - Electronics eCommerce Bootstrap4 HTML Template" />
                                        </div>
                                        <p>My Ecommerce, Your Ecommerce, Ecommerce for all !</p>
                                    </div>
                                </div>
                            </div>{/* Footer Widget End */}
                            <div className="row">
                                {/* Footer Widget Start */}
                                <div className="col-lg-3 col-md-6 col-12 mb-40">
                                    <div className="footer-widget">
                                        <h4 className="widget-title">CONTACT INFO</h4>
                                        <p className="contact-info">
                                            <span>Address</span>
                Palosaarentie 62 <br />
                Vaasa, Finland                      </p>
                                        <p className="contact-info">
                                            <span>Phone</span>
                                            <a>046 546 4028</a>

                                        </p>
                                        <p className="contact-info">
                                            <span>Mail</span>
                                            <a href="mailto:info@example.com">info@saunakovaasa.ml</a>
                                        </p>
                                    </div>
                                </div>{/* Footer Widget End */}
                                {/* Footer Widget Start */}
                                <div className="col-lg-3 col-md-6 col-12 mb-40">
                                    <div className="footer-widget">
                                        <h4 className="widget-title">CUSTOMER CARE</h4>
                                        <ul className="link-widget">
                                            <li><Link to="/about">About us</Link></li>
                                            <li><Link to="/compare">Compare</Link></li>
                                            <li><Link to="/myaccount">My Account</Link></li>
                                            <li><Link to="/changePassword">Change Password</Link></li>
                                            <li><Link to="/checkout">Checkout</Link></li>
                                            <li><Link to="/wishlist">Wishlist</Link></li>
                                        </ul>
                                    </div>
                                </div>{/* Footer Widget End */}
                                {/* Footer Widget Start */}
                                <div className="col-lg-3 col-md-6 col-12 mb-40">
                                    <div className="footer-widget">
                                        <h4 className="widget-title">INFORMATION</h4>
                                        <ul className="link-widget">
                                            <li><Link to="/track">Track your order</Link></li>
                                            <li><Link to="/store">Locate Store</Link></li>
                                            <li><Link to="/term">Terms &amp; Conditions</Link></li>
                                            {/* <li><Link to="">Shipping &amp; Returns</Link></li> */}
                                        </ul>
                                    </div>
                                </div>{/* Footer Widget End */}
                                {/* Footer Widget Start */}
                                <div className="col-lg-3 col-md-6 col-12 mb-40">
                                    <div className="footer-widget">
                                        <h4 className="widget-title">LATEST TWEET</h4>
                                        <div className="footer-tweet" />
                                    </div>
                                </div>{/* Footer Widget End */}
                            </div>
                        </div>
                    </div>{/* Footer Bottom Section Start */}
                    {/* Footer Bottom Section Start */}
                    <div className="footer-bottom-section section">
                        <div className="container">
                            <div className="row">
                                {/* Footer Copyright */}
                                <div className="col-lg-6 col-12">
                                    <div className="footer-copyright"><p>© Copyright, 2021 All Rights Reserved by <a href="http://saunakovaasa.ml/">Tuan Nguyen</a></p></div>
                                </div>
                                {/* Footer Payment Support */}
                                <div className="col-lg-6 col-12">
                                    <div className="footer-payments-image"><img src="/images/payment-support.png" alt="Payment Support Image" /></div>
                                </div>
                            </div>
                        </div>
                    </div>{/* Footer Bottom Section Start */}
                </div>{/* Footer Section End */}
                {/* Popup Subscribe Section Start */}
                <div className="popup-subscribe-section section bg-gray pt-55 pb-55" data-modal="popup-modal" style={{ display: "none" }}>
                    {/* Popup Subscribe Wrap Start */}
                    <div className="popup-subscribe-wrap">
                        <button className="close-popup">X</button>
                        {/* Popup Subscribe Banner */}
                        <div className="popup-subscribe-banner banner">
                            <a><img src="/images/banner/banner-7.jpg" alt="Banner" /></a>
                        </div>
                        {/* Popup Subscribe Form Wrap Start */}
                        <div className="popup-subscribe-form-wrap">
                            <h1>SUBSCRIBE <br />OUR NEWSLETTER</h1>
                            <h4>Get latest product update...</h4>
                            {/* Newsletter Form */}
                            <form className="popup-subscribe-form validate" noValidate>
                                <div id="mc_embed_signup_scroll">
                                    <label htmlFor="popup_subscribe" className="d-none">Subscribe to our mailing list</label>
                                    <input
                                        type="email"
                                        defaultValue name="EMAIL"
                                        className="email"
                                        id="popup_subscribe"
                                        placeholder="Enter your email here"
                                        required />
                                    {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                                    <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true"><input type="text" name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef" tabIndex={-1} defaultValue /></div>
                                    <button type="submit" name="subscribe" className="button">subscribe</button>
                                </div>
                            </form>
                            <p>Be the first in the by getting special deals and offers send directly to your inbox.</p>
                        </div>{/* Popup Subscribe Form Wrap End */}
                    </div>{/* Popup Subscribe Wrap End */}
                </div>{/* Popup Subscribe Section End */}
                {/* <Chat /> */}
                <ChatBoxPopup />
            </div>
        );
    }
}



const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        subcribeEmail: (body, callback) => {
            dispatch(subscribeRequest(body, callback));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Footer);