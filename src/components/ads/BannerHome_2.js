import React, { Component } from 'react';
import { fetchBannerRequest } from '../../redux/actions';
import { connect } from 'react-redux';

class BannerHome_2 extends Component {
    componentDidMount() {
        this.props.fetchBanner();
    }
    render() {
        const { banners } = this.props;
        return (
            <div className="banner-section section mb-60">
                <div className="container">
                    {banners.map((item, index) => {
                        return (
                            <div key={index} className="row row-10">
                                <div className="col-md-8 col-12 mb-30">
                                    <div className="banner"><a >{item.position === 2 ? <img src={item.image && item.image[0]} alt="Banner" /> : ''}</a></div>
                                </div>
                                <div className="col-md-4 col-12 mb-30">
                                    <div className="banner"><a >{item.position === 2 ? <img src={item.image && item.image[1]} alt="Banner" /> : ''}</a></div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        banners: state.Ecomercial.banners
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchBanner: () => {
            dispatch(fetchBannerRequest());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BannerHome_2);
