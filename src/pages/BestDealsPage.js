import React, { Component } from 'react'
import Slider from 'react-slick';
import { connect } from 'react-redux';
import { addCartRequest, addCompareRequest, addWishListRequest, compareRemoveRequest, fetchBestDealProductsRequest, fetchTimeEndRequest, removeCartRequest, wishListRemoveRequest } from '../redux/actions';
import { Link } from 'react-router-dom';
import CountDown from './../components/products/CountDown';
import ReactLoading from 'react-loading';
import BrandLogo from '../components/ads/BrandLogo';

class BestDealsPage extends Component {
    state = {
        currentCategories: 0,
        addToCart: true,
        loading: true

    }
    componentDidMount() {
        //call all categories [{id:1, name: 'Laptop'}];
        //  goi list product all ve: all ProductFeature;
        //=> kich laptop => sp cuua laptop  => luu vao cateogries [{id: 1, name: 'Laptop', prodcts: [...]}]

        this.props.fetchProducts();
        this.timeOut = setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 800)
        console.log(this.timeOut);


    }

    componentWillUnmount() {
        clearTimeout(this.timeOut);
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
            slidesToShow: 3,
            slidesToScroll: 1,
            nextArrow: <SlickArrowLeft />,
            prevArrow: <SlickArrowRight />


        };
        const settings2 = {
            dots: true,

            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            nextArrow: <SlickArrowLeft />,
            prevArrow: <SlickArrowRight />

        };
        const { allProducts, categories, cart, addCart, removeCart, addWishList, wishList, removeWishList, addCompare, removeCompare, compare, time } = this.props;
        const { currentCategories, addToCart } = this.state;
        console.log(allProducts);

        if (this.state.loading) {
            return (
                <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                    <ReactLoading type={"spinningBubbles"} color={'#F5D730'} height={'10%'} width={'10%'} />
                </div>

            )
        }
        return (
            <div>
                {/* Page Banner Section Start */}
                <div className="page-banner-section section">
                    <div className="page-banner-wrap row row-0 d-flex align-items-center ">
                        {/* Page Banner */}
                        <div className="col-lg-4 col-12 order-lg-2 d-flex align-items-center justify-content-center">
                            <div className="page-banner">
                                <h1>Best Deals</h1>
                                {/* <p>similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita</p> */}
                                <div className="breadcrumb">
                                    <ul>
                                        <li><a>HOME</a></li>
                                        <li><a>Shop</a></li>
                                        <li><a>Best Deals</a></li>
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
                {/* Best Deals Product Section Start */}
                <div className="product-section section mt-90 mb-40">
                    <div className="container">
                        <div className="row">
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
                                            <h1><span>UP TO</span> {time.discount} %</h1>
                                            <h3>QUALITY &amp; EXCLUSIVE <span>PRODUCTS</span></h3>
                                            <h4><span>LIMITED TIME OFFER</span> GET YOUR PRODUCT</h4>
                                            <CountDown />
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
                                                            const existCompare = compare.find(p => p.id === item.id);

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
                                                                                <h5 className="title"><a >{item.name}</a></h5>
                                                                            </div>
                                                                            {/* Price & Ratting */}
                                                                            <div className="price-ratting">
                                                                                <h5 className="price"><span className="old">{item.originalPrice}</span>{item.price}</h5>
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
                                                                        const existCompare = compare.find(p => p.id === item.id);
                                                                        const existWishList = wishList.find(p => p.id === item.id);
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
                                                                                            <h5 className="price"><span className="old">{item.originalPrice}</span>{item.price}</h5>
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
                                                                </Slider>
                                                                : ''}</div>
                                                    </div>

                                                )
                                            })}
                                        </div>
                                    </div>{/* Product Tab Content End */}

                                </div>
                            </div>{/* Product Tab Filter End*/}
                        </div>
                    </div>
                </div>{/* Best Deals Product Section End */}
                {/* Banner Section Start */}
                {/* <div className="banner-section section mb-60">
                    <div className="container">
                        <div className="row row-10">
                           
                            <div className="col-md-3 mb-30">
                                <div className="banner"><a href="#"><img src="/images/banner/banner-21.jpg" alt="Banner" /></a></div>
                            </div>
                            
                            <div className="col-md-9">
                                <div className="row row-10">
                                    <div className="col-md-6 col-12 mb-30"><div className="banner"><a href="#"><img src="/images/banner/banner-22.jpg" alt="Banner" /></a></div></div>
                                    <div className="col-md-6 col-12 mb-30"><div className="banner"><a href="#"><img src="/images/banner/banner-23.jpg" alt="Banner" /></a></div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <BrandLogo />
                {/* Best Deals Product Section Start */}
                <div className="product-section section mb-70">
                    <div className="container">
                        <div className="row">
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
                            {/* Product Tab Filter Start*/}
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
                                                                        <h5 className="price">${item.price.toLocaleString()}</h5>
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
                                        console.log(categ.products);
                                        return (
                                            <div key={index} className={"tab-pane fade " + (currentCategories === categ.code ? "active show" : "")}>
                                                {/* Product Slider Wrap Start */}
                                                <div className="product-slider-wrap product-slider-arrow-one">
                                                    {/* Product Slider Start */}
                                                    <Slider key={categ.id} className="product-slider product-slider-4" {...settings2}>

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
                                                                                <h5 className="price">${item.price.toLocaleString()}</h5>
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
                </div>{/* Best Deals Product Section End */}
                {/* Banner Section Start */}
                <div className="banner-section section mb-90">
                    <div className="container">
                        <div className="row">
                            {/* Banner */}
                            <div className="col-12">
                                <div className="banner"><a href="#"><img src="/images/banner/bigbanner.png" alt="Banner" /></a></div>
                            </div>
                        </div>
                    </div>
                </div>{/* Banner Section End */}</div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        allProducts: state.Ecomercial.productsBestDealAll,
        categories: state.Ecomercial.bestdealCategories,
        cart: state.Ecomercial.cart,
        wishList: state.Ecomercial.wishList,
        compare: state.Ecomercial.compare,
        time: state.Ecomercial.timeEnd
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
            // dispatch(removeCartRequest(id));
            dispatch((dispatch) => { dispatch({ type: 'CART_REMOVE', id: id }) });
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
export default connect(mapStateToProps, mapDispatchToProps)(BestDealsPage);
