import React, { Component } from 'react';
import BrandLogo from '../components/ads/BrandLogo';
import { connect } from 'react-redux';
import { registerRequest, uploadRequest } from '../redux/actions';
import { Redirect } from 'react-router';
class Regiter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: '',
            confirmPassword: '',
            files: '',
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { files,url } = this.state;
        const bodyImage = { files };
        console.log(files)
        if (files && !url) {
            this.props.uploadImage(bodyImage, (avatar) => {
                console.log(avatar);
                // this.setState({
                //     url : avatar
                // })
                // this.handleRegister(avatar);
            })
        } else {
            // this.handleRegister(url);
        }
    }

    handleRegister = (avatar) => {
        const { email, password, name, confirmPassword } = this.state;
        const body = { email, password, name, avatar };
        this.props.registerUser(body, (data) => {
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
        let target = e.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name]: value
        });
    }

    onChangeFile = (e) => {
        let target = e.target;
        let name = target.name;
        let files = target.files[0];
        this.setState({
            [name]: files
        });
    }

    render() {
        const { error, success } = this.state;

        return (
            <div>
                {success ? <Redirect to="/" /> : ''}
                <div className="page-banner-section section">
                    <div className="page-banner-wrap row row-0 d-flex align-items-center ">
                        {/* Page Banner */}
                        <div className="col-lg-4 col-12 order-lg-2 d-flex align-items-center justify-content-center">
                            <div className="page-banner">
                                <h1>Register</h1>
                                <p>similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita</p>
                                <div className="breadcrumb">
                                    <ul>
                                        <li><a href="#">HOME</a></li>
                                        <li><a href="#">Register</a></li>
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
                                <div className="ee-register">
                                    <h3>We will need for your registration</h3>
                                    <p>E&amp;E provide how all this mistaken idea of denouncing pleasure and sing pain born an will give you a complete account of the system, and expound</p>
                                    {/* Register Form */}
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="row">
                                            <div className="col-12 mb-30">
                                                <input type="text" placeholder="Your name here" name="name" onChange={this.onChange} />
                                            </div>
                                            <div className="col-12 mb-30">
                                                <input type="email" placeholder="Your email here" name="email" onChange={this.onChange} />
                                            </div>
                                            <div className="col-12 mb-30">
                                                <input type="password" placeholder="Enter passward" name="password" onChange={this.onChange} />
                                            </div>
                                            <div className="col-12 mb-30">
                                                <input type="password" placeholder="Conform password" name="confirmPassword" onChange={this.onChange} />
                                            </div>
                                            <div className="col-12">
                                                <input type="submit" defaultValue="register" />
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
                                        <input type="file" name="files" id="account-image-upload" onChange={this.onChangeFile} />
                                        <label className="account-image-label" htmlFor="account-image-upload">Choose your image</label>
                                    </div>
                                    <p>jpEG 250x250</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>{/* Register Section End */}
                <BrandLogo />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        registerUser: (body, callback) => {
            dispatch(registerRequest(body, callback));
        },
        uploadImage: (body, callback) => {
            dispatch(uploadRequest(body, callback));
        }

    }
}
export default connect(null, mapDispatchToProps)(Regiter);
