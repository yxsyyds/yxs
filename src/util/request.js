import axios from 'axios';
import qs from 'qs'
import store from '../store'

let base = "/api";


// 请求拦截 
axios.interceptors.request.use(req=>{
//     // 判断 如果不是登录页就添加请求头 
//     if(req.url != base+"/api/login"){
//         req.headers.authorization = store.state.userinfo.token
//     }
    return req
})

// 响应拦截
axios.interceptors.response.use(res => {
//     console.group("====本次请求的路径" + res.config.url);
//     console.log(res);
    return res
});


// 菜单menu添加数据
// export const reqmenu = (from) => {
//     return axios({
//         url: base + "/api/menuadd",
//         method: 'post',
//         data: qs.stringify(from)
//     })
// }