import React, { Component } from "react";
import { Link } from "react-router-dom";
import { fetchCategoriesRequest } from '../redux/actions/index';
import { connect } from 'react-redux';

class Menus extends Component {
    componentDidMount() {
        this.props.fetchAllCategories();
    }
    render() {
        const { categories } = this.props;
        return (
            <div className="header-category-section">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            {/* Header Category */}
                            <div className="header-category">
                                {/* Category Toggle Wrap */}
                                <div className="category-toggle-wrap d-block d-lg-none">
                                    {/* Category Toggle */}
                                    <button className="category-toggle">
                                        Categories <i className="ti-menu" />
                                    </button>
                                </div>
                                {/* Category Menu */}
                                <nav className="category-menu" style={{display:"flex", justifyContent:"center"}}>

                                    <ul>
                                        {categories.map((item, index) => {
                                            return (
                                                <li key={index}>
                                                    <Link to={"/product/" + item.code}>
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
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
export default connect(mapStateToProps, mapDispatchToProps)(Menus);
