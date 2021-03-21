import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProductDetailsRequest, removeCartRequest, addCartRequest } from "../redux/actions";
import Slider from 'react-slick';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Skeleton, Space, Divider, Form, Radio } from 'antd';

class SingleProductPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {},
            relatedProduct: [],
            addToCart: true,
            qty: 1,
            tab: 0

        }
    }
    componentDidMount() {
        const code = this.props.match.params.code;
        const callback = (data) => {
            if (data) {
                const product = data;
                const relatedProduct = data.relatedProduct;

                this.setState({
                    product,
                    relatedProduct
                })
            }
        }
        this.props.fetchProductDetails(code, callback);

    }

    componentDidUpdate(preProps, preState) {

        if (preProps.match.params.code !== this.props.match.params.code) {
            const code = this.props.match.params.code;
            const callback = (data) => {
                if (data) {
                    const product = data;
                    const relatedProduct = data.relatedProduct;

                    this.setState({
                        product,
                        relatedProduct
                    })
                }
            }
            this.props.fetchProductDetails(code, callback);
        }

    }


    onHandleChange = (e) => {
        e.preventDefault();
        this.setState({
            qty: e.target.value
        })

    }
    onMinus = () => {
        if (this.state.qty - 1 > 0) {
            this.setState({
                qty: this.state.qty - 1
            })
        }
    }

    onPlus = () => {
        this.setState({
            qty: this.state.qty + 1
        })
    }

    render() {
        const { product, relatedProduct, qty } = this.state;

        const { categories, cart, addCart, removeCart } = this.props;
        console.log(product);
        let technicalInfo;
        try {
            technicalInfo = JSON.parse(product.technicalInfo);
        } catch {
            technicalInfo = {};
        }
        console.log(technicalInfo);
        const existCart = cart.find(p => p.id === product.id);

        const categoryProduct = categories && categories.find(cate => cate.code === product.categoryCode);
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            rows: 1,
            slidesToShow: Math.min(relatedProduct.length, 4),
            slidesToScroll: 1,
            nextArrow: <button type="button" className="slick-next slick-arrow" style="display: block;"><i className="icofont icofont-long-arrow-right"></i></button>,
            prevArrow: <button type="button" className="slick-prev slick-arrow" style="display: block;"><i className="icofont icofont-long-arrow-left"></i></button>

        };
        const settings1 = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            asNavFor: this.slider2,
        };
        const settings2 = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            vertical: true,
            asNavFor: this.slider1,
            swipeToSlide: true,
            focusOnSelect: true

        };

        return (
            <div>
                {/* Page Banner Section Start */}
                <div className="page-banner-section section">
                    <div className="page-banner-wrap row row-0 d-flex align-items-center ">
                        {/* Page Banner */}
                        <div className="col-lg-4 col-12 order-lg-2 d-flex align-items-center justify-content-center">
                            <div className="page-banner">
                                <h1>Product Details</h1>
                                <p>similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita</p>
                                <div className="breadcrumb">
                                    <ul>
                                        <li><a >HOME</a></li>
                                        <li><a >Product Details</a></li>
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
                {/* Single Product Section Start */}
                <div className="product-section section mt-90 mb-90">
                    <div className="container">
                        <div className="row mb-90">
                            <div className="col-lg-6 col-12 mb-50">
                                {/* Image */}
                                <div className="single-product-image thumb-right">
                                    <div className="tab-content">
                                        <div id="single-image-1" className="tab-pane fade show active big-image-slider">
                                            {product.id ?
                                                <Slider ref={s => this.slider1 = s} key="productImage" className="hero-slider hero-slider-one" {...settings1} >
                                                    {product.image.map((item, index) => {
                                                        return (
                                                            <div className="align-items-center justify-content-between" key={index}>
                                                                <div className="big-image">
                                                                    <img src={item} alt={item} />
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </Slider>

                                                : ""}

                                        </div>
                                    </div>
                                    {product.id ?
                                        <div className="thumb-image-slider nav" data-vertical="true">
                                            <Slider ref={s => this.slider2 = s} key='imageThumb'{...settings2} >
                                                {product.image.map((item, index) => {
                                                    return (
                                                        <div key={index} className="thumb-image">
                                                            <img key={index} src={item} alt={item} />
                                                        </div>
                                                    )
                                                })}
                                            </Slider>
                                        </div>
                                        : ""
                                    }
                                </div>
                            </div>
                            <div className="col-lg-6 col-12 mb-50">
                                {/* Content */}
                                <div className="single-product-content">
                                    {/* Category & Title */}
                                    <div className="head-content">
                                        <div className="category-title">
                                            <a className="cat">{categoryProduct && categoryProduct.name}</a>
                                            <h5 className="title">{product.name}</h5>
                                        </div>
                                        <h5 className="price">${product.price}</h5>
                                    </div>
                                    <div className="single-product-description">
                                        <div className="ratting">
                                            {new Array(5).fill(0).map((star, index) => {
                                                return <i key={index} className={"fa fa-star" + (index < product.rating ? '' : '-o')} />
                                            })}
                                        </div>
                                        <div className="desc">
                                            <p>enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia res eos qui ratione voluptatem sequi Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora inform </p>
                                        </div>
                                        <span className="availability">Availability: <span>{product.status}</span></span>
                                        <div className="quantity-colors">
                                            <div className="quantity">
                                                <h5>Quantity</h5>
                                                <div className="pro-qty">
                                                    <span onClick={() => { this.onMinus() }} className="dec qtybtn">-</span>
                                                    <input
                                                        type="text"
                                                        name="qty"
                                                        onChange={this.onHandleChange}
                                                        value={qty}
                                                    />
                                                    <span onClick={() => { this.onPlus() }} className="inc qtybtn">+</span>
                                                </div>
                                            </div>
                                            <div className="colors">
                                                <h5>Color</h5>

                                                <div className="nice-select">
                                                    <span className="current">red</span>
                                                    <ul className="list">
                                                        <li data-value="red" className="option selected">red</li>
                                                        <li data-value="black" className="option">black</li>
                                                        <li data-value="yellow" className="option">yellow</li>
                                                        <li data-value="grey" className="option">grey</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="actions">

                                            <a className={existCart ? "add-to-cart added" : "add-to-cart"} onClick={() => { existCart ? removeCart(product.id) : addCart({ ...product, qty }) }}>
                                                <i className={existCart ? "ti-check" : "ti-shopping-cart"} />
                                                <span>{existCart ? "ADDED" : "ADD TO CART"}</span>
                                            </a>
                                            <div className="wishlist-compare">
                                                <a data-tooltip="Compare"><i className="ti-control-shuffle" /></a>
                                                <a data-tooltip="Wishlist"><i className="ti-heart" /></a>
                                            </div>
                                        </div>
                                        <div className="tags">
                                            <h5>Tags:</h5>
                                            <a >Electronic</a>
                                            <a >Smartphone</a>
                                            <a >Phone</a>
                                            <a >Charger</a>
                                            <a >Powerbank</a>
                                        </div>
                                        <div className="share">
                                            <h5>Share: </h5>
                                            <a ><i className="fa fa-facebook" /></a>
                                            <a ><i className="fa fa-twitter" /></a>
                                            <a ><i className="fa fa-instagram" /></a>
                                            <a ><i className="fa fa-google-plus" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-10 col-12 ml-auto mr-auto">
                                <ul className="single-product-tab-list nav">
                                    <li>
                                        <a href="#" onClick={(e) => { e.preventDefault(); this.setState({ tab: 0 }) }} className={this.state.tab === 0 ? "active" : ""} >description</a>
                                    </li>
                                    <li>
                                        <a href="#" onClick={(e) => { e.preventDefault(); this.setState({ tab: 1 }) }} className={this.state.tab === 1 ? "active" : ""}>specifications</a>
                                    </li>
                                    <li>
                                        <a href="#" onClick={(e) => { e.preventDefault(); this.setState({ tab: 2 }) }} className={this.state.tab === 2 ? "active" : ""}>reviews</a>
                                    </li>
                                </ul>
                                <div className="single-product-tab-content tab-content">
                                    <div className={this.state.tab === 0 ? "tab-pane fade show active" : "tab-pane fade"} id="product-description">
                                        <div className="row">
                                            <div className="single-product-description-content col-lg-8 col-12">
                                                <h4>Introducing Flex 3310</h4>
                                                <p>enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia res eos qui ratione voluptatem sequi Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora in</p>
                                                <h4>Stylish Design</h4>
                                                <p>enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia res eos qui ratione voluptatem sequi Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli</p>
                                                <h4>Digital Camera, FM Radio &amp; many more...</h4>
                                                <p>enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia res eos qui ratione voluptatem sequi Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli</p>
                                            </div>
                                            <div className="single-product-description-image col-lg-4 col-12">
                                                <img src="/images/single-product/description.png" alt="description" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={this.state.tab === 1 ? "tab-pane fade show active" : "tab-pane fade"} id="product-specifications">
                                        <div className="single-product-specification">
                                            <ul>
                                                {Object.values(technicalInfo).map((item, index) => {// lay mang cac fields cua object
                                                    return (
                                                        <li key={index}>{item}</li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={this.state.tab === 2 ? "tab-pane fade show active" : "tab-pane fade"} id="product-reviews">
                                        <div className="product-ratting-wrap">
                                            <div className="pro-avg-ratting">
                                                <h4>4.5 <span>(Overall)</span></h4>
                                                <span>Based on 9 Comments</span>
                                            </div>
                                            <div className="ratting-list">
                                                <div className="sin-list float-left">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <span>(5)</span>
                                                </div>
                                                <div className="sin-list float-left">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star-o" />
                                                    <span>(3)</span>
                                                </div>
                                                <div className="sin-list float-left">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star-o" />
                                                    <i className="fa fa-star-o" />
                                                    <span>(1)</span>
                                                </div>
                                                <div className="sin-list float-left">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star-o" />
                                                    <i className="fa fa-star-o" />
                                                    <i className="fa fa-star-o" />
                                                    <span>(0)</span>
                                                </div>
                                                <div className="sin-list float-left">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star-o" />
                                                    <i className="fa fa-star-o" />
                                                    <i className="fa fa-star-o" />
                                                    <i className="fa fa-star-o" />
                                                    <span>(0)</span>
                                                </div>
                                            </div>
                                            <div className="rattings-wrapper">
                                                <div className="sin-rattings">
                                                    <div className="ratting-author">
                                                        <h3>Cristopher Lee</h3>
                                                        <div className="ratting-star">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <span>(5)</span>
                                                        </div>
                                                    </div>
                                                    <p>enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia res eos qui ratione voluptatem sequi Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli</p>
                                                </div>
                                                <div className="sin-rattings">
                                                    <div className="ratting-author">
                                                        <h3>Nirob Khan</h3>
                                                        <div className="ratting-star">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <span>(5)</span>
                                                        </div>
                                                    </div>
                                                    <p>enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia res eos qui ratione voluptatem sequi Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli</p>
                                                </div>
                                                <div className="sin-rattings">
                                                    <div className="ratting-author">
                                                        <h3>MD.ZENAUL ISLAM</h3>
                                                        <div className="ratting-star">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <span>(5)</span>
                                                        </div>
                                                    </div>
                                                    <p>enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia res eos qui ratione voluptatem sequi Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli</p>
                                                </div>
                                            </div>
                                            <div className="ratting-form-wrapper fix">
                                                <h3>Add your Comments</h3>
                                                <form action="#">
                                                    <div className="ratting-form row">
                                                        <div className="col-12 mb-15">
                                                            <h5>Rating:</h5>
                                                            <div className="ratting-star fix">
                                                                <i className="fa fa-star-o" />
                                                                <i className="fa fa-star-o" />
                                                                <i className="fa fa-star-o" />
                                                                <i className="fa fa-star-o" />
                                                                <i className="fa fa-star-o" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-12 mb-15">
                                                            <label htmlFor="name">Name:</label>
                                                            <input id="name" placeholder="Name" type="text" />
                                                        </div>
                                                        <div className="col-md-6 col-12 mb-15">
                                                            <label htmlFor="email">Email:</label>
                                                            <input id="email" placeholder="Email" type="text" />
                                                        </div>
                                                        <div className="col-12 mb-15">
                                                            <label htmlFor="your-review">Your Review:</label>
                                                            <textarea name="review" id="your-review" placeholder="Write a review" defaultValue={""} />
                                                        </div>
                                                        <div className="col-12">
                                                            <input defaultValue="add review" type="submit" />
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>{/* Single Product Section End */}
                {/* Related Product Section Start */}
                <div className="product-section section mb-70">
                    <div className="container">
                        <div className="row">
                            {/* Section Title Start */}
                            <div className="col-12 mb-40">
                                <div className="section-title-one" data-title="RELATED PRODUCT"><h1>RELATED PRODUCT</h1></div>
                            </div>{/* Section Title End */}
                            {/* Product Tab Content Start */}
                            <div className="col-12">
                                {/* Product Slider Wrap Start */}
                                <div className="product-slider-wrap product-slider-arrow-one">
                                    {/* Product Slider Start */}
                                    {relatedProduct.length > 0 ?
                                        <Slider key="relatedProduct" className="product-slider product-slider-4" {...settings}>
                                            {relatedProduct.map((item) => {
                                                const existCartRelated = cart.find(p => p.id === item.id);
                                                const categoryProduct = categories && categories.find(cate => cate.code === item.categoryCode);
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
                                                                    <a data-tooltip="Compare"><i className="ti-control-shuffle" /></a>
                                                                    <a data-tooltip="Wishlist"><i className="ti-heart" /></a>
                                                                </div>
                                                                <a className={existCartRelated ? "add-to-cart added" : "add-to-cart"} onClick={() => { existCartRelated ? removeCart(item.id) : addCart(item) }}>
                                                                    <i className={existCartRelated ? "ti-check" : "ti-shopping-cart"} />
                                                                    <span>{existCartRelated ? "ADDED" : "ADD TO CART"}</span>
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
                                        : ""
                                    }
                                </div>{/* Product Slider Wrap End */}
                            </div>{/* Product Tab Content End */}
                        </div>
                    </div>
                </div>{/* Related Product Section End */}
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.Ecomercial.categories,
        cart: state.Ecomercial.cart

    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchProductDetails: (code, callback) => {
            dispatch(fetchProductDetailsRequest(code, callback));
        },
        addCart: (product) => {
            dispatch(addCartRequest(product));
        },
        removeCart: (id) => {
            dispatch(removeCartRequest(id));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SingleProductPage);
