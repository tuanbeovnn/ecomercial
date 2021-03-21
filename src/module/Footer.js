import React, { Component } from 'react';
import { Chat } from 'react-chat-popup';
import ChatBoxPopup from '../components/chat/ChatBoxPopup';

class Footer extends Component {
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
                                <form className="subscribe-form" action="#">
                                    <input type="email" autoComplete="off" placeholder="Enter your email here" />
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
                                            <img src="/images/logo.png" alt="E&E - Electronics eCommerce Bootstrap4 HTML Template" />
                                            <img className="theme-dark" src="/images/logo-light.png" alt="E&E - Electronics eCommerce Bootstrap4 HTML Template" />
                                        </div>
                                        <p>Electronics product actual teachings of  he great explorer of the truth, the malder of human happiness. No one rejects</p>
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
                You address will be here <br />
                Lorem Ipsum text                      </p>
                                        <p className="contact-info">
                                            <span>Phone</span>
                                            <a href="tel:01234567890">01234 567 890</a>
                                            <a href="tel:01234567891">01234 567 891</a>
                                        </p>
                                        <p className="contact-info">
                                            <span>Web</span>
                                            <a href="mailto:info@example.com">info@example.com</a>
                                            <a href="#">www.example.com</a>
                                        </p>
                                    </div>
                                </div>{/* Footer Widget End */}
                                {/* Footer Widget Start */}
                                <div className="col-lg-3 col-md-6 col-12 mb-40">
                                    <div className="footer-widget">
                                        <h4 className="widget-title">CUSTOMER CARE</h4>
                                        <ul className="link-widget">
                                            <li><a href="#">About us</a></li>
                                            <li><a href="#">Features</a></li>
                                            <li><a href="#">My Account</a></li>
                                            <li><a href="#">Cart</a></li>
                                            <li><a href="#">Checkout</a></li>
                                            <li><a href="#">Wishlist</a></li>
                                            <li><a href="#">blog</a></li>
                                            <li><a href="#">Contact</a></li>
                                        </ul>
                                    </div>
                                </div>{/* Footer Widget End */}
                                {/* Footer Widget Start */}
                                <div className="col-lg-3 col-md-6 col-12 mb-40">
                                    <div className="footer-widget">
                                        <h4 className="widget-title">INFORMATION</h4>
                                        <ul className="link-widget">
                                            <li><a href="#">Track your order</a></li>
                                            <li><a href="#">Locate Store</a></li>
                                            <li><a href="#">Online Support</a></li>
                                            <li><a href="#">Terms &amp; Conditions</a></li>
                                            <li><a href="#">Payment</a></li>
                                            <li><a href="#">Shipping &amp; Returns</a></li>
                                            <li><a href="#">Gift coupon</a></li>
                                            <li><a href="#">Special coupon</a></li>
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
                                    <div className="footer-copyright"><p>© Copyright, 2018 All Rights Reserved by <a href="https://freethemescloud.com/">Free themes Cloud</a></p></div>
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
                <div className="popup-subscribe-section section bg-gray pt-55 pb-55" data-modal="popup-modal" style={{display:"none"}}>
                    {/* Popup Subscribe Wrap Start */}
                    <div className="popup-subscribe-wrap">
                        <button className="close-popup">X</button>
                        {/* Popup Subscribe Banner */}
                        <div className="popup-subscribe-banner banner">
                            <a href="#"><img src="/images/banner/banner-7.jpg" alt="Banner" /></a>
                        </div>
                        {/* Popup Subscribe Form Wrap Start */}
                        <div className="popup-subscribe-form-wrap">
                            <h1>SUBSCRIBE <br />OUR NEWSLETTER</h1>
                            <h4>Get latest product update...</h4>
                            {/* Newsletter Form */}
                            <form action="#" method="post" className="popup-subscribe-form validate" target="_blank" noValidate>
                                <div id="mc_embed_signup_scroll">
                                    <label htmlFor="popup_subscribe" className="d-none">Subscribe to our mailing list</label>
                                    <input type="email" defaultValue name="EMAIL" className="email" id="popup_subscribe" placeholder="Enter your email here" required />
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
                <ChatBoxPopup/>
            </div>
        );
    }
}

export default Footer;
