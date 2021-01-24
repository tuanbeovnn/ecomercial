import React, { Component } from 'react';
import Slider from 'react-slick';

class BestDeals extends Component {
    state = {
        allProducts: [
            {
                id: 1,
                name: "Abfsdfsdfcd",
                price: 1000,
                img: "/images/product/product-1.png"
            },
            {
                id: 2,
                name: "dadasd",
                price: 1000,
                img: "/images/product/product-1.png"
            },
            {
                id: 3,
                name: "2",
                price: 1000,
                img: "/images/product/product-1.png"
            },
            {
                id: 4,
                name: "3333",
                price: 1000,
                img: "/images/product/product-1.png"
            },
            {
                id: 5,
                name: "55555",
                price: 1000,
                img: "/images/product/product-1.png"
            },
        ],
        currentCategories: 0,
        categories: [
            {
                id: 1,
                name: "LapTop",
                products: [
                    {
                        id: 1,
                        name: "Abcd",
                        price: 1000,
                        img: "/images/product/product-1.png"
                    },
                    {
                        id: 2,
                        name: "Abfsdfsdfcd",
                        price: 1000,
                        img: "/images/product/product-1.png"
                    },
                    {
                        id: 3,
                        name: "4324dsfsdfsdfsdf",
                        price: 1000,
                        img: "/images/product/product-1.png"
                    },
                    {
                        id: 4,
                        name: "2",
                        price: 1000,
                        img: "/images/product/product-1.png"
                    },
                    {
                        id: 5,
                        name: "3333",
                        price: 1000,
                        img: "/images/product/product-1.png"
                    },
                    {
                        id: 6,
                        name: "55555",
                        price: 1000,
                        img: "/images/product/product-1.png"
                    }
                ]
            },
            {
                id: 2,
                name: "Camera",
                products: [
                    {
                        id: 1,
                        name: "Abcd",
                        price: 1000,
                        img: "/images/product/product-1.png"
                    },
                    {
                        id: 2,
                        name: "2",
                        price: 1000,
                        img: "/images/product/product-1.png"
                    },
                    {
                        id: 3,
                        name: "3333",
                        price: 1000,
                        img: "/images/product/product-1.png"
                    },
                    {
                        id: 4,
                        name: "55555",
                        price: 1000,
                        img: "/images/product/product-1.png"
                    }
                ]
            },
            {
                id: 3,
                name: "Tv",
                products: [
                    {
                        id: 1,
                        name: "Abcd",
                        price: 1000,
                        img: "/images/product/product-1.png"
                    }
                ]
            },
            {
                id: 4,
                name: "Printer",
                products: [
                    {
                        id: 1,
                        name: "Abcd",
                        price: 1000,
                        img: "/images/product/product-1.png"
                    }
                ]
            }

        ]
    }
    activeCategory = (currentCategories) => {
        this.setState({
            currentCategories
        })
    }
    render() {
        const settings = {
            // responsive: "",
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            nextArrow: <button type="button" className="slick-next slick-arrow" style="display: block;"><i className="icofont icofont-long-arrow-right"></i></button>,
            prevArrow: <button type="button" className="slick-prev slick-arrow" style="display: block;"><i className="icofont icofont-long-arrow-left"></i></button>

        };
        const { currentCategories, categories, allProducts } = this.state;
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
                                            <li onClick={() => { this.activeCategory(0) }}><a className="active" data-toggle="tab" href="#featureItem">all</a></li>
                                            {categories.map((item) => {
                                                return (
                                                    <li onClick={() => { this.activeCategory(item.id) }} key={item.id}><a data-toggle="tab" href="#featureItem">{item.name}</a></li>
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
                                        <div className="countdown" data-countdown="2019/06/20" />
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
                                                <Slider className="product-slider product-slider-3" {...settings}>
                                                    {allProducts.map((item) => {
                                                        return (
                                                            <div key={item.id} className="col pb-20 pt-10">
                                                                {/* Product Start */}
                                                                <div className="ee-product">
                                                                    {/* Image */}
                                                                    <div className="image">
                                                                        <span className="label sale">sale</span>
                                                                        <a href="single-product.html" className="img"><img src={item.img} alt={item.img} /></a>
                                                                        <div className="wishlist-compare">
                                                                            <a href="#" data-tooltip="Compare"><i className="ti-control-shuffle" /></a>
                                                                            <a href="#" data-tooltip="Wishlist"><i className="ti-heart" /></a>
                                                                        </div>
                                                                        <a href="#" className="add-to-cart"><i className="ti-shopping-cart" /><span>ADD TO CART</span></a>
                                                                    </div>
                                                                    {/* Content */}
                                                                    <div className="content">
                                                                        {/* Category & Title */}
                                                                        <div className="category-title">
                                                                            <a href="#" className="cat">Games</a>
                                                                            <h5 className="title"><a href="single-product.html">{item.name}</a></h5>
                                                                        </div>
                                                                        {/* Price & Ratting */}
                                                                        <div className="price-ratting">
                                                                            <h5 className="price"><span className="old">$285</span>{item.price}</h5>
                                                                            <div className="ratting">
                                                                                <i className="fa fa-star" />
                                                                                <i className="fa fa-star" />
                                                                                <i className="fa fa-star" />
                                                                                <i className="fa fa-star" />
                                                                                <i className="fa fa-star" />
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
                                                <div key={category.id} className={"tab-pane fade " + (currentCategories === category.id ? "active show" : "")}>
                                                    {/* Product Slider Wrap Start */}
                                                    <div className="product-slider-wrap product-slider-arrow-two">
                                                        {/* Product Slider Start */}
                                                        <Slider className="product-slider product-slider-3" {...settings}>
                                                            {category.products.map((item) => {
                                                                return (
                                                                    <div key={item.id} className="col pb-20 pt-10">
                                                                        {/* Product Start */}
                                                                        <div className="ee-product">
                                                                            {/* Image */}
                                                                            <div className="image">
                                                                                <a href="single-product.html" className="img"><img src="/images/product/product-18.png" alt="Product Image" /></a>
                                                                                <div className="wishlist-compare">
                                                                                    <a href="#" data-tooltip="Compare"><i className="ti-control-shuffle" /></a>
                                                                                    <a href="#" data-tooltip="Wishlist"><i className="ti-heart" /></a>
                                                                                </div>
                                                                                <a href="#" className="add-to-cart"><i className="ti-shopping-cart" /><span>ADD TO CART</span></a>
                                                                            </div>
                                                                            {/* Content */}
                                                                            <div className="content">
                                                                                {/* Category & Title */}
                                                                                <div className="category-title">
                                                                                    <a href="#" className="cat">Tv &amp; Audio</a>
                                                                                    <h5 className="title"><a href="single-product.html">{item.name}</a></h5>
                                                                                </div>
                                                                                {/* Price & Ratting */}
                                                                                <div className="price-ratting">
                                                                                    <h5 className="price">{item.price}</h5>
                                                                                    <div className="ratting">
                                                                                        <i className="fa fa-star" />
                                                                                        <i className="fa fa-star" />
                                                                                        <i className="fa fa-star" />
                                                                                        <i className="fa fa-star-half-o" />
                                                                                        <i className="fa fa-star-o" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>{/* Product End */}
                                                                    </div>
                                                                )
                                                            })}
                                                        </Slider>
                                                    </div>
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

export default BestDeals;
