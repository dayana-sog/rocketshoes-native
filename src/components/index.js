import React from 'react';
import { connect } from 'react-redux';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { withBadge, Icon } from 'react-native-elements';

import Cart from '../pages/Cart';
import Home from '../pages/Home';

const AppStack = createBottomTabNavigator();

function MyTabs({ cartSize }) {
  const Badge = withBadge(cartSize)(Icon);

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
            <Badge type="ionicon" color={color} name="md-cart" size={24} />
          ),
        }}
      />
    </AppStack.Navigator>
  );
}

export default connect((state) => ({
  cartSize: state.cart.length,
}))(MyTabs);
