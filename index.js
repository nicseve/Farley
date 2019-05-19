/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
// import HomeScreen from './HomeScreen'
// import ProfileScreen from './ProfileScreen'
import {name as appName} from './app.json';

// export {HomeScreen,ProfileScreen}
AppRegistry.registerComponent(appName, () => App);
