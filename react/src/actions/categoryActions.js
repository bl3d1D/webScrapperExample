import {GET_CATEGORIES, CREATE_CATEGORY, GET_SUBCATEGORIES, GET_NOTIFICATION, GET_NOTIFICATIONSUB, GET_DETAILSSUB, GET_DETAILS, ADD_POST} from '../actions/types';
import {API_URL } from '../global';
import axios from 'axios';

export const getCategories = () => {

    return dispatch => {
        return axios({
            method:'get',
            url:API_URL+'scrapper/categories'
        })
        .then(response => {
            var data = []; 
            for (var i = 0; i < response.data.length ; i++) {
                data.push(response.data[i]);
            }
            return dispatch({
                type: GET_CATEGORIES,
                payload: data,
                loading : false,
            })
        })
        .catch(error => {
            console.log(error);
        });

    }
    
}

export const getSubCategories = (id) => {

    return dispatch => {
        if(id > 2){
            return dispatch({
                    type: GET_SUBCATEGORIES,
                    payload: [],
                    loading : false,
                });
        }
        return axios({
            method:'get',
            url:API_URL+'scrapper/categories/'+id
        })
        .then(response => {
            var data = []; 
            for (var i = 0; i < response.data.length ; i++) {
                data.push(response.data[i]);
            }
            console.log(data);
            return dispatch({
                type: GET_SUBCATEGORIES,
                payload: data,
                loading : false,
            })
        })
        .catch(error => {
            console.log(error);
        });

    }
    
}

export const getNotificationsSub = (id) => {

    return dispatch => {
        return axios({
            method:'get',
            url:API_URL+'scrapper/notificationfromsub/'+id
        })
        .then(response => {
            console.log(response);
            var data = []; 
            for (var i = 0; i < response.data.length ; i++) {
                data.push(response.data[i]);
            }
            console.log(data);
            return dispatch({
                type: GET_NOTIFICATIONSUB,
                payload: data,
                loading : false,
            })
        })
        .catch(error => {
            console.log(error);
        });

    }
    
}

export const getNotifications = (id) => {

    return dispatch => {
        return axios({
            method:'get',
            url:API_URL+'scrapper/notification/'+id
        })
        .then(response => { 
            var data = []; 
            for (var i = 0; i < response.data.length ; i++) {
                data.push(response.data[i]);
            }
            return dispatch({
                type: GET_NOTIFICATION,
                payload: data,
                loading : false,
            })
        })
        .catch(error => {
            console.log(error);
        });

    }
    
}


export const getDetails = (id) => {

    return dispatch => {
        return axios({
            method:'get',
            url:API_URL+'scrapper/details/'+id
        })
        .then(response => { 
            let data = response.data;
            console.log(data);
            return dispatch({
                type: GET_DETAILS,
                payload: data,
                loading : false,
            })
        })
        .catch(error => {
            console.log(error);
        });

    }
}

export const getSubDetails = (id) => {

    return dispatch => {
        return axios({
            method:'get',
            url:API_URL+'scrapper/detailsSub/'+id
        })
        .then(response => { 
            let data = response.data; 
            console.log(data);
            return dispatch({
                type: GET_DETAILSSUB,
                payload: data,
                loading : false,
            })
        })
        .catch(error => {
            console.log(error);
        });

    }
    
}