import callAPI from '../../utils/apiCaller';
import * as Types from './../const/ActionTypes';
//feature
export const fetchFeatureProduct = (products, code) => {
    return {
        type: Types.FETCH_PRODUCTS_FEATURE,
        products,
        code
    }
}


export const fetchFeatureProductRequest = (code) => {
    return (dispatch) => {
        return callAPI('api/product/list?size=8' + (code ? '&code=' + code : ''), 'GET', null).then(res => {
            if (res.data && res.data.success) {
                dispatch(fetchFeatureProduct(res.data.list, code));
            }
        });
    }
}

// best deal
export const fetchBestDealProducts = (products, code) => {
    return {
        type: Types.FETCH_PRODUCTS_BESTDEAL,
        products,
        code
    }
}

export const fetchBestDealProductsRequest = (code) => {
    return (dispatch) => {
        return callAPI('api/product/bestdeal?size=5' + (code ? '&code=' + code : ''), 'GET', null).then(res => {

            if (res.data && res.data.success) {

                dispatch(fetchBestDealProducts(res.data.list, code));
            }
        });
    }
}

// product new
export const fetchProductNew = (productsNew) => {
    return {
        type: Types.FETCH_PRODUCT_NEW,
        productsNew
    }
}

export const fetchProductNewRequest = () => {
    return (dispatch) => {
        return callAPI('api/product/new?size=8', 'GET', null).then(res => {
            if (res.data && res.data.success) {
                dispatch(fetchProductNew(res.data.list));
            } else {
                dispatch(fetchProductNew([]));
            }
        })
    }
}

// PRODUCT BESTSELL

export const fetchProductBestSell = (productsBestSell) => {
    return {
        type: Types.FETCH_PRODUCT_BESTSELL,
        productsBestSell
    }
}

export const fetchProductBestSellRequest = () => {
    return (dispatch) => {
        return callAPI('api/product/trending?size=8', 'GET', null).then(res => {
            if (res.data && res.data.success) {
                dispatch(fetchProductBestSell(res.data.list));
            } else {
                dispatch(fetchProductBestSell([]));
            }
        });
    }
}


// categories list
export const fetchCategories = (categories) => {
    return {
        type: Types.FETCH_CATEGORIES,
        categories
    }
}

export const fetchCategoriesRequest = () => {
    return (dispatch) => {
        return callAPI('api/category/list', 'GET', null).then(res => {
            dispatch(fetchCategories(res.data))
        });
    }
}
// login
export const login = (data) => {
    return {
        type: Types.LOG_IN,
        data
    }
}

export const loginRequest = (body, callback) => {
    return (dispatch) => {
        return callAPI('api/auth/login', 'POST', body).then(res => {
            dispatch(login(res.data.details));
            if (typeof callback === 'function') {
                callback(res.data.details)
            }
        }).catch(() => {
            if (typeof callback === 'function') {
                callback()
            }
        });
    }
}
// PRODUCT DETAILS
export const fetchDetails = (data) => {
    return {
        type: Types.DETAILS,
        data
    }
}


export const fetchProductDetailsRequest = (code, callback) => {
    return (dispatch) => {
        return callAPI('api/product/' + code, 'GET', null).then(res => {
            dispatch(fetchDetails(res.data));
            if (typeof callback === 'function') {
                callback(res.data)
            }
        }).catch(() => {
            if (typeof callback === 'function') {
                callback()
            }
        });

    }
}

// fetch banner

export const fetchBanner = (banner) => {
    return {
        type: Types.FETCH_BANNER,
        banner
    }
}

export const fetchBannerRequest = () => {
    return (dispatch) => {
        return callAPI('api/banner/list', 'GET', null).then(res => {
            if (res.data && res.data.success) {
                dispatch(fetchBanner(res.data.list));
            }
        })
    }
}
// FETCH PRODUCT BY CATEGORIES

export const fetchProductByCategories = (products) => {
    return {
        type: Types.FETCH_PRODUCTS_BYCATEGORIES,
        products
    }
}

export const fetchProductByCategoriesRequest = (code, callback) => {
    return (dispatch) => {
        return callAPI('api/product/list?code=' + code, 'GET', null).then(res => {
            
            dispatch(fetchProductByCategories(res.data.list));
            if (typeof callback === 'function') {
                callback(res.data.list)
            }
        }).catch(() => {
            if (typeof callback === 'function') {
                callback()
            }
        });
    }
}

// cart init 
export const getCartFromLocal = (cart) => {
    return {
        type: Types.CART_INIT,
        cart
    }
}


export const getCartFromLocalRequest = () => {
    return (dispatch) => {
            const cartLocal = localStorage.getItem('cart');
           
            if (cartLocal) {
                dispatch(getCartFromLocal(JSON.parse(cartLocal)));
            }
    }
    
}

// cart add
export const addCart = (product) => {
    return {
        type: Types.CART_ADD,
        product
    }
}
export const addCartRequest = (product) => {
    
    return (dispatch) => {
        console.log(product.qty);
        if (!product.qty) {
            product.qty = 1;
        }
        dispatch(addCart(product));
    }
}
// remove cart

export const removeCart = (id) => {
    return {
        type: Types.CART_REMOVE,
        id
    }
}
export const removeCartRequest = (id) => {
    
    return (dispatch) => {
        dispatch(removeCart(id));
    }
}





