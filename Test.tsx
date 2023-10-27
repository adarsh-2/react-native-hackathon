import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Beauty from './screens/Beauty';
import Homes from './screens/Homes';

const Tab = createBottomTabNavigator();

export default function Test() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Homes" component={Homes} />
        <Tab.Screen name="Beauty" component={Beauty} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
