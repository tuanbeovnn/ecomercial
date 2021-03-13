import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCartFromLocalRequest,removeCartRequest } from '../../redux/actions';

class MiniCart extends Component {

    componentDidMount() {
        this.props.getCart();
    }

    render() {
        const { openToggle, handdleClose, cart,removeCart } = this.props;
        let totalPrice = 0;
        cart.map((item)=>{
            totalPrice += item.price*item.qty;
        })
       
        return (
            <div>
                <div className={openToggle ? "mini-cart-wrap open" : "mini-cart-wrap"}>
                    {/* Mini Cart Top */}
                    <div className="mini-cart-top">
                        <button onClick={handdleClose} className="close-cart">Close Cart<i className="icofont icofont-close" /></button>
                    </div>
                    {/* Mini Cart Products */}
                    <ul className="mini-cart-products">
                        {cart.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a className="image"><img src={item.image[0]} alt={item.image} /></a>
                                    <div className="content">
                                        <Link className="title" to={"/details/" + item.code}>
                                          {item.name}
                                        </Link>
                                        <span className="price">Price: ${item.price}</span>
                                        <span className="qty">Qty: {item.qty}</span>
                                    </div>
                                    <button onClick={()=>{removeCart(item.id)}}className="remove"><i className="fa fa-trash-o" /></button>
                                </li>
                            )
                        })}
                    </ul>
                    {/* Mini Cart Bottom */}
                    <div className="mini-cart-bottom">
                        <h4 className="sub-total">Total: <span>${totalPrice}</span></h4>
                        <div className="button">
                            <a href="checkout.html">CHECK OUT</a>
                        </div>
                    </div>
                </div>
                <div onClick={handdleClose} className={openToggle ? "cart-overlay visible" : "cart-overlay"}></div>
            </div>

        );
    }
}
const mapStateToProps = (state) => {
    return {
        cart: state.Ecomercial.cart,

    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        getCart: () => {
            dispatch(getCartFromLocalRequest());
        },
        removeCart: (id) => {
            dispatch(removeCartRequest(id));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MiniCart);
