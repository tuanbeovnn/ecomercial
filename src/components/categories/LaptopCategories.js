import React, { Component } from 'react'

export default class LaptopCategories extends Component {
    render() {
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
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-12 pb-30 pt-10">
                                        {/* Product Start */}
                                        <div className="ee-product">
                                            {/* Image */}
                                            <div className="image">
                                                <a href="single-product.html" className="img"><img src="/images/product/product-1.png" alt="Product Image" /></a>
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
                                                    <h5 className="title"><a href="single-product.html">Zeon Zen 4 Pro</a></h5>
                                                </div>
                                                {/* Price & Ratting */}
                                                <div className="price-ratting">
                                                    <h5 className="price">$295.00</h5>
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
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star-half-o" />
                                                        <i className="fa fa-star-o" />
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
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-12 pb-30 pt-10">
                                        {/* Product Start */}
                                        <div className="ee-product">
                                            {/* Image */}
                                            <div className="image">
                                                <span className="label sale">sale</span>
                                                <a href="single-product.html" className="img"><img src="/images/product/product-2.png" alt="Product Image" /></a>
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
                                                    <a href="#" className="cat">Drone</a>
                                                    <h5 className="title"><a href="single-product.html">Aquet Drone D 420</a></h5>
                                                </div>
                                                {/* Price & Ratting */}
                                                <div className="price-ratting">
                                                    <h5 className="price"><span className="old">$350</span>$275.00</h5>
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
                                        {/* Product List Start */}
                                        <div className="ee-product-list">
                                            {/* Image */}
                                            <div className="image">
                                                <span className="label sale">sale</span>
                                                <a href="single-product.html" className="img"><img src="/images/product/product-2.png" alt="Product Image" /></a>
                                            </div>
                                            {/* Content */}
                                            <div className="content">
                                                {/* Category & Title */}
                                                <div className="head-content">
                                                    <div className="category-title">
                                                        <a href="#" className="cat">Drone</a>
                                                        <h5 className="title"><a href="single-product.html">Aquet Drone D 420</a></h5>
                                                    </div>
                                                    <h5 className="price"><span className="old">$350</span>$275.00</h5>
                                                </div>
                                                <div className="left-content">
                                                    <div className="ratting">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star-o" />
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
                                                            <li>Diagonal Size 350mm</li>
                                                            <li>Max Speed 16m/s (ATTI mode)</li>
                                                            <li>Maz Flight Time  Approx. 25min</li>
                                                        </ul>
                                                    </div>
                                                    <span className="availability">Availability: <span>In Stock</span></span>
                                                </div>
                                            </div>
                                        </div>{/* Product List End */}
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-12 pb-30 pt-10">
                                        {/* Product Start */}
                                        <div className="ee-product">
                                            {/* Image */}
                                            <div className="image">
                                                <a href="single-product.html" className="img"><img src="/images/product/product-3.png" alt="Product Image" /></a>
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
                                                    <h5 className="title"><a href="single-product.html">Game Station X 22</a></h5>
                                                </div>
                                                {/* Price & Ratting */}
                                                <div className="price-ratting">
                                                    <h5 className="price">$295.00</h5>
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
                                        {/* Product List Start */}
                                        <div className="ee-product-list">
                                            {/* Image */}
                                            <div className="image">
                                                <a href="single-product.html" className="img"><img src="/images/product/product-3.png" alt="Product Image" /></a>
                                            </div>
                                            {/* Content */}
                                            <div className="content">
                                                {/* Category & Title */}
                                                <div className="head-content">
                                                    <div className="category-title">
                                                        <a href="#" className="cat">Games</a>
                                                        <h5 className="title"><a href="single-product.html">Game Station X 22</a></h5>
                                                    </div>
                                                    <h5 className="price">$295.00</h5>
                                                </div>
                                                <div className="left-content">
                                                    <div className="ratting">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star-o" />
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
                                                            <li>Single-chip custom processor</li>
                                                            <li>Memory GDDR5 8GB</li>
                                                            <li>Game resolution 1080p</li>
                                                        </ul>
                                                    </div>
                                                    <span className="availability">Availability: <span>In Stock</span></span>
                                                </div>
                                            </div>
                                        </div>{/* Product List End */}
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-12 pb-30 pt-10">
                                        {/* Product Start */}
                                        <div className="ee-product">
                                            {/* Image */}
                                            <div className="image">
                                                <a href="single-product.html" className="img"><img src="/images/product/product-4.png" alt="Product Image" /></a>
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
                                                    <a href="#" className="cat">Accessories</a>
                                                    <h5 className="title"><a href="single-product.html">Roxxe Headphone Z 75</a></h5>
                                                </div>
                                                {/* Price & Ratting */}
                                                <div className="price-ratting">
                                                    <h5 className="price">$110.00</h5>
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
                                        {/* Product List Start */}
                                        <div className="ee-product-list">
                                            {/* Image */}
                                            <div className="image">
                                                <a href="single-product.html" className="img"><img src="/images/product/product-4.png" alt="Product Image" /></a>
                                            </div>
                                            {/* Content */}
                                            <div className="content">
                                                {/* Category & Title */}
                                                <div className="head-content">
                                                    <div className="category-title">
                                                        <a href="#" className="cat">Accessories</a>
                                                        <h5 className="title"><a href="single-product.html">Roxxe Headphone Z 75</a></h5>
                                                    </div>
                                                    <h5 className="price">$110.00</h5>
                                                </div>
                                                <div className="left-content">
                                                    <div className="ratting">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
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
                                                            <li>Bluetooth Version: 4.1</li>
                                                            <li>Playback Time: 13 hours</li>
                                                            <li>Battery Capacity: 250mAh</li>
                                                        </ul>
                                                    </div>
                                                    <span className="availability">Availability: <span>In Stock</span></span>
                                                </div>
                                            </div>
                                        </div>{/* Product List End */}
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-12 pb-30 pt-10">
                                        {/* Product Start */}
                                        <div className="ee-product">
                                            {/* Image */}
                                            <div className="image">
                                                <a href="single-product.html" className="img"><img src="/images/product/product-5.png" alt="Product Image" /></a>
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
                                                    <a href="#" className="cat">Camera</a>
                                                    <h5 className="title"><a href="single-product.html">Mony Handycam Z 105</a></h5>
                                                </div>
                                                {/* Price & Ratting */}
                                                <div className="price-ratting">
                                                    <h5 className="price">$110.00</h5>
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
                                        {/* Product List Start */}
                                        <div className="ee-product-list">
                                            {/* Image */}
                                            <div className="image">
                                                <a href="single-product.html" className="img"><img src="/images/product/product-5.png" alt="Product Image" /></a>
                                            </div>
                                            {/* Content */}
                                            <div className="content">
                                                {/* Category & Title */}
                                                <div className="head-content">
                                                    <div className="category-title">
                                                        <a href="#" className="cat">Camera</a>
                                                        <h5 className="title"><a href="single-product.html">Mony Handycam Z 105</a></h5>
                                                    </div>
                                                    <h5 className="price">$110.00</h5>
                                                </div>
                                                <div className="left-content">
                                                    <div className="ratting">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star-half-o" />
                                                        <i className="fa fa-star-o" />
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
                                                            <li>Full HD Camcorder</li>
                                                            <li>Dual Video Recording</li>
                                                            <li>X type battery operation</li>
                                                        </ul>
                                                    </div>
                                                    <span className="availability">Availability: <span>In Stock</span></span>
                                                </div>
                                            </div>
                                        </div>{/* Product List End */}
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-12 pb-30 pt-10">
                                        {/* Product Start */}
                                        <div className="ee-product">
                                            {/* Image */}
                                            <div className="image">
                                                <span className="label sale">sale</span>
                                                <a href="single-product.html" className="img"><img src="/images/product/product-6.png" alt="Product Image" /></a>
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
                                                    <a href="#" className="cat">Camera</a>
                                                    <h5 className="title"><a href="single-product.html">Axor Digital camera</a></h5>
                                                </div>
                                                {/* Price & Ratting */}
                                                <div className="price-ratting">
                                                    <h5 className="price"><span className="old">$265</span>$199.00</h5>
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
                                        {/* Product List Start */}
                                        <div className="ee-product-list">
                                            {/* Image */}
                                            <div className="image">
                                                <span className="label sale">sale</span>
                                                <a href="single-product.html" className="img"><img src="/images/product/product-6.png" alt="Product Image" /></a>
                                            </div>
                                            {/* Content */}
                                            <div className="content">
                                                {/* Category & Title */}
                                                <div className="head-content">
                                                    <div className="category-title">
                                                        <a href="#" className="cat">Camera</a>
                                                        <h5 className="title"><a href="single-product.html">Axor Digital camera</a></h5>
                                                    </div>
                                                    <h5 className="price"><span className="old">$265</span>$199.00</h5>
                                                </div>
                                                <div className="left-content">
                                                    <div className="ratting">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
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
                                                            <li>5x optical zoom</li>
                                                            <li>26 mm Wide Angle lens</li>
                                                            <li>Super HAD CCD 20.1 MP sensor</li>
                                                        </ul>
                                                    </div>
                                                    <span className="availability">Availability: <span>In Stock</span></span>
                                                </div>
                                            </div>
                                        </div>{/* Product List End */}
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-12 pb-30 pt-10">
                                        {/* Product Start */}
                                        <div className="ee-product">
                                            {/* Image */}
                                            <div className="image">
                                                <a href="single-product.html" className="img"><img src="/images/product/product-7.png" alt="Product Image" /></a>
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
                                                    <a href="#" className="cat">Camera</a>
                                                    <h5 className="title"><a href="single-product.html">Silvex DSLR Camera T 32</a></h5>
                                                </div>
                                                {/* Price & Ratting */}
                                                <div className="price-ratting">
                                                    <h5 className="price">$580.00</h5>
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
                                        {/* Product List Start */}
                                        <div className="ee-product-list">
                                            {/* Image */}
                                            <div className="image">
                                                <a href="single-product.html" className="img"><img src="/images/product/product-7.png" alt="Product Image" /></a>
                                            </div>
                                            {/* Content */}
                                            <div className="content">
                                                {/* Category & Title */}
                                                <div className="head-content">
                                                    <div className="category-title">
                                                        <a href="#" className="cat">Camera</a>
                                                        <h5 className="title"><a href="single-product.html">Silvex DSLR Camera T 32</a></h5>
                                                    </div>
                                                    <h5 className="price">$580.00</h5>
                                                </div>
                                                <div className="left-content">
                                                    <div className="ratting">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star-half-o" />
                                                        <i className="fa fa-star-o" />
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
                                                            <li>24 MP CMOS sensor</li>
                                                            <li>Vari Angle LCD Monitor </li>
                                                            <li>Noise reduction, High Sensitivity</li>
                                                        </ul>
                                                    </div>
                                                    <span className="availability">Availability: <span>In Stock</span></span>
                                                </div>
                                            </div>
                                        </div>{/* Product List End */}
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-12 pb-30 pt-10">
                                        {/* Product Start */}
                                        <div className="ee-product">
                                            {/* Image */}
                                            <div className="image">
                                                <span className="label new">new</span>
                                                <a href="single-product.html" className="img"><img src="/images/product/product-8.png" alt="Product Image" /></a>
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
                                                    <a href="#" className="cat">Camera</a>
                                                    <h5 className="title"><a href="single-product.html">Necta Instant Camera</a></h5>
                                                </div>
                                                {/* Price & Ratting */}
                                                <div className="price-ratting">
                                                    <h5 className="price">$320.00</h5>
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
                                        {/* Product List Start */}
                                        <div className="ee-product-list">
                                            {/* Image */}
                                            <div className="image">
                                                <a href="single-product.html" className="img"><img src="/images/product/product-8.png" alt="Product Image" /></a>
                                            </div>
                                            {/* Content */}
                                            <div className="content">
                                                {/* Category & Title */}
                                                <div className="head-content">
                                                    <div className="category-title">
                                                        <a href="#" className="cat">Camera</a>
                                                        <h5 className="title"><a href="single-product.html">Necta Instant Camera</a></h5>
                                                    </div>
                                                    <h5 className="price">$320.00</h5>
                                                </div>
                                                <div className="left-content">
                                                    <div className="ratting">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star-half-o" />
                                                        <i className="fa fa-star-o" />
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
                                                            <li>10.0 megapixel digital camera</li>
                                                            <li>Prints 2x3" full color images</li>
                                                            <li>No Ink. No Hassles</li>
                                                        </ul>
                                                    </div>
                                                    <span className="availability">Availability: <span>In Stock</span></span>
                                                </div>
                                            </div>
                                        </div>{/* Product List End */}
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-12 pb-30 pt-10">
                                        {/* Product Start */}
                                        <div className="ee-product">
                                            {/* Image */}
                                            <div className="image">
                                                <span className="label sale">sale</span>
                                                <a href="single-product.html" className="img"><img src="/images/product/product-9.png" alt="Product Image" /></a>
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
                                                    <a href="#" className="cat">Watch</a>
                                                    <h5 className="title"><a href="single-product.html">Mascut Smart Watch</a></h5>
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
                                        {/* Product List Start */}
                                        <div className="ee-product-list">
                                            {/* Image */}
                                            <div className="image">
                                                <span className="label sale">sale</span>
                                                <a href="single-product.html" className="img"><img src="/images/product/product-9.png" alt="Product Image" /></a>
                                            </div>
                                            {/* Content */}
                                            <div className="content">
                                                {/* Category & Title */}
                                                <div className="head-content">
                                                    <div className="category-title">
                                                        <a href="#" className="cat">Watch</a>
                                                        <h5 className="title"><a href="single-product.html">Mascut Smart Watch</a></h5>
                                                    </div>
                                                    <h5 className="price"><span className="old">$365</span>$295.00</h5>
                                                </div>
                                                <div className="left-content">
                                                    <div className="ratting">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
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
                                                            <li>Amoled 390X390 326 ppi</li>
                                                            <li>Andriod Wear 2.0</li>
                                                            <li>Built-in GPS</li>
                                                        </ul>
                                                    </div>
                                                    <span className="availability">Availability: <span>In Stock</span></span>
                                                </div>
                                            </div>
                                        </div>{/* Product List End */}
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-12 pb-30 pt-10">
                                        {/* Product Start */}
                                        <div className="ee-product">
                                            {/* Image */}
                                            <div className="image">
                                                <a href="single-product.html" className="img"><img src="/images/product/product-10.png" alt="Product Image" /></a>
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
                                                    <a href="#" className="cat">Accessories</a>
                                                    <h5 className="title"><a href="single-product.html">Z Bluetooth Headphone</a></h5>
                                                </div>
                                                {/* Price & Ratting */}
                                                <div className="price-ratting">
                                                    <h5 className="price">$189.00</h5>
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
                                        {/* Product List Start */}
                                        <div className="ee-product-list">
                                            {/* Image */}
                                            <div className="image">
                                                <a href="single-product.html" className="img"><img src="/images/product/product-10.png" alt="Product Image" /></a>
                                            </div>
                                            {/* Content */}
                                            <div className="content">
                                                {/* Category & Title */}
                                                <div className="head-content">
                                                    <div className="category-title">
                                                        <a href="#" className="cat">Accessories</a>
                                                        <h5 className="title"><a href="single-product.html">Z Bluetooth Headphone</a></h5>
                                                    </div>
                                                    <h5 className="price">$189.00</h5>
                                                </div>
                                                <div className="left-content">
                                                    <div className="ratting">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star-half-o" />
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
                                                            <li>Built-in Microphone</li>
                                                            <li>Multi-function keys</li>
                                                            <li>Ear Cap</li>
                                                        </ul>
                                                    </div>
                                                    <span className="availability">Availability: <span>In Stock</span></span>
                                                </div>
                                            </div>
                                        </div>{/* Product List End */}
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-12 pb-30 pt-10">
                                        {/* Product Start */}
                                        <div className="ee-product">
                                            {/* Image */}
                                            <div className="image">
                                                <span className="label new">new</span>
                                                <a href="single-product.html" className="img"><img src="/images/product/product-11.png" alt="Product Image" /></a>
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
                                                    <a href="#" className="cat">Printer</a>
                                                    <h5 className="title"><a href="single-product.html">Pranon Photo Printer Y 25</a></h5>
                                                </div>
                                                {/* Price & Ratting */}
                                                <div className="price-ratting">
                                                    <h5 className="price">$210.00</h5>
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
                                        {/* Product List Start */}
                                        <div className="ee-product-list">
                                            {/* Image */}
                                            <div className="image">
                                                <a href="single-product.html" className="img"><img src="/images/product/product-11.png" alt="Product Image" /></a>
                                            </div>
                                            {/* Content */}
                                            <div className="content">
                                                {/* Category & Title */}
                                                <div className="head-content">
                                                    <div className="category-title">
                                                        <a href="#" className="cat">Printer</a>
                                                        <h5 className="title"><a href="single-product.html">Pranon Photo Printer Y 25</a></h5>
                                                    </div>
                                                    <h5 className="price">$210.00</h5>
                                                </div>
                                                <div className="left-content">
                                                    <div className="ratting">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star-half-o" />
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
                                                            <li>Print Resolution 300 dots/inch</li>
                                                            <li>Connectivity: WiFi, PictBridge</li>
                                                            <li>Maximum Paper size A6</li>
                                                        </ul>
                                                    </div>
                                                    <span className="availability">Availability: <span>In Stock</span></span>
                                                </div>
                                            </div>
                                        </div>{/* Product List End */}
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-12 pb-30 pt-10">
                                        {/* Product Start */}
                                        <div className="ee-product">
                                            {/* Image */}
                                            <div className="image">
                                                <a href="single-product.html" className="img"><img src="/images/product/product-12.png" alt="Product Image" /></a>
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
                                                    <a href="#" className="cat">Audio</a>
                                                    <h5 className="title"><a href="single-product.html">Roses Speaker Box</a></h5>
                                                </div>
                                                {/* Price & Ratting */}
                                                <div className="price-ratting">
                                                    <h5 className="price">$210.00</h5>
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
                                        {/* Product List Start */}
                                        <div className="ee-product-list">
                                            {/* Image */}
                                            <div className="image">
                                                <a href="single-product.html" className="img"><img src="/images/product/product-12.png" alt="Product Image" /></a>
                                            </div>
                                            {/* Content */}
                                            <div className="content">
                                                {/* Category & Title */}
                                                <div className="head-content">
                                                    <div className="category-title">
                                                        <a href="#" className="cat">Audio</a>
                                                        <h5 className="title"><a href="single-product.html">Roses Speaker Box</a></h5>
                                                    </div>
                                                    <h5 className="price">$210.00</h5>
                                                </div>
                                                <div className="left-content">
                                                    <div className="ratting">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star-half-o" />
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
                                                            <li>Wireless connectivity </li>
                                                            <li>Lightweight, Portable</li>
                                                            <li>AUX Function</li>
                                                        </ul>
                                                    </div>
                                                    <span className="availability">Availability: <span>In Stock</span></span>
                                                </div>
                                            </div>
                                        </div>{/* Product List End */}
                                    </div>
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
