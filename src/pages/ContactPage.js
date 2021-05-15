import React, { Component } from 'react'

export default class ContactPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tab: 0
        }
    }
    render() {
        return (
            <div>
                {/* Page Banner Section Start */}
                <div className="page-banner-section section">
                    <div className="page-banner-wrap row row-0 d-flex align-items-center ">
                        {/* Page Banner */}
                        <div className="col-lg-4 col-12 order-lg-2 d-flex align-items-center justify-content-center">
                            <div className="page-banner">
                                <h1>Contact</h1>
                                <p>similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita</p>
                                <div className="breadcrumb">
                                    <ul>
                                        <li><a href="#">HOME</a></li>
                                        <li><a href="#">Contact</a></li>
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
                {/* Contact Section Start */}
                <div className="contact-section section mt-90 mb-40">
                    <div className="container">
                        <div className="row">
                            {/* Contact Page Title */}
                            <div className="contact-page-title col mb-40">
                                <h1>Hi, Howdy <br />Let’s Connect us</h1>
                            </div>
                        </div>
                        <div className="row">
                            {/* Contact Tab List */}
                            <div className="col-lg-4 col-12 mb-50">
                                <ul className="contact-tab-list nav">
                                    <li><a onClick={(e) => { e.preventDefault(); this.setState({ tab: 0 }) }} className={this.state.tab === 0 ? "active" : "" }>Contact us</a></li>
                                    <li><a onClick = {(e)=>{e.preventDefault(); this.setState({tab: 1})}} className={this.state.tab === 1 ? "active" : "" }>Leave us a message</a></li>
                                    <li><a onClick = {(e)=>{e.preventDefault(); this.setState({tab: 2})}} className={this.state.tab === 2 ? "active" : "" }>All Store location</a></li>
                                </ul>
                            </div>
                            {/* Contact Tab Content */}
                            <div className="col-lg-8 col-12">
                                <div className="tab-content">
                                    {/* Contact Address Tab */}
                                    <div className={this.state.tab === 0 ? "tab-pane fade show active row d-flex" : "tab-pane fade"} id="contact-address">
                                        <div className="col-lg-4 col-md-6 col-12 mb-50">
                                            <div className="contact-information">
                                                <h4>Address</h4>
                                                <p>You address will be here Lorem Ipsum text</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-12 mb-50">
                                            <div className="contact-information">
                                                <h4>Phone</h4>
                                                <p><a href="tel:01234567890">01234 567 890</a><a href="tel:01234567891">01234 567 891</a></p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-12 mb-50">
                                            <div className="contact-information">
                                                <h4>Web</h4>
                                                <p><a href="mailto:info@example.com">info@example.com</a><a href="#">www.example.com</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Contact Form Tab */}
                                    <div className={this.state.tab === 1 ? "tab-pane fade show active row d-flex" : "tab-pane fade"} id="contact-form-tab">
                                        <div className="col">
                                            <form id="contact-form" action method="post" className="contact-form mb-50">
                                                <div className="row">
                                                    <div className="col-md-6 col-12 mb-25">
                                                        <label htmlFor="first_name">First Name*</label>
                                                        <input id="first_name" type="text" name="first_name" />
                                                    </div>
                                                    <div className="col-md-6 col-12 mb-25">
                                                        <label htmlFor="last_name">Last Name*</label>
                                                        <input id="last_name" type="text" name="last_name" />
                                                    </div>
                                                    <div className="col-md-6 col-12 mb-25">
                                                        <label htmlFor="email_address">Email*</label>
                                                        <input id="email_address" type="email" name="email_address" />
                                                    </div>
                                                    <div className="col-md-6 col-12 mb-25">
                                                        <label htmlFor="phone_number">Phone</label>
                                                        <input id="phone_number" type="text" name="phone_number" />
                                                    </div>
                                                    <div className="col-12 mb-25">
                                                        <label htmlFor="message">Message*</label>
                                                        <textarea id="message" name="message" defaultValue={""} />
                                                    </div>
                                                    <div className="col-12">
                                                        <input type="submit" defaultValue="SEND NOW" />
                                                    </div>
                                                </div>
                                            </form>
                                            <p className="form-messege" />
                                        </div>
                                    </div>
                                    {/* Contact Stores Tab */}
                                    <div className={this.state.tab === 2 ? "tab-pane fade show active row d-flex" : "tab-pane fade"} id="store-location">
                                        <div className="col-md-6 col-12 mb-50">
                                            <div className="single-store">
                                                <h3>E&amp;E Australia</h3>
                                                <p>You address will be here Lorem Ipsum is simply dummy text.</p>
                                                <p><a href="tel:01234567890">01234 567 890</a> / <a href="tel:01234567891">01234 567 891</a></p>
                                                <p><a href="mailto:info@example.com">info@example.com</a> / <a href="#">www.example.com</a></p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12 mb-50">
                                            <div className="single-store">
                                                <h3>E&amp;E England</h3>
                                                <p>You address will be here Lorem Ipsum is simply dummy text.</p>
                                                <p><a href="tel:01234567890">01234 567 890</a> / <a href="tel:01234567891">01234 567 891</a></p>
                                                <p><a href="mailto:info@example.com">info@example.com</a> / <a href="#">www.example.com</a></p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12 mb-50">
                                            <div className="single-store">
                                                <h3>E&amp;E Germany</h3>
                                                <p>You address will be here Lorem Ipsum is simply dummy text.</p>
                                                <p><a href="tel:01234567890">01234 567 890</a> / <a href="tel:01234567891">01234 567 891</a></p>
                                                <p><a href="mailto:info@example.com">info@example.com</a> / <a href="#">www.example.com</a></p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12 mb-50">
                                            <div className="single-store">
                                                <h3>E&amp;E France</h3>
                                                <p>You address will be here Lorem Ipsum is simply dummy text.</p>
                                                <p><a href="tel:01234567890">01234 567 890</a> / <a href="tel:01234567891">01234 567 891</a></p>
                                                <p><a href="mailto:info@example.com">info@example.com</a> / <a href="#">www.example.com</a></p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12 mb-50">
                                            <div className="single-store">
                                                <h3>E&amp;E Canada</h3>
                                                <p>You address will be here Lorem Ipsum is simply dummy text.</p>
                                                <p><a href="tel:01234567890">01234 567 890</a> / <a href="tel:01234567891">01234 567 891</a></p>
                                                <p><a href="mailto:info@example.com">info@example.com</a> / <a href="#">www.example.com</a></p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12 mb-50">
                                            <div className="single-store">
                                                <h3>E&amp;E Denmark</h3>
                                                <p>You address will be here Lorem Ipsum is simply dummy text.</p>
                                                <p><a href="tel:01234567890">01234 567 890</a> / <a href="tel:01234567891">01234 567 891</a></p>
                                                <p><a href="mailto:info@example.com">info@example.com</a> / <a href="#">www.example.com</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>{/* Contact Section End */}</div>

        )
    }
}
