import React, { Component } from 'react';
import Slider from 'react-slick';

class Feature extends Component {

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
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            nextArrow: <button type="button" className="slick-next slick-arrow" style="display: block;"><i className="icofont icofont-long-arrow-right"></i></button>,
            prevArrow: <button type="button" className="slick-prev slick-arrow" style="display: block;"><i className="icofont icofont-long-arrow-left"></i></button>

        };
        const { currentCategories, categories, allProducts } = this.state;
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
                                        <a className={currentCategories === 0 ? "active" : ""} data-toggle="tab" href="#featureItem">all</a></li>
                                    {categories.map((item) => {
                                        return (
                                            <li onClick={() => { this.activeCategory(item.id) }} key={item.id}><a href="#featureItem" className={currentCategories === item.id ? "active" : ""} data-toggle="tab">{item.name}</a></li>
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
                                                return (
                                                    <div key={item.id} className="col pb-20 pt-10">
                                                        {/* Product Start */}
                                                        <div className="ee-product">
                                                            {/* Image */}
                                                            <div className="image">
                                                                <a href="single-product.html" className="img"><img src={item.img} alt="Product Image" /></a>
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
                                                                    <a href="#" className="cat">Laptop</a>
                                                                    <h5 className="title"><a href="single-product.html">{item.name}</a></h5>
                                                                </div>
                                                                {/* Price & Ratting */}
                                                                <div className="price-ratting">
                                                                    <h5 className="price">${item.price}</h5>
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
                                        </Slider>{/* Product Slider End */}
                                    </div>{/* Product Slider Wrap End */}
                                </div>{/* Tab Pane End */}
                                {/* Tab Pane Start */}
                                {categories.map((categ) => {
                                    return (
                                        <div key={categ.id} className={"tab-pane fade " + (currentCategories === categ.id ? "active show" : "")}>
                                            {/* Product Slider Wrap Start */}
                                            <div className="product-slider-wrap product-slider-arrow-one">
                                                {/* Product Slider Start */}
                                                <Slider key={categ.id} className="product-slider product-slider-4" {...settings}>
                                                    {categ.products.map((item) => {
                                                        return (
                                                            <div key={item.id} className="col pb-20 pt-10">
                                                                {/* Product Start */}
                                                                <div className="ee-product">
                                                                    {/* Image */}
                                                                    <div className="image">
                                                                        <a href="single-product.html" className="img"><img src={item.img} alt="Product Image" /></a>
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
                                                                            <a href="#" className="cat">Laptop</a>
                                                                            <h5 className="title"><a href="single-product.html">{item.name}</a></h5>
                                                                        </div>
                                                                        {/* Price & Ratting */}
                                                                        <div className="price-ratting">
                                                                            <h5 className="price">${item.price}</h5>
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
                                                </Slider>{/* Product Slider End */}
                                            </div>{/* Product Slider Wrap End */}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>{/* Product Tab Content End */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Feature;
