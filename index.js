/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
// import SomeTaskName from './SomeTaskName';
import Geolocation from '@react-native-community/geolocation';

AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerHeadlessTask('SomeTaskName', () => SomeTaskName);

const LogLocation = async data => {
  console.log('kkkkkkkkkkkkkkkk');
  // navigator.geolocation.getCurrentPosition(position => {
  //   console.log(position);
  // });
  Geolocation.getCurrentPosition(info => {
    console.log(
      `https://www.google.com/maps/@${info.coords.latitude},${
      info.coords.longitude
      },10.92z`,
    );
    console.log(info);
  });
};
AppRegistry.registerHeadlessTask('LogLocation', () => LogLocation);
