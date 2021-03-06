import {GET_CATEGORIES, DELETE_NOTIFICATION, GET_NOTIFICATION, CHECK, SAVE_NOTIFICATION, GET_POSTS, DELETE_POST, ADD_POST} from '../actions/types';

const initialState = {
    username: '',
    savedNotifications: [],
    notificationsLoading: true,
    postedNotifications: [],
    postsLoading: true,
    message: '',
    error: false,
    success: false,
};

export default function(state = initialState, action){
    switch(action.type) {
        case SAVE_NOTIFICATION :
            return {
                ...state,
                message : action.message,
                error: action.error,
                success: action.success,
            }
        case GET_NOTIFICATION :
            return {
                ...state,
                savedNotifications: action.savedNotifications,
                notificationsLoading: action.notificationsLoading
            }
        case DELETE_NOTIFICATION :
            return {
                ...state,
                savedNotifications: action.savedNotifications,
            }
        case GET_POSTS :
            return {
                ...state,
                postedNotifications: action.postedNotifications,
                postsLoading: action.postsLoading
            }
        case DELETE_POST :
            return {
                ...state,
                postedNotifications: action.postedNotifications
            }
        case ADD_POST :
            return {
                ...state,
                message : action.message,
                error: action.error,
                success: action.success,
            }
        default :
            return state
    }

}