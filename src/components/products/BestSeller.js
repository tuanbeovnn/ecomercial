import React, { Component } from 'react';
import { addCartRequest, addWishListRequest, fetchProductBestSellRequest, removeCartRequest, wishListRemoveRequest } from '../../redux/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
class BestSeller extends Component {
    state = {
        addToCart: true,
    }
    componentDidMount() {
        this.props.fetchProductsBestSell();
    }
    render() {
        const { addToCart } = this.state;
        const { bestSellProducts, categories, cart, addCart, removeCart, addWishList, removeWishList, wishList } = this.props;
        return (
            <div className="product-section section mb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-40">
                            <div className="section-title-one" data-title="BEST SELLER"><h1>BEST SELLERS</h1></div>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                {bestSellProducts.map((item) => {
                                    const categoryProduct = categories && categories.find(cate => cate.code === item.categoryCode);
                                    const existCart = cart.find(p => p.id === item.id);
                                    const existWishList = wishList.find(p => p.id === item.id);
                                    return (
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-12 pb-30 pt-10" key={item.id}>
                                            {/* Product Start */}
                                            <div className="ee-product">
                                                {/* Image */}
                                                <div className="image">
                                                    <Link className="img" to={"/details/" + item.code}>
                                                        <img src={item.image && item.image[0]} alt="Product Image" />
                                                    </Link>

                                                    <div className="wishlist-compare">
                                                        <a data-tooltip="Compare"><i className="ti-control-shuffle" /></a>
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
                                                        <h5 className="price">{item.price}</h5>
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
        bestSellProducts: state.Ecomercial.bestSellProducts,
        categories: state.Ecomercial.categories,
        cart: state.Ecomercial.cart,
        wishList: state.Ecomercial.wishList
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchProductsBestSell: () => {
            dispatch(fetchProductBestSellRequest());
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
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BestSeller);
