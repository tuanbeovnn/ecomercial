import React, { Component } from 'react';
import { fetchProductNewRequest } from '../../redux/actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class NewArrival extends Component {
    state = {
        addToCart: true,
    }
    componentDidMount() {
        this.props.fetchProductNew();
    }
    render() {
        const { addToCart } = this.state
        const { productNew, categories } = this.props;
        return (
            <div className="product-section section mb-60">
                <div className="container">
                    <div className="row">
                        {/* Section Title Start */}
                        <div className="col-12 mb-40">
                            <div className="section-title-one" data-title="NEW ARRIVAL"><h1>NEW ARRIVAL</h1></div>
                        </div>{/* Section Title End */}
                        <div className="col-12">
                            <div className="row">
                                {productNew.map((item, index) => {
                                    const categoryProduct = categories && categories.find(cate => cate.code === item.categoryCode);
                                    return (
                                        <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-12 pb-30 pt-10">
                                            {/* Product Start */}
                                            <div className="ee-product">
                                                {/* Image */}
                                                <div className="image">
                                                    <span className="label sale">sale</span>
                                                    <Link className="img" to={"/details/" + item.code}>
                                                        <img src={item.image[0]} alt={item.image} />
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
                                                        <a href="#" className="cat">{categoryProduct && categoryProduct.name}</a>

                                                        <h5 className="title">
                                                            <Link to={"/details/" + item.code}>
                                                                {item.name}
                                                            </Link>

                                                        </h5>
                                                    </div>
                                                    {/* Price & Ratting */}
                                                    <div className="price-ratting">
                                                        <h5 className="price">{item.price}$</h5>
                                                        <div className="ratting">
                                                            {new Array(5).fill(0).map((star, index) => {
                                                                return <i key={index} className={"fa fa-star" + (index < item.rating ? '' : '-o')} />
                                                            })}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
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
        productNew: state.Ecomercial.productNew,
        categories: state.Ecomercial.categories,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {

        fetchProductNew: () => {
            dispatch(fetchProductNewRequest());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewArrival);

