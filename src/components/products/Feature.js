import React, { Component } from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import { addCartRequest, fetchFeatureProductRequest, removeCartRequest, addWishListRequest, wishListRemoveRequest, addCompareRequest, compareRemoveRequest } from '../../redux/actions/index';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
class Feature extends Component {

    state = {
        currentCategories: 0,
        addToCart: true,
    }
    componentDidMount() {
        //call all categories [{id:1, name: 'Laptop'}];
        //  goi list product all ve: all ProductFeature;
        //=> kich laptop => sp cuua laptop  => luu vao cateogries [{id: 1, name: 'Laptop', prodcts: [...]}]
        this.props.fetchFeatureProducts();

    }

    activeCategory = (currentCategories) => {
        //goji sp categories nay ve.
        const { categories } = this.props;
        // console.log(categories);
        const index = categories.findIndex(c => c.code === currentCategories);

        if (index != -1 && !categories[index].products) {
            //goi api
            this.props.fetchFeatureProducts(currentCategories);
        }
        else {
            ///k can goi
        }
        this.setState({
            currentCategories
        });

    }
    render() {
        const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
            <button
                {...props}
                className={
                    "slick-prev slick-arrow" +
                    (currentSlide === 0 ? " slick-disabled" : "")
                }
                aria-hidden="true"
                aria-disabled={currentSlide === 0 ? true : false}
                type="button"
            >
                <i className="icofont icofont-long-arrow-left" />
            </button>
        );
        const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
            <button
                {...props}
                className={
                    "slick-next slick-arrow" +
                    (currentSlide === slideCount - 1 ? " slick-disabled" : "")
                }
                aria-hidden="true"
                aria-disabled={currentSlide === slideCount - 1 ? true : false}
                type="button"
            >
                <i className="icofont icofont-long-arrow-right"></i>
            </button>
        );
        const settings = {
            dots: true,

            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            nextArrow: <SlickArrowLeft />,
            prevArrow: <SlickArrowRight />

        };
        const { currentCategories, addToCart } = this.state;
        const { allProducts, categories, cart, addCart, removeCart, addWishList, removeWishList, wishList, compare, addCompare, removeCompare } = this.props;
        return (

            <div className="product-section section mb-70">
                <div className="container">
                    <div className="row">
                        {/* Section Title Start */}
                        <div className="col-12 mb-40">
                            <div className="section-title-one" data-title="FEATURED ITEMS"><h1>FEATURED ITEMS</h1></div>
                        </div>{/* Section Title End */}
                        {/* Product Tab Filter Start */}
                        <div className="col-12 mb-30">
                            <div className="product-tab-filter">
                                {/* Tab Filter Toggle */}
                                <button className="product-tab-filter-toggle">showing: <span /><i className="icofont icofont-simple-down" /></button>
                                {/* Product Tab List */}
                                <ul id="featureItem" className="nav product-tab-list">
                                    <li onClick={() => { this.activeCategory(0) }}>
                                        <a className={currentCategories === 0 ? "active" : ""} data-toggle="tab">all</a></li>
                                    {categories.map((item) => {
                                        return (
                                            <li onClick={() => { this.activeCategory(item.code) }} key={item.id}><a className={currentCategories === item.code ? "active" : ""} data-toggle="tab">{item.name}</a></li>
                                        )
                                    })}

                                </ul>
                            </div>
                        </div>{/* Product Tab Filter End */}
                        {/* Product Tab Content Start */}
                        <div className="col-12">
                            <div className="tab-content">
                                {/* Tab Pane Start */}
                                <div className={"tab-pane fade " + (currentCategories === 0 ? "active show" : "")}>
                                    {/* Product Slider Wrap Start */}
                                    <div className="product-slider-wrap product-slider-arrow-one">
                                        {/* Product Slider Start */}
                                        <Slider className="product-slider product-slider-4" {...settings}>
                                            {allProducts.map((item) => {
                                                const categoryProduct = categories && categories.find(cate => cate.code === item.categoryCode);
                                                const existCart = cart.find(p => p.id === item.id);
                                                const existWishList = wishList.find(p => p.id === item.id);
                                                const existCompare = compare.find(p => p.id === item.id)
                                                return (
                                                    <div key={item.id} className="col pb-20 pt-10">
                                                        {/* Product Start */}
                                                        <div className="ee-product">
                                                            {/* Image */}
                                                            <div className="image">
                                                                <Link className="img" to={"/details/" + item.code}>
                                                                    <img src={item.image[0]} alt="Product Image" />
                                                                </Link>

                                                                <div className="wishlist-compare">
                                                                    <a className={existCompare ? "added" : ""} data-tooltip="Compare" onClick={() => { existCompare ? removeCompare(item.id) : addCompare(item) }}>
                                                                        <i className="ti-control-shuffle" />
                                                                    </a>

                                                                    <a className={existWishList ? "added" : ""} data-tooltip="Wishlist" onClick={() => { existWishList ? removeWishList(item.id) : addWishList(item) }}>
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
                                                                    <h5 className="price">${item.price}</h5>
                                                                    <div className="ratting">
                                                                        {new Array(5).fill(0).map((star, index) => {
                                                                            return <i key={index} className={"fat fa-star" + (index < item.rating ? '' : '-o')} />
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
                                {categories.map((categ, index) => {
                                    return (
                                        <div key={index} className={"tab-pane fade " + (currentCategories === categ.code ? "active show" : "")}>
                                            {/* Product Slider Wrap Start */}
                                            <div className="product-slider-wrap product-slider-arrow-one">
                                                {/* Product Slider Start */}
                                                <Slider key={categ.id} className="product-slider product-slider-4" {...settings}>
                                                    {categ.products && categ.products.map((item) => {
                                                        const categoryProduct = categories && categories.find(cate => cate.code === item.categoryCode);
                                                        const existCart = cart.find(p => p.id === item.id);
                                                        const existWishList = wishList.find(p => p.id === item.id);
                                                        const existCompare = compare.find(p => p.id === item.id)
                                                        return (
                                                            <div key={item.id} className="col pb-20 pt-10">
                                                                {/* Product Start */}
                                                                <div className="ee-product">
                                                                    {/* Image */}
                                                                    <div className="image">
                                                                        <Link className="img" to={"/details/" + item.code}>
                                                                            <img src={item.image[0]} alt="Product Image" />
                                                                        </Link>

                                                                        <div className="wishlist-compare">
                                                                            <a className={existCompare ? "added" : ""} data-tooltip="Compare" onClick={() => { existCompare ? removeCompare(item.id) : addCompare(item) }}>
                                                                                <i className="ti-control-shuffle" />
                                                                            </a>
                                                                            <a className={existWishList ? "added" : ""} data-tooltip="Wishlist" onClick={() => { existWishList ? removeWishList(item.id) : addWishList(item) }}>
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
                                                                            <h5 className="price">${item.price}</h5>
                                                                            <div className="ratting">
                                                                                {new Array(5).fill(0).map((star, index) => {
                                                                                    return <i key={index} className={"fat fa-star" + (index < item.rating ? '' : '-o')} />
                                                                                })}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>{/* Product End */}
                                                            </div>
                                                        )
                                                    })}
                                                </Slider>{/* Product Slider End */}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>{/* Product Tab Content End */}
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        allProducts: state.Ecomercial.productFeatureAlll,
        categories: state.Ecomercial.featureCategories,
        cart: state.Ecomercial.cart,
        wishList: state.Ecomercial.wishList,
        compare: state.Ecomercial.compare
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchFeatureProducts: (code) => {
            dispatch(fetchFeatureProductRequest(code));
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
        },
        addCompare: (product) => {
            dispatch(addCompareRequest(product));
        },
        removeCompare: (id) => {
            dispatch(compareRemoveRequest(id));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Feature);
