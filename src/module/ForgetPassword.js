import React, { Component } from "react";
import { forgotRequest, loginRequest } from "../redux/actions";
import { connect } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

class ForgetPassword extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { email } = this.state;
        const body = email;
        this.props.forgot(body, (data) => {
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
    onChange = (e) => {
        this.setState(
            {
                [e.target.name]: e.target.value,
                error: false,
            }
        )
    }
    render() {
        const { error, success } = this.state;
        return (
            <div>
                
                {/* <Headers/> */}
                {/* Page Banner Section Start */}
                <div className="page-banner-section section">
                    <div className="page-banner-wrap row row-0 d-flex align-items-center ">
                        {/* Page Banner */}
                        <div className="col-lg-4 col-12 order-lg-2 d-flex align-items-center justify-content-center">
                            <div className="page-banner">
                                <h1>Forgot Password</h1>
                                <p>
                                    similique sunt in culpa qui officia deserunt mollitia animi,
                                    id est laborum et dolorum fuga. Et harum quidem rerum facilis
                                    est et expedita
                </p>
                                <div className="breadcrumb">
                                    <ul>
                                        <li>
                                            <a href="#">HOME</a>
                                        </li>
                                        <li>
                                            <a href="#">FORGOT PASSWORD</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Banner */}
                        <div className="col-lg-4 col-md-6 col-12 order-lg-1">
                            <div className="banner">
                                <a href="#">
                                    <img src="/images/banner/banner-15.jpg" alt="Banner" />
                                </a>
                            </div>
                        </div>
                        {/* Banner */}
                        <div className="col-lg-4 col-md-6 col-12 order-lg-3">
                            <div className="banner">
                                <a href="#">
                                    <img src="/images/banner/banner-14.jpg" alt="Banner" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Page Banner Section End */}
                {/* Login Section Start */}
                <div className="login-section section mt-90 mb-90">
                    <div className="container">
                        <div className="row">
                            {/* Login */}
                            <div className="col-md-6 col-12 d-flex">
                                <div className="ee-login">
                                    <h3>Enter Your Email to Reset Password</h3>
                                    <p>
                                        E&amp;E provide how all this mistaken idea of denouncing
                                        pleasure and sing pain born an will give you a complete
                                        account of the system, and expound
                  </p>
                                    {/* Login Form */}
                                    <form action="#" onSubmit={this.handleSubmit}>
                                        <div className="row">
                                            {error ?
                                                <div className="col-12 mb-30">
                                                    <span>Your email was not correctly format !</span>
                                                </div>
                                                : ''}
                                                {success ?
                                                <div className="col-12 mb-30" style={{color:'blue'}}>
                                                    <span>Your email has been sent !</span>
                                                </div>
                                                : ''}
                                            <div className="col-12 mb-30">
                                                <input
                                                    type="text"
                                                    placeholder="Type your email address"
                                                    name="email"
                                                    onChange={this.onChange}
                                                />
                                            </div>
                                            <div className="col-12">
                                                <input type="submit" defaultValue="SUBMIT" />
                                            </div>
                                        </div>
                                    </form>
                                    <h4>
                                        Do you have an account? please click{" "}
                                        <Link to="/login">Login</Link>
                                    </h4>
                                </div>
                            </div>
                            <div className="col-md-1 col-12 d-flex">
                                <div className="login-reg-vertical-boder" />
                            </div>
                            {/* Login With Social */}
                            <div className="col-md-5 col-12 d-flex">
                                <div className="ee-social-login">
                                    <h3>Also you can login with...</h3>
                                    <a href="#" className="facebook-login">
                                        Login with <i className="fa fa-facebook" />
                                    </a>
                                    <a href="#" className="twitter-login">
                                        Login with <i className="fa fa-twitter" />
                                    </a>
                                    <a href="#" className="google-plus-login">
                                        Login with <i className="fa fa-google-plus" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Login Section End */}
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch, props) => {
    return {
        forgot: (email, callback) => {
            dispatch(forgotRequest(email, callback));
        },
    }
}
export default connect(null, mapDispatchToProps)(ForgetPassword);

