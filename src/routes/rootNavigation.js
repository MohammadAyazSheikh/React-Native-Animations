import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);
import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from '../screens/loginScreen';
import Message from '../screens/messageScreen';
import Chat from '../screens/chatScreen';



const Drawer = createStackNavigator();



export default function RootNav() {
  return (
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
        <Drawer.Screen name="Home" component={Login}
          options={{
            headerShown: false,

          }}
        />
        <Drawer.Screen name="Message" component={Message}
          options={{
            headerShown: false
          }}
        />
        <Drawer.Screen name="Chat" component={Chat}
          options={{
            headerShown: false
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}