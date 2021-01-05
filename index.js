/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {App as AppOriginal} from './App';
import {name as appName} from './app.json';
import App from './src/app';

AppRegistry.registerComponent(appName, () => App);
