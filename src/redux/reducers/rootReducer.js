import {combineReducers} from 'redux';
import Ecomercial from './Ecomercial';
import AdminReducer from './AdminReducer';


export const rootReducer = combineReducers({
    Ecomercial,
    AdminReducer
    
})