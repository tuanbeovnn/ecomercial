import axios from 'axios';
import * as config from './../redux/const/Configs';

export default function callAPI(endpoint, method = 'GET', body) {
    return axios({
        method: method,
        url: `${config.API_URL}/${endpoint}`,
        data: body
    }).catch(err => {
        console.log(err);
    });
}