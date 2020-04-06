// import React, { Component } from 'react'
// import { Platform, StyleSheet, Text, View, YellowBox } from 'react-native'

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Home, NoShadow, Sleeping, WeatherCheck, WithShadow } from './components'

const RootStack = createStackNavigator(
    {
        Home: { screen: Home },
        NoShadow: { screen: NoShadow },
        Sleeping: { screen: Sleeping },
        WeatherCheck: { screen: WeatherCheck },
        WithShadow: { screen: WithShadow },
    },
    {
        initialRouteName: 'Home',
    }
)

const App = createAppContainer(RootStack)

export default App
