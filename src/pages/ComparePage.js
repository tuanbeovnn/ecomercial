import React, { Component } from 'react'
import { addCartRequest, compareRemoveRequest, getCompareFromLocalRequest, removeCartRequest } from '../redux/actions'
import { connect } from 'react-redux';
class ComparePage extends Component {


    render() {
        const { compare, removeCompare, addCart, removeCart, cart, categories } = this.props;
        console.log(compare);
        return (
            <div>
                {/* Page Banner Section Start */}
                <div className="page-banner-section section">
                    <div className="page-banner-wrap row row-0 d-flex align-items-center ">
                        {/* Page Banner */}
                        <div className="col-lg-4 col-12 order-lg-2 d-flex align-items-center justify-content-center">
                            <div className="page-banner">
                                <h1>Compare</h1>
                                <p>similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita</p>
                                <div className="breadcrumb">
                                    <ul>
                                        <li><a href="#">HOME</a></li>
                                        <li><a href="#">Shop</a></li>
                                        <li><a href="#">Compare</a></li>
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
                {/* Compare Page Start */}
                <div className="page-section section mt-90 mb-90">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <form action="#">
                                    {/* Compare Table */}
                                    <div className="compare-table table-responsive">
                                        <table className="table mb-0">
                                            <tbody>

                                                <tr>
                                                    <td className="first-column">Product</td>
                                                    {compare.map((item, index) => {
                                                        const categoryProduct = categories && categories.find(cate => cate.code === item.categoryCode);
                                                        return (
                                                            <td key={index} className="product-image-title">
                                                                <a href="#" className="image"><img src={item.image && item.image[0]} alt="Compare Product" /></a>
                                                                <a href="#" className="category">{categoryProduct && categoryProduct.name}</a>
                                                                <a href="#" className="title">{item.name}</a>
                                                            </td>
                                                        )

                                                    })}
                                                </tr>
                                                <tr>
                                                    <td className="first-column">Description</td>
                                                    {compare.map((item, index) => {

                                                        return (
                                                            <td key={index} className="pro-desc">
                                                                <p>{item.description}</p>
                                                            </td>
                                                        )
                                                    })}
                                                </tr>
                                                <tr>
                                                    <td className="pro-price">Price</td>
                                                    {compare.map((item, index) => {
                                                        return (
                                                            <td key={index} className="pro-desc">
                                                                <p>{item.price}</p>
                                                            </td>
                                                        )
                                                    })}
                                                </tr>
                                                {/* <tr>
                                                    <td className="first-column">Color</td>
                                                    <td className="pro-color">Black</td>
                                                    <td className="pro-color">Black</td>
                                                    <td className="pro-color">Black</td>
                                                </tr> */}
                                                <tr>
                                                    <td className="first-column">Stock</td>
                                                    {compare.map((item, index) => {
                                                        return (
                                                            <td key={index} className="pro-stock">
                                                                <p>{item.status}</p>
                                                            </td>
                                                        )
                                                    })}
                                                </tr>
                                                <tr>
                                                    <td className="first-column">Add to cart</td>
                                                    {compare.map((item, index) => {
                                                        const existCart = cart.find(p => p.id === item.id);
                                                        return (
                                                            <td key={index} className="pro-addtocart">
                                                                <a className={existCart ? "add-to-cart added" : "add-to-cart"} onClick={() => { existCart ? removeCart(item.id) : addCart(item) }}>
                                                                    <i className={existCart ? "ti-check" : "ti-shopping-cart"} />
                                                                    <span>{existCart ? "ADDED" : "ADD TO CART"}</span>
                                                                </a>
                                                            </td>
                                                        )
                                                    })}
                                                </tr>
                                                <tr>
                                                    <td className="first-column">Delete</td>
                                                    {compare.map((item, index) => {
                                                        return (
                                                            <td key={index} onClick={() => { removeCompare(item.id) }} className="pro-remove"><a ><i className="fa fa-trash-o" /></a></td>
                                                        )
                                                    })}


                                                </tr>
                                                <tr>
                                                    <td className="first-column">Rating</td>
                                                    {compare.map((item, index) => {
                                                        return (
                                                            <td key ={index}className="pro-ratting">
                                                                {new Array(5).fill(0).map((star, index) => {
                                                                    return <i key={index} className={"fa fa-star" + (index < item.rating ? '' : '-o')} />
                                                                })}
                                                            </td>
                                                        )
                                                    })}

                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Compare Page End */}
            </div>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        compare: state.Ecomercial.compare,
        categories: state.Ecomercial.categories,
        cart: state.Ecomercial.cart
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {

        removeCompare: (id) => {
            dispatch(compareRemoveRequest(id));
        },
        addCart: (product) => {
            dispatch(addCartRequest(product));
        },
        removeCart: (id) => {
            dispatch(removeCartRequest(id));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ComparePage);
