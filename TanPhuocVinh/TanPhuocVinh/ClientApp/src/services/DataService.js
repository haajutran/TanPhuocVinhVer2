import * as constant from "./Constant"
import axios from "axios"

// function getHeader(){
//     var header = {
//         Accpet: "application/json",
//         "Content-Type": "application/json",
//         Authorization: "Bearer" + authService.getLoggedInUser().access_token
//     };
//     return header
// }

function getHeaderWithoutBearer(){
    var header = {
        Accpet: "application/json",
        "Content-Type": "application/json"
    };
    return header
}

export const get = async url => {
    return await axios
        .get(constant.BASE_URL + url, {
            headers: getHeaderWithoutBearer()
        })
        .then(res => {
            return res.data;
        })
        .catch(error => {
            return error.response;
        })
}


export const post = async (url, data) => {
    return await axios
        .post(constant.BASE_URL + url, JSON.stringify(data), {
            headers: getHeaderWithoutBearer()
        })
        .then(res => {
            return res;
        })
        .catch(error => {
            return error.response;
        })
}


export const put = async (url, data) => {
    return await axios
        .put(constant.BASE_URL + url, JSON.stringify(data), {
            headers: getHeaderWithoutBearer()
        })
        .then(res => {
            return res;
        })
        .catch(error => {
            return error.response;
        })
}

export const remove = async url => {
    return await axios
        .delete(constant.BASE_URL + url, {
            headers: getHeaderWithoutBearer()
        })
        .then(res => {
            return res.data;
        })
        .catch(error => {
            return error.response;
        })
}



