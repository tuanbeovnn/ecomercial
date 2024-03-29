import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchProductByCategoriesRequest } from '../../redux/actions';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
class MobileCategories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            addToCart: true,
        }
    }
    componentDidMount() {
        const code = this.props.match.params.code;
        console.log(code);
        const callback = (data) => {
            if (data) {
                const products = data;
                console.log(products)
                this.setState({
                    products
                })
            }
        }
        this.props.fetchProductListCategory(code, callback);
    }
    render() {
        const { products, addToCart } = this.state;
        return (
            <div>
                {/* Page Banner Section Start */}
                <div className="page-banner-section section">
                    <div className="page-banner-wrap row row-0 d-flex align-items-center ">
                        {/* Page Banner */}
                        <div className="col-lg-4 col-12 order-lg-2 d-flex align-items-center justify-content-center">
                            <div className="page-banner">
                                <h1>SHOP Grid VIEW</h1>
                                <p>similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita</p>
                                <div className="breadcrumb">
                                    <ul>
                                        <li><a href="#">HOME</a></li>
                                        <li><a href="#">SHOP Grid VIEW</a></li>
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
                {/* Product Section Start */}
                <div className="product-section section mt-90 mb-90">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="row mb-50">
                                    <div className="col">
                                        {/* Shop Top Bar Start */}
                                        <div className="shop-top-bar">
                                            {/* Product View Mode */}
                                            <div className="product-view-mode">
                                                <a className="active" href="#" data-target="grid"><i className="fa fa-th" /></a>
                                                <a href="#" data-target="list"><i className="fa fa-list" /></a>
                                            </div>
                                            {/* Product Showing */}
                                            <div className="product-showing">
                                                <p>Showing</p>
                                                <select name="showing" className="nice-select">
                                                    <option value={1}>8</option>
                                                    <option value={2}>12</option>
                                                    <option value={3}>16</option>
                                                    <option value={4}>20</option>
                                                    <option value={5}>24</option>
                                                </select>
                                            </div>
                                            {/* Product Short */}
                                            <div className="product-short">
                                                <p>Short by</p>
                                                <select name="sortby" className="nice-select">
                                                    <option value="trending">Trending items</option>
                                                    <option value="sales">Best sellers</option>
                                                    <option value="rating">Best rated</option>
                                                    <option value="date">Newest items</option>
                                                    <option value="price-asc">Price: low to high</option>
                                                    <option value="price-desc">Price: high to low</option>
                                                </select>
                                            </div>
                                            {/* Product Pages */}
                                            <div className="product-pages">
                                                <p>Pages 1 of 25</p>
                                            </div>
                                        </div>{/* Shop Top Bar End */}
                                    </div>
                                </div>
                                {/* Shop Product Wrap Start */}
                                {/* Shop Product Wrap Start */}
                                <div className="shop-product-wrap grid row">
                                    {products.map((item, index) => {
                                        return (
                                            <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-12 pb-30 pt-10">
                                                {/* Product Start */}
                                                <div className="ee-product">
                                                    {/* Image */}
                                                    <div className="image">
                                                        <Link className="img" to={"/details/" + item.code}>
                                                            <img src={item.image[0]} alt={item.image} />
                                                        </Link>
                                                        <div className="wishlist-compare">
                                                            <a href="#" data-tooltip="Compare"><i className="ti-control-shuffle" /></a>
                                                            <a href="#" data-tooltip="Wishlist"><i className="ti-heart" /></a>
                                                        </div>
                                                        <a className={addToCart ? "add-to-cart" : "add-to-cart added"} onClick={() => this.setState({ addToCart: !addToCart })}>
                                                            <i className={addToCart ? "ti-shopping-cart" : "ti-check"} />
                                                            <span>{addToCart ? "ADD TO CART" : "ADDED"}</span>
                                                        </a>
                                                    </div>
                                                    {/* Content */}
                                                    <div className="content">
                                                        {/* Category & Title */}
                                                        <div className="category-title">
                                                            <a href="#" className="cat">Laptop</a>

                                                            <h5 className="title">
                                                                <Link to={"/details/" + item.code}>
                                                                    {item.name}
                                                                </Link>
                                                            </h5>
                                                        </div>
                                                        {/* Price & Ratting */}
                                                        <div className="price-ratting">
                                                            <h5 className="price">${item.price}</h5>
                                                            <div className="ratting">
                                                                {new Array(5).fill(0).map((star, index) => {
                                                                    return <i key={index} className={"fa fa-star" + (index < item.rating ? '' : '-o')} />
                                                                })}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>{/* Product End */}
                                                {/* Product List Start */}
                                                <div className="ee-product-list">
                                                    {/* Image */}
                                                    <div className="image">
                                                        <a href="single-product.html" className="img"><img src="/images/product/product-1.png" alt="Product Image" /></a>
                                                    </div>
                                                    {/* Content */}
                                                    <div className="content">
                                                        {/* Category & Title */}
                                                        <div className="head-content">
                                                            <div className="category-title">
                                                                <a href="#" className="cat">Laptop</a>
                                                                <h5 className="title"><a href="single-product.html">Zeon Zen 4 Pro</a></h5>
                                                            </div>
                                                            <h5 className="price">$295.00</h5>
                                                        </div>
                                                        <div className="left-content">
                                                            <div className="ratting">
                                                                {new Array(5).fill(0).map((star, index) => {
                                                                    return <i key={index} className={"fa fa-star" + (index < item.rating ? '' : '-o')} />
                                                                })}
                                                            </div>
                                                            <div className="desc">
                                                                <p>enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni res eos qui ratione voluptatem sequi nesciunt</p>
                                                            </div>
                                                            <div className="actions">
                                                                <a href="#" className="add-to-cart"><i className="ti-shopping-cart" /><span>ADD TO CART</span></a>
                                                                <div className="wishlist-compare">
                                                                    <a href="#" data-tooltip="Compare"><i className="ti-control-shuffle" /></a>
                                                                    <a href="#" data-tooltip="Wishlist"><i className="ti-heart" /></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="right-content">
                                                            <div className="specification">
                                                                <h5>Specifications</h5>
                                                                <ul>
                                                                    <li>Intel Core i7 Processor</li>
                                                                    <li>Zeon Z 170 Pro Motherboad</li>
                                                                    <li>16 GB RAM</li>
                                                                </ul>
                                                            </div>
                                                            <span className="availability">Availability: <span>In Stock</span></span>
                                                        </div>
                                                    </div>
                                                </div>{/* Product List End */}
                                            </div>

                                        )
                                    })}
                                </div>{/* Shop Product Wrap End */}
                                <div className="row mt-30">
                                    <div className="col">
                                        <ul className="pagination">
                                            <li><a href="#"><i className="fa fa-angle-left" />Back</a></li>
                                            <li><a href="#">1</a></li>
                                            <li className="active"><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li> - - - - - </li>
                                            <li><a href="#">18</a></li>
                                            <li><a href="#">18</a></li>
                                            <li><a href="#">20</a></li>
                                            <li><a href="#">Next<i className="fa fa-angle-right" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>{/* Feature Product Section End */}
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.Ecomercial.categories,

    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchProductListCategory: (code, callback) => {
            dispatch(fetchProductByCategoriesRequest(code, callback));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MobileCategories);

