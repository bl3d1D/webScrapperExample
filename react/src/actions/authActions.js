import { API_URL } from '../global';
import axios from 'axios';
import { REGISTER, LOGIN,CHECK } from '../actions/types';

var headers = {
    'Content-Type': 'application/json'
}

export const Register = (data) => {

    return dispatch => {
        //alert(data);
        data = JSON.stringify(data);
        console.log(data);
        return axios.post(API_URL+'auth/signup', data, {headers: headers})
            .then((response) => {
                console.log(response);
                dispatch({
                    type: REGISTER,
                    success : response.data.success,
                    message : response.data.message,
                    error : !response.data.success,
                })
                setTimeout(() => {
                    dispatch({
                        type: REGISTER,
                        success : false,
                        message : '',
                        error : false,
                    })
                },4000)
            })
            .catch((error) => {

                var errors = JSON.parse(error.request.response).errors;
                console.log(errors);
                var message = "";
                errors.forEach(function(error){
                    message += error.field.toUpperCase() +": "+ error.defaultMessage + "\n";
                });
                console.log(message);
                dispatch({
                    type: REGISTER,
                    success : false,
                    message : message,
                    error : true,
                })
                setTimeout(() =>{
                    dispatch({
                        type: REGISTER,
                        success : false,
                        message : '',
                        error : false,
                    })
                },4000)

            })

    }
    
}

export const LogIn = (data) => {

    return dispatch => {
        data = JSON.stringify(data);
        console.log(data);
        return axios.post(API_URL+'auth/signin', data, {headers: headers})
            .then((response) => {
                let accessToken = response.data.tokenType + " " + response.data.accessToken;
                localStorage.setItem("token", accessToken);
                let message = "Logged in successfully!";
                dispatch({
                    type: LOGIN,
                    success : true,
                    message : message,
                    error : false,
                })
                setTimeout(() =>{
                    dispatch({
                        type: LOGIN,
                        success : false,
                        message : '',
                        error : false,
                    })
                },3000)
                dispatch({
                    type: LOGIN,
                    authenticated : true,
                })


            })
            .catch((error) => {
                console.log(error.response.data);
                let message = "";
                message += error.response.data.error.toUpperCase() +": "+ error.response.data.message + "\n";

                dispatch({
                    type: LOGIN,
                    success : false,
                    message : message,
                    error : true,
                })
                setTimeout(() =>{
                    dispatch({
                        type: LOGIN,
                        success : false,
                        message : '',
                        error : false,
                    })
                },4000)
            })

    }
    
}


export function IsLoggedIn(){


    return dispatch => {
        let token = localStorage.getItem("token");
        if(token != null && token != '' && typeof token != 'undefined'){
            console.log(token);
            dispatch({
                type: CHECK,
                authenticated : true,
            });
        }else{
            dispatch({
                type: CHECK,
                authenticated : false,
                error: true,
                message: 'Your session is over. /n'+'Please login again!'
            });
            setTimeout(() =>{
                dispatch({
                    type: CHECK,
                    success : false,
                    message : '',
                    error : false,
                })
            },4000)
        }

    }

    
}