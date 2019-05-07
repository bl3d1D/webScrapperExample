import {GET_CATEGORIES, CREATE_CATEGORY, GET_SUBCATEGORIES, GET_NOTIFICATION, GET_NOTIFICATIONSUB, GET_DETAILSSUB, GET_DETAILS} from '../actions/types';
import {API_URL } from '../global';
import axios from 'axios';

export const getCategories = () => {


    return dispatch => {
        return axios({
            method:'get',
            url:API_URL+'DBFetch/categories'
        })
        .then(response => {
            var dbData = []; 
            for (var i = 0; i < response.data.length ; i++) {
                dbData.push(response.data[i]);
            }
            dispatch({
                type: GET_CATEGORIES,
                payload: dbData,
                loading : false,
            })
            axios({
                method:'get',
                url:API_URL+'scrapper/categories'
            })
            .then(response => {
                for (var i = 0; i < response.data.length ; i++) {
                    let exists = false;
                    console.log(dbData);
                    for (var j = 0; j < dbData.length; j++) {
                        if(dbData[j].id == response.data[i].id){
                            exists = true;
                        } 
                    }
                    if(!exists){
                        dbData.push(response.data[i]);
                    }
                }
                return dispatch({
                    type: GET_CATEGORIES,
                    payload: dbData,
                    loading : false,
                })
            })
            .catch(error => {
                console.log(error);
            });
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
            url:API_URL+'DBFetch/categories/'+id
        })
        .then(response => {
            var dbData = []; 
            for (var i = 0; i < response.data.length ; i++) {
                dbData.push(response.data[i]);
            }
            dispatch({
                type: GET_SUBCATEGORIES,
                payload: dbData,
                loading : false,
            })
            axios({
                method:'get',
                url:API_URL+'scrapper/categories/'+id
            })
            .then(response => {
                for (var i = 0; i < response.data.length ; i++) {
                    let exists = false;
                    for (var j = 0; j < dbData.length; j++) {
                        if(dbData[j].id == response.data[i].id){
                            exists = true;
                        } 
                    }
                    if(!exists){
                        dbData.push(response.data[i]);
                    }
                }
                dispatch({
                    type: GET_SUBCATEGORIES,
                    payload: dbData,
                    loading : false,
                })
            })
            .catch(error => {
                console.log(error);
            });
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
            url:API_URL+'DBFetch/notificationfromsub/'+id
        })
        .then(response => {
            var dbData = []; 
            for (var i = 0; i < response.data.length ; i++) {
                dbData.push(response.data[i]);
            }
            dispatch({
                type: GET_NOTIFICATIONSUB,
                payload: dbData,
                loading : false,
            })
            axios({
                method:'get',
                url:API_URL+'scrapper/notificationfromsub/'+id
            })
            .then(response => {
                var data = []; 
                for (var i = 0; i < response.data.length ; i++) {
                    let exists = false;
                    for (var j = 0; j < dbData.length; j++) {
                        if(dbData[j].id == response.data[i].id){
                            exists = true;
                        } 
                    }
                    if(!exists){
                        dbData.push(response.data[i]);
                    }
                }
                dispatch({
                    type: GET_NOTIFICATIONSUB,
                    payload: dbData,
                    loading : false,
                })
            })
            .catch(error => {
                console.log(error);
            });
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
            url:API_URL+'DBFetch/notification/'+id
        })
        .then(response => { 
            var dbData = []; 
            for (var i = 0; i < response.data.length ; i++) {
                dbData.push(response.data[i]);
            }
            dispatch({
                type: GET_NOTIFICATION,
                payload: dbData,
                loading : false,
            })
            axios({
                method:'get',
                url:API_URL+'scrapper/notification/'+id
            })
            .then(response => {
                for (var i = 0; i < response.data.length ; i++) {
                    let exists = false;
                    for (var j = 0; j < dbData.length; j++) {
                        if(dbData[j].id == response.data[i].id){
                            exists = true;
                        } 
                    }
                    if(!!exists){
                        dbData.push(response.data[i]);
                    }
                }
                dispatch({
                    type: GET_NOTIFICATION,
                    payload: dbData,
                    loading : false,
                })
            })
            .catch(error => {
                console.log(error);
            });
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
            dispatch({
                type: GET_DETAILS,
                payload: data,
                loading : false,
            })
            axios({
                method:'get',
                url:API_URL+'scrapper/details/'+id
            })
            .then(response => { 
                let data = response.data;
                return dispatch({
                    type: GET_DETAILS,
                    payload: data,
                    loading : false,
                })
            })
            .catch(error => {
                console.log(error);
            });
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
            dispatch({
                type: GET_DETAILSSUB,
                payload: data,
                loading : false,
            })
            axios({
                method:'get',
                url:API_URL+'scrapper/detailsSub/'+id
            })
            .then(response => { 
                let data = response.data; 
                dispatch({
                    type: GET_DETAILSSUB,
                    payload: data,
                    loading : false,
                })
            })
            .catch(error => {
                console.log(error);
            });
        })
        .catch(error => {
            console.log(error);
        });

    }
    
}

export const scrappSubDetails = (id) => {

    return dispatch => {

    }
    
}