import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator()
import React from 'react'
import { View } from 'react-native'
import Weather from './Weather'
import LoginScreen1 from './Login'
export default function MyStack () {
  return (
    <Stack.Navigator
    screenOptions={{}}>
      <Stack.Screen name='LoginScreen1' component={LoginScreen1} />
      <Stack.Screen name='Weather' component={Weather} />
     
    </Stack.Navigator>
  )
}
