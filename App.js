import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation'; 
import SplashScreen from './components/Splash'
import LoginScreen from './components/Login'
import RegisterScreen from './components/Register'
import AuthHomeScreen from './components/AuthHome'
import AuthApprovalScreen from './components/AuthApproval'



export default createStackNavigator({
  Login: {
    screen: LoginScreen,
  },
  Register: {
    screen: RegisterScreen
  },
  AuthHome: {
    screen: AuthHomeScreen
  },
  AuthApproval: {
    screen: AuthApprovalScreen
  }
},{
  navigationOptions:{
    header : null
  },
});
