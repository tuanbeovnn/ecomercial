import React, { Component } from 'react';

class BestSeller extends Component {
    state = {
        bestSeller: [
            {
                id: 1,
                name: "Abfsdfsdfcd",
                price: 1000,
                img: "/images/product/product-1.png"
            },
            {
                id: 2,
                name: "dadasd",
                price: 1000,
                img: "/images/product/product-1.png"
            },
            {
                id: 3,
                name: "2",
                price: 1000,
                img: "/images/product/product-1.png"
            },
            {
                id: 4,
                name: "3333",
                price: 1000,
                img: "/images/product/product-1.png"
            },
            {
                id: 5,
                name: "55555",
                price: 1000,
                img: "/images/product/product-1.png"
            },
        ]
    }
    render() {
        const { bestSeller } = this.state;
        return (
            <div className="product-section section mb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-40">
                            <div className="section-title-one" data-title="BEST SELLER"><h1>BEST SELLERS</h1></div>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                {bestSeller.map((item) => {
                                    return (
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-12 pb-30 pt-10" key={item.id}>
                                            {/* Product Start */}
                                            <div className="ee-product">
                                                {/* Image */}
                                                <div className="image">
                                                    <a href="single-product.html" className="img"><img src="/images/product/product-5.png" alt="Product Image" /></a>
                                                    <div className="wishlist-compare">
                                                        <a href="#" data-tooltip="Compare"><i className="ti-control-shuffle" /></a>
                                                        <a href="#" data-tooltip="Wishlist"><i className="ti-heart" /></a>
                                                    </div>
                                                    <a href="#" className="add-to-cart"><i className="ti-shopping-cart" /><span>ADD TO CART</span></a>
                                                </div>
                                                {/* Content */}
                                                <div className="content">
                                                    {/* Category & Title */}
                                                    <div className="category-title">
                                                        <a href="#" className="cat">Camera</a>
                                                        <h5 className="title"><a href="single-product.html">{item.name}</a></h5>
                                                    </div>
                                                    {/* Price & Ratting */}
                                                    <div className="price-ratting">
                                                        <h5 className="price">{item.price}</h5>
                                                        <div className="ratting">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star-half-o" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>{/* Product End */}
                                        </div>

                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BestSeller;
