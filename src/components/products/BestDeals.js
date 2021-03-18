import React, { Component } from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import { addCartRequest, addWishListRequest, fetchBestDealProductsRequest, removeCartRequest, wishListRemoveRequest } from '../../redux/actions/index';
import { Link } from 'react-router-dom';
import CountDown from './CountDown';


class BestDeals extends Component {

    state = {
        currentCategories: 0,
        addToCart: true,
        
    }
    componentDidMount() {
        //call all categories [{id:1, name: 'Laptop'}];
        //  goi list product all ve: all ProductFeature;
        //=> kich laptop => sp cuua laptop  => luu vao cateogries [{id: 1, name: 'Laptop', prodcts: [...]}]
        this.props.fetchProducts();
        

    }

    activeCategory = (currentCategories) => {
        //goji sp categories nay ve.
        const { categories } = this.props;

      
        const index = categories.findIndex(c => c.code === currentCategories);

        if (index != -1 && !categories[index].products) {
            //goi api
            this.props.fetchProducts(currentCategories);
        }
        this.setState({
            currentCategories
        });

    }

    render() {
        const { allProducts, categories, cart, addCart, removeCart, addWishList, wishList, removeWishList } = this.props;
        
        const { currentCategories, addToCart } = this.state;
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            nextArrow: <button type="button" className="slick-next slick-arrow" style="display: block;"><i className="icofont icofont-long-arrow-right"></i></button>,
            prevArrow: <button type="button" className="slick-prev slick-arrow" style="display: block;"><i className="icofont icofont-long-arrow-left"></i></button>


        };
        return (
            <div className="product-section section mb-40">
                <div className="container">
                    <div className="row">
                        {/* Section Title Start */}
                        <div className="col-12 mb-40">
                            <div className="section-title-one" data-title="BEST DEALS"><h1>BEST DEALS</h1></div>
                        </div>{/* Section Title End */}
                        {/* Product Tab Filter Start*/}
                        <div className="col-12">
                            <div className="offer-product-wrap row">
                                {/* Product Tab Filter Start */}
                                <div className="col mb-30">
                                    <div className="product-tab-filter">
                                        {/* Tab Filter Toggle */}
                                        <button className="product-tab-filter-toggle">showing: <span /><i className="icofont icofont-simple-down" /></button>
                                        {/* Product Tab List */}
                                        <ul id="featureItem" className="nav product-tab-list">
                                            <li onClick={() => { this.activeCategory(0) }}>
                                                <a className={currentCategories === 0 ? "active" : ""} data-toggle="tab" >all</a></li>
                                            {categories.map((item) => {
                                                return (
                                                    <li onClick={() => { this.activeCategory(item.code) }} key={item.id}><a className={currentCategories === item.code ? "active" : ""} data-toggle="tab">{item.name}</a></li>
                                                )
                                            })}


                                        </ul>
                                    </div>
                                </div>{/* Product Tab Filter End */}
                                {/* Offer Time Wrap Start */}
                                <div className="col mb-30">
                                    <div className="offer-time-wrap" style={{ backgroundImage: 'url(/images/bg/offer-products.jpg)' }}>
                                        <h1><span>UP TO</span> 55%</h1>
                                        <h3>QUALITY &amp; EXCLUSIVE <span>PRODUCTS</span></h3>
                                        <h4><span>LIMITED TIME OFFER</span> GET YOUR PRODUCT</h4>
                                        <CountDown/>
                                    </div>
                                </div>{/* Offer Time Wrap End */}
                                {/* Product Tab Content Start */}
                                <div className="col-12 mb-30">
                                    <div className="tab-content">
                                        {/* Tab Pane Start */}
                                        <div className={"tab-pane fade " + (currentCategories === 0 ? "active show" : "")}>
                                            {/* Product Slider Wrap Start */}
                                            <div className="product-slider-wrap product-slider-arrow-two">
                                                {/* Product Slider Start */}
                                                <Slider key='bestDeal' className="product-slider product-slider-3" {...settings}>
                                                    {allProducts.map((item) => {
                                                        const categoryProduct = categories && categories.find(cate => cate.code === item.categoryCode);
                                                        const existCart = cart.find(p => p.id === item.id);
                                                        const existWishList = wishList.find(p => p.id === item.id);
                                                        
                                                        return (
                                                            <div key={item.id} className="col pb-20 pt-10">
                                                                {/* Product Start */}
                                                                <div className="ee-product">
                                                                    {/* Image */}
                                                                    <div className="image">
                                                                        <span className="label sale">sale</span>
                                                                        <Link className="img" to={"/details/" + item.code}>
                                                                            <img src={item.image && item.image[0]} alt={item.image && item.image[0]} />
                                                                        </Link>
                                                                        <div className="wishlist-compare">
                                                                            <a data-tooltip="Compare"><i className="ti-control-shuffle" /></a>
                                                                            <a className={existWishList ? "added" : ""} data-tooltip="Wishlist" onClick={() => { existWishList ? removeWishList(item.id) : addWishList(item) }}>
                                                                                <i className="ti-heart"/>
                                                                            </a> 
                                                                        </div>

                                                                        <a className={existCart ? "add-to-cart added" : "add-to-cart"} onClick={() => { existCart ? removeCart(item.id) : addCart(item) }}>
                                                                            <i className={existCart ? "ti-check" : "ti-shopping-cart"} />
                                                                            <span>{existCart ? "ADDED" : "ADD TO CART"}</span>
                                                                        </a>
                                                                    </div>
                                                                    {/* Content */}
                                                                    <div className="content">
                                                                        {/* Category & Title */}
                                                                        <div className="category-title">
                                                                            <a className="cat">{categoryProduct && categoryProduct.name}</a>
                                                                            <h5 className="title"><a >{item.name}</a></h5>
                                                                        </div>
                                                                        {/* Price & Ratting */}
                                                                        <div className="price-ratting">
                                                                            <h5 className="price"><span className="old">{item.originalPrice}</span>{item.price}</h5>
                                                                            <div className="ratting">
                                                                                {new Array(5).fill(0).map((star, index) => {
                                                                                    return <i key={index} className={"fa fa-star" + (index < item.rating ? '' : '-o')} />
                                                                                })}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>{/* Product End */}
                                                            </div>

                                                        )
                                                    })}
                                                </Slider>{/* Product Slider End */}
                                            </div>{/* Product Slider Wrap End */}
                                        </div>{/* Tab Pane End */}
                                        {/* Tab Pane Start */}
                                        {categories.map((category) => {
                                            return (
                                                <div key={category.id} className={"tab-pane fade " + (currentCategories === category.code ? "active show" : "")}>
                                                    {/* Product Slider Wrap Start */}
                                                    <div className="product-slider-wrap product-slider-arrow-two">
                                                        {/* Product Slider Start */}
                                                        {category.products ?
                                                            <Slider key={category.id} className="product-slider product-slider-3" {...settings}>
                                                                {category.products.map((item) => {
                                                                    const categoryProduct = categories && categories.find(cate => cate.code === item.categoryCode);
                                                                    const existCart = cart.find(p => p.id === item.id);

                                                                    return (
                                                                        <div key={item.id} className="col pb-20 pt-10">
                                                                            {/* Product Start */}
                                                                            <div className="ee-product">
                                                                                {/* Image */}
                                                                                <div className="image">
                                                                                    <Link className="img" to={"/details/" + item.code}>
                                                                                        <img src={item.image && item.image[0]} alt={item.image[0]} />
                                                                                    </Link>

                                                                                    <div className="wishlist-compare">
                                                                                        <a data-tooltip="Compare"><i className="ti-control-shuffle" /></a>
                                                                                        <a data-tooltip="Wishlist">
                                                                                            <i className="ti-heart" />
                                                                                        </a>
                                                                                    </div>
                                                                                    <a className={existCart ? "add-to-cart added" : "add-to-cart"} onClick={() => { existCart ? removeCart(item.id) : addCart(item) }}>
                                                                                        <i className={existCart ? "ti-check" : "ti-shopping-cart"} />
                                                                                        <span>{existCart ? "ADDED" : "ADD TO CART"}</span>
                                                                                    </a>
                                                                                </div>
                                                                                {/* Content */}
                                                                                <div className="content">
                                                                                    {/* Category & Title */}
                                                                                    <div className="category-title">
                                                                                        <a className="cat">{categoryProduct && categoryProduct.name}</a>
                                                                                        <h5 className="title">
                                                                                            <Link to={"/details/" + item.code}>
                                                                                                {item.name}
                                                                                            </Link>

                                                                                        </h5>
                                                                                    </div>
                                                                                    {/* Price & Ratting */}
                                                                                    <div className="price-ratting">
                                                                                        <h5 className="price"><span className="old">{item.originalPrice}</span>{item.price}</h5>
                                                                                        <div className="ratting">
                                                                                            {new Array(5).fill(0).map((star, index) => {
                                                                                                return <i key={index} className={"fa fa-star" + (index < item.rating ? '' : '-o')} />
                                                                                            })}
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>{/* Product End */}
                                                                        </div>
                                                                    )
                                                                })}
                                                            </Slider>
                                                            : ''}</div>
                                                </div>

                                            )
                                        })}
                                    </div>
                                </div>{/* Product Tab Content End */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        allProducts: state.Ecomercial.productsBestDealAll,
        categories: state.Ecomercial.bestdealCategories,
        cart: state.Ecomercial.cart,
        wishList: state.Ecomercial.wishList
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchProducts: (code) => {
            dispatch(fetchBestDealProductsRequest(code));
        },
        addCart: (product) => {
            dispatch(addCartRequest(product));
        },
        removeCart: (id) => {
            dispatch(removeCartRequest(id));
        },
        addWishList: (product) => {
            dispatch(addWishListRequest(product));
        },
        removeWishList: (id) => {
            dispatch(wishListRemoveRequest(id));
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BestDeals);
