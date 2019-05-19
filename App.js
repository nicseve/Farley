import React from 'react';
import ProfileScreen from './ProfileScreen.js'
import HomeScreen from './HomeScreen.js'
import MapScreen from './MapScreen.js'
import LoginScreen from './LoginScreen.js'
import { View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';


const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Profile: ProfileScreen,
        Map: MapScreen,
        Login: LoginScreen
    },
    {
        initialRouteName: 'Login',
    }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}