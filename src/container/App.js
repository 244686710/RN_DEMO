import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import LoginPage from '../pages/LoginPage'
import MainPage from '../pages/MainPage'

const App = StackNavigator({
  Login: { screen: LoginPage }, //定义路由
  Main: { screen: MainPage },
}, {
  // 默认显示界面为 Main
  initialRouteName: "Main",
});


export default App;
