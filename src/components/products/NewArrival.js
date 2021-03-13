import React, { Component } from 'react';
import { addCartRequest, fetchProductNewRequest, removeCartRequest } from '../../redux/actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class NewArrival extends Component {

    componentDidMount() {
        this.props.fetchProductNew();
    }
    render() {
       
        const { productNew, categories, cart, addCart, removeCart } = this.props;
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
                                    const existCart = cart.find(p => p.id === item.id);
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
                                                    <a className={existCart ? "add-to-cart added" : "add-to-cart"} onClick={() => { existCart ? removeCart(item.id) : addCart(item) }}>
                                                        <i className={existCart ? "ti-check" : "ti-shopping-cart"} />
                                                        <span>{existCart ? "ADDED" : "ADD TO CART"}</span>
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
        cart: state.Ecomercial.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {

        fetchProductNew: () => {
            dispatch(fetchProductNewRequest());
        },
        addCart: (product) => {
            dispatch(addCartRequest(product));
        },
        removeCart: (id) => {
            dispatch(removeCartRequest(id));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewArrival);

