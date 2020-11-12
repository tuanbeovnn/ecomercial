import React, { Component } from 'react';
import Slider from "react-slick";

class BannerHome extends Component {
    state = {
        banners: [
            {
                id: 1,
                content:["HURRY UP!","uPhone XIT’S","29%"],
                url: "#",
                image: "/images/hero/hero-1.png"
            },
            {
                id: 2,
                content:["HURRY UP!","uPhone XIT’S","20%"],
                url: "#",
                image: "/images/hero/hero-2.png"

            },
            {
                id: 3,
                content:["HURRY UP!","uPhone XIT’S","29%"],
                url: "#",
                image: "/images/hero/hero-3.png"
            }
        ]
    }
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        };
        const { banners } = this.state;
        return (

            <div className="hero-section section mb-30">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Slider className="hero-slider hero-slider-one" {...settings} >
                                {banners.map((item) => {
                                    console.log(item);
                                    return (
                                        <div className="hero-item" key={item.id}>
                                            <div className="row align-items-center justify-content-between">
                                                {/* Hero Content */}
                                                <div className="hero-content col">
                                                    {/* <h1 dangerouslySetInnerHTML = {{__html:item.name.replace(/\/n/g,"<br>")}}></h1> */}
                                                    <h2>{item.content[0]}</h2>
                                                    <h1><span>{item.content[1]}</span></h1>
                                                    <h1>IT’S <span className="big">{item.content[2]}</span> OFF</h1>
                                                    <a href="#">get it now</a>
                                                </div>
                                                {/* Hero Image */}
                                                <div className="hero-image col">
                                                    <img src={item.image} alt={item.image} />
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}


                            </Slider>
                            <div className="hero-slider hero-slider-one">
                                {/* Hero Item Start */}

                                {/* Hero Item Start */}

                            </div>{/* Hero Slider End */}
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default BannerHome;
