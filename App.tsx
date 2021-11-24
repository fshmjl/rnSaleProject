/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { Image, StyleSheet } from 'react-native';
import Home from './src/pages/home/home';
import Report from './src/pages/report/report';
import Mine from './src/pages/mine/mine';
import Message from './src/pages/message/message';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Images from './src/resources/index';

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({

})

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const name = focused ? 'selected' : 'normal';
          let iconName = Images.tabbar.home[name];
          if (route.name === '首页') {
            iconName = Images.tabbar.home[name];
          } else if (route.name === '报备') {
            iconName = Images.tabbar.report[name];
          } else if (route.name === '消息') {
            iconName = Images.tabbar.message[name];
          } else {
            iconName = Images.tabbar.mine[name];
          }
          return <Image source={iconName} style={{ width: size, height: size }} />;
        },
        headerShown: route.name !== '首页',
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
      >
        <Tab.Screen name='首页' component={Home}></Tab.Screen>
        <Tab.Screen name='报备' component={Report}></Tab.Screen>
        <Tab.Screen name='消息' component={Message}></Tab.Screen>
        <Tab.Screen name='我的' component={Mine}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
