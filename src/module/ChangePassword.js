import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changePasswordRequest, updateUserRequest } from '../redux/actions';
import swal from 'sweetalert';

class ChangePassword extends Component {

    constructor(props) {
        super(props);
        this.state = {
            oldPassword: '',
            newPassword: '',
            confirmPassword: ''
        }
    }

    onChange = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name]: value,
            error: false
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { newPassword, oldPassword, confirmPassword } = this.state;
        if (!oldPassword || !newPassword || !confirmPassword) {
            console.log(this.state);
            let message = 'Old Password is required';
            if (!newPassword) message = 'New Password is required';
            if (!confirmPassword) message = 'Confirm Password is required';
            this.setState({
                error: true,
                message: message,
            })
        } else if (newPassword.length < 4) {
            this.setState({
                error: true,
                message: 'New Password Length must more than 4 digits',
            })
        } else if (newPassword !== confirmPassword) {

            this.setState({
                error: true,
                message: 'Password and ConfirmPassword are different',
            })
        } else {
            const body = { oldPassword, newPassword };
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
                        success: true,
                        oldPassword: '',
                        newPassword: '',
                        confirmPassword: ''
                    })
                    swal({
                        title: "Good job!",
                        text: "You password has been changed !",
                        icon: "success",
                        button: " Ok!",
                    });
                }
            });
        }

    }
    render() {

        const { success, error } = this.state;
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

                                    <form onSubmit={this.handleSubmit} ref={form => this.form = form}>
                                        <div className="row">
                                            {error ?
                                                <div className="col-12 mb-30" style={{ color: 'red' }}>
                                                    <span>{this.state.message}</span>
                                                </div>
                                                : ''}
                                            <div className="col-12 mb-30">
                                                <input
                                                    type="password"
                                                    placeholder="Type your old password"
                                                    name="oldPassword"
                                                    onChange={this.onChange}
                                                    value={this.state.oldPassword}
                                                />
                                            </div>
                                            <div className="col-12 mb-30">
                                                <input
                                                    type="password"
                                                    placeholder="Type your new password"
                                                    name="newPassword"
                                                    onChange={this.onChange}
                                                    value={this.state.newPassword}
                                                />
                                            </div>
                                            <div className="col-12 mb-30">
                                                <input type="password" 
                                                placeholder="Confirm password" 
                                                name="confirmPassword" 
                                                onChange={this.onChange}
                                                value={this.state.confirmPassword}
                                                />
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
