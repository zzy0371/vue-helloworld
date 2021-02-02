// 导入axios 注册原型
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8000/';
import Cookie from 'js-cookie'

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
	let token = Cookie.get("token")
	if(token){
		config["headers"]["Authorization"]="Bearer "+token;
	}
	console.log("修改以后的config",config.headers.Authorization);
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
	console.log(response,"response");
    return response;
  }, function (error) {
    // 对响应错误做点什么
	if(error.response.status=="403"){
		return {
			"error":"用户权限不够"
		}
	}
    return Promise.reject(error);
  });
  
export default axios