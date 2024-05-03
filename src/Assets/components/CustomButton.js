import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Login from '../NavigationScreens/Login'
import Signup from '../NavigationScreens/Signup'

const CustomButton = (param) => {
  return (
    <View style={{}}>
      <TouchableOpacity style={{backgroundColor:'teal' ,height:50, width:'85%', borderRadius:25,justifyContent:'center',margin:20, alignItems:'center',margin:20, alignItems:'center'}} onPress={param.action? param.action:null}>
        <Text style={{color:'white', textAlign:'center', fontWeight:'600'}} >
          {param.title?param.title: Login}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default CustomButton

const styles = StyleSheet.create({})