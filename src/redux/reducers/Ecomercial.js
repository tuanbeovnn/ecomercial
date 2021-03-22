import { FETCH_CATEGORIES, FETCH_PRODUCTS_FEATURE, FETCH_STORE_LOCATION, LOG_IN, FETCH_PRODUCT_NEW, FETCH_PRODUCTS_BESTDEAL, FETCH_PRODUCT_BESTSELL,CART_INIT, FETCH_BANNER, FETCH_PRODUCTS_BYCATEGORIES, CART_ADD, CART_REMOVE } from "../const/ActionTypes";
import jwt_decode from "jwt-decode";

const initialState = {
    categories: [],
    featureCategories:[],
    productFeatureAlll: [],
    productNew: [],
    bestSellProducts: [],
    bestdealCategories: [],
    productsBestDealAll: [],
    banners: [],
    user:{},
    cart: [], 
    store: []
};

export default (state = initialState, action) => {
   
    const copyState = {...state}
    
    switch (action.type) {
        case FETCH_CATEGORIES: {
            copyState.featureCategories = JSON.parse(JSON.stringify(action.categories));
            copyState.bestdealCategories = JSON.parse(JSON.stringify(action.categories));
            copyState.categories = action.categories;
            return copyState;
        }
        case FETCH_PRODUCTS_FEATURE: {
            const index = copyState.featureCategories.findIndex(c => c.code ===action.code);
            if (index !== -1) {
                copyState.featureCategories = [...copyState.featureCategories];
                copyState.featureCategories[index].products = action.products;
            }else {
                copyState.productFeatureAlll = action.products;
            }
            return copyState;
        }
        case FETCH_PRODUCTS_BESTDEAL: {
            const index = copyState.bestdealCategories.findIndex(c => c.code ===action.code);
            if (index !== -1) {
                copyState.bestdealCategories = [...copyState.bestdealCategories];
                copyState.bestdealCategories[index].products = action.products;
            }else {
                copyState.productsBestDealAll = action.products;
            }
            return copyState;
        }
        case LOG_IN: {
            console.log(action.data, action.data.accessToken);
            const data = jwt_decode(action.data.accessToken);

            copyState.user = data;
            return copyState;
        }
        case FETCH_PRODUCT_NEW: {
            copyState.productNew = action.productsNew;
            return copyState;
        }

        case FETCH_PRODUCT_BESTSELL : {
            
            copyState.bestSellProducts = action.productsBestSell;
            return copyState;
        }
        case FETCH_BANNER : {
            
            copyState.banners = action.banner;
            return copyState;
        }
        case CART_INIT :{
            copyState.cart = action.cart;
            return copyState;
        }
        case CART_ADD : {
            copyState.cart = [action.product,...copyState.cart];// copy san pham vao phan tu dau tien
            localStorage.setItem('cart',JSON.stringify(copyState.cart));
            return copyState;
        }

        case CART_REMOVE : {
            copyState.cart = copyState.cart.filter(product => product.id !== action.id);
            localStorage.setItem('cart',JSON.stringify(copyState.cart));
            return copyState;
        }
        case FETCH_STORE_LOCATION: {
            console.log(action.data); 
            copyState.store = action.data; 
            console.log("copyState.store",copyState.store); 
            return copyState;
        }
        default:
            return copyState
    }
}
