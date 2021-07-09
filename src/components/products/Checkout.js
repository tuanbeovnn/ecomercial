import React, { Component } from 'react'
import { addOrderRequest, getUserFromStorageRequest, paymentRequest } from '../../redux/actions';
import { connect } from 'react-redux';


class Checkout extends Component {
    state = {
        visibleSelect: false,
        countries: ['China', 'USA', 'India', 'Japan', 'VietNam'],
        country: 'China',
        checkTerm: false,
        currency: 'USD',
        description: "mua",
        intent: 'sale',
        method: '',

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
       
        const { currency, intent, method, firstName, lastName, mobile, zipCode, email, state, city, address, country, description } = this.state;
        if (!firstName || !lastName || !mobile || !zipCode || !email || !state || !city || !address || !country) {
            let message = 'firstName is required';
            if (!lastName) message = 'New is required';
            if (!mobile) message = 'Mobile is required';
            if (!zipCode) message = 'ZipCode is required';
            if (!email) message = 'Email is required';
            if (!state) message = 'State is required';
            if (!city) message = 'City is required';
            if (!address) message = 'Address is required';
            if (!country) message = 'Address is required';
            this.setState({
                error: true,
                message: message,
            })
            console.log(message);
        } else {
            const body = {
                firstName,
                lastName,
                mobile,
                zipCode,
                email,
                state,
                city,
                address,
                country,
                details: cart.map(({ image, name, qty, id, price }) => {
                    return {
                        image: image && image[0],
                        name: name,
                        productId: id,
                        quantity: qty,
                        price: price,
                        total: qty * price
                    }
                })

            };
            this.props.addOrder(body, (data) => {
                if (data) {
                    let price = 0;
                    cart.map((item) => {
                        price += item.price * item.qty;
                    })
                    setTimeout(() => {
                        console.log(data);
                        const body = { currency, intent, method, price, description, id : data.id }
                        this.props.payment(body, (data) => {
                            if (data.success) {
                                console.log(data.success);
                                // window.location.href = data.details;
                                window.open(data.details, '_blank');
                            }
                        });
                    }, 2000)

                }
            })
        }

    }
    render() {
        const { visibleSelect, country, countries } = this.state;
        const { cart,user } = this.props;
        // console.log(user);
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
                            {/* <div className="banner"><a href="#"><img src="/images/banner/banner-15.jpg" alt="Banner" /></a></div> */}
                        </div>
                        {/* Banner */}
                        <div className="col-lg-4 col-md-6 col-12 order-lg-3">
                            {/* <div className="banner"><a href="#"><img src="/images/banner/banner-14.jpg" alt="Banner" /></a></div> */}
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
                                                            name="mobile"
                                                            onChange={this.onChange}
                                                        />
                                                    </div>
                                                    {/* <div className="col-12 mb-20">
                                                        <label>Company Name</label>
                                                        <input
                                                            type="text"
                                                            placeholder="Company Name"
                                                            name="companyName"
                                                            onChange={this.onChange}
                                                        />
                                                    </div> */}
                                                    <div className="col-12 mb-20">
                                                        <label>Address*</label>
                                                        <input
                                                            type="text"
                                                            placeholder="Address line"
                                                            name="address"
                                                            onChange={this.onChange}
                                                        />
                                                        {/* <input
                                                            type="text"
                                                            placeholder="Address line 2"
                                                            name="address2"
                                                            onChange={this.onChange}
                                                        /> */}
                                                    </div>
                                                    <div className="col-md-6 col-12 mb-20">
                                                        <label>Country*</label>
                                                        <div className={visibleSelect ? "nice-select open" : "nice-select"}>
                                                            <span onClick={() => this.setState({ visibleSelect: !visibleSelect })} className="current">{country}</span>
                                                            <ul className="list">
                                                                {countries.map((item, index) => {
                                                                    return (
                                                                        <li key={index} onClick={() => this.setState({ country: item, visibleSelect: false })} className={country === item ? "option selected focus" : "option"}>{item}</li>
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
                                                            name="zipCode"
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
                                                        {/* <h4 style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                            <span>Product</span>
                                                            <span style={{ paddingLeft: '30px' }}>Qty</span>
                                                            <span>Total</span>
                                                        </h4> */}
                                                        <table className="table table-borderless">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col">Product</th>
                                                                    <th scope="col">Qty</th>
                                                                    <th scope="col">Total</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {cart.map((item, index) => {
                                                                    return (
                                                                        <tr key={index}>
                                                                            <td>{item.name}</td>
                                                                            <td>x{item.qty}</td>
                                                                            <td>${(item.price * item.qty).toLocaleString()}</td>

                                                                        </tr>
                                                                    )
                                                                })}
                                                            </tbody>
                                                        </table>
                                                        <p>Sub Total <span>${totalPrice.toLocaleString()}</span></p>
                                                        <p>Tax <span>10 %</span></p>
                                                        <h4>Grand Total <span>${(totalPrice*0.9)}</span></h4>
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
                                                                name="method"
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
                                                    
                                                    {!user || !user.id ? <div style = {{display: 'flex', justifyContent:"center", color:"black", marginTop:10}}>Please Singin Before Purchase</div> : "" }
                                                    <button className="place-order" disabled={!this.state.checkTerm || !user || !user.id}><a></a>Place order</button>
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
                                {/* <div className="banner"><a href="#"><img src="/images/banner/banner-10.jpg" alt="Banner" /></a></div> */}
                            </div>
                        </div>
                    </div>
                </div>{/* Banner Section End */}
            </div >

        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.Ecomercial.cart,
        user : state.Ecomercial.user

    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        payment: (body, callback) => {
            dispatch(paymentRequest(body, callback));
        },
        addOrder: (body, callback) => {
            dispatch(addOrderRequest(body, callback));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
