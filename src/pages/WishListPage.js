import React, { Component } from 'react'

export default class WishListPage extends Component {
    render() {
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
                                        <li><a href="#">HOME</a></li>
                                        <li><a href="#">Shop</a></li>
                                        <li><a href="#">Wishlist</a></li>
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
                {/* Cart Page Start */}
                <div className="page-section section mt-90 mb-90">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <form action="#">
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
                                                <tr>
                                                    <td className="pro-thumbnail"><a href="#"><img src="/images/product/product-1.png" alt="Product" /></a></td>
                                                    <td className="pro-title"><a href="#">Zeon Zen 4 Pro</a></td>
                                                    <td className="pro-price"><span>$295.00</span></td>
                                                    <td className="pro-quantity"><div className="pro-qty"><input type="text" defaultValue={1} /></div></td>
                                                    <td className="pro-addtocart"><button>add to cart</button></td>
                                                    <td className="pro-remove"><a href="#"><i className="fa fa-trash-o" /></a></td>
                                                </tr>
                                                <tr>
                                                    <td className="pro-thumbnail"><a href="#"><img src="/images/product/product-2.png" alt="Product" /></a></td>
                                                    <td className="pro-title"><a href="#">Aquet Drone D 420</a></td>
                                                    <td className="pro-price"><span>$275.00</span></td>
                                                    <td className="pro-quantity"><div className="pro-qty"><input type="text" defaultValue={2} /></div></td>
                                                    <td className="pro-addtocart"><button>add to cart</button></td>
                                                    <td className="pro-remove"><a href="#"><i className="fa fa-trash-o" /></a></td>
                                                </tr>
                                                <tr>
                                                    <td className="pro-thumbnail"><a href="#"><img src="/images/product/product-3.png" alt="Product" /></a></td>
                                                    <td className="pro-title"><a href="#">Game Station X 22</a></td>
                                                    <td className="pro-price"><span>$295.00</span></td>
                                                    <td className="pro-quantity"><div className="pro-qty"><input type="text" defaultValue={1} /></div></td>
                                                    <td className="pro-addtocart"><button>add to cart</button></td>
                                                    <td className="pro-remove"><a href="#"><i className="fa fa-trash-o" /></a></td>
                                                </tr>
                                                <tr>
                                                    <td className="pro-thumbnail"><a href="#"><img src="/images/product/product-4.png" alt="Product" /></a></td>
                                                    <td className="pro-title"><a href="#">Roxxe Headphone Z 75 </a></td>
                                                    <td className="pro-price"><span>$110.00</span></td>
                                                    <td className="pro-quantity"><div className="pro-qty"><input type="text" defaultValue={1} /></div></td>
                                                    <td className="pro-addtocart"><button>add to cart</button></td>
                                                    <td className="pro-remove"><a href="#"><i className="fa fa-trash-o" /></a></td>
                                                </tr>
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
                                <div className="banner"><a href="#"><img src="/images/banner/banner-10.jpg" alt="Banner" /></a></div>
                            </div>
                        </div>
                    </div>
                </div>{/* Banner Section End */}
            </div>

        )
    }
}
