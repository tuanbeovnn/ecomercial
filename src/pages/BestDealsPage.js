import React, { Component } from 'react'

export default class BestDealsPage extends Component {
    render() {
        return (
            <div>
                {/* Page Banner Section Start */}
                <div className="page-banner-section section">
                    <div className="page-banner-wrap row row-0 d-flex align-items-center ">
                        {/* Page Banner */}
                        <div className="col-lg-4 col-12 order-lg-2 d-flex align-items-center justify-content-center">
                            <div className="page-banner">
                                <h1>Best Deals</h1>
                                <p>similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita</p>
                                <div className="breadcrumb">
                                    <ul>
                                        <li><a href="#">HOME</a></li>
                                        <li><a href="#">Shop</a></li>
                                        <li><a href="#">Best Deals</a></li>
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
                                            <ul className="nav product-tab-list">
                                                <li><a className="active" data-toggle="tab" href="#tab-three">all</a></li>
                                                <li><a data-toggle="tab" href="#tab-four">LAPTOP</a></li>
                                                <li><a data-toggle="tab" href="#tab-three">DRONE</a></li>
                                                <li><a data-toggle="tab" href="#tab-four">TV &amp; AUDIO</a></li>
                                                <li><a data-toggle="tab" href="#tab-three">PHONE &amp; TABLET</a></li>
                                                <li><a data-toggle="tab" href="#tab-four">CAMERA &amp; PRINTER</a></li>
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
                                            <div className="tab-pane fade show active" id="tab-three">
                                                {/* Product Slider Wrap Start */}
                                                <div className="product-slider-wrap product-slider-arrow-two">
                                                    {/* Product Slider Start */}
                                                    <div className="product-slider product-slider-3">
                                                        <div className="col pb-20 pt-10">
                                                            {/* Product Start */}
                                                            <div className="ee-product">
                                                                {/* Image */}
                                                                <div className="image">
                                                                    <span className="label sale">sale</span>
                                                                    <a href="single-product.html" className="img"><img src="/images/product/product-13.png" alt="Product Image" /></a>
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
                                                                        <h5 className="title"><a href="single-product.html">Game Stations PW 25</a></h5>
                                                                    </div>
                                                                    {/* Price & Ratting */}
                                                                    <div className="price-ratting">
                                                                        <h5 className="price"><span className="old">$285</span>$135.35</h5>
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
                                                        <div className="col pb-20 pt-10">
                                                            {/* Product Start */}
                                                            <div className="ee-product">
                                                                {/* Image */}
                                                                <div className="image">
                                                                    <a href="single-product.html" className="img"><img src="/images/product/product-14.png" alt="Product Image" /></a>
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
                                                                        <a href="#" className="cat">Kitchen Appliances</a>
                                                                        <h5 className="title"><a href="single-product.html">Zorex Coffe Maker</a></h5>
                                                                    </div>
                                                                    {/* Price & Ratting */}
                                                                    <div className="price-ratting">
                                                                        <h5 className="price">$125.00</h5>
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
                                                        <div className="col pb-20 pt-10">
                                                            {/* Product Start */}
                                                            <div className="ee-product">
                                                                {/* Image */}
                                                                <div className="image">
                                                                    <span className="label sale">sale</span>
                                                                    <a href="single-product.html" className="img"><img src="/images/product/product-15.png" alt="Product Image" /></a>
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
                                                                        <a href="#" className="cat">Home Appliances</a>
                                                                        <h5 className="title"><a href="single-product.html">jeilips Steam Iron K 2</a></h5>
                                                                    </div>
                                                                    {/* Price & Ratting */}
                                                                    <div className="price-ratting">
                                                                        <h5 className="price"><span className="old">$365</span>$295.00</h5>
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
                                                        <div className="col pb-20 pt-10">
                                                            {/* Product Start */}
                                                            <div className="ee-product">
                                                                {/* Image */}
                                                                <div className="image">
                                                                    <span className="label sale">sale</span>
                                                                    <a href="single-product.html" className="img"><img src="/images/product/product-16.png" alt="Product Image" /></a>
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
                                                                        <h5 className="title"><a href="single-product.html">Nexo Andriod TV Box</a></h5>
                                                                    </div>
                                                                    {/* Price & Ratting */}
                                                                    <div className="price-ratting">
                                                                        <h5 className="price"><span className="old">$360 </span>$250.00</h5>
                                                                        <div className="ratting">
                                                                            <i className="fa fa-star" />
                                                                            <i className="fa fa-star" />
                                                                            <i className="fa fa-star" />
                                                                            <i className="fa fa-star" />
                                                                            <i className="fa fa-star-half-o" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>{/* Product End */}
                                                        </div>
                                                        <div className="col pb-20 pt-10">
                                                            {/* Product Start */}
                                                            <div className="ee-product">
                                                                {/* Image */}
                                                                <div className="image">
                                                                    <span className="label new">new</span>
                                                                    <a href="single-product.html" className="img"><img src="/images/product/product-17.png" alt="Product Image" /></a>
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
                                                                        <a href="#" className="cat">Smartphone</a>
                                                                        <h5 className="title"><a href="single-product.html">Ornet Note 9</a></h5>
                                                                    </div>
                                                                    {/* Price & Ratting */}
                                                                    <div className="price-ratting">
                                                                        <h5 className="price"><span className="old">$285</span>$230.00</h5>
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
                                                    </div>{/* Product Slider End */}
                                                </div>{/* Product Slider Wrap End */}
                                            </div>{/* Tab Pane End */}
                                            {/* Tab Pane Start */}
                                            <div className="tab-pane fade" id="tab-four">
                                                {/* Product Slider Wrap Start */}
                                                <div className="product-slider-wrap product-slider-arrow-two">
                                                    {/* Product Slider Start */}
                                                    <div className="product-slider product-slider-3">
                                                        <div className="col pb-20 pt-10">
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
                                                                        <h5 className="title"><a href="single-product.html">Xonet Speaker P 9</a></h5>
                                                                    </div>
                                                                    {/* Price & Ratting */}
                                                                    <div className="price-ratting">
                                                                        <h5 className="price">$185.00</h5>
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
                                                        <div className="col pb-20 pt-10">
                                                            {/* Product Start */}
                                                            <div className="ee-product">
                                                                {/* Image */}
                                                                <div className="image">
                                                                    <a href="single-product.html" className="img"><img src="/images/product/product-24.png" alt="Product Image" /></a>
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
                                                                        <a href="#" className="cat">Smartphone</a>
                                                                        <h5 className="title"><a href="single-product.html">Sany Experia Z5</a></h5>
                                                                    </div>
                                                                    {/* Price & Ratting */}
                                                                    <div className="price-ratting">
                                                                        <h5 className="price">$360.00</h5>
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
                                                        <div className="col pb-20 pt-10">
                                                            {/* Product Start */}
                                                            <div className="ee-product">
                                                                {/* Image */}
                                                                <div className="image">
                                                                    <span className="label sale">sale</span>
                                                                    <a href="single-product.html" className="img"><img src="/images/product/product-20.png" alt="Product Image" /></a>
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
                                                                        <a href="#" className="cat">Kitchen Appliances</a>
                                                                        <h5 className="title"><a href="single-product.html">Jackson Toster V 27</a></h5>
                                                                    </div>
                                                                    {/* Price & Ratting */}
                                                                    <div className="price-ratting">
                                                                        <h5 className="price"><span className="old">$185</span>$135.00</h5>
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
                                                        <div className="col pb-20 pt-10">
                                                            {/* Product Start */}
                                                            <div className="ee-product">
                                                                {/* Image */}
                                                                <div className="image">
                                                                    <a href="single-product.html" className="img"><img src="/images/product/product-21.png" alt="Product Image" /></a>
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
                                                                        <a href="#" className="cat">Kitchen Appliances</a>
                                                                        <h5 className="title"><a href="single-product.html">mega Juice Maker</a></h5>
                                                                    </div>
                                                                    {/* Price & Ratting */}
                                                                    <div className="price-ratting">
                                                                        <h5 className="price">$125.00</h5>
                                                                        <div className="ratting">
                                                                            <i className="fa fa-star" />
                                                                            <i className="fa fa-star" />
                                                                            <i className="fa fa-star" />
                                                                            <i className="fa fa-star" />
                                                                            <i className="fa fa-star-half-o" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>{/* Product End */}
                                                        </div>
                                                        <div className="col pb-20 pt-10">
                                                            {/* Product Start */}
                                                            <div className="ee-product">
                                                                {/* Image */}
                                                                <div className="image">
                                                                    <span className="label new">new</span>
                                                                    <a href="single-product.html" className="img"><img src="/images/product/product-22.png" alt="Product Image" /></a>
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
                                                                        <a href="#" className="cat">Kitchen Appliances</a>
                                                                        <h5 className="title"><a href="single-product.html">shine Microwave Oven</a></h5>
                                                                    </div>
                                                                    {/* Price & Ratting */}
                                                                    <div className="price-ratting">
                                                                        <h5 className="price"><span className="old">$389</span>$245.00</h5>
                                                                        <div className="ratting">
                                                                            <i className="fa fa-star" />
                                                                            <i className="fa fa-star" />
                                                                            <i className="fa fa-star" />
                                                                            <i className="fa fa-star" />
                                                                            <i className="fa fa-star-o" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>{/* Product End */}
                                                        </div>
                                                    </div>{/* Product Slider End */}
                                                </div>{/* Product Slider Wrap End */}
                                            </div>{/* Tab Pane End */}
                                        </div>
                                    </div>{/* Product Tab Content End */}
                                </div>
                            </div>{/* Product Tab Filter End*/}
                        </div>
                    </div>
                </div>{/* Best Deals Product Section End */}
                {/* Banner Section Start */}
                <div className="banner-section section mb-60">
                    <div className="container">
                        <div className="row row-10">
                            {/* Banner */}
                            <div className="col-md-3 mb-30">
                                <div className="banner"><a href="#"><img src="/images/banner/banner-21.jpg" alt="Banner" /></a></div>
                            </div>
                            {/* Banner */}
                            <div className="col-md-9">
                                <div className="row row-10">
                                    <div className="col-md-6 col-12 mb-30"><div className="banner"><a href="#"><img src="/images/banner/banner-22.jpg" alt="Banner" /></a></div></div>
                                    <div className="col-md-6 col-12 mb-30"><div className="banner"><a href="#"><img src="/images/banner/banner-23.jpg" alt="Banner" /></a></div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>{/* Banner Section End */}
                {/* Best Deals Product Section Start */}
                <div className="product-section section mb-70">
                    <div className="container-fluid">
                        <div className="row">
                            {/* Product Tab Filter Start */}
                            <div className="col-12 mb-30">
                                <div className="product-tab-filter">
                                    {/* Tab Filter Toggle */}
                                    <button className="product-tab-filter-toggle">showing: <span /><i className="icofont icofont-simple-down" /></button>
                                    {/* Product Tab List */}
                                    <ul className="nav product-tab-list">
                                        <li><a className="active" data-toggle="tab" href="#tab-five">all</a></li>
                                        <li><a data-toggle="tab" href="#tab-six">LAPTOP</a></li>
                                        <li><a data-toggle="tab" href="#tab-five">DRONE</a></li>
                                        <li><a data-toggle="tab" href="#tab-six">TV &amp; AUDIO</a></li>
                                        <li><a data-toggle="tab" href="#tab-five">PHONE &amp; TABLET</a></li>
                                        <li><a data-toggle="tab" href="#tab-six">CAMERA &amp; PRINTER</a></li>
                                    </ul>
                                </div>
                            </div>{/* Product Tab Filter End */}
                            {/* Product Tab Filter Start*/}
                            <div className="col-12">
                                <div className="tab-content">
                                    {/* Tab Pane Start */}
                                    <div className="tab-pane fade show active" id="tab-five">
                                        {/* Product Slider Wrap Start */}
                                        <div className="product-slider-wrap product-slider-arrow-one">
                                            {/* Product Slider Start */}
                                            <div className="product-slider  product-slider-4">
                                                <div className="col pb-20 pt-10">
                                                    {/* Product Start */}
                                                    <div className="ee-product-three">
                                                        {/* Image */}
                                                        <div className="image">
                                                            <span className="label sold">Already Sold: 50</span>
                                                            <span className="label stock">Stock: 120</span>
                                                            <a href="single-product.html" className="img"><img src="/images/product/product-three-1.png" alt="Product Image" /></a>
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
                                                                <a href="#" className="cat">TV &amp; Audio</a>
                                                                <h5 className="title"><a href="single-product.html">LG 4K Andriod TV</a></h5>
                                                            </div>
                                                            {/* Price */}
                                                            <h5 className="price"><span className="old">$285</span>$135.35</h5>
                                                        </div>
                                                        {/* Countdown */}
                                                        <div className="product-countdown" data-countdown="2019/06/10" />
                                                    </div>{/* Product End */}
                                                </div>
                                                <div className="col pb-20 pt-10">
                                                    {/* Product Start */}
                                                    <div className="ee-product-three">
                                                        {/* Image */}
                                                        <div className="image">
                                                            <span className="label sold">Already Sold: 120</span>
                                                            <span className="label stock">Stock: 320</span>
                                                            <a href="single-product.html" className="img"><img src="/images/product/product-three-2.png" alt="Product Image" /></a>
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
                                                                <h5 className="title"><a href="single-product.html">Game Station PW 25</a></h5>
                                                            </div>
                                                            {/* Price & Ratting */}
                                                            <h5 className="price"><span className="old">$285</span>$135.00</h5>
                                                        </div>
                                                        {/* Countdown */}
                                                        <div className="product-countdown" data-countdown="2019/06/19" />
                                                    </div>{/* Product End */}
                                                </div>
                                                <div className="col pb-20 pt-10">
                                                    {/* Product Start */}
                                                    <div className="ee-product-three">
                                                        {/* Image */}
                                                        <div className="image">
                                                            <span className="label sold">Already Sold: 75</span>
                                                            <span className="label stock">Stock: 110</span>
                                                            <a href="single-product.html" className="img"><img src="/images/product/product-three-3.png" alt="Product Image" /></a>
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
                                                                <a href="#" className="cat">Kitchen Appliances</a>
                                                                <h5 className="title"><a href="single-product.html">Zorex Coffe Maker</a></h5>
                                                            </div>
                                                            {/* Price & Ratting */}
                                                            <h5 className="price"><span className="old">$375</span>$289.00</h5>
                                                        </div>
                                                        {/* Countdown */}
                                                        <div className="product-countdown" data-countdown="2019/06/20" />
                                                    </div>{/* Product End */}
                                                </div>
                                                <div className="col pb-20 pt-10">
                                                    {/* Product Start */}
                                                    <div className="ee-product-three">
                                                        {/* Image */}
                                                        <div className="image">
                                                            <span className="label sold">Already Sold: 130</span>
                                                            <span className="label stock">Stock: 320</span>
                                                            <a href="single-product.html" className="img"><img src="/images/product/product-three-4.png" alt="Product Image" /></a>
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
                                                                <a href="#" className="cat">Home Appliances</a>
                                                                <h5 className="title"><a href="single-product.html">jeilips Steam Iron K 2</a></h5>
                                                            </div>
                                                            {/* Price & Ratting */}
                                                            <h5 className="price"><span className="old">$320</span>$210.00</h5>
                                                        </div>
                                                        {/* Countdown */}
                                                        <div className="product-countdown" data-countdown="2019/06/21" />
                                                    </div>{/* Product End */}
                                                </div>
                                            </div>{/* Product Slider End */}
                                        </div>{/* Product Slider Wrap End */}
                                    </div>{/* Tab Pane End */}
                                    {/* Tab Pane Start */}
                                    <div className="tab-pane fade" id="tab-six">
                                        {/* Product Slider Wrap Start */}
                                        <div className="product-slider-wrap product-slider-arrow-two">
                                            {/* Product Slider Start */}
                                            <div className="product-slider  product-slider-4-full">
                                                <div className="col pb-20 pt-10">
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
                                                                <h5 className="title"><a href="single-product.html">Xonet Speaker P 9</a></h5>
                                                            </div>
                                                            {/* Price & Ratting */}
                                                            <div className="price-ratting">
                                                                <h5 className="price">$185.00</h5>
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
                                                <div className="col pb-20 pt-10">
                                                    {/* Product Start */}
                                                    <div className="ee-product">
                                                        {/* Image */}
                                                        <div className="image">
                                                            <a href="single-product.html" className="img"><img src="/images/product/product-24.png" alt="Product Image" /></a>
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
                                                                <a href="#" className="cat">Smartphone</a>
                                                                <h5 className="title"><a href="single-product.html">Sany Experia Z5</a></h5>
                                                            </div>
                                                            {/* Price & Ratting */}
                                                            <div className="price-ratting">
                                                                <h5 className="price">$360.00</h5>
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
                                                <div className="col pb-20 pt-10">
                                                    {/* Product Start */}
                                                    <div className="ee-product">
                                                        {/* Image */}
                                                        <div className="image">
                                                            <span className="label sale">sale</span>
                                                            <a href="single-product.html" className="img"><img src="/images/product/product-20.png" alt="Product Image" /></a>
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
                                                                <a href="#" className="cat">Kitchen Appliances</a>
                                                                <h5 className="title"><a href="single-product.html">Jackson Toster V 27</a></h5>
                                                            </div>
                                                            {/* Price & Ratting */}
                                                            <div className="price-ratting">
                                                                <h5 className="price"><span className="old">$185</span>$135.00</h5>
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
                                                <div className="col pb-20 pt-10">
                                                    {/* Product Start */}
                                                    <div className="ee-product">
                                                        {/* Image */}
                                                        <div className="image">
                                                            <a href="single-product.html" className="img"><img src="/images/product/product-21.png" alt="Product Image" /></a>
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
                                                                <a href="#" className="cat">Kitchen Appliances</a>
                                                                <h5 className="title"><a href="single-product.html">mega Juice Maker</a></h5>
                                                            </div>
                                                            {/* Price & Ratting */}
                                                            <div className="price-ratting">
                                                                <h5 className="price">$125.00</h5>
                                                                <div className="ratting">
                                                                    <i className="fa fa-star" />
                                                                    <i className="fa fa-star" />
                                                                    <i className="fa fa-star" />
                                                                    <i className="fa fa-star" />
                                                                    <i className="fa fa-star-half-o" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>{/* Product End */}
                                                </div>
                                                <div className="col pb-20 pt-10">
                                                    {/* Product Start */}
                                                    <div className="ee-product">
                                                        {/* Image */}
                                                        <div className="image">
                                                            <span className="label new">new</span>
                                                            <a href="single-product.html" className="img"><img src="/images/product/product-22.png" alt="Product Image" /></a>
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
                                                                <a href="#" className="cat">Kitchen Appliances</a>
                                                                <h5 className="title"><a href="single-product.html">shine Microwave Oven</a></h5>
                                                            </div>
                                                            {/* Price & Ratting */}
                                                            <div className="price-ratting">
                                                                <h5 className="price"><span className="old">$389</span>$245.00</h5>
                                                                <div className="ratting">
                                                                    <i className="fa fa-star" />
                                                                    <i className="fa fa-star" />
                                                                    <i className="fa fa-star" />
                                                                    <i className="fa fa-star" />
                                                                    <i className="fa fa-star-o" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>{/* Product End */}
                                                </div>
                                            </div>{/* Product Slider End */}
                                        </div>{/* Product Slider Wrap End */}
                                    </div>{/* Tab Pane End */}
                                </div>{/* Product Tab Content End */}
                            </div>{/* Product Tab Filter End*/}
                        </div>
                    </div>
                </div>{/* Best Deals Product Section End */}
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
                </div>{/* Banner Section End */}</div>

        )
    }
}
