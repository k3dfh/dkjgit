import request from '../utils/request'
export function login(val){
    return request({
        url:"/adminapi/login",
        method:'post',
        data:val
    })
}