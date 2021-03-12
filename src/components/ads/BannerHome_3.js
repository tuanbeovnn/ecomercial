import React, { Component } from 'react';
import { fetchBannerRequest } from '../../redux/actions';
import { connect } from 'react-redux';
class BannerHome_3 extends Component {
    componentDidMount() {
        this.props.fetchBanner();
    }

    render() {
        const { banners } = this.props;
        return (
            <div className="banner-section section mb-90">
                <div className="container">
                    {banners.map((item, index) => {
                        return (
                            <div key={index} className="row">
                                {/* Banner */}
                                <div className="col-12">
                                    <div className="banner"><a >{item.position === 3 ? <img src={item.image && item.image[0]} alt={item.image} /> : ''}</a></div>
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
export default connect(mapStateToProps, mapDispatchToProps)(BannerHome_3);