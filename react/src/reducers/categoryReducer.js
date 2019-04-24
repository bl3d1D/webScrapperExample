import {GET_CATEGORIES, CREATE_CATEGORY, GET_SUBCATEGORIES, GET_NOTIFICATION,GET_NOTIFICATIONSUB,GET_DETAILSSUB, GET_DETAILS} from '../actions/types';

const initialState = {
    categories : [],
    CategoryLoading: true,
    subcategories : [],
    SubCategoryLoading: true,
    NotificationsSub : [],
    NotificationsSubLoading: true,
    Notifications : [],
    NotificationLoading: true,
    Details : '',
    DetailsLoading : true,
    SubDetails : '',
    SubDetailsLoading : true,


};

export default function(state = initialState, action){
    switch(action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                categories : action.payload,
                CategoryLoading : action.loading,
            }
        case GET_SUBCATEGORIES:
            return {
                ...state,
                subcategories : action.payload,
                SubCategoryLoading : action.loading,
            }
        case GET_NOTIFICATIONSUB:
            return {
                ...state,
                NotificationsSub : action.payload,
                NotificationsSubLoading : action.loading,
            }
        case GET_NOTIFICATION:
            return {
                ...state,
                Notifications : action.payload,
                NotificationLoading : action.loading,
            }
        case GET_DETAILSSUB:
            return {
                ...state,
                SubDetails : action.payload,
                SubDetailsLoading : action.loading,
            }
        case GET_DETAILS:
            return {
                ...state,
                Details : action.payload,
                DetailsLoading : action.loading,
            }
        default :
            return state
    }

}