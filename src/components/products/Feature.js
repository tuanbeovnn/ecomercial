import React, { Component } from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import { fetchFeatureProductRequest } from '../../redux/actions/index';
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
        const settings = {
            dots: true,
            currentSlide : 0,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            nextArrow: <button type="button" className="slick-next slick-arrow" style="display: block;"><i className="icofont icofont-long-arrow-right"></i></button>,
            prevArrow: <button type="button" className="slick-prev slick-arrow" style="display: block;"><i className="icofont icofont-long-arrow-left"></i></button>

        };
        const { currentCategories, addToCart } = this.state;
        const { allProducts, categories } = this.props;
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
                                                                <a className={addToCart ? "add-to-cart" : "add-to-cart added"} onClick={() => this.setState({ addToCart: !addToCart })}>
                                                                    <i className={addToCart ? "ti-shopping-cart" : "ti-check"} />
                                                                    <span>{addToCart ? "ADD TO CART" : "ADDED"}</span>
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
                                        </Slider>{/* Product Slider End */}
                                    </div>{/* Product Slider Wrap End */}
                                </div>{/* Tab Pane End */}
                                {/* Tab Pane Start */}
                                {categories.map((categ,index) => {
                                    return (
                                        <div key={index} className={"tab-pane fade " + (currentCategories === categ.code ? "active show" : "")}>
                                            {/* Product Slider Wrap Start */}
                                            <div className="product-slider-wrap product-slider-arrow-one">
                                                {/* Product Slider Start */}
                                                <Slider key={categ.id} className="product-slider product-slider-4" {...settings}>
                                                    {categ.products && categ.products.map((item) => {
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
                                                                        <a className={addToCart ? "add-to-cart" : "add-to-cart added"} onClick={() => this.setState({ addToCart: !addToCart })}>
                                                                            <i className={addToCart ? "ti-shopping-cart" : "ti-check"} />
                                                                            <span>{addToCart ? "ADD TO CART" : "ADDED"}</span>
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
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchFeatureProducts: (code) => {
            dispatch(fetchFeatureProductRequest(code));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Feature);
