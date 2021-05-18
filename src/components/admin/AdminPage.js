import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import LoginPage from './LoginPage';
import { connect } from 'react-redux';
import { getUserFromStorageRequest } from '../../redux/actions/AdminActions';

class AdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleMenu: true,
            collapse: true,
            show: true

        }
    }
    componentDidMount() {
        this.props.getUserFromToken();
    }

    handleLogout = () => {
        localStorage.removeItem('tokenAdmin');
        window.location.href = "/admin";
    }

    render() {
        const { children, userInfo } = this.props;
        if (!userInfo || !userInfo.id) {
            return (
                <LoginPage />
            )
        }
        const { toggleMenu, collapse,show } = this.state;
        console.log(show);
        return (
            <div style={{ height: '100vh' }} className={toggleMenu ? "sb-nav-fixed" : "sb-nav-fixed sb-sidenav-toggled"}>
                <div className="admin" style={{ height: '100vh' }}>
                    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                        <a className="navbar-brand" href="index.html">Thrive</a><button className="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" onClick={() => this.setState({ toggleMenu: !toggleMenu })}><i className="fas fa-bars" /></button>{/* Navbar Search*/}
                        <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                            <div className="input-group">
                                <input className="form-control" type="text" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="button"><i className="fas fa-search" /></button>
                                </div>
                            </div>
                        </form>
                        {/* Navbar*/}
                        <ul className="navbar-nav ml-auto ml-md-0">
                            <li onClick={()=>{this.setState({show: !show})}} className={this.state.show ? "nav-item dropdown" : "nav-item dropdown show"}>
                                <a className="nav-link dropdown-toggle" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-user fa-fw" /></a>
                                <div className={this.state.show ? "dropdown-menu dropdown-menu-right" : "dropdown-menu dropdown-menu-right show"} aria-labelledby="userDropdown">
                                    {/* <a className="dropdown-item" >Settings</a><a className="dropdown-item" >Activity Log</a> */}
                                    <div className="dropdown-divider" />
                                    <a onClick={this.handleLogout} className="dropdown-item">Logout</a>
                                </div>
                            </li>
                        </ul>
                    </nav>
                    <div id="layoutSidenav" style={{ height: 'calc(100% - 56px)' }}>
                        <div id="layoutSidenav_nav">
                            <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                                <div className="sb-sidenav-menu">
                                    <div className="nav">
                                        <div className="sb-sidenav-menu-heading">Core</div>
                                        <a className="nav-link" href="index.html"><div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt" /></div>
                                                    Dashboard</a>
                                        <div className="sb-sidenav-menu-heading">Interface</div>
                                        <a onClick={() => this.setState({ collapse: !collapse })} className={collapse ? "nav-link collapsed" : "nav-link"} data-toggle="collapse" data-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                            <div className="sb-nav-link-icon">
                                                <i className="fas fa-columns" onClick={() => this.setState({ toggleMenu: !toggleMenu })} />
                                            </div>
                                                Control Panel
                                            <div className="sb-sidenav-collapse-arrow">
                                                <i className="fas fa-angle-down" />
                                            </div>
                                        </a>
                                        <div className={collapse ? "collapse" : "collapse show"} id="collapseLayouts" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                                            <nav className={collapse ? "sb-sidenav-menu-nested nav" : "sb-sidenav-menu-nested nav show"}>
                                                {/* <Router className="nav-link" href="tables.html">Product </Router> */}
                                                <Link className="nav-link" to="/admin/products">Products </Link>
                                                <Link className="nav-link" to="/admin/categories">Categories </Link>
                                                <Link className="nav-link" to="/admin/brands">Brands </Link>
                                                <Link className="nav-link" to="/admin/chat-box">Chat Box </Link>
                                                {/* <a className="nav-link" href="tables.html">Supplier </a> */}
                                                <Link className="nav-link" to="/admin/users">Users</Link>
                                            </nav>
                                        </div>
                                        <a className="nav-link collapsed" data-toggle="collapse" data-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages"><div className="sb-nav-link-icon"><i className="fas fa-book-open" /></div>
                                                        Pages
                                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div></a>
                                        <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-parent="#sidenavAccordion">
                                            <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                                <a className="nav-link collapsed" data-toggle="collapse" data-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">Authentication
                  <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div></a>
                                                <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-parent="#sidenavAccordionPages">
                                                    <nav className="sb-sidenav-menu-nested nav"><a className="nav-link" href="login.html">Login</a><a className="nav-link" href="register.html">Register</a><a className="nav-link" href="password.html">Forgot Password</a></nav>
                                                </div>
                                                <a className="nav-link collapsed" data-toggle="collapse" data-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">Error
                  <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div></a>
                                                <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-parent="#sidenavAccordionPages">
                                                    <nav className="sb-sidenav-menu-nested nav"><a className="nav-link" href="401.html">401 Page</a><a className="nav-link" href="404.html">404 Page</a><a className="nav-link" href="500.html">500 Page</a></nav>
                                                </div>
                                            </nav>
                                        </div>
                                    </div>  
                                </div>
                                <div className="sb-sidenav-footer">
                                    <div className="small">Logged in as:</div>
                                    {userInfo.email}
                                </div>
                            </nav>
                        </div>
                        <div id="layoutSidenav_content">
                            {children}
                        </div>
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
        getUserFromToken: () => {
            dispatch(getUserFromStorageRequest());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
