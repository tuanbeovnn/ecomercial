import { FETCH_PRODUCT, FETCH_PRODUCT_FEATURE_ALL, LOG_IN } from "../const/ActionTypes";
import jwt_decode from "jwt-decode";
import { FETCH_USER_ROLES_ADMIN, ADD_NEW_ROOM, ADD_PRODUCT_ADMIN, DELETE_PRODUCT_ADMIN, FETCH_BRAND_ADMIN, FETCH_CATEGORY_ADMIN, FETCH_PRODUCT_ADMIN, FETCH_ROLES_ADMIN, FETCH_ROOM, LOG_IN_ADMIN, UPDATE_PRODUCT_ADMIN, USER_INIT_ADMIN, UPDATE_ROLE_ADMIN, ADD_CATEGORY, UPDATE_CATEGORY, ADD_BRANDS, UPDATE_BRANDS, ACCOUNT_STATUS } from "../const/AdminActionTypes";


const initialState = {
    categories: [],
    productAll: [],
    getRoomMessage: [],
    userAdmin: {},
    page: 0,
    total: 0,
    brands: [],
    productUpdate: {},
    userRoles: [],
    pageRole: 0,
    totalRole: 0,
    roles: []
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
        case FETCH_BRAND_ADMIN: {
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
        case UPDATE_PRODUCT_ADMIN: {
            const index = copyState.productAll.findIndex(e => e.id === action.data.id);
            if (index !== -1) {
                copyState.productAll[index] = action.data;
            }
            copyState.productAll = [...copyState.productAll];
            return copyState;
        }
        case FETCH_USER_ROLES_ADMIN: {
            copyState.userRoles = action.roles;
            copyState.pageRole = action.page;
            copyState.totalRole = action.total;
            return copyState;
        }
        case FETCH_ROLES_ADMIN: {
            copyState.roles = action.roles;
            return copyState;
        }
        case UPDATE_ROLE_ADMIN: {
            console.log(action.data.id);
            const index = copyState.userRoles.findIndex(e => e.id === action.data.id);
            if (index !== -1) {
                copyState.userRoles[index] = action.data;
            }
            copyState.userRoles = [...copyState.userRoles];
            return copyState;
        }
        case ADD_CATEGORY: {
            copyState.categories = [action.data, ...copyState.categories];
            return copyState;
        }
        case UPDATE_CATEGORY: {
            const index = copyState.categories.findIndex(e => e.id === action.data.id);

            if (index !== -1) {

                copyState.categories[index] = action.data;
            }
            copyState.categories = [...copyState.categories];
            return copyState;
        }

        case ADD_BRANDS: {
            copyState.brands = [action.data, ...copyState.brands];
            return copyState;
        }
        case UPDATE_BRANDS: {
            const index = copyState.brands.findIndex(e => e.id === action.data.id);
            console.log(index);
            if (index !== -1) {
                console.log(index);
                copyState.brands[index] = action.data;
            }
            copyState.brands = [...copyState.brands];
            return copyState;
        }

        case ACCOUNT_STATUS: {
            const index = copyState.userRoles.findIndex(e => e.id === action.id);
            console.log(index);
            if (index !== -1) {
                console.log(index);
                if (copyState.userRoles[index].verifyAccount === 1) {
                    copyState.userRoles[index].verifyAccount = 0;
                } else {
                    copyState.userRoles[index].verifyAccount = 1;
                }
            }
            copyState.userRoles = [...copyState.userRoles];
            return copyState;

        }
        default:
            return copyState
    }
}
