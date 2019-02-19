import * as types from '../constants/loginType';

// 初始状态
const initialState = {
    status: '点击登录',
    isSuccess: false,
    user: null,
}

// 不同类别的事件使用 switch 对应处理过程
export default function loginIn(state=initialState, action) {
    switch (action.type) {
        case types.LOGIN_IN_DONING:
            return {
                ...state,
                status: '正在登录',
                isSuccess: false,
                user: null
            }
            break;
        case types.LOGIN_IN_DONE:
            return {
                ...state,
                status: '登录成功',
                isSuccess: true,
                user: action.user
            }
            break;
        case types.LOGIN_IN_ERROR:
            return {
                ...state,
                status: '登录出错',
                isSuccess: true,
                user: null
            }
            break;
        default:
            return state;
    }
}