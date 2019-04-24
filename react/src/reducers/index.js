import { combineReducers } from 'redux';
import categoryReducer from './categoryReducer';
import authReducer from './authReducer';
import userReducer from './userReducer';

export default combineReducers({
    CategoryData : categoryReducer,
    Authdata : authReducer,
    Userdata : userReducer
});