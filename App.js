import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import  {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Login from './Components/Login'
import Home from './Components/Home'


const App = () => {
  const stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name='Login' component={Login}/>
        <stack.Screen name='Home' component={Home}/>

      </stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red'
  }
})