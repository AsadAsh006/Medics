 import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign' 
import { useNavigation } from '@react-navigation/native'
import InputText from '../components/InputText'
import CustomButton from '../components/CustomButton'
import Fontawesome from 'react-native-vector-icons/FontAwesome5'
const Phone = ({navigation}) => {
  const Navigation= useNavigation()
    return (
        <View style={{flex:1, backgroundColor:'white'}}>
       <View style={{flex:1, backgroundColor:'white'}}>
        
       
        <InputText Title={'Enter your Phone number'} FontAwesome5={true} icon={'phone-alt'}/>
       
        <CustomButton title={'Reset Password'} action={()=>{Navigation.navigate('Verification')}}/>
        </View>
        </View>
  )}

export default Phone

const styles = StyleSheet.create({})