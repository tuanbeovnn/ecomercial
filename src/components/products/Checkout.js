import React, { Component } from 'react'
import { getUserFromStorageRequest, paymentRequest } from '../../redux/actions';
import { connect } from 'react-redux';

class Checkout extends Component {
    state = {
        visibleSelect: false,
        country: ['China', 'USA', 'India', 'Japan', 'VietNam'],
        selected: 'China',
        checkTerm: false,




    }
    onChange = (e) => {
        if (e.target.name === 'checkTerm') {
            this.setState(
                {
                    [e.target.name]: e.target.checked,
                    error: false,
                }
            )
        } else {
            this.setState({
                [e.target.name]: e.target.value // create bien and pass value
            });
        }
       
    }
    handelSubmit = (e) => {
        e.preventDefault();
        const { cart } = this.props;
        let totalPrice = 0;
        cart.map((item) => {
            totalPrice += item.price * item.qty;
            
        })
        const {paypal} = this.state;
        const body = {method:paypal,totalPrice}
        this.props.payment(body);
     
    }
    render() {
        const { visibleSelect, selected, country } = this.state;
        const { cart } = this.props;

        let totalPrice = 0;
        cart.map((item) => {
            totalPrice += item.price * item.qty;
            
        })
        return (
            <div>
                {/* Page Banner Section Start */}
                <div className="page-banner-section section">
                    <div className="page-banner-wrap row row-0 d-flex align-items-center ">
                        {/* Page Banner */}
                        <div className="col-lg-4 col-12 order-lg-2 d-flex align-items-center justify-content-center">
                            <div className="page-banner">
                                <h1>Checkout</h1>
                                <p>similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita</p>
                                <div className="breadcrumb">
                                    <ul>
                                        <li><a href="#">HOME</a></li>
                                        <li><a href="#">Shop</a></li>
                                        <li><a href="#">Checkout</a></li>
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
                {/* Checkout Page Start */}
                <div className="page-section section mt-90 mb-30">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                {/* Checkout Form s*/}
                                <form className="checkout-form" onSubmit={this.handelSubmit}>
                                    <div className="row row-40">
                                        <div className="col-lg-7 mb-20">
                                            {/* Billing Address */}
                                            <div id="billing-form" className="mb-40">
                                                <h4 className="checkout-title">Billing Address</h4>
                                                <div className="row">
                                                    <div className="col-md-6 col-12 mb-20">
                                                        <label>First Name*</label>
                                                        <input
                                                            type="text"
                                                            placeholder="First Name"
                                                            name="firstName"
                                                            onChange={this.onChange}
                                                        />
                                                    </div>
                                                    <div className="col-md-6 col-12 mb-20">
                                                        <label>Last Name*</label>
                                                        <input
                                                            type="text"
                                                            placeholder="Last Name"
                                                            name="lastName"
                                                            onChange={this.onChange}
                                                        />
                                                    </div>
                                                    <div className="col-md-6 col-12 mb-20">
                                                        <label>Email Address*</label>
                                                        <input
                                                            type="email"
                                                            placeholder="Email Address"
                                                            name="email"
                                                            onChange={this.onChange}
                                                        />
                                                    </div>
                                                    <div className="col-md-6 col-12 mb-20">
                                                        <label>Phone no*</label>
                                                        <input
                                                            type="text"
                                                            placeholder="Phone number"
                                                            name="phone"
                                                            onChange={this.onChange}
                                                        />
                                                    </div>
                                                    <div className="col-12 mb-20">
                                                        <label>Company Name</label>
                                                        <input
                                                            type="text"
                                                            placeholder="Company Name"
                                                            name="companyName"
                                                            onChange={this.onChange}
                                                        />
                                                    </div>
                                                    <div className="col-12 mb-20">
                                                        <label>Address*</label>
                                                        <input
                                                            type="text"
                                                            placeholder="Address line 1"
                                                            name="address1"
                                                            onChange={this.onChange}
                                                        />
                                                        <input
                                                            type="text"
                                                            placeholder="Address line 2"
                                                            name="address2"
                                                            onChange={this.onChange}
                                                        />
                                                    </div>
                                                    <div className="col-md-6 col-12 mb-20">
                                                        <label>Country*</label>
                                                        <div className={visibleSelect ? "nice-select open" : "nice-select"}>
                                                            <span onClick={() => this.setState({ visibleSelect: !visibleSelect })} className="current">{selected}</span>
                                                            <ul className="list">
                                                                {country.map((item, index) => {
                                                                    return (
                                                                        <li onClick={() => this.setState({ selected: item, visibleSelect: false })} className={selected === item ? "option selected focus" : "option"}>{item}</li>
                                                                    )
                                                                })}
                                                            </ul>
                                                        </div>

                                                    </div>
                                                    <div className="col-md-6 col-12 mb-20">
                                                        <label>Town/City*</label>
                                                        <input
                                                            type="text"
                                                            placeholder="Town/City"
                                                            name="city"
                                                            onChange={this.onChange}
                                                        />
                                                    </div>
                                                    <div className="col-md-6 col-12 mb-20">
                                                        <label>State*</label>
                                                        <input
                                                            type="text"
                                                            placeholder="State"
                                                            name="state"
                                                            onChange={this.onChange}
                                                        />
                                                    </div>
                                                    <div className="col-md-6 col-12 mb-20">
                                                        <label>Zip Code*</label>
                                                        <input
                                                            type="text"
                                                            placeholder="Zip Code"
                                                            name="code"
                                                            onChange={this.onChange}
                                                        />
                                                    </div>
                                                    {/* <div className="col-12 mb-20">
                                                        <div className="check-box">
                                                            <input type="checkbox" id="create_account" />
                                                            <label htmlFor="create_account">Create an Acount?</label>
                                                        </div>
                                                        <div className="check-box">
                                                            <input type="checkbox" id="shiping_address" data-shipping />
                                                            <label htmlFor="shiping_address">Ship to Different Address</label>
                                                        </div>
                                                    </div> */}
                                                </div>
                                            </div>
                                            {/* Shipping Address */}
                                            <div id="shipping-form" className="mb-40">
                                                <h4 className="checkout-title">Shipping Address</h4>
                                                <div className="row">
                                                    <div className="col-md-6 col-12 mb-20">
                                                        <label>First Name*</label>
                                                        <input type="text" placeholder="First Name" />
                                                    </div>
                                                    <div className="col-md-6 col-12 mb-20">
                                                        <label>Last Name*</label>
                                                        <input type="text" placeholder="Last Name" />
                                                    </div>
                                                    <div className="col-md-6 col-12 mb-20">
                                                        <label>Email Address*</label>
                                                        <input type="email" placeholder="Email Address" />
                                                    </div>
                                                    <div className="col-md-6 col-12 mb-20">
                                                        <label>Phone no*</label>
                                                        <input type="text" placeholder="Phone number" />
                                                    </div>
                                                    <div className="col-12 mb-20">
                                                        <label>Company Name</label>
                                                        <input type="text" placeholder="Company Name" />
                                                    </div>
                                                    <div className="col-12 mb-20">
                                                        <label>Address*</label>
                                                        <input type="text" placeholder="Address line 1" />
                                                        <input type="text" placeholder="Address line 2" />
                                                    </div>
                                                    <div className="col-md-6 col-12 mb-20">
                                                        <label>Country*</label>
                                                        <select className="nice-select">
                                                            <option>Bangladesh</option>
                                                            <option>China</option>
                                                            <option>country</option>
                                                            <option>India</option>
                                                            <option>Japan</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-6 col-12 mb-20">
                                                        <label>Town/City*</label>
                                                        <input type="text" placeholder="Town/City" />
                                                    </div>
                                                    <div className="col-md-6 col-12 mb-20">
                                                        <label>State*</label>
                                                        <input type="text" placeholder="State" />
                                                    </div>
                                                    <div className="col-md-6 col-12 mb-20">
                                                        <label>Zip Code*</label>
                                                        <input type="text" placeholder="Zip Code" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="row">
                                                {/* Cart Total */}
                                                <div className="col-12 mb-60">
                                                    <h4 className="checkout-title">Cart Total</h4>
                                                    <div className="checkout-cart-total">
                                                        <h4>Product <span>Total</span></h4>
                                                        <ul>
                                                            {cart.map((item, index) => {
                                                                return (
                                                                    <li key={index}>{item.name}<span>${item.price}</span></li>
                                                                )
                                                            })}
                                                        </ul>
                                                        <p>Sub Total <span>${totalPrice.toLocaleString()}</span></p>
                                                        <h4>Grand Total <span>${totalPrice.toLocaleString()}</span></h4>
                                                    </div>
                                                </div>
                                                {/* Payment Method */}
                                                <div className="col-12 mb-60">
                                                    <h4 className="checkout-title">Payment Method</h4>
                                                    <div className="checkout-payment-method">
                                                        {/* <div className="single-method">
                                                            <input type="radio" id="payment_check" name="payment-method" defaultValue="check" />
                                                            <label htmlFor="payment_check">Check Payment</label>
                                                            <p data-method="check">Please send a Check to Store name with Store Street, Store Town, Store State, Store Postcode, Store Country.</p>
                                                        </div>
                                                        <div className="single-method">
                                                            <input type="radio" id="payment_bank" name="payment-method" defaultValue="bank" />
                                                            <label htmlFor="payment_bank">Direct Bank Transfer</label>
                                                            <p data-method="bank">Please send a Check to Store name with Store Street, Store Town, Store State, Store Postcode, Store Country.</p>
                                                        </div>
                                                        <div className="single-method">
                                                            <input type="radio" id="payment_cash" name="payment-method" defaultValue="cash" />
                                                            <label htmlFor="payment_cash">Cash on Delivery</label>
                                                            <p data-method="cash">Please send a Check to Store name with Store Street, Store Town, Store State, Store Postcode, Store Country.</p>
                                                        </div> */}
                                                        <div className="single-method">
                                                            <input
                                                                type="radio"
                                                                id="payment_paypal"
                                                                name="paypal"
                                                                defaultValue="paypal"
                                                                onChange={this.onChange}

                                                            />
                                                            <label htmlFor="payment_paypal">Paypal</label>
                                                            <p data-method="paypal">Please send a Check to Store name with Store Street, Store Town, Store State, Store Postcode, Store Country.</p>
                                                        </div>
                                                        {/* <div className="single-method">
                                                            <input type="radio" id="payment_payoneer" name="payment-method" defaultValue="payoneer" />
                                                            <label htmlFor="payment_payoneer">Payoneer</label>
                                                            <p data-method="payoneer">Please send a Check to Store name with Store Street, Store Town, Store State, Store Postcode, Store Country.</p>
                                                        </div> */}
                                                        <div className="single-method">
                                                            <input
                                                                type="checkbox"
                                                                id="accept_terms"
                                                                onChange={this.onChange}
                                                                name="checkTerm"
                                                            />
                                                            <label htmlFor="accept_terms">I’ve read and accept the terms &amp; conditions</label>
                                                        </div>
                                                    </div>
                                                    
                                                    <button className="place-order" disabled={!this.state.checkTerm}>Place order</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Checkout Page End */}
                {/* Banner Section Start */}
                <div className="banner-section section mb-90">
                    <div className="container">
                        <div className="row">
                            {/* Banner */}
                            <div className="col-12">
                                <div className="banner"><a href="#"><img src="/images/banner/banner-10.jpg" alt="Banner" /></a></div>
                            </div>
                        </div>
                    </div>
                </div>{/* Banner Section End */}
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.Ecomercial.cart,

    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        payment: (body, callback) => {
            dispatch(paymentRequest(body, callback));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
