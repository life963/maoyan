// 封装fetch请求

const http = {
    // get(url,) {
    //     return fetch(url).then((response) => {
    //         return response.json();
    //     })
    // }
    get(url, params) {
        //传入两个参数，一个是地址，一个是对象
        //如果有传入对象参数才进行if语句的内容，没有就直接return
        if (params) {
            let arr = []
                // Object.keys(params)可以将{a:1, b:2}  ->  [a, b]
                // forEach(value => arr.push(value + '=' + params[value]))
                // 可以将[a, b]   ->   ['a=1','b=2']
            Object.keys(params).forEach(value => arr.push(value + '=' + params[value]))
                // url += arr.join('&')
                // 判断url里面是否有?
            if (url.includes('?')) {
                url += '&' + arr.join('&')
            } else {
                url += '?' + arr.join('&')
            }
        }
        return fetch(url).then((response) => {
            return response.json();
        })
    },

    post(url, params) {
        //实例一个formdata
        let formdata = new FormData();
        //遍历将数据放入formdata内
        for (let key in params) {
            formdata.append(key, params[key])
        }
        // 将FormData当作body的值传递
        return fetch(url, {
            method: "POST",
            body: formdata
        }).then((response) => {
            return response.json();
        })
    }
}

// 暴露出去
export default http;