import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import Router from './src/navigation/router';
import {navigationRef} from './src/navigation/RootNavigation';

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Router />
    </NavigationContainer>
  );
};

export default App;
