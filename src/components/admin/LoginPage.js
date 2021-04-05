import React, { Component } from 'react'
import { connect } from 'react-redux';
import { loginAdminRequest } from '../../redux/actions/AdminActions';
import { Redirect } from 'react-router-dom';
class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        const body = { email, password };
        this.props.userLogin(body, (data) => {
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
        })

    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        const { error, success } = this.state;
       
        return (
         
            <div className="bg-primary admin">
                   {success ? <Redirect to="/admin/control" /> : ''}
                <div id="layoutAuthentication">
                    <div id="layoutAuthentication_content">
                        <main>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-5">
                                        <div className="card shadow-lg border-0 rounded-lg mt-5">
                                            <div className="card-header"><h3 className="text-center font-weight-light my-4">Login</h3></div>
                                            <div className="card-body">
                                                <form action="#" onSubmit={this.handleSubmit}>
                                                    <div className="form-group">
                                                        <label className="small mb-1" htmlFor="inputEmailAddress">Email</label>
                                                        <input className="form-control py-4"
                                                            id="inputEmailAddress"
                                                            type="email"
                                                            placeholder="Enter email address"
                                                            name="email"
                                                            onChange={this.onChange}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="small mb-1" htmlFor="inputPassword">Password</label>
                                                        <input className="form-control py-4"
                                                            id="inputPassword"
                                                            type="password"
                                                            placeholder="Enter password"
                                                            name="password"
                                                            onChange={this.onChange}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="custom-control custom-checkbox">
                                                            <input className="custom-control-input" id="rememberPasswordCheck" type="checkbox" />
                                                            <label className="custom-control-label" htmlFor="rememberPasswordCheck">Remember password</label>
                                                        </div>
                                                    </div>
                                                    <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                                                        <a className="small" href="password.html">Forgot Password?</a>
                                                        {/* <a className="btn btn-primary">Login</a> */}
                                                        <input type="submit" defaultValue="LOGIN" />
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="card-footer text-center">
                                                <div className="small"><a href="register.html">Need an account? Sign up!</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                    <div id="layoutAuthentication_footer">
                        <footer className="py-4 bg-light mt-auto">
                            <div className="container-fluid">
                                <div className="d-flex align-items-center justify-content-between small">
                                    <div className="text-muted">Copyright © Your Website 2019</div>
                                    <div>
                                        <a href="#">Privacy Policy</a>
                                        <a href="#">Terms &amp; Conditions</a>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        userInfo: state.AdminReducer.userAdmin
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        userLogin: (body, callback) => {
            dispatch(loginAdminRequest(body, callback));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
