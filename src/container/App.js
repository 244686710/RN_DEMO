import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { connect } from 'react-redux'; // 引入connect函数
import Counter from '../components/Counter';
import *as counterAction from '../actions/counterAction';
// import { StackNavigator } from 'react-navigation';
// import LoginPage from '../pages/LoginPage'
// import MainPage from '../pages/MainPage'

// const App = StackNavigator({
//   Login: { screen: LoginPage }, //定义路由
//   Main: { screen: MainPage },
// }, {
//   initialRouteName: 'Login',
// });
class App extends Component {
  
  render() {
    const { key1, count, incrementFn, decrementFn } = this.props;
    return (
      <View>
        <Counter incrementFn={incrementFn} decrementFn={decrementFn} counter={count}></Counter>
        <Text>测试 {key1}</Text>
      </View>
    )
  }
}

export default connect((state) => ({
  count: state.counter.count,
  key1: 1,
  key2: 2
}), (dispatch) => ({
  incrementFn: () => dispatch(counterAction.increment()),
  decrementFn: () => dispatch(counterAction.decrement()),
}))(App)
