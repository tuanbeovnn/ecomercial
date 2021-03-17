import React from 'react';
import { useSelector } from 'react-redux';
import {removeProductWishList, addCartRequest} from '../redux/actions/index'; 
import { connect } from 'react-redux';

const WishListPage = (props) => {
     const  {wishList} = useSelector(state => state.Ecomercial); 


    return (
        <div>
            {/* Page Banner Section Start */}
            <div className="page-banner-section section">
                <div className="page-banner-wrap row row-0 d-flex align-items-center ">
                    {/* Page Banner */}
                    <div className="col-lg-4 col-12 order-lg-2 d-flex align-items-center justify-content-center">
                        <div className="page-banner">
                            <h1>Wishlist</h1>
                            <p>similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita</p>
                            <div className="breadcrumb">
                                <ul>
                                    <li><a href="#">HOME</a></li>
                                    <li><a href="#">Shop</a></li>
                                    <li><a href="#">Wishlist</a></li>
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
            {/* Cart Page Start */}
            <div className="page-section section mt-90 mb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <form action="#">
                                <div className="cart-table table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="pro-thumbnail">Image</th>
                                                <th className="pro-title">Product</th>
                                                <th className="pro-price">Price</th>
                                                <th className="pro-quantity">Quantity</th>
                                                <th className="pro-subtotal">Total</th>
                                                <th className="pro-remove">Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {wishList.map((item, index) => {
                                                return <tr key = {index}>
                                                <td className="pro-thumbnail"><a href="#"><img src={item.image} alt="Product" /></a></td>
                                                <td className="pro-title"><a href="#">{item.name}</a></td>
                                                <td className="pro-price"><span>{item.price}</span></td>
                                                <td className="pro-quantity"><div className="pro-qty"><input type="text" defaultValue={1} /></div></td>
                                                <td className="pro-addtocart"><button onCliick = {() =>{props.addCartRequest(item)}}>add to cart</button></td>
                                                <td className="pro-remove" onClick = {()=>{props.removeProductWishList(item)}}><a href="#"><i className="fa fa-trash-o" /></a></td>
                                            </tr>
                                            })}
                                          
                                        </tbody>
                                    </table>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Cart Page End */}
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
            </div>{/* Banner Section End */}
        </div>

    )

}
const mapDispatchToProps = (dispatch, props) => {
    return {
        removeProductWishList: (product) => {
            dispatch(removeProductWishList(product));
        }, 
        addCartRequest : (product) =>{
            dispatch(addCartRequest(product));
        }

    }
}
export default connect(null, mapDispatchToProps)(WishListPage);


