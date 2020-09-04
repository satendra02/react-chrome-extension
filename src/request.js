import axios from 'axios'
console.log('API_ENV',process.env.NODE_ENV)
const baseURL = process.env.NODE_ENV === 'production' ? 'https://apiv2.aminer.cn/' : 'https://apiv2-beta.aminer.cn/'
const tokenName = process.env.NODE_ENV === 'production' ? 'ex-token' : 'token'
axios.defaults.timeout = 1000000;
axios.defaults.baseURL = baseURL;

export default function request(url, options) {
    const token = localStorage.getItem(tokenName)
    let obj = {
        baseURL: baseURL
    }
    if (token) {
        obj = {
            baseURL: baseURL,
            headers: { 'Authorization': token }
        }
    }
    const httpProvider = axios.create(obj)
    httpProvider.interceptors.response.use((response) => {
        if (response.data && response.data.data) return response.data.data
        return response
    }, (error) => {
        return Promise.reject(error)
    })
    return httpProvider({
        url: url,
        ...options
    }).then((response) => {
        return response
    }).catch((error) => {
        return error
    })
}
