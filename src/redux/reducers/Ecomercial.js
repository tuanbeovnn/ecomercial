import { FETCH_PRODUCT,FETCH_CATEGORIES, FETCH_PRODUCTS_CATEGORY_FEATURE } from "../const/ActionTypes";



const initialState = {
    categories: [],
    featureCategories:[{id: 1,code: 'laptop', name: 'laptop'}],
    productFeatureAlll: [],
    bestdeal: []
};

export default (state = initialState, action) => {
    console.log(action);
    const copyState = {...state}
    switch (action.type) {
        case FETCH_PRODUCT: {
            copyState.productFeatureAlll = action.products;
            return copyState;
        }
        case FETCH_CATEGORIES: {
            // copyState.categories= [...action.categories];
            copyState.featureCategories=[...action.categories];
            copyState.categories = action.categories;
            return copyState;
        }
        // case 'featureall':{
        //     copyState.productFeatureAlll = [...action.products]
        //     return copyState
        // }
        case FETCH_PRODUCTS_CATEGORY_FEATURE: {
            const index = copyState.featureCategories.findIndex(c => c.code ===action.code);
            console.log(index);
            copyState.featureCategories = [...copyState.featureCategories];
            if (index !== -1) {
                copyState.featureCategories[index].products = action.products;
            }else {
                copyState.featureCategories[index].products = [];
            }
            return copyState;
            
            //copylai state va return
        }
        default:
            return copyState
    }
}
