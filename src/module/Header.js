import React, { Component } from 'react';
import {  Link } from 'react-router-dom';
import { fetchCategoriesRequest } from '../redux/actions/index';
import { connect } from 'react-redux';
import MiniCart from '../components/products/MiniCart';
import { Popover, Button } from 'antd';
class Header extends Component {

    state = {
        visibleSelect: false,
        menus: [
            {
                id: 1,
                name: "Home",
                url: "/"
            },
            {
                id: 2,
                name: "Shop",
                url: "/",
                children: [
                    {
                        id: 1,
                        name: "Shop Grid",
                        url: "/",
                        children: [
                            {
                                id: 1,
                                name: "Grid 1",
                                url: "/"
                            }
                        ]
                    },
                    {
                        id: 2,
                        name: "Sigle Product",
                        url: "/",
                        children: [
                            {
                                id: 1,
                                name: "Grid 2",
                                url: "/"
                            }
                        ]
                    }
                ],
                typeMemu: 1,
            },
            {
                id: 3,
                name: "Pages",
                url: "/",
                children: [
                    {
                        id: 1,
                        name: "Shop Grid",
                        url: "/",
                        children: [
                            {
                                id: 1,
                                name: "Grid 1",
                                url: "/"
                            }
                        ]
                    },
                    {
                        id: 2,
                        name: "Sigle Product",
                        url: "/",
                        children: [
                            {
                                id: 1,
                                name: "Grid 2",
                                url: "/"
                            }
                        ]
                    }
                ],
                typeMemu: 2,
            }
        ],
    }
    componentDidMount() {
        this.props.fetchAllCategories();

    }
    handleSubmit= (e)=> {
        e.preventDefault();
    }
    handdleToggle=()=>{
        this.setState({
            openToggle : !this.state.openToggle
        })
    }
    render() {
        const { menus, visibleSelect, selected, openToggle} = this.state;
        const { categories, user } = this.props;
        const category = categories.find(c => c.code === selected);
       
        return (
            <div className="header-section section">
                {/* Header Top Start */}
                <div className="header-top header-top-one header-top-border pt-10 pb-10">
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col mt-10 mb-10">
                                {/* Header Links Start */}
                                <div className="header-links">
                                    <Link to="/track">
                                        <img src="/images/icons/car.png" alt="Car Icon" /> <span>Track your order</span>
                                    </Link>
                                    <Link to="/store">
                                        <img src="/images/icons/marker.png" alt="Car Icon" /> <span>Locate Store</span>
                                    </Link>
                                </div>{/* Header Links End */}
                            </div>
                            <div className="col order-12 order-xs-12 order-lg-2 mt-10 mb-10">
                                {/* Header Advance Search Start */}
                                <div className="header-advance-search">
                                    <form action="#"onSubmit = {this.handleSubmit}>
                                        <div className="input"><input type="text" placeholder="Search your product" /></div>
                                        <div className="select">
                                            <div className={visibleSelect ? "nice-select open" : "nice-select"}>
                                                <span onClick={()=>this.setState({visibleSelect : !visibleSelect})} className="current">{category && category.name || "All Categories"}</span>
                                                <ul className="list">
                                                    <li onClick={() => this.setState({ selected: undefined, visibleSelect : false })} className={!selected ? "option selected focus" : "option"}>All Categories</li>
                                                    {categories.map((item, index) => {
                                                        return <li 
                                                        key={index} 
                                                        onClick={() => this.setState({ selected: item.code, visibleSelect : false })}
                                                        className={selected === item.code ? "option selected focus" : "option"}
                                                        >
                                                        {item.name}
                                                        </li>
                                                    })}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="submit"><button><i className="icofont icofont-search-alt-1" /></button></div>
                                    </form>
                                </div>{/* Header Advance Search End */}
                            </div>
                            <div className="col order-2 order-xs-2 order-lg-12 mt-10 mb-10">
                                {user && user.id >= 0 ?
                                    <div className="header-account-links">
                                        <Link to="/myaccount">
                                            <Popover placement="bottom"  content={()=>{                   
                                                return <div style={{width: "30%", position: "absolute", left: "71.5%", top: "15px", "z-index":"100"}}>
                                                      <Link to="/changepassword/">
                                                     <p>Change Password</p>
                                                    </Link>
                                             

                                               </div>}
                                            } trigger="click">
                                            <i className="icofont icofont-user-alt-7" /> <span>{user.username}</span>
                                            </Popover>



                                        </Link>
                                    </div>
                                    : <div className="header-account-links">
                                        {/* <Link to="/register">
                                            <i className="icofont icofont-login d-none" /> <span>Register</span>
                                        </Link> */}
                                        <Link to="/login">
                                            <i className="icofont icofont-login d-none" style={{width: "100%", position: "relative"}} /> <span>Login</span>
                                        </Link>
                                    </div>
                                }
                            </div>
                            {/* Header Account Links End */}
                        </div>
                    </div>
                </div>
                {/* Header Bottom Start */}
                <div className="header-bottom header-bottom-one header-sticky">
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col mt-15 mb-15">
                                {/* Logo Start */}
                                <div className="header-logo">
                                    <Link to="/">
                                       
                                            <img src="/images/logo.png" alt="E&E - Electronics eCommerce Bootstrap4 HTML Template" />
                                            <img className="theme-dark" src="/images/logo-light.png" alt="E&E - Electronics eCommerce Bootstrap4 HTML Template" />
                                       
                                    </Link>

                                </div>{/* Logo End */}
                            </div>
                            <div className="col order-12 order-lg-2 order-xl-2 d-none d-lg-block">
                                {/* Main Menu Start */}
                                <div className="main-menu">
                                    <nav>
                                        <ul>
                                            {menus.map((item) => {
                                                if (item.children) {
                                                    if (item.typeMemu === 1) {
                                                        return (
                                                            <li className="menu-item-has-children" key={item.id}><a href={item.url}>{item.name}</a>
                                                                <ul className="sub-menu">
                                                                    {item.children.map((item2) => {
                                                                        if (item2.children) {
                                                                            return (
                                                                                <li className="menu-item-has-children" key={item2.id}><a href={item2.url}>{item2.name}</a>
                                                                                    <ul className="sub-menu">
                                                                                        {item2.children.map((item3) => {
                                                                                            return (
                                                                                                <li key={item3.id}><a href={item3.url}>{item3.name}</a></li>
                                                                                            )
                                                                                        })}
                                                                                    </ul>
                                                                                </li>
                                                                            )
                                                                        } else {
                                                                            return (
                                                                                <li key={item2.id}><a href={item2.url}>{item2.name}</a></li>
                                                                            )
                                                                        }
                                                                    })}
                                                                </ul>
                                                            </li>
                                                        )
                                                    }
                                                } else {
                                                    return <li className="active" key={item.id}><a href={item.url}>{item.name}</a></li>
                                                }
                                            })}
                                            <li className="menu-item-has-children"><a href="#">PAGES</a>
                                                <ul className="mega-menu three-column">
                                                    <li><a href="#">Column One</a>
                                                        <ul>
                                                            <li><a href="about-us.html">About us</a></li>
                                                            <li><a href="best-deals.html">Best Deals</a></li>
                                                            <li><a>Cart</a></li>
                                                            <li><a href="checkout.html">Checkout</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#">Column Two</a>
                                                        <ul>
                                                            <li><a >Compare</a></li>
                                                            <li><a href="faq.html">Faq</a></li>
                                                            <li><a href="feature.html">Feature</a></li>
                                                            <li><a href="login.html">Login</a></li>
                                                            <li><a href="register.html">Register</a></li>
                                                            <li><a href="store.html">Store</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#">Column Three</a>
                                                        <ul>
                                                            <li><a href="terms-conditions.html">Terms &amp; Conditions</a></li>
                                                            <li><a href="track-order.html">Track Order</a></li>
                                                            <li><a href="wishlist.html">Wishlist</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children"><a href="blog-1-column-left-sidebar.html">BLOG</a>
                                                <ul className="sub-menu">
                                                    <li><a href="blog-1-column-left-sidebar.html">Blog 1 Column Left Sidebar</a></li>
                                                    <li><a href="single-blog-left-sidebar.html">Single Blog Left Sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li><a>CONTACT</a></li>
                                        </ul>
                                    </nav>
                                </div>{/* Main Menu End */}
                            </div>
                            <div className="col order-2 order-lg-12 order-xl-12">
                                {/* Header Shop Links Start */}
                                <div className="header-shop-links">
                                    {/* Compare */}
                                    <Link className="header-compare" to="/compare">
                                        <i className="ti-control-shuffle" />
                                    </Link>
                                    <Link className="header-wishlist" to="/wishlist">
                                       <i className="ti-heart" /> <span className="number">3</span>
                                    </Link>

                                    {/* Wishlist */}

                                    {/* Cart */}
                                    <a onClick={this.handdleToggle} className="header-cart"><i className="ti-shopping-cart" /> <span className="number">3</span></a>
                                </div>{/* Header Shop Links End */}
                            </div>
                            {/* Mobile Menu */}
                            <div className="mobile-menu order-12 d-block d-lg-none col" />
                        </div>
                    </div>
                </div>{/* Header Bottom End */}
                {/* Header Category Start */}
                <MiniCart openToggle = {openToggle} handdleClose = {this.handdleToggle}/>
            </div >
        );
    }

}

const mapStateToProps = state => {
    return {
        categories: state.Ecomercial.categories,
        user: state.Ecomercial.user
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllCategories: () => {
            dispatch(fetchCategoriesRequest());
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
