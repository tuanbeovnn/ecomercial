import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Menus extends Component {
    render() {
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
                                <nav className="category-menu">
                                    <ul>
                                        <li>
                                            <a href="category-1.html">Tv &amp; Audio System</a>
                                        </li>
                                        <li>
                                            <Link to="/laptop">
                                                Computer &amp; Laptop
                                            </Link>

                                        </li>
                                        <li>
                                            <Link to="/mobile">
                                                Phones &amp; Tablets
                                            </Link>
                                        </li>
                                        <li>
                                            <a href="category-1.html">Home Appliances</a>
                                        </li>
                                        <li>
                                            <a href="category-2.html">Kitchen appliances</a>
                                        </li>
                                        <li>
                                            <a href="category-3.html">Accessories</a>
                                        </li>
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
