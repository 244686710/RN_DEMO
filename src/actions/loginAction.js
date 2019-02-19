import * as types from '../constants/loginType'; // 导入事件类型，用来做分配给各个事件

// 模拟用户信息
let user = {
    name: 'YuYD',
    age: 28
}

// 访问登陆接口， 根据返回结果来划分 action 属于那个type,然后返回对象，给 reducer 处理
export function login() {
    console.log('登陆方法');
    return dispatch => {
        dispatch(isLogining()) //正在执行登陆请求
        // 模拟用户登陆
        let result = fetch('https://www.baidu.com/')
            .then((res)=> {
                dispatch(loginSuccess(true, user)); // 登陆请求完成
            }).catch((e) => {
                dispatch(loginError(false)) // 登陆请求失败
            })
    }
}

function isLogining () {
    return {
       type: types.LOGIN_IN_DOING
    }
}

function loginSuccess(isSuccess, user) {
    console.log('success')
    return {
        type: types.LOGIN_IN_DONE
    }
}

function loginError(isSuccess) {
    console.log('error')
    return {
        type: types.loginError
    }
}