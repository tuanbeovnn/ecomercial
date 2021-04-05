import axios from 'axios';
import * as config from './../redux/const/Configs';

export function uploadAPI(endpoint, method = 'GET', body) {
    const token =  localStorage.getItem('token');
    const tokenAdmin = localStorage.getItem('tokenAdmin');
    const headers = {
        "Content-Type": "multipart/form-data",
        "Accept": "application/json",
        "type": "formData"
    }
    if (token || tokenAdmin) {
        headers.Authorization = tokenAdmin ? 'Bearer ' + tokenAdmin : 'Bearer' + token 
    }
    return axios({
        method: method,
        url: `${config.API_URL}/${endpoint}`,
        data: body,
        headers : headers
    });
}

export default function callAPI(endpoint, method = 'GET', body) {
    const token =  localStorage.getItem('token');
    const tokenAdmin = localStorage.getItem('tokenAdmin');
    const headers = {
        'Content-Type':'application/json',
        "Accept": "application/json" 
    }
    if (token || tokenAdmin) {
        headers.Authorization = tokenAdmin ? 'Bearer ' + tokenAdmin : 'Bearer' + token
    }
    return axios({
        method: method,
        url: `${config.API_URL}/${endpoint}`,
        data: body,
        headers : headers
    });
    // .catch(err => {
    //     console.log(err);
    // });
}
