import callAPI, { uploadAPI } from '../../utils/apiCaller';
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

export const loginFacebookRequest = (body, callback) => {
    return (dispatch) => {
        return callAPI('api/auth/facebook/login', 'POST', body).then(res => {
            dispatch(login(res.data));
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
// USER init 
export const getUserFromStorage = (token) => {
    return {
        type: Types.USER_INIT,
        token
    }
}


export const getUserFromStorageRequest = () => {
    return (dispatch) => {
        const token = localStorage.getItem('token');

        if (token) {
            dispatch(getUserFromStorage(token));
        }
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

export const fetchProductByCategoriesRequest = (code, page,callback) => {
    return (dispatch) => {
        return callAPI('api/product/list?code=' + code + '&size=8' + '&page=' + page, 'GET', null).then(res => {

            dispatch(fetchProductByCategories(res.data.list));
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

// register 

export const register = (user) => {
    return {
        type: Types.REGISTER,
        user
    }
}

export const registerRequest = (body, callback) => {
    return (dispatch) => {
        return callAPI('api/auth/register', 'POST', body).then(res => {
            dispatch(register(res.data));
            if (typeof callback === 'function') {
                callback(res.data)
            }
        }).catch((e) => {
            if (typeof callback === 'function') {
                callback(e.response.data);
            }
        });
    }
}

// UPLOAD IMAGE avarta

export const uploadRequest = (body, callback) => {
    return (dispatch) => {
        return uploadAPI('api/uploadfile?scaledWidth=250&scaledHeight=250', 'POST', body).then(res => {
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

//FORGOT_PASSWORD

export const forgotRequest = (email, callback) => {
    return (dispatch) => {
        console.log(email);
        return callAPI('api/auth/forgot?email=' + email, 'GET', null).then(res => {
            if (typeof callback === 'function') {
                callback(res.data)
            }
        }).catch((e) => {
            if (typeof callback === 'function') {
                callback();
            }
        });
    }
}

//UPDATE user

export const updateUser = (data) => {
    return {
        type: Types.UPDATE_USER,
        data
    }
}

export const updateUserRequest = (id, body, callback) => {
    return (dispatch) => {

        return uploadAPI('api/user/update/' + id, 'PUT', body).then(res => {
            
            dispatch(updateUser(res.data.details));
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

//CHANGE PASSWORD

export const changePasswordRequest = (body, callback) => {
    return (dispatch) => {
        return callAPI('api/auth/changePassword', 'POST', body).then(res => {
            if (typeof callback === 'function') {

                callback(res.data)
            }
        }).catch((e) => {
            console.log(e.response);
            if (typeof callback === 'function') {
                callback();
            }
        });
    }
}

//PAYMENT

export const paymentRequest = (body, callback) => {
    return (dispatch) => {
        return callAPI('api/pay', 'POST', body).then(res => {
            if (typeof callback === 'function') {
                callback(res.data)
            }
        }).catch((e) => {
            console.log(e.response);
            if (typeof callback === 'function') {
                callback();
            }
        });
    }
}

//FETCH_BRAND

export const fetchBrand = (brands) => {
    return {
        type: Types.FETCH_BRAND,
        brands
    }
}

export const fetchBrandRequest = () => {
    return (dispatch) => {
        return callAPI('api/brand/list', 'GET', null).then(res => {
            if (res.data && res.data.success) {
                dispatch(fetchBrand(res.data.details));
            }
        })
    }
}

// register 

export const addOrder = (order) => {
    return {
        type: Types.ADD_ORDER,
        order
    }
}

export const addOrderRequest = (body, callback) => {
    return (dispatch) => {
        return callAPI('api/order/save', 'POST', body).then(res => {
            dispatch(register(res.data));
            if (typeof callback === 'function') {
                callback(res.data)
            }
        }).catch((e) => {
            if (typeof callback === 'function') {
                callback(e.response.data);
            }
        });
    }
}

// cart init 
export const getWishListFromLocal = (wishList) => {
    return {
        type: Types.WISHLIST_INIT,
        wishList
    }
}
export const getWishListFromLocalRequest = () => {
    return (dispatch) => {
        const wishListLocal = localStorage.getItem('wishList');
        if (wishListLocal) {
            dispatch(getWishListFromLocal(JSON.parse(wishListLocal)));
        }
    }

}

// cart wishList
export const addWishList = (product) => {
    return {
        type: Types.ADD_WISHLIST,
        product
    }
}
export const addWishListRequest = (product) => {
    return (dispatch) => {
        console.log(product.qty);
        if (!product.qty) {
            product.qty = 1;
        }
        dispatch(addWishList(product));
    }
}

// remove cart

export const wishListRemove = (id) => {
    return {
        type: Types.WISHLIST_REMOVE,
        id
    }
}
export const wishListRemoveRequest = (id) => {

    return (dispatch) => {
        dispatch(wishListRemove(id));
    }
}


// fetchTimeend 

export const fetchTimeEnd = (timeEnd) => {
    return {
        type: Types.FETCH_TIME_END,
        timeEnd
    }
}

export const fetchTimeEndRequest = (callback) => {
    return (dispatch) => {
        return callAPI('api/product/bigdeal', 'GET', null).then(res => {
            if (res.data) {
                callback(res.data);
                dispatch(fetchTimeEnd(res.data));
            }
        }).catch(()=>{
            callback({})
        })
    }
}

//FETCH_BRAND

// export const fetchBrand = (brands) => {
//     return {
//         type: Types.FETCH_BRAND,
//         brands
//     }
// }

// export const fetchBrandRequest = () => {
//     return (dispatch) => {
//         return callAPI('api/brand/list', 'GET', null).then(res => {
//             if (res.data && res.data.success) {
//                 dispatch(fetchBrand(res.data.details));
//             }
//         })
//     }
// }



// compare init 
export const getCompareFromLocal = (compare) => {
    return {
        type: Types.COMPARE_INIT,
        compare
    }
}
export const getCompareFromLocalRequest = () => {
    return (dispatch) => {
        const compareLocal = localStorage.getItem('compare');
        if (compareLocal) {
            dispatch(getCompareFromLocal(JSON.parse(compareLocal)));
        }
    }

}

// COMPARE
export const addCompare = (product) => {
    return {
        type: Types.ADD_COMPARE,
        product
    }
}
export const addCompareRequest = (product) => {
    return (dispatch) => {
        console.log(product.qty);
        if (!product.qty) {
            product.qty = 1;
        }
        dispatch(addCompare(product));
    }
}



export const compareRemove = (id) => {
    return {
        type: Types.REMOVE_COMPARE,
        id
    }
}
export const compareRemoveRequest = (id) => {

    return (dispatch) => {
        dispatch(compareRemove(id));
    }
}

// GET ROOM INFO

export const createRoomRequest = (body,callback) => {
    return (dispatch) => {
        return callAPI('api/room/add', 'POST', body).then(res => {
            if (res.data) {
                callback(res.data);
            }
        }).catch(()=>{
            callback()
        })
    }
}


// GET ROOM INFO

export const sendMessageRequest = (body,callback) => {
    return (dispatch) => {
        return callAPI('api/message', 'POST', body).then(res => {
            if (res.data) {
            }
        }).catch(()=>{
         
        })
    }
}

//get store
export const fetchStore = (stores) => {
    return {
        type : Types.FETCH_STORE,
        stores
    }
}
export const fetchStoreRequest =() => {
    return(dispatch) =>{
        return callAPI('api/store/list', 'GET', null).then(res => {
            if (res.data && res.data.success) {
                dispatch(fetchStore(res.data.details));
            }else {
                dispatch(fetchStore([]));
            }
        })
    }
}
// get message
export const getMessageRequest = (roomId,callback) => {
    return (dispatch) => {
        return callAPI('api/message/list?room='+ roomId, 'GET').then(res => {
            if (res.data) {
                callback(res.data);
            }
        }).catch(()=>{
            callback();
        })
    }
}