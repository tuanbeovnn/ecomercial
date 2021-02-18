import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import routes from './../routers/routes';
import { fetchCategoriesRequest } from '../redux/actions/index';
import { connect } from 'react-redux';

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to} exact={activeOnlyWhenExact} children={(match) => {
                let active = match ? 'active' : '';
                return (
                    // <li className={match ? 'active' : ''}>
                    //     <Link className="nav-link" to={to}>{label}</Link>
                    // </li>
                     <div className="header-account-links">
                        <Link to={to}>{label}<i className="icofont icofont-user-alt-7" /><span>my account</span></Link>
                     </div>

                )
            }}
        />
    )
}
class Header extends Component {

    state = {
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



    render() {
        const {menus} = this.state;
        const { categories } = this.props;

        return (
        
                <div className="header-section section">
                {/* Header Top Start */}
                <div className="header-top header-top-one header-top-border pt-10 pb-10">
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col mt-10 mb-10">
                                {/* Header Links Start */}
                                <div className="header-links">
                                    <a href="track-order.html"><img src="/images/icons/car.png" alt="Car Icon" /> <span>Track your order</span></a>
                                    <a href="store.html"><img src="/images/icons/marker.png" alt="Car Icon" /> <span>Locate Store</span></a>
                                </div>{/* Header Links End */}
                            </div>
                            <div className="col order-12 order-xs-12 order-lg-2 mt-10 mb-10">
                                {/* Header Advance Search Start */}
                                <div className="header-advance-search">
                                    <form action="#">
                                        <div className="input"><input type="text" placeholder="Search your product" /></div>
                                        <div className="select">
                                            <select className="nice-select">
                                                <option value="0">All Categories</option>
                                                {categories.map((item) => {
                                                    return <option value={item.id} key={item.id}>{item.name}</option>
                                                })}
                                            </select>
                                        </div>
                                        <div className="submit"><button><i className="icofont icofont-search-alt-1" /></button></div>
                                    </form>
                                </div>{/* Header Advance Search End */}
                            </div>
                            <div className="col order-2 order-xs-2 order-lg-12 mt-10 mb-10">
                                {/* Header Account Links Start */}
                                <div className="header-account-links">
                                    <a href="register.html"><i className="icofont icofont-user-alt-7" /> <span>my account</span></a>
                                    <Link to="/login">
                                        <a><i className="icofont icofont-login d-none" /> <span>Login</span></a>
                                    </Link>
                                     {/* {this.showMenu(menusUp)} */}
                                </div>
                                {/* Header Account Links End */}
                            </div>
                        </div>
                    </div>
                </div>{/* Header Top End */}
                {/* Header Bottom Start */}
                <div className="header-bottom header-bottom-one header-sticky">
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col mt-15 mb-15">
                                {/* Logo Start */}
                                <div className="header-logo">
                                    <a href="index.html">
                                        <img src="/images/logo.png" alt="E&E - Electronics eCommerce Bootstrap4 HTML Template" />
                                        <img className="theme-dark" src="/images/logo-light.png" alt="E&E - Electronics eCommerce Bootstrap4 HTML Template" />
                                    </a>
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
                                                            <li><a href="cart.html">Cart</a></li>
                                                            <li><a href="checkout.html">Checkout</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#">Column Two</a>
                                                        <ul>
                                                            <li><a href="compare.html">Compare</a></li>
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
                                            <li><a href="contact.html">CONTACT</a></li>
                                        </ul>
                                    </nav>
                                </div>{/* Main Menu End */}
                            </div>
                            <div className="col order-2 order-lg-12 order-xl-12">
                                {/* Header Shop Links Start */}
                                <div className="header-shop-links">
                                    {/* Compare */}
                                    <a href="compare.html" className="header-compare"><i className="ti-control-shuffle" /></a>
                                    {/* Wishlist */}
                                    <a href="wishlist.html" className="header-wishlist"><i className="ti-heart" /> <span className="number">3</span></a>
                                    {/* Cart */}
                                    <a href="cart.html" className="header-cart"><i className="ti-shopping-cart" /> <span className="number">3</span></a>
                                </div>{/* Header Shop Links End */}
                            </div>
                            {/* Mobile Menu */}
                            <div className="mobile-menu order-12 d-block d-lg-none col" />
                        </div>
                    </div>
                </div>{/* Header Bottom End */}
                {/* Header Category Start */}
                <div className="header-category-section">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                {/* Header Category */}
                                <div className="header-category">
                                    {/* Category Toggle Wrap */}
                                    <div className="category-toggle-wrap d-block d-lg-none">
                                        {/* Category Toggle */}
                                        <button className="category-toggle">Categories <i className="ti-menu" /></button>
                                    </div>
                                    {/* Category Menu */}
                                    <nav className="category-menu">
                                        <ul>
                                            <li><a href="category-1.html">Tv &amp; Audio System</a></li>
                                            <li><a href="category-2.html">Computer &amp; Laptop</a></li>
                                            <li><a href="category-3.html">Phones &amp; Tablets</a></li>
                                            <li><a href="category-1.html">Home Appliances</a></li>
                                            <li><a href="category-2.html">Kitchen appliances</a></li>
                                            <li><a href="category-3.html">Accessories</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            
            
        );
    }
    // showMenu = (menusUp) => {
    //     var result = null;
    //     if (menusUp.length > 0) {
    //         console.log(menusUp.length);
    //         result = menusUp.map((menu, index) => {
    //             return (
    //                  <MenuLink key={index} label={menu.name} to={menu.to} activeOnlyWhenExact={menu.exact} />
    //             );

    //         });
    //     }
    //     return result;
    // }
    // showContentMenu = (routes) => {
    //     let res = null;
    //     if (routes.length > 0) {
    //         res = routes.map((route, index) => {
    //             return (
    //                 <Route
    //                     key={index}
    //                     path={route.path}
    //                     exact={route.exact}
    //                     component={route.main}
    //                 />
    //             )
    //         });
    //     }
    //     return res;
    // }
}

const mapStateToProps = state => {
    return {
        
        categories: state.Ecomercial.categories
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllCategories: () => {
            dispatch(fetchCategoriesRequest());
        
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Header);
