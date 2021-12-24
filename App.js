import { NavigationContainer } from '@react-navigation/native'
import {AppProvider} from './src/screen/AppContext'
import MyStack from './src/screen/Stack'

import React, {useEffect} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import SplashScreen from 'react-native-splash-screen'
export default function App () {
  useEffect(() => {
    SplashScreen.hide()
  }, [])
  return (
    <AppProvider>
    <NavigationContainer>
      <MyStack />
      <View />
    </NavigationContainer></AppProvider>
  )
}

const styles = StyleSheet.create({})
