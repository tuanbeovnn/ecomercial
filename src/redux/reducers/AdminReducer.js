import { FETCH_PRODUCT, FETCH_PRODUCT_FEATURE_ALL } from "../const/ActionTypes";
import jwt_decode from "jwt-decode";


const initialState = {
    categories: [],
    productFeatureAlll: []
};

export default (state = initialState, action) => {
    const copyState = {...state}
    switch (action.type) {
        // case FETCH_PRODUCT_FEATURE_ALL: {
        //     copyState.productFeatureAlll = action.products;
        //     return copyState;
        // }
        default:
            return copyState
    }
}
