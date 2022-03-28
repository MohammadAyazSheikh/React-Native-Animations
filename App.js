import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);
import * as React from 'react';
import { Button, View } from 'react-native';


import { configureStore } from './src/redux/configureStore';
import { Provider } from 'react-redux';
import { PaperProvider } from 'react-native-paper';
import RootNav from './src/routes/rootNavigation';





const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>

        <RootNav />
    
    </Provider>
  );
}