import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign' 
import InputText from '../components/InputText'
import CustomButton from '../components/CustomButton'
const Phone = ({navigation}) => {
    return (
        <View style={{flex:1, backgroundColor:'white'}}>
       <View style={{flex:1, backgroundColor:'white'}}>
        <InputText Title={'Enter your Phone number'}/>
        <CustomButton title={'Reset Password'} action={()=>{navigation.navigate(Verification)}}/>
        </View>
        </View>
  )}

export default Phone

const styles = StyleSheet.create({})