import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateUserRequest } from '../redux/actions';

class MyAccountPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            birthday: '',
            address: '',
            phone: '',
            name: ''
        }
    }


    onChange = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name]: value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { birthday, address, phone, name } = this.state;
        const { user } = this.props;
        const body = {...user, birthday, address, phone, name };
        this.props.updateUser(user.id, body, (data) => {
            if (!data) {
                this.setState(
                    {
                        error: true
                    }
                )
            } else {
                this.setState({
                    success: true
                })
            }

        });
    }

    render() {
        const { user } = this.props;

        return (
            <div>
                {/* Page Banner Section Start */}
                <div className="page-banner-section section">
                    <div className="page-banner-wrap row row-0 d-flex align-items-center ">
                        {/* Page Banner */}
                        <div className="col-lg-4 col-12 order-lg-2 d-flex align-items-center justify-content-center">
                            <div className="page-banner">
                                <h1>My Account</h1>
                                <p></p>
                                <div className="breadcrumb">
                                    <ul>
                                        <li><Link to="/">HOME</Link></li>
                                        <li><a>My Infomation</a></li>
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
                {/* Register Section Start */}
                <div className="register-section section mt-90 mb-90">
                    <div className="container">
                        <div className="row">
                            {/* Register */}
                            <div className="col-md-6 col-12 d-flex">
                                <div className="ee-login">
                                    <h3>MY ACCOUNT</h3>
                                    <p>E&amp;E provide how all this mistaken idea of denouncing pleasure and sing pain born an will give you a complete account of the system, and expound</p>
                                    {/* Register Form */}
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="row">

                                            <div className="col-12 mb-30">
                                                <input
                                                    type="text"
                                                    placeholder="Email address"
                                                    name="email"
                                                    defaultValue={user.email}
                                                    readOnly
                                                />
                                            </div>
                                            <div className="col-12 mb-30">
                                                <input
                                                    type="date"
                                                    placeholder="Type your username or email address"
                                                    name="birthday"
                                                    onChange={this.onChange}
                                                    defaultValue={user.birthday}
                                                />
                                            </div>
                                            <div className="col-12 mb-30">
                                                <input
                                                    type="text"
                                                    placeholder="Type your address"
                                                    name="address"
                                                    onChange={this.onChange}
                                                    defaultValue={user.address}
                                                />
                                            </div>
                                            <div className="col-12 mb-30">
                                                <input
                                                    type="text"
                                                    placeholder="Type your phone number"
                                                    name="phone"
                                                    onChange={this.onChange}
                                                    defaultValue={user.phone}
                                                />
                                            </div>
                                            <div className="col-12 mb-20">
                                                <input
                                                    type="text"
                                                    placeholder="Enter your name"
                                                    name="name"
                                                    onChange={this.onChange}
                                                    defaultValue={user.username}
                                                />
                                            </div>

                                            <div className="col-12 mb-15">
                                                <Link to="/changePassword">Change Your password ?</Link>
                                            </div>
                                            <div className="col-12">
                                                <input type="submit" defaultValue="LOGIN" />
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>
                            <div className="col-md-1 col-12 d-flex">
                                <div className="login-reg-vertical-boder" />
                            </div>
                            {/* Account Image */}
                            <div className="col-md-5 col-12 d-flex">
                                <div className="ee-account-image">
                                    <h3>Upload your Image</h3>
                                    <img src="/images/account-image-placeholder.jpg" alt="Account Image Placeholder" className="image-placeholder" />
                                    <div className="account-image-upload">
                                        <input type="file" name="chooseFile" id="account-image-upload" />
                                        <label className="account-image-label" htmlFor="account-image-upload">Choose your image</label>
                                    </div>
                                    <p>jpEG 250x250</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>{/* Register Section End */}
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.Ecomercial.user,
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        updateUser: (id, body, callback) => {
            dispatch(updateUserRequest(id, body, callback));
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyAccountPage);
