import { REGISTER, LOGIN } from '../actions/types';

const initialState = {
    error : false,
    success : false,
    message : '',

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
                message : action.message
            }
        default :
            return state
    }

}