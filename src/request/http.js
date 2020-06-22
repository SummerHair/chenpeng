// 在http.js中引入axios
import axios from 'axios'; // 引入axios
import QS from 'qs'; // 引入qs模块，用来序列化post类型的数据，后面会提到
import { Loading,Message  } from 'element-ui';
var loadingInstance;
// 环境的切换
if (process.env.NODE_ENV == 'development') {
  axios.defaults.baseURL = 'http://218.78.69.174:8088';
  // axios.defaults.baseURL = 'http://172.16.1.0:8088';
}
else if (process.env.NODE_ENV == 'debug') {
  axios.defaults.baseURL = 'http://218.78.69.174:8081';
}
else if (process.env.NODE_ENV == 'production') {
  axios.defaults.baseURL = 'http://218.78.69.174:8081';
}
//请求超时
// axios.defaults.timeout = 10000;
//post请求头
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
// 请求拦截器
axios.interceptors.request.use(
config => {
  loadingInstance = Loading.service({
    lock: true,
    text: '拼命加载中……',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.8)'
  });
  // const token = localStorage.getItem('token');
  const token = localStorage.getItem('zytoken');
  // if (token == undefined){
  //   token = ""
  // }
  token && (config.headers.Authorization = token);
  return config;
},
  error => {
    return Promise.error(error);
})
axios.interceptors.response.use(
  response => {
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    // 否则的话抛出错误
    if (response.status === 200) {
      setTimeout(function () {
        loadingInstance.close();
      },1000)
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  error => {
    if (error.response.status){
      switch (error.response.status) {
        case 403 :
          Message.warning({
            message:'登录信息失效'
          })
          localStorage.removeItem('zytoken')
          setTimeout(function () {
            router.push({
              path:'/sign',
              query: {
                redirect: router.currentRoute.fullPath
              }
            })
          },1000)
          break;
      }
    }
  }
)
//get方法
export function get(url, params){
  return new Promise((resolve, reject) =>{
    axios.get(url, {
      params: params
    }).then(res => {
      resolve(res.data);
    }).catch(err =>{
      reject(err.data)
    })
  })
}
//post方法
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, JSON.stringify(params))
      .then(res => {
        resolve(res.data);
      })
      .catch(err =>{
        reject(err.data)
      })
  });
}
