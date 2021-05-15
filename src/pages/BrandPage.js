import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addCartRequest, addCompareRequest, addWishListRequest, compareRemoveRequest, fetchProductByBrandRequest, fetchProductByCategoriesRequest, removeCartRequest, wishListRemoveRequest } from '../redux/actions/index';
import { BrowserRouter as Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import qs from 'qs';

const size = 8;
class BrandPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            addToCart: true,
            tab: 0,
            visibleSelect: false,
            sorts: [
                { value: 'rating,desc', label: 'Best rated' },
                { value: 'created_date', label: 'Newest Product' },
                { value: 'price,asc', label: 'Price: low to high' },
                { value: 'price,desc', label: 'Price: high to low' }
            ]

        }
    }
    componentDidMount() {

        console.log(this.props);
        const page = Math.max(Number(this.props.match.params.page - 1) || 0, 0);
        // const page = (Number(this.props.match.params.page - 1)||0);
        const id = this.props.match.params.id;
        console.log(id);



        const callback = (data) => {

        }
        this.props.fetchProductByBrand({ id, page, size }, callback);
    }

    componentDidUpdate(preProps, preState) {
        const queryStringOld = preProps.location.search;
        const queryOld = queryStringOld && qs.parse(queryStringOld.slice(1)) || {};
        const oldSort = queryOld.sort;

        const pageOld = preProps.match.params.page;
        const oldId = preProps.match.params.id;

        const queryString = this.props.location.search;
        const query = queryString && qs.parse(queryString.slice(1)) || {};
        const sort = query.sort;

        const id = this.props.match.params.id;
        const page = this.props.match.params.page;


        if (page !== pageOld || id !== oldId || sort !== oldSort) {
            const pageNumber = Math.max(Number(page - 1) || 0, 0);
            // const params = { code, name, page: pageNumber, size: pageSize };
            const callback = (data) => { }
            // console.log(params);
            console.log(id);
            this.props.fetchProductByBrand({ id, page: pageNumber, size, sort }, callback);
        }

    }

    handlePageClick = (e1) => {
        const id = this.props.match.params.id;
        const currentPage = Number(this.props.match.params.page) || 1;

        const queryString = this.props.location.search;
        const query = queryString && qs.parse(queryString.slice(1)) || {};
        const sort = query.sort || 'price,asc';
        
        if (e1.selected + 1 !== currentPage) {
            this.props.history.push(`/listBrand/${id}/${e1.selected + 1}?sort=${sort}`);
        }

    }


    onSort = (value) => {
        this.setState({ selected: value, visibleSelect: false })
        const id = this.props.match.params.id;
        const currentPage = Number(this.props.match.params.page) || 1;


        this.props.history.push(`/listBrand/${id}/1?sort=${value}`);

    }
    render() {
        const { selected, visibleSelect, sorts } = this.state;
        const { addCompare, removeCompare, addWishList, removeWishList, productBrand, categories, cart, compare, wishList, addCart, removeCart, total } = this.props;
        const currentPage = Number(this.props.match.params.page) || 1;
        const totalPage = Math.ceil(total / size) || '';

        const currentSort = sorts.find(c => c.value === selected);
        console.log(currentSort);


        return (

            <div>
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
                                                <a onClick={(e) => { e.preventDefault(); this.setState({ tab: 0 }) }} className={this.state.tab === 0 ? "active" : ""} data-target="grid"><i className="fa fa-th" /></a>
                                                <a onClick={(e) => { e.preventDefault(); this.setState({ tab: 1 }) }} className={this.state.tab === 1 ? "active" : ""} data-target="list"><i className="fa fa-list" /></a>
                                            </div>
                                            {/* Product Showing */}
                                            {/* <div className="product-showing">
                                                <p>Showing</p>
                                                <select name="showing" className="nice-select">
                                                    <option value={1}>8</option>
                                                    <option value={2}>12</option>
                                                    <option value={3}>16</option>
                                                    <option value={4}>20</option>
                                                    <option value={5}>24</option>
                                                </select>
                                            </div> */}
                                            {/* Product Short */}
                                            <div className="product-short">
                                                <p>Sort by</p>
                                                <div className={visibleSelect ? "nice-select open" : "nice-select"}>
                                                    <span onClick={() => this.setState({ visibleSelect: !visibleSelect })} className="current">{currentSort && currentSort.label || "Newest Product"}</span>
                                                    <ul className="list">
                                                        <li onClick={() => this.onSort()} className={!selected ? "option selected focus" : "option"}>Newest Product</li>
                                                        {sorts.map((item, index) => {
                                                            return <li
                                                                key={index}
                                                                onClick={() => this.onSort(item.value)}
                                                                className={selected === item.value ? "option selected focus" : "option"}
                                                                value={item.value}
                                                            >
                                                                {item.label}
                                                            </li>
                                                        })}
                                                    </ul>
                                                </div>
                                            </div>

                                            {/* Product Pages */}
                                            <div className="product-pages">
                                                <p>Pages {currentPage} of {totalPage}</p>
                                            </div>
                                        </div>{/* Shop Top Bar End */}
                                    </div>
                                </div>
                                {/* Shop Product Wrap Start */}
                                {/* Shop Product Wrap Start */}
                                <div className={this.state.tab === 0 ? "shop-product-wrap row grid" : "shop-product-wrap row list"}>

                                    {productBrand.map((item, index) => {
                                        let technicalInfo;
                                        try {
                                            technicalInfo = JSON.parse(item.technicalInfo);
                                        } catch {
                                            technicalInfo = {};
                                        }
                                        const categoryProduct = categories && categories.find(cate => cate.code === item.categoryCode);
                                        const existCart = cart.find(p => p.id === item.id);
                                        const existCompare = compare.find(p => p.id === item.id);
                                        const existWishList = wishList.find(p => p.id === item.id);
                                        return (
                                            <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-12 pb-30 pt-10">

                                                <div className="ee-product">
                                                    {/* Image */}
                                                    <div className="image">
                                                        <Link className="img" to={"/details/" + item.code}>
                                                            <img src={item.image[0]} alt={item.name} />
                                                        </Link>
                                                        <div className="wishlist-compare">
                                                            <a className={existCompare ? "added" : ""} data-tooltip="Compare" onClick={() => { existCompare ? removeCompare(item.id) : addCompare(item) }}>
                                                                <i className="ti-control-shuffle" />
                                                            </a>
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
                                                            <h5 className="price">${item.price}</h5>
                                                            <div className="ratting">
                                                                {new Array(5).fill(0).map((star, index) => {
                                                                    return <i key={index} className={"fat fa-star" + (index < item.rating ? '' : '-o')} />
                                                                })}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="ee-product-list">
                                                    {/* Image */}
                                                    <div className="image">
                                                        <Link className="img" to={"/details/" + item.code}>
                                                            <img src={item.image[0]} alt={item.image} />
                                                        </Link>
                                                    </div>
                                                    {/* Content */}
                                                    <div className="content">
                                                        {/* Category & Title */}
                                                        <div className="head-content">
                                                            <div className="category-title">
                                                                <a className="cat">{categoryProduct && categoryProduct.name}</a>
                                                                <h5 className="title"><a href="single-product.html">{item.name}</a></h5>
                                                            </div>
                                                            <h5 className="price">{item.price}$</h5>
                                                        </div>
                                                        <div className="left-content">
                                                            <div className="ratting">
                                                                {new Array(5).fill(0).map((star, index) => {
                                                                    return <i key={index} className={"fat fa-star" + (index < item.rating ? '' : '-o')} />
                                                                })}
                                                            </div>
                                                            <div className="desc">
                                                                <p>{item.description}</p>
                                                            </div>
                                                            <div className="actions">
                                                                <a className={existCart ? "add-to-cart added" : "add-to-cart"} onClick={() => { existCart ? removeCart(item.id) : addCart(item) }}>
                                                                    <i className={existCart ? "ti-check" : "ti-shopping-cart"} />
                                                                    <span>{existCart ? "ADDED" : "ADD TO CART"}</span>
                                                                </a>
                                                                <div className="wishlist-compare">
                                                                    <a className={existCompare ? "added" : ""} data-tooltip="Compare" onClick={() => { existCompare ? removeCompare(item.id) : addCompare(item) }}>
                                                                        <i className="ti-control-shuffle" />
                                                                    </a>
                                                                    <a className={existWishList ? "added" : ""} data-tooltip="Wishlist" onClick={() => { existWishList ? removeWishList(item.id) : addWishList(item) }}>
                                                                        <i className="ti-heart" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="right-content">
                                                            <div className="specification">
                                                                <h5>Specifications</h5>
                                                                <ul>
                                                                    {Object.values(technicalInfo).map((item, index) => {// lay mang cac fields cua object
                                                                        return (
                                                                            <li key={index}>{item}</li>
                                                                        )
                                                                    })}
                                                                </ul>
                                                            </div>
                                                            <span className="availability">Availability: <span>{item.status}</span></span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                        )
                                    })}
                                </div>{/* Shop Product Wrap End */}
                                <div className="row mt-30">
                                    <div className="col">
                                        <ReactPaginate
                                            previousLabel={<><i className="fa fa-angle-left" />Back</>}// bien 2 node thanh 1 node
                                            nextLabel={<>Next<i className="fa fa-angle-right" /></>}
                                            breakLabel={"..."}
                                            breakClassName={"break-me"}
                                            // pageCount={20}
                                            pageCount={totalPage}
                                            marginPagesDisplayed={2}
                                            pageRangeDisplayed={2}
                                            onPageChange={this.handlePageClick}
                                            containerClassName={"pagination"}
                                            subContainerClassName={"pages pagination"}
                                            activeClassName={"active"}
                                            initialPage={currentPage - 1}
                                        />
                                        {/* <ul className="pagination">
                                            <li>
                                                <Link
                                                    to={`/product/${code}/${currentPage - 1}`}
                                                    onClick={(e) => {
                                                        if (currentPage === 1) {
                                                            e.preventDefault();
                                                        }
                                                    }}
                                                >
                                                    <i className="fa fa-angle-left" />Back
                                                </Link>
                                            </li>
                                            {new Array(3).fill(0).map((item, index) => {
                                                const page = index + 1;
                                                return (
                                                    <li key={index}>
                                                        <Link to={`/product/${code}/${page}`}>
                                                            {page}
                                                        </Link>
                                                    </li>
                                                )
                                            })}

                                            {new Array(3).fill(0).map((item, index) => {
                                                const page = index + 1;
                                                return (
                                                    <li key={index}>
                                                        <Link to={`/product/${code}/${page}`}>
                                                            {page}
                                                        </Link>
                                                    </li>
                                                )
                                            })}


                                            <li>
                                                <Link
                                                    to={`/product/${code}/${currentPage + 1}`}
                                                    onClick={(e) => {
                                                        if (currentPage === totalPage) {
                                                            e.preventDefault();
                                                        }
                                                    }}
                                                >
                                                    Next<i className="fa fa-angle-right" />
                                                </Link>
                                            </li>
                                        </ul>
                                     */}

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

const mapStateToProps = (state) => {
    return {
        productBrand: state.Ecomercial.productBrand,
        wishList: state.Ecomercial.wishList,
        compare: state.Ecomercial.compare,
        total: state.Ecomercial.total,
        currentPage: state.Ecomercial.currentPage,

        // categories: state.Ecomercial.categories,
        cart: state.Ecomercial.cart

    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchProductListCategory: (params, callback) => {
            dispatch(fetchProductByCategoriesRequest(params, callback));
        },
        addWishList: (product) => {
            dispatch(addWishListRequest(product));
        },
        removeWishList: (id) => {
            dispatch(wishListRemoveRequest(id));
        },
        addCompare: (product) => {
            dispatch(addCompareRequest(product));
        },
        removeCompare: (id) => {
            dispatch(compareRemoveRequest(id));
        },
        addCart: (product) => {
            dispatch(addCartRequest(product));
        },
        removeCart: (id) => {
            dispatch(removeCartRequest(id));
            //dispatch((dispatch) => { dispatch({ type: 'CART_REMOVE', id: id }) });
        },
        fetchProductByBrand: (params, callback) => {
            dispatch(fetchProductByBrandRequest(params, callback));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BrandPage);

