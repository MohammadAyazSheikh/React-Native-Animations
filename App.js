import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);
import * as React from 'react';
import { Button, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/HomeScreen';
import Cart from './src/screens/cartScreen';
import Test from './src/screens/testScreen';
import { configureStore } from './src/redux/configureStore';
import { Provider } from 'react-redux';


function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createStackNavigator();

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>

      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: 'tomato',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}

        >
          <Drawer.Screen name="Home" component={Test}
            options={{
              headerShown: false,

            }}
          />
          <Drawer.Screen name="Cart" component={Cart}
            options={{
              headerShown: false
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>


    </Provider>
  );
}