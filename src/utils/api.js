import http from './http.js'
//调用http内的get方法，获取横幅区域的数据，只需要域名后的地址，前面的域名用后端代理完成，解决跨域问题
// 首页第一次获取数据
export function getIndexList(obj) {
    return http.get('/ajax/movieOnInfoList?token=', obj)
}

// 首页上拉刷新请求数据
export function getMoreComing(obj) {
    return http.get('/ajax/moreComingList?token=&', obj)
}

// 电影详情数据
export function getMovie(obj) {
    return http.get('/ajax/detailmovie', obj)
}

// 电影院详情数据
export function getCinema(obj) {
    return http.post('/ajax/movie?forceUpdate=1598330196607', obj)
}