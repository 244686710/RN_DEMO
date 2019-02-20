/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Root from './src/Root';
// import App from './App';

AppRegistry.registerComponent(appName, () => Root);