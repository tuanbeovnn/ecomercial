import React, { Component } from 'react'
import { addCartRequest, getWishListFromLocalRequest, removeCartRequest, wishListRemoveRequest } from '../redux/actions';
import { connect } from 'react-redux';

class WishListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            qty: 1,
            wishListQty: []

        }
    }

    onHandleChange = (e, id) => {
        const { wishListQty } = this.state;
        const index = wishListQty.findIndex(item => item.id === id);
        if (index === -1) {
            wishListQty.push({ id, qty: e.target.value })
        }
        else {
            wishListQty[index].qty = e.target.value;
        }
        this.setState({
            wishListQty: [...wishListQty]
        })

    }
    onMinus = (id) => {
        const { wishListQty } = this.state;
        const index = wishListQty.findIndex(item => item.id === id);
        if (index === -1) {
            wishListQty.push({ id, qty: 1 })
        }
        else if (wishListQty[index].qty > 1) {
            wishListQty[index].qty -= 1;
        }
        this.setState({
            wishListQty: [...wishListQty]
        })
    }

    onPlus = (id) => {
        const { wishListQty } = this.state;
        const index = wishListQty.findIndex(item => item.id === id);
        if (index === -1) {
            wishListQty.push({ id, qty: 2 })
        }
        else {
            wishListQty[index].qty += 1;
        }
        this.setState({
            wishListQty: [...wishListQty]
        })
    }
    render() {
        const { wishListQty } = this.state;
        const { wishList, removeWishList, addCart, removeCart, cart } = this.props;

        console.log(wishList)
        return (
            <div>
                {/* Page Banner Section Start */}
                <div className="page-banner-section section">
                    <div className="page-banner-wrap row row-0 d-flex align-items-center ">
                        {/* Page Banner */}
                        <div className="col-lg-4 col-12 order-lg-2 d-flex align-items-center justify-content-center">
                            <div className="page-banner">
                                <h1>Wishlist</h1>
                                <p>similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita</p>
                                <div className="breadcrumb">
                                    <ul>
                                        <li><a >HOME</a></li>
                                        <li><a >Shop</a></li>
                                        <li><a >Wishlist</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Banner */}
                        <div className="col-lg-4 col-md-6 col-12 order-lg-1">
                            <div className="banner"><a ><img src="/images/banner/banner-15.jpg" alt="Banner" /></a></div>
                        </div>
                        {/* Banner */}
                        <div className="col-lg-4 col-md-6 col-12 order-lg-3">
                            <div className="banner"><a ><img src="/images/banner/banner-14.jpg" alt="Banner" /></a></div>
                        </div>
                    </div>
                </div>{/* Page Banner Section End */}
                {/* Cart Page Start */}
                <div className="page-section section mt-90 mb-90">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <form action="#" onSubmit={e => e.preventDefault()}>
                                    <div className="cart-table table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th className="pro-thumbnail">Image</th>
                                                    <th className="pro-title">Product</th>
                                                    <th className="pro-price">Price</th>
                                                    <th className="pro-quantity">Quantity</th>
                                                    <th className="pro-subtotal">Total</th>
                                                    <th className="pro-remove">Remove</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {wishList.map((item, index) => {
                                                    const wishItem = wishListQty.find(p => item.id === p.id) || {};
                                                    const existCart = cart.find(p => p.id === item.id);
                                                    const qty = wishItem.qty || existCart && existCart.qty || 1;
                                                    return (
                                                        <tr key={index}>
                                                            <td className="pro-thumbnail"><a ><img src={item.image && item.image[0]} alt={item.image[0]} /></a></td>
                                                            <td className="pro-title"><a>{item.name}</a></td>
                                                            <td className="pro-price"><span>{item.price}$</span></td>
                                                            <td className="pro-quantity">
                                                                <div className="pro-qty">
                                                                    <span onClick={() => { this.onMinus(item.id) }} className="dec qtybtn">-</span>
                                                                    <input
                                                                        type="text"
                                                                        name="qty"
                                                                        onChange={e => this.onHandleChange(e, item.id)}
                                                                        value={qty}
                                                                    />
                                                                    <span onClick={() => { this.onPlus(item.id) }} className="inc qtybtn">+</span>
                                                                </div>
                                                            </td>
                                                            <td className="pro-addtocart">
                                                                <button className={existCart ? "add-to-cart added" : "add-to-cart"} onClick={() => { existCart ? removeCart(item.id) : addCart({ ...item, qty }) }}>{existCart ? "ADDED" : "ADD TO CART"}
                                                                </button>
                                                            </td>

                                                            <td onClick={() => { removeWishList(item.id) }} className="pro-remove"><a ><i className="fa fa-trash-o" /></a></td>
                                                        </tr>
                                                    )
                                                })}

                                            </tbody>
                                        </table>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Cart Page End */}
                {/* Banner Section Start */}
                <div className="banner-section section mb-90">
                    <div className="container">
                        <div className="row">
                            {/* Banner */}
                            <div className="col-12">
                                <div className="banner"><a ><img src="/images/banner/banner-10.jpg" alt="Banner" /></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        wishList: state.Ecomercial.wishList,
        cart: state.Ecomercial.cart
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        
        removeWishList: (id) => {
            dispatch(wishListRemoveRequest(id));
        },
        addCart: (product) => {
            dispatch(addCartRequest(product));
        },
        removeCart: (id) => {
            dispatch(removeCartRequest(id));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(WishListPage);
