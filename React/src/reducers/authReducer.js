import { REGISTER, LOGIN, CHECK } from '../actions/types';

const initialState = {
    error : false,
    success : false,
    message : '',
    authenticated: false,

};

export default function(state = initialState, action){
    switch(action.type) {
        case REGISTER:
            return {
                ...state,
                error : action.error,
                success : action.success,
                message : action.message
            }
        case LOGIN:
            return {
                ...state,
                error : action.error,
                success : action.success,
                message : action.message,
                authenticated: true,
            }
        case CHECK :
            return {
                ...state,
                authenticated : action.authenticated,
            }
        default :
            return state
    }

}