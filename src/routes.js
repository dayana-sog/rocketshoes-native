import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MyTabs from './components/index';

function Routes() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

export default Routes;
