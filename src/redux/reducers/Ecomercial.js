import { FETCH_CATEGORIES, FETCH_PRODUCTS_FEATURE, LOG_IN, REMOVE_COMPARE, FETCH_PRODUCT_NEW, FETCH_PRODUCTS_BESTDEAL, FETCH_PRODUCT_BESTSELL, CART_INIT, FETCH_BANNER, FETCH_PRODUCTS_BYCATEGORIES, CART_ADD, CART_REMOVE, REGISTER, USER_INIT, UPDATE_USER, FETCH_BRAND, WISHLIST_INIT, ADD_WISHLIST, WISHLIST_REMOVE, FETCH_TIME_END, COMPARE_INIT, ADD_COMPARE, FETCH_STORE, SEARCH_PRODUCT } from "../const/ActionTypes";
import jwt_decode from "jwt-decode";


const initialState = {
    categories: [],
    featureCategories: [],
    productFeatureAlll: [],
    productNew: [],
    bestSellProducts: [],
    bestdealCategories: [],
    productsBestDealAll: [],
    banners: [],
    user: {},
    cart: [],
    register: {},
    brands: [],
    wishList: [],
    timeEnd: {},
    compare: [],
    stores : [],
    searchProduct : [],
    total:0,
    currentPage: 0
};

export default (state = initialState, action) => {

    const copyState = { ...state }

    switch (action.type) {
        case FETCH_CATEGORIES: {
            copyState.featureCategories = JSON.parse(JSON.stringify(action.categories));
            copyState.bestdealCategories = JSON.parse(JSON.stringify(action.categories));
            copyState.categories = action.categories;
            return copyState;
        }
        case FETCH_PRODUCTS_FEATURE: {
            const index = copyState.featureCategories.findIndex(c => c.code === action.code);
            if (index !== -1) {
                copyState.featureCategories = [...copyState.featureCategories];
                copyState.featureCategories[index].products = action.products;
            } else {
                copyState.productFeatureAlll = action.products;
            }
            return copyState;
        }
        case FETCH_PRODUCTS_BESTDEAL: {
            const index = copyState.bestdealCategories.findIndex(c => c.code === action.code);
            if (index !== -1) {
                copyState.bestdealCategories = [...copyState.bestdealCategories];
                copyState.bestdealCategories[index].products = action.products;
            } else {
                copyState.productsBestDealAll = action.products;
            }
            return copyState;
        }
        case LOG_IN: {
            const data = jwt_decode(action.data.accessToken);
            localStorage.setItem('token', action.data.accessToken);
            copyState.user = data;
            return copyState;
        }
        case USER_INIT: {
            const data = jwt_decode(action.token);
            copyState.user = data;
            return copyState;
        }
        case FETCH_PRODUCT_NEW: {
            copyState.productNew = action.productsNew;
            return copyState;
        }

        case FETCH_PRODUCT_BESTSELL: {

            copyState.bestSellProducts = action.productsBestSell;
            return copyState;
        }
        case FETCH_BANNER: {

            copyState.banners = action.banner;
            return copyState;
        }
        case CART_INIT: {
            copyState.cart = action.cart;
            return copyState;
        }
        case CART_ADD: {
            copyState.cart = [action.product, ...copyState.cart];// copy san pham vao phan tu dau tien
            localStorage.setItem('cart', JSON.stringify(copyState.cart));
            return copyState;
        }

        case CART_REMOVE: {
            copyState.cart = copyState.cart.filter(product => product.id !== action.id);
            localStorage.setItem('cart', JSON.stringify(copyState.cart));
            return copyState;
        }
        case REGISTER: {
            copyState.register = action.user;
            return copyState;
        }
        case UPDATE_USER: {
            copyState.user = action.data;
            return copyState;
        }
        case FETCH_BRAND: {
            copyState.brands = action.brands;
            return copyState;
        }

        case WISHLIST_INIT: {
            copyState.wishList = action.wishList;
            return copyState;
        }
        case ADD_WISHLIST: {
            copyState.wishList = [action.product, ...copyState.wishList];// copy san pham vao phan tu dau tien
            localStorage.setItem('wishList', JSON.stringify(copyState.wishList));
            return copyState;
        }
        case WISHLIST_REMOVE: {
            copyState.wishList = copyState.wishList.filter(product => product.id !== action.id);
            localStorage.setItem('wishList', JSON.stringify(copyState.wishList));
            return copyState;
        }

        case FETCH_TIME_END: {
            copyState.timeEnd = action.timeEnd;
            return copyState;
        }

        case COMPARE_INIT: {
            copyState.compare = action.compare;
            return copyState;
        }
        case ADD_COMPARE: {
            copyState.compare.splice(2);
            console.log(copyState.compare);
            copyState.compare = [action.product, ...copyState.compare];// copy san pham vao phan tu dau tien

            localStorage.setItem('compare', JSON.stringify(copyState.compare));
            return copyState;
        }
        case REMOVE_COMPARE: {
            copyState.compare = copyState.compare.filter(product => product.id !== action.id);
            localStorage.setItem('compare', JSON.stringify(copyState.wishList));
            return copyState;
        }
        case FETCH_STORE : {
          
           copyState.stores = action.stores;
           return copyState;
        }
        case SEARCH_PRODUCT : {
            copyState.searchProduct = action.product;
            copyState.total = action.total;
            copyState.currentPage = action.currentPage;
            return copyState;
        }
        default:
            return copyState
    }
}
