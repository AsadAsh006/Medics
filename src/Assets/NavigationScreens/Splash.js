import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Intro from './Intro'


const Splash = ({navigation}) => {
  
  return (
    <View style={{flex:1 , backgroundColor:'teal', alignItems:'center',justifyContent:'center'}}>
      <Image source={require('../Images/Applogo.png')}
      />
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})