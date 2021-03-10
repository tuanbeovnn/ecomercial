import { FETCH_PRODUCT,FETCH_CATEGORIES, FETCH_PRODUCTS_FEATURE, LOG_IN, FETCH_PRODUCT_NEW, FETCH_PRODUCTS_BESTDEAL, FETCH_PRODUCT_FEATURE_ALL, FETCH_PRODUCT_BESTSELL, FETCH_BANNER } from "../const/ActionTypes";
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
            const data = jwt_decode(action.data.accessToken);
            copyState.user = data;
            return copyState;
        }
        case FETCH_PRODUCT_NEW: {
            copyState.productNew = action.productsNew;
            return copyState;
        }

        case FETCH_PRODUCT_BESTSELL : {
            console.log(action);
            copyState.bestSellProducts = action.productsBestSell;
            return copyState;
        }
        case FETCH_BANNER : {
            console.log(action);
            copyState.banners = action.banner;
            return copyState;
        }
        default:
            return copyState
    }
}
