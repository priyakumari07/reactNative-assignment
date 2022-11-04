import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screen/login';

const Auth = () => {
  const Stack = createStackNavigator();
  // Stack Navigator for Login  Screen
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default Auth;
