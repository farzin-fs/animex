import {AppRegistry, Platform} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';

if (module.hot) {
  module.hot.accept();
}

AppRegistry.registerComponent(appName, () => App);

Platform.OS === 'web' &&
  AppRegistry.runApplication(appName, {
    rootTag: document.getElementById('app-root'),
  });
