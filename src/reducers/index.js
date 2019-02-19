'use strict';

import { combineReducers } from 'redux';
import loginIn from './loginReducer';

const rootReducer = combineReducers({
    loginIn: loginIn,
})

export default rootReducer; // 导出，作为统一入口