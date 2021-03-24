import React, { Component } from 'react'
import { fetchStoreRequest } from '../redux/actions'
import { connect } from 'react-redux';
class StorePage extends Component {
    componentDidMount() {
        this.props.fetchStore();
    }
    render() {
        const { stores } = this.props;
        return (
            <div>
                {/* Page Banner Section Start */}
                <div className="page-banner-section section">
                    <div className="page-banner-wrap row row-0 d-flex align-items-center ">
                        {/* Page Banner */}
                        <div className="col-lg-4 col-12 order-lg-2 d-flex align-items-center justify-content-center">
                            <div className="page-banner">
                                <h1>Locate Store</h1>
                                <p>similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita</p>
                                <div className="breadcrumb">
                                    <ul>
                                        <li><a href="#">HOME</a></li>
                                        <li><a href="#">Locate Store</a></li>
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
                {/* Store Section Start */}
                <div className="store-section section mt-90 mb-20">
                    <div className="container">
                        <div className="row">
                            {/* Single Store */}
                            <div className="col-lg-4 col-md-6 col-12 mb-70">
                                {stores.map((item, index) => {
                                    return (
                                        <div key={index} className="single-store">
                                            <h3>{item.name}</h3>
                                            <p>{item.address}</p>
                                            <p><a>{item.phone}</a> / <a href="tel:01234567891">{item.phone}</a></p>
                                            <p><a>{item.email}</a> / <a href="#">{item.website}</a></p>
                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                    </div>
                </div>{/* Store Section End */}</div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        stores: state.Ecomercial.stores,
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchStore: () => {
            dispatch(fetchStoreRequest());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(StorePage);
