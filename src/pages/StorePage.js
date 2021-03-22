import React, { useEffect, useState } from 'react';
import { fetchStoreLocationRequest } from '../redux/actions';
import { connect, useDispatch, useSelector } from 'react-redux';

const StorePage = (props) => {
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const {store} = useSelector(state => state.Ecomercial); 
    console.log("store", store); 
    useEffect(() => {
        props.fetchStoreLocationRequest((data)=>{
            if (!data) {
                setError (true)
            }else {
              setSuccess ({
                    success : true
                })
            }
             
         });

    }, [])
    return (
        <div>
            {/* Page Banner Section Start */}
            <div className="page-banner-section section">
                <div className="page-banner-wrap row row-0 d-flex align-items-center ">
                    {/* Page Banner */}
                    <div className="col-lg-4 col-12 order-lg-2 d-flex align-items-center justify-content-center">
                        <div className="page-banner">
                            <h1>Locate Store</h1>
                            <p>similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita</p>
                            <div className="breadcrumb">
                                <ul>
                                    <li><a href="#">HOME</a></li>
                                    <li><a href="#">Locate Store</a></li>
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
            {/* Store Section Start */}
            <div className="store-section section mt-90 mb-20">
                <div className="container">
                    <div className="row">
                        {/* Single Store */}
                        {store.map((item, index)=>{
                            return <div key = {index} className="col-lg-4 col-md-6 col-12 mb-70">                         
                                <div className="single-store">
                                <h3>E&amp;E {item.name}</h3>
                                <p>{item.address}</p>
                                <p><a href="tel:01234567890">{item.phone}</a> / <a href="tel:01234567891">01234 567 891</a></p>
                                <p><a href={item.email}>{item.email}</a> / <a href={item.website}>{item.website}</a></p>
                            </div>
                            </div>
                            })}

                        
                        
                        
                      
                    </div>
                </div>
            </div>{/* Store Section End */}</div>

    )
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchStoreLocationRequest: ( callback) => {
            dispatch(fetchStoreLocationRequest(callback));
        },
    }
}

export default connect(null, mapDispatchToProps)(StorePage)

