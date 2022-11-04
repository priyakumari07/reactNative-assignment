import * as React from 'react';
import Login from '../screen/login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InProgress from '../screen/in-progress';
import {WatchList} from '../screen/watch-list';

export default function Router() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="InProgress"
        component={InProgress}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="WatchList"
        component={WatchList}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
