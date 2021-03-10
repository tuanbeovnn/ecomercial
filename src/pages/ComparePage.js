import React, { Component } from 'react'

export default class ComparePage extends Component {
    render() {
        return (
            <div>
                {/* Page Banner Section Start */}
                <div className="page-banner-section section">
                    <div className="page-banner-wrap row row-0 d-flex align-items-center ">
                        {/* Page Banner */}
                        <div className="col-lg-4 col-12 order-lg-2 d-flex align-items-center justify-content-center">
                            <div className="page-banner">
                                <h1>Compare</h1>
                                <p>similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita</p>
                                <div className="breadcrumb">
                                    <ul>
                                        <li><a href="#">HOME</a></li>
                                        <li><a href="#">Shop</a></li>
                                        <li><a href="#">Compare</a></li>
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
                {/* Compare Page Start */}
                <div className="page-section section mt-90 mb-90">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <form action="#">
                                    {/* Compare Table */}
                                    <div className="compare-table table-responsive">
                                        <table className="table mb-0">
                                            <tbody>
                                                <tr>
                                                    <td className="first-column">Product</td>
                                                    <td className="product-image-title">
                                                        <a href="#" className="image"><img src="/images/compare/compare-1.png" alt="Compare Product" /></a>
                                                        <a href="#" className="category">Laptop</a>
                                                        <a href="#" className="title">Zeon Zen 4 Pro</a>
                                                    </td>
                                                    <td className="product-image-title">
                                                        <a href="#" className="image"><img src="/images/compare/compare-2.png" alt="Compare Product" /></a>
                                                        <a href="#" className="category">Doren</a>
                                                        <a href="#" className="title">Aquet Doren D 420</a>
                                                    </td>
                                                    <td className="product-image-title">
                                                        <a href="#" className="image"><img src="/images/compare/compare-3.png" alt="Compare Product" /></a>
                                                        <a href="#" className="category">Games</a>
                                                        <a href="#" className="title">Game Station X 22</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="first-column">Description</td>
                                                    <td className="pro-desc"><p>Samsome Note Book Pro 5 is the best Laptop on this budget. You can satisfy after usign this laptop. It’s performance is awesome. Designer’s love it.</p></td>
                                                    <td className="pro-desc"><p>Samsome Note Book Pro 5 is the best Laptop on this budget. You can satisfy after usign this laptop. It’s performance is awesome. Designer’s love it.</p></td>
                                                    <td className="pro-desc"><p>Samsome Note Book Pro 5 is the best Laptop on this budget. You can satisfy after usign this laptop. It’s performance is awesome. Designer’s love it.</p></td>
                                                </tr>
                                                <tr>
                                                    <td className="first-column">Price</td>
                                                    <td className="pro-price">$295</td>
                                                    <td className="pro-price">$275</td>
                                                    <td className="pro-price">$395</td>
                                                </tr>
                                                <tr>
                                                    <td className="first-column">Color</td>
                                                    <td className="pro-color">Black</td>
                                                    <td className="pro-color">Black</td>
                                                    <td className="pro-color">Black</td>
                                                </tr>
                                                <tr>
                                                    <td className="first-column">Stock</td>
                                                    <td className="pro-stock">In Stock</td>
                                                    <td className="pro-stock">In Stock</td>
                                                    <td className="pro-stock">In Stock</td>
                                                </tr>
                                                <tr>
                                                    <td className="first-column">Add to cart</td>
                                                    <td className="pro-addtocart"><a href="#" className="add-to-cart" tabIndex={0}><i className="ti-shopping-cart" /><span>ADD TO CART</span></a></td>
                                                    <td className="pro-addtocart"><a href="#" className="add-to-cart" tabIndex={0}><i className="ti-shopping-cart" /><span>ADD TO CART</span></a></td>
                                                    <td className="pro-addtocart"><a href="#" className="add-to-cart" tabIndex={0}><i className="ti-shopping-cart" /><span>ADD TO CART</span></a></td>
                                                </tr>
                                                <tr>
                                                    <td className="first-column">Delete</td>
                                                    <td className="pro-remove"><button><i className="fa fa-trash-o" /></button></td>
                                                    <td className="pro-remove"><button><i className="fa fa-trash-o" /></button></td>
                                                    <td className="pro-remove"><button><i className="fa fa-trash-o" /></button></td>
                                                </tr>
                                                <tr>
                                                    <td className="first-column">Rating</td>
                                                    <td className="pro-ratting">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star-o" />
                                                    </td>
                                                    <td className="pro-ratting">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                    </td>
                                                    <td className="pro-ratting">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star-o" />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Compare Page End */}
            </div>

        )
    }
}
