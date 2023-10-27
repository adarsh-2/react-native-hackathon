import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, Text, View} from 'react-native';

import SearchBar from './Components/SearchBar';
import Card from './Components/Card';
import Slider from './Components/Slider';
import ReviewSection from './Components/ReviewSection';
// import Test from './Test';

function App() {
  return (
    <SafeAreaView>
      <View>
        <SearchBar />
        <Card />
      </View>
      {/* <View>
        <ReviewSection />
      </View> */}
    </SafeAreaView>
  );
}

export default App;

// *********************************************

// import * as React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

// import GoalScreen from './src/screens/navigation/Goal';
// import TodoScreen from './src/screens/navigation/Todos';
// import ProfileScreen from './src/screens/navigation/Profile';

// const TopTab = createMaterialTopTabNavigator();
// const BottomTab = createBottomTabNavigator();

// const TopTabNavigator = () => {
//   return (
//     <TopTab.Navigator>
//       <TopTab.Screen name="goal" component={GoalScreen} />
//       <TopTab.Screen name="todos" component={TodoScreen} />
//     </TopTab.Navigator>
//   );
// };

// export const App = () => {
//   return (
//     <NavigationContainer>
//       <BottomTab.Navigator screenOptions={{headerShown: false}}>
//         <BottomTab.Screen name="feed" component={TopTabNavigator} />
//         <BottomTab.Screen name="profile" component={ProfileScreen} />
//       </BottomTab.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;
