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
        return callAPI('', 'GET', null).then(res => {
            dispatch(fetchProduct(res.data))
        });
    }
}