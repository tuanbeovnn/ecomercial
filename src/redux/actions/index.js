import callAPI from '../../utils/apiCaller';
import * as Types from './../const/ActionTypes';

export const fetchProduct = (products) => {
    return {
        type: Types.FETCH_PRODUCT,
        products
    }
}

export const fetchProductRequest = () => {
    return (dispatch) => {
        return callAPI('api/product/list?size=5', 'GET', null).then(res => {
            if (res.data && res.data.success) {
                dispatch(fetchProduct(res.data.list));
            }else {
                dispatch(fetchProduct([]));
            }
        });
    }
}

export const fetchFeatureCategoriesProducts = (products, code) => {
    return {
        type: Types.FETCH_PRODUCTS_CATEGORY_FEATURE,
        products,
        code
    }
}

export const fetchFeatureCategoriesProductsRequest = (code) => {
    return (dispatch) => {
        return callAPI('api/product/list?size=5&code='+code, 'GET', null).then(res => {
            if (res.data && res.data.success) {
                dispatch(fetchFeatureCategoriesProducts(res.data.list, code));
            }else {
                dispatch(fetchFeatureCategoriesProducts([], code));
            }
        });
    }
}

export const fetchCategories = (categories) => {
    return {
        type: Types.FETCH_CATEGORIES,
        categories
    }
}

export const fetchCategoriesRequest = () =>{
    return (dispatch) =>{
        return callAPI('api/category/list', 'GET', null).then(res =>{
            dispatch(fetchCategories(res.data))
        });
    }
}

