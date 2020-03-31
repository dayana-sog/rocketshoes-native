import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import Cart from './pages/Cart';
import Home from './pages/Home';

const AppStack = createBottomTabNavigator();

function MyTabs() {
  return (
    <AppStack.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#454777',
      }}
    >
      <AppStack.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={20} />
          ),
        }}
      />
      <AppStack.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color, size }) => (
            <Feather name="shopping-cart" color={color} size={20} />
          ),
        }}
      />
    </AppStack.Navigator>
  );
}

function Routes() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

export default Routes;
