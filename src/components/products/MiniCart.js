import React, { Component } from 'react';

class MiniCart extends Component {
    
    render() {
        const {openToggle, handdleClose} = this.props;
        
        return (
            <div>
                <div className={openToggle ? "mini-cart-wrap open" : "mini-cart-wrap"}>
                {/* Mini Cart Top */}
                <div className="mini-cart-top">
                    <button onClick={handdleClose} className="close-cart">Close Cart<i className="icofont icofont-close" /></button>
                </div>
                {/* Mini Cart Products */}
                <ul className="mini-cart-products">
                    <li>
                        <a className="image"><img src="/images/product/product-1.png" alt="Product" /></a>
                        <div className="content">
                            <a href="single-product.html" className="title">Waxon Note Book Pro 5</a>
                            <span className="price">Price: $295</span>
                            <span className="qty">Qty: 02</span>
                        </div>
                        <button className="remove"><i className="fa fa-trash-o" /></button>
                    </li>
                    <li>
                        <a className="image"><img src="/images/product/product-2.png" alt="Product" /></a>
                        <div className="content">
                            <a href="single-product.html" className="title">Aquet Drone D 420</a>
                            <span className="price">Price: $275</span>
                            <span className="qty">Qty: 01</span>
                        </div>
                        <button className="remove"><i className="fa fa-trash-o" /></button>
                    </li>
                    <li>
                        <a className="image"><img src="/images/product/product-3.png" alt="Product" /></a>
                        <div className="content">
                            <a href="single-product.html" className="title">Game Station X 22</a>
                            <span className="price">Price: $295</span>
                            <span className="qty">Qty: 01</span>
                        </div>
                        <button className="remove"><i className="fa fa-trash-o" /></button>
                    </li>
                </ul>
                {/* Mini Cart Bottom */}
                <div className="mini-cart-bottom">
                    <h4 className="sub-total">Total: <span>$1160</span></h4>
                    <div className="button">
                        <a href="checkout.html">CHECK OUT</a>
                    </div>
                </div>
            </div>
            <div onClick={handdleClose} className= {openToggle ? "cart-overlay visible" : "cart-overlay"}></div>
            </div>
            
        );
    }
}

export default MiniCart;
