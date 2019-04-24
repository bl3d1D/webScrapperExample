import {GET_CATEGORIES, DELETE_NOTIFICATION, GET_NOTIFICATION, CHECK, SAVE_NOTIFICATION, GET_POSTS} from '../actions/types';

const initialState = {
    username: '',
    authenticated: false,
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
        case CHECK :
            console.log(action)
            return {
                ...state,
                authenticated : action.authenticated,
            }
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
        default :
            return state
    }

}