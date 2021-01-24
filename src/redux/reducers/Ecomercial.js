import { FETCH_PRODUCT } from "../const/ActionTypes";



const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCT: {
            state = action.products;
            return {...state}
        }
        default:
            return { ...state }
    }
}
