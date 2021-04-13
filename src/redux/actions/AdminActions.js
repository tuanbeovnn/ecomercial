import callAPI, { uploadAPI } from '../../utils/apiCaller';
import * as Types from './../const/AdminActionTypes';
import qs from 'qs';



// fetch product
export const fetchproduct = ({list, currentPage, total}) => {
    return {
        type: Types.FETCH_PRODUCT_ADMIN,
        products : list,
        page : currentPage,
        total
    }
}

export const fetchProductRequest = (params, callback) => {
    return (dispatch) => {
        return callAPI('api/product/list?' + qs.stringify(params), 'GET', null).then(res => {
            if (res.data && res.data.success) {
                dispatch(fetchproduct(res.data));
                callback(res.data);
            } else {
                callback();
            }
        })
    }
}


// fetch Room

export const fetchRoom = (rooms) => {
    return {
        type: Types.FETCH_ROOM,
        rooms
    }
}
export const fetchRoomRequest = (callback) => {
    return (dispatch) => {
        return callAPI('api/room/list', 'GET', null).then(res => {
            if (res.data && res.data.success) {
                dispatch(fetchRoom(res.data.details));
                callback(res.data.details);
            } else {
                dispatch(fetchRoom([]));
                callback();
            }
        })
    }
}
// Add new room

export const addNewRoom = (room) => {
    return {
        type: Types.ADD_NEW_ROOM,
        room
    }
}
export const addNewRoomRequest = (room) => {

    return (dispatch) => {
        // return new Promise(resolve => {
        //     resolve());
        // })
        return dispatch(addNewRoom(room));

    }
}

// login

export const loginAdmin = (data) => {
    return {
        type: Types.LOG_IN_ADMIN,
        data
    }
}

export const loginAdminRequest = (body, callback) => {
    return (dispatch) => {
        return callAPI('api/auth/login', 'POST', body).then(res => {
            dispatch(loginAdmin(res.data.details));
            if (res.data && res.data.success) {
                callback(res.data.details)
            }
        }).catch(() => {
            callback();
        })
    }
}


// USER init 
export const getUserFromStorage = (token) => {
    return {
        type: Types.USER_INIT_ADMIN,
        token
    }
}


export const getUserFromStorageRequest = () => {
    return (dispatch) => {
        const token = localStorage.getItem('tokenAdmin');
        if (token) {
            dispatch(getUserFromStorage(token));
        }
    }

}

//DELETE PRODUCT
export const deleteProduct = (productId) => {
    return {
        type: Types.DELETE_PRODUCT_ADMIN,
        productId
    }
}

export const deleteProductRequest = (id) => {
    console.log(id);
    return (dispatch) => {
        return callAPI('api/product/remove/' + id, 'DELETE').then(res => {
           console.log(res.data);
            if (res.data && res.data.success) {
                dispatch(deleteProduct(id));
            }
        }).catch((err)=>{
            console.log(err);
        })
    }
}

//FETCH BRAND 

export const fetchBrandProduct = (brands) => {
    return {
        type: Types.FETCH_BRAND_ADMIN,
        brands
    }
}

export const fetchBrandProductRequest = () =>{
    return (dispatch) =>{
        return callAPI('api/brand/list', 'GET', null).then(res=>{
            if (res.data && res.data.success) {
                dispatch(fetchBrandProduct(res.data.details));
            }else {
                dispatch(fetchBrandProduct({}));
            }
        })
    }
}

// fetch categories 

export const fetchCategories = (categories) => {
    return {
        type: Types.FETCH_CATEGORY_ADMIN,
        categories
    }
}

export const fetchCategoriesRequest = () => {
    return (dispatch) => {
        return callAPI('api/category/list', 'GET', null).then(res => {
            if (res.data) {
                dispatch(fetchCategories(res.data));
            } else {
                dispatch(fetchCategories({}));
            }
        })
    }
}

//add product

export const addProduct = (product) =>{
    return {
        type : Types.ADD_PRODUCT_ADMIN,
        product
    }
}

export const addProductRequest=(body, callback)=>{
    return(dispatch) =>{
        return callAPI('api/product/add', 'POST', body).then(res => {
            dispatch(addProduct(res.data.details));
            if (typeof callback === 'function') {
                callback(res.data)
            }
        }).catch((e) => {
            if (typeof callback === 'function') {
                console.log(e.response);
                callback();
            }
        });
    }
}

// UPLOAD IMAGE product

export const uploadRequest = (body, callback) => {
    return (dispatch) => {
        return uploadAPI('api/uploadfile?scaledWidth=270&scaledHeight=320', 'POST', body).then(res => {
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

//UPDATE product

export const updateProduct = (data) => {
    return {
        type: Types.UPDATE_PRODUCT_ADMIN,
        data
    }
}

export const updateProductRequest = (id, body, callback) => {
    return (dispatch) => {
        return callAPI('api/product/update/' + id, 'PUT', body).then(res => {
            dispatch(updateProduct(res.data.details));
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