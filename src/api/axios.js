import axios from 'axios'

// 创建axios实例
const service = axios.create({
  // baseURL: 'http://iu.snssdk.com/neihan/stream/mix/v1/',
  timeout: 30000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type':'application/x-www-form-urlencoded'
  },
  withCredentials:true 
})

// request拦截器
service.interceptors.request.use(config => {
  return config
}, error => {
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    const resp = response.data;
    if(resp.message != "success") {
        return Promise.reject(response.data.message);
    } 
    return response.data;
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
