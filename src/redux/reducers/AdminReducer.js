import { FETCH_PRODUCT, FETCH_PRODUCT_FEATURE_ALL, LOG_IN } from "../const/ActionTypes";
import jwt_decode from "jwt-decode";
import { ADD_NEW_ROOM, ADD_PRODUCT_ADMIN, DELETE_PRODUCT_ADMIN, FETCH_BRAND_ADMIN, FETCH_CATEGORY_ADMIN, FETCH_PRODUCT_ADMIN, FETCH_ROOM, LOG_IN_ADMIN, USER_INIT_ADMIN } from "../const/AdminActionTypes";


const initialState = {
    categories: [],
    productAll: [],
    getRoomMessage: [],
    userAdmin: {},
    page: 0,
    total: 0,
    brands : []
};

export default (state = initialState, action) => {
    const copyState = { ...state }
    switch (action.type) {

        case FETCH_PRODUCT_ADMIN: {
            copyState.productAll = action.products;
            copyState.page = action.page;
            copyState.total = action.total;
            return copyState;
        }
        case FETCH_CATEGORY_ADMIN: {
            copyState.categories = action.categories;
            return copyState;
        }
        case FETCH_BRAND_ADMIN : {
            copyState.brands = action.brands;
            return copyState;
        }
        case FETCH_ROOM: {
            copyState.getRoomMessage = action.rooms;
            return copyState;
        }
        case LOG_IN_ADMIN: {
            const dataLogin = jwt_decode(action.data.accessToken);
            localStorage.setItem('tokenAdmin', action.data.accessToken);
            copyState.userAdmin = dataLogin;
            return copyState;
        }
        case USER_INIT_ADMIN: {
            const data = jwt_decode(action.token);
            copyState.userAdmin = data;
            return copyState;
        }
        case ADD_NEW_ROOM: {
            copyState.getRoomMessage = [action.room, ...copyState.getRoomMessage];
            return copyState;
        }
        case ADD_PRODUCT_ADMIN: {
            copyState.productAll = [action.product, ...copyState.productAll];
            return copyState;
        }
        case DELETE_PRODUCT_ADMIN: {
            copyState.productAll = copyState.productAll.filter(product => product.id !== action.productId);

            return copyState;
        }
        default:
            return copyState
    }
}
