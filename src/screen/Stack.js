import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator()
import React from 'react'
import {View} from 'react-native'
import Weather from './Weather'
import LoginScreen1 from './Login'
import Sos from './Sos'
export default function MyStack () {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='LoginScreen1' component={LoginScreen1} />
      <Stack.Screen name='Weather' component={Weather} />
      <Stack.Screen name='Sos' component={Sos} />
    </Stack.Navigator>
  )
}
