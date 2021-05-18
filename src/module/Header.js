import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { fetchBrandRequest, fetchCategoriesRequest, getCompareFromLocalRequest, getUserFromStorageRequest, getWishListFromLocalRequest, searchProductRequest } from '../redux/actions/index';
import { connect } from 'react-redux';
import MiniCart from '../components/products/MiniCart';
import qs from 'qs';
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
                        name: "Computer & Laptop",
                        url: "/product/laptop",
                        code: "laptop",
                        
                        children: [
                            {
                                id: 1,
                                name: "Apple",
                                url: "/apple"
                            },
                            {
                                id: 2,
                                name: "Sam Sung",
                                url: "/samsung"
                            },
                            {
                                id: 3,
                                name: "Lenovo",
                                url: "/lenovo"
                            },
                            {
                                id: 4,
                                name: "Sony",
                                url: "/sony"
                            },
                            {
                                id: 5,
                                name: "LG",
                                url: "/lg"
                            },
                            {
                                id: 6,
                                name: "Huawei",
                                url: "/huawei"
                            }
                        ]
                    },
                    {
                        id: 2,
                        name: "Phone & Tablet",
                        url: "/product/mobile",
                        code: "mobile",
                        children: [
                            {
                                id: 1,
                                name: "Apple",
                                url: "/apple"
                            },
                            {
                                id: 2,
                                name: "Sam Sung",
                                url: "/samsung"
                            },
                            {
                                id: 3,
                                name: "Lenovo",
                                url: "/lenovo"
                            },
                            {
                                id: 4,
                                name: "Sony",
                                url: "/sony"
                            },
                            {
                                id: 5,
                                name: "LG",
                                url: "/lg"
                            },
                            {
                                id: 6,
                                name: "Huawei",
                                url: "/huawei"
                            }
                        ]
                    },
                    {
                        id: 3,
                        name: "Tv & Entertainment",
                        url: "/product/entertainment",
                        code: "entertainment",
                        children: [
                            {
                                id: 1,
                                name: "Apple",
                                url: "/apple"
                            },
                            {
                                id: 2,
                                name: "Sam Sung",
                                url: "/samsung"
                            },
                            {
                                id: 3,
                                name: "Lenovo",
                                url: "/lenovo"
                            },
                            {
                                id: 4,
                                name: "Sony",
                                url: "/sony"
                            },
                            {
                                id: 5,
                                name: "LG",
                                url: "/lg"
                            },
                            {
                                id: 6,
                                name: "Huawei",
                                url: "/huawei"
                            }
                        ]
                    },
                    {
                        id: 4,
                        name: "KitChen Appliances",
                        url: "/product/kitchen",
                        code: "kitchen",
                        children: [
                            {
                                id: 1,
                                // name: "Apple",
                                // url: "/other"
                            },
                            {
                                id: 2,
                                name: "Other",
                                url: "/other"
                            }
                            
                        ]
                    },
                    {
                        id: 5,
                        name: "Accessories",
                        url: "/product/accessories",
                        code: "accessories",
                        children: [
                            {
                                id: 1,
                                // name: "Apple",
                                // url: "/apple"
                            },
                            {
                                id: 2,
                                // name: "Sam Sung",
                                // url: "/samsung"
                            }
                            
                        ]
                    }
                ],
                typeMemu: 1,
            }
        ],
    }
    componentDidMount() {
        this.props.fetchAllCategories();
        this.props.getUserFromToken();
        this.props.getCompare();
        this.props.getWishList();
        this.props.fetchBrand();
        window.onscroll = () => {
            if (window.scrollY > 200 && !this.state.scroll) {
                this.setState({
                    scroll: true,
                    header: true
                })
            } else if (window.scrollY <= 2 && this.state.scroll) {
                this.setState({
                    scroll: false,
                    header: false
                })
            }

        }
        const queryString = this.props.location.search;
        const query = queryString && qs.parse(queryString.slice(1)) || {};
        const { code, name } = query;
        if (name) {

            this.setState({
                search: name// save params
            })
        }
        if (code) {
            this.setState({
                selected: code// save params
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const name = this.state.search;
        const code = this.state.selected;
        const query = { code, name }
        const url = '/search?' + qs.stringify(query);
        this.props.history.push(url);
    }
    onHandleChange = (e) => {
        this.setState({
            search: e.target.value
        })
    }
    handdleToggle = () => {
        this.setState({
            openToggle: !this.state.openToggle
        })
    }
    handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = "/";
    }
    renderSoLuong = () => {
        return this.props.cart.map((total, product, index) => {
            return total += product.qty;

        }, 0).toLocaleString();
    }

    render() {
        const { menus, visibleSelect, selected, openToggle, scroll, header } = this.state;
        const { categories, user, cart, wishList, compare, brands } = this.props;

        let totalQty = 0;
        cart.map((item) => {
            totalQty += item.qty;
        })
        let totalWishList = 0;
        wishList.map((item) => {
            totalWishList += item.qty;
        })
        let totalCompare = 0;
        compare.map((item) => {
            totalCompare += item.qty;
        })


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
                                    <form action="#" onSubmit={this.handleSubmit}>
                                        <div className="input">
                                            <input type="text"
                                                placeholder="Search your product"
                                                onChange={this.onHandleChange}
                                                value={this.state.search}

                                            />
                                        </div>
                                        <div className="select">
                                            <div className={visibleSelect ? "nice-select open" : "nice-select"}>
                                                <span onClick={() => this.setState({ visibleSelect: !visibleSelect })} className="current">{category && category.name || "All Categories"}</span>
                                                <ul className="list">
                                                    <li onClick={() => this.setState({ selected: undefined, visibleSelect: false })} className={!selected ? "option selected focus" : "option"}>All Categories</li>
                                                    {categories.map((item, index) => {
                                                        return <li
                                                            key={index}
                                                            onClick={() => this.setState({ selected: item.code, visibleSelect: false })}
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
                                            <i className="icofont icofont-user-alt-7" /> <span>{user.name}</span>
                                        </Link>
                                        <a onClick={this.handleLogout}>
                                            <i className="icofont icofont-logout" /> <span>Logout</span>
                                        </a>
                                    </div>
                                    : <div className="header-account-links">
                                        {/* <Link to="/register">
                                            <i className="icofont icofont-login d-none" /> <span>Register</span>
                                        </Link> */}
                                        <Link to="/login">
                                            <i className="icofont icofont-login d-none" /> <span>Login</span>
                                        </Link>
                                    </div>
                                }
                            </div>
                            {/* Header Account Links End */}
                        </div>
                    </div>
                </div>
                {/* Header Bottom Start */}
                <div className={"header-bottom header-bottom-one header-sticky" + (header ? " is-sticky" : '')}>
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col mt-15 mb-15">
                                {/* Logo Start */}
                                <div className="header-logo">
                                    <Link to="/">
                                        <img src="/images/nho.png" alt="E&E - Electronics eCommerce Bootstrap4 HTML Template" />
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
                                                            <li className="menu-item-has-children" key={item.id}><Link to={item.url}>{item.name}</Link>
                                                                <ul className="sub-menu">
                                                                    {item.children.map((item2) => {
                                                                        if (item2.children) {
                                                                            return (
                                                                                <li className="menu-item-has-children" key={item2.id}><Link to={"/product/" + item2.code}>{item2.name}</Link>
                                                                                    <ul className="sub-menu">
                                                                                        {item2.children.map((item3) => {
                                                                                            return (
                                                                                                <li key={item3.id}><Link to={`/code/${item2.code}${item3.url}`}>{item3.name}</Link></li>
                                                                                            )
                                                                                        })}
                                                                                    </ul>
                                                                                </li>
                                                                            )
                                                                        } else {
                                                                            return (
                                                                                <li key={item2.id}><Link to={"/product/" + item2.code}>{item2.name}</Link></li>
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
                                            <li className="menu-item-has-children"><a>PAGES</a>
                                                <ul className="mega-menu three-column">
                                                    <li><a>Infomation</a>
                                                        <ul>
                                                            <li><Link to="/about">About us</Link></li>
                                                            <li><Link to="/bestdeal-page">Best Deals</Link></li>
                                                            <li><Link to="/checkout">Checkout</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li><a>Product Brands</a>
                                                        <ul>
                                                            {brands.map((item, index) => {
                                                                return (
                                                                    <li key={index}><Link to={"/listBrand/" + item.id}>{item.name}</Link></li>
                                                                )
                                                            })}
                                                        </ul>
                                                    </li>
                                                    <li><a>Order</a>
                                                        <ul>
                                                            <li><Link to="/term">Terms &amp; Conditions</Link></li>
                                                            <li><Link to="/track">Track Order</Link></li>
                                                            <li><Link to="/wishlist">Wishlist</Link></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            {/* <li className="menu-item-has-children"><a href="blog-1-column-left-sidebar.html">BLOG</a>
                                                <ul className="sub-menu">
                                                    <li><a href="blog-1-column-left-sidebar.html">Blog 1 Column Left Sidebar</a></li>
                                                    <li><a href="single-blog-left-sidebar.html">Single Blog Left Sidebar</a></li>
                                                </ul>
                                            </li> */}
                                            <li><Link to="/contact">CONTACT</Link></li>
                                        </ul>
                                    </nav>
                                </div>{/* Main Menu End */}
                            </div>
                            <div className="col order-2 order-lg-12 order-xl-12">
                                {/* Header Shop Links Start */}
                                <div className="header-shop-links">
                                    {/* Compare */}
                                    <Link className="header-compare" to="/compare">
                                        <i className="ti-control-shuffle" /><span className="number">{totalCompare}</span>
                                    </Link>
                                    <Link className="header-wishlist" to="/wishlist">
                                        <i className="ti-heart" /> <span className="number">{totalWishList}</span>
                                    </Link>

                                    {/* Wishlist */}

                                    {/* Cart */}
                                    <a onClick={this.handdleToggle} className="header-cart">
                                        <i className="ti-shopping-cart" />
                                        <span className="number">{totalQty}</span>
                                    </a>
                                </div>{/* Header Shop Links End */}
                            </div>
                            {/* Mobile Menu */}
                            <div className="mobile-menu order-12 d-block d-lg-none col" />
                        </div>
                    </div>
                </div>{/* Header Bottom End */}
                {/* Header Category Start */}
                <MiniCart openToggle={openToggle} handdleClose={this.handdleToggle} />
                <a onClick={() => { window.scrollTo(0, 0) }} id="scrollUp" style={{ position: 'fixed', zIndex: 2147483647, display: scroll ? 'block' : 'none' }}>
                    <i className="icofont icofont-swoosh-up" />
                </a>
            </div >
        );
    }

}

const mapStateToProps = state => {
    return {
        categories: state.Ecomercial.categories,
        user: state.Ecomercial.user,
        cart: state.Ecomercial.cart,
        wishList: state.Ecomercial.wishList,
        compare: state.Ecomercial.compare,
        searchProduct: state.Ecomercial.searchProduct,
        brands: state.Ecomercial.brands
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllCategories: () => {
            dispatch(fetchCategoriesRequest());
        },
        getUserFromToken: () => {
            dispatch(getUserFromStorageRequest());
        },
        getCompare: () => {
            dispatch(getCompareFromLocalRequest());
        },
        getWishList: () => {
            dispatch(getWishListFromLocalRequest());
        },
        searchProduct: (params, callback) => {
            dispatch(searchProductRequest(params, callback));
        },
        fetchBrand: () => {
            dispatch(fetchBrandRequest());
        }


    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
