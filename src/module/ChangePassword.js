import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changePasswordRequest, updateUserRequest } from '../redux/actions';

class ChangePassword extends Component {

    constructor(props) {
        super(props);
        this.state = {
            oldPassword: '',
            newPasssword: ''
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
        const { newPasssword, oldPassword } = this.state;
        const body = { oldPassword, newPasssword };
        this.props.changePassword(body, (data) => {
            console.log(data);
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
                                        <li><a>Change Password</a></li>
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
                                    <h3>CHANGE PASSWORD</h3>
                                    <p>E&amp;E provide how all this mistaken idea of denouncing pleasure and sing pain born an will give you a complete account of the system, and expound</p>
                                    {/* Register Form */}
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="row">

                                            <div className="col-12 mb-30">
                                                <input
                                                    type="password"
                                                    placeholder="Type your old password"
                                                    name="password"
                                                    onChange={this.onChange}
                                                />
                                            </div>
                                            <div className="col-12 mb-30">
                                                <input
                                                    type="password"
                                                    placeholder="Type your new password"
                                                    name="newpassword"
                                                    onChange={this.onChange}
                                                />
                                            </div>
                                            <div className="col-12 mb-30">
                                                <input type="password" placeholder="Confirm password" name="confirmPassword" onChange={this.onChange}/>
                                            </div>

                                            <div className="col-12 mb-15">
                                                <Link to="/forgot">Forgot Your password ?</Link>
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
        changePassword: (body, callback) => {
            dispatch(changePasswordRequest(body, callback));
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);
