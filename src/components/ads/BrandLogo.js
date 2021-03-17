import React, { Component } from 'react';
import Slider from "react-slick";
import { fetchBrandRequest } from '../../redux/actions';
import { connect } from 'react-redux';
class BrandLogo extends Component {


    componentDidMount() {
        this.props.fetchBrands();
    }
    render() {
        const settings = {
            dots: false,
            slidesToShow: 4,
            arrows: false
        };
        const { brands } = this.props;
        return (

            <div className="brands-section section mb-90">
                <div className="container">
                    <div className="row">

                        <Slider className="brand-slider col" {...settings} >
                            {brands.map((item, index) => {
                                return (
                                    <div key={index} className="brand-item col">
                                       <img src={item.image} alt={item.image} />
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>
                </div>
            </div>

        );
    }
}
const mapStateToProps = (state) => {
    return {
        brands: state.Ecomercial.brands
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchBrands: () => {
            dispatch(fetchBrandRequest());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BrandLogo);