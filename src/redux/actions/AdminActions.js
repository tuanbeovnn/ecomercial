import callAPI from '../../utils/apiCaller';
import * as Types from './../const/AdminActionTypes';

export const fetchproduct = (products) => {
    return {
        type : Types.FETCH_PRODUCT,
        products
    }
}

export const fetchProductRequest = () => {
    return(dispatch) => {
        return callAPI('api/product/list', 'GET', null).then(res => {
            if (res.data && res.data.success) {
                dispatch(fetchproduct(res.data.list));
            }else {
                dispatch(fetchproduct([]));
            }
        })
    }
}
