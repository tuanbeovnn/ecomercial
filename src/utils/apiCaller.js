import axios from 'axios';
import * as config from './../redux/const/Configs';

export default function callAPI(endpoint, method = 'GET', body) {
    const token =  localStorage.getItem('token');
   
    const headers = {

        'Content-Type':'multipart/form-data' 
    }
    if (token) {
        headers.Authorization = 'Bearer ' + token
    }
    return axios({
        method: method,
        url: `${config.API_URL}/${endpoint}`,
        data: body,
        // headers : header
    });
    // .catch(err => {
    //     console.log(err);
    // });
}