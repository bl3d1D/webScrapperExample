import { API_URL } from '../global';
import axios from 'axios';
import { SAVE_NOTIFICATION, CREATE_NOTIFICATION, DELETE_NOTIFICATION, GET_NOTIFICATION, GET_POSTS } from '../actions/types';

var headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
}

export const saveNotification = (data) => {
    return dispatch => {
        return axios({
            method:'post',
            data,
            headers: headers,
            url: API_URL+'user_notification/save'
        })
        .then(response => {
            console.log(response);
            dispatch({
                type: SAVE_NOTIFICATION,
                error: false,
                message: response.data,
                success: true
            });
            setTimeout(() => {
                dispatch({
                    type: SAVE_NOTIFICATION,
                    success: false,
                    message: '',
                    error: false
                })
            },2000)
        })
        .catch(error => {
            console.log(error.response);
            if(typeof error.response != "undefined"){
                if(error.response.status == 401){
                    localStorage.removeItem("token");
                    window.location.href = "/login";
                }
                if(error.response.status == 500){
                    dispatch({
                        type: SAVE_NOTIFICATION,
                        error: true,
                        message: "Internal error! Please refresh the page!",
                        success: false
                    });
                }
            }
        });
    }
}

export const getUserNotification = () => {
    return dispatch => {
        return axios({
            method:'post',
            headers: headers,
            url: API_URL+'user_notification/get'
        })
        .then(response => {
            dispatch({
                type: GET_NOTIFICATION,
                savedNotifications: response.data,
                notificationsLoading: false,

            });
        })
        .catch(error => {
            console.log(error.response);
            if(typeof error.response != "undefined"){
                if(error.response.status == 401){
                    localStorage.removeItem("token");
                    window.location.href = "/login";
                }
                if(error.response.status == 500){
                    dispatch({
                        type: GET_NOTIFICATION,
                        error: true,
                        message: "Internal error! Please refresh the page!",
                        success: false
                    });
                }
            }
        });
    }
}

export const deleteUserNotification = (id) => {
    return dispatch => {
        return axios({
            method:'post',
            headers: headers,
            url: API_URL+'user_notification/delete/'+id
        })
        .then(response => {
            dispatch({
                type: DELETE_NOTIFICATION,
                savedNotifications: response.data,
            });
        })
        .catch(error => {
            console.log(error.response);
            if(typeof error.response != "undefined"){
                if(error.response.status == 401){
                    localStorage.removeItem("token");
                    window.location.href = "/login";
                }
                if(error.response.status == 500){
                    dispatch({
                        type: DELETE_NOTIFICATION,
                        error: true,
                        message: "Internal error! Please refresh the page!",
                        success: false
                    });
                }
            }
        });
    }
}

export const savePost = (data) => {
    return dispatch => {
        return axios({
            method:'post',
            data,
            headers: headers,
            url: API_URL+'user_notification/save'
        })
        .then(response => {
            console.log(response);
            dispatch({
                type: SAVE_NOTIFICATION,
                error: false,
                message: response.data,
                success: true
            });
            setTimeout(() => {
                dispatch({
                    type: SAVE_NOTIFICATION,
                    success: false,
                    message: '',
                    error: false
                })
            },2000)
        })
        .catch(error => {
            console.log(error.response);
            if(typeof error.response != "undefined"){
                if(error.response.status == 401){
                    localStorage.removeItem("token");
                    window.location.href = "/login";
                }
                if(error.response.status == 500){
                    dispatch({
                        type: SAVE_NOTIFICATION,
                        error: true,
                        message: "Internal error! Please refresh the page!",
                        success: false
                    });
                }
            }
        });
    }
}

export const getPosts = () => {
    return dispatch => {
        return axios({
            method:'post',
            headers: headers,
            url: API_URL+'userposts/get'
        })
        .then(response => {
            dispatch({
                type: GET_POSTS,
                postedNotifications: response.data,
                postsLoading: false,
            });
        })
        .catch(error => {
            console.log(error.response);
            if(typeof error.response != "undefined"){
                if(error.response.status == 401){
                    localStorage.removeItem("token");
                    window.location.href = "/login";
                }
                if(error.response.status == 500){
                    dispatch({
                        type: GET_NOTIFICATION,
                        error: true,
                        message: "Internal error! Please refresh the page!",
                        success: false
                    });
                }
            }
        });
    }
}

export const deletePosts = (id) => {
    return dispatch => {
        return axios({
            method:'post',
            headers: headers,
            url: API_URL+'user_notification/delete/'+id
        })
        .then(response => {
            dispatch({
                type: DELETE_NOTIFICATION,
                savedNotifications: response.data,

            });
        })
        .catch(error => {
            console.log(error.response);
            if(typeof error.response != "undefined"){
                if(error.response.status == 401){
                    localStorage.removeItem("token");
                    window.location.href = "/login";
                }
                if(error.response.status == 500){
                    dispatch({
                        type: DELETE_NOTIFICATION,
                        error: true,
                        message: "Internal error! Please refresh the page!",
                        success: false
                    });
                }
            }
        });
    }
}