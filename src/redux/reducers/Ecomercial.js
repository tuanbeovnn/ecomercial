import { FETCH_CATEGORIES, REMOVE_WISH_LIST, FETCH_PRODUCTS_FEATURE, ADD_WISH_LIST, LOG_IN, FETCH_PRODUCT_NEW, FETCH_PRODUCTS_BESTDEAL, FETCH_PRODUCT_BESTSELL,CART_INIT, FETCH_BANNER, FETCH_PRODUCTS_BYCATEGORIES, CART_ADD, CART_REMOVE } from "../const/ActionTypes";
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
    wishList: []
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
        case ADD_WISH_LIST:{
    
            let indexProductWishList = -1; 
            let  wishListUpdate = [...copyState.wishList]; 
            indexProductWishList =  wishListUpdate.findIndex(item => item.id === action.product.id); 
            
            if(indexProductWishList !== -1) {
                alert("Product already in the Wish List !!!")
            } else {
                wishListUpdate.push(action.product); 
            }
            copyState.wishList = wishListUpdate; 
            localStorage.setItem("wishList", JSON.stringify(copyState.wishList)); 
       
      
            return copyState;
        }
        case  REMOVE_WISH_LIST: {
            copyState.wishList = copyState.wishList.filter(product => product.id !== action.product.id);
           
            localStorage.setItem('wishList',JSON.stringify(copyState.wishList));
            console.log(copyState.wishList); 
            return copyState;
        }
        

        default:
            return copyState
    }
}
