import { FETCH_PRODUCT, FETCH_PRODUCT_FEATURE_ALL } from "../const/ActionTypes";
import jwt_decode from "jwt-decode";
import { FETCH_ROOM } from "../const/AdminActionTypes";


const initialState = {
    categories: [],
    productFeatureAlll: [],
    getRoomMessage: []
};

export default (state = initialState, action) => {
    const copyState = {...state}
    switch (action.type) {
        // case FETCH_PRODUCT_FEATURE_ALL: {
        //     copyState.productFeatureAlll = action.products;
        //     return copyState;
        // }
        case FETCH_ROOM :{
            copyState.getRoomMessage = action.rooms;
            return copyState;
        }
        default:
            return copyState
    }
}
