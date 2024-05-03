import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign' 
import InputText from '../components/InputText'
import CustomButton from '../components/CustomButton'
import Verification from './Verification'

const Email = ({navigation}) => {
    return (
        <View style={{flex:1, backgroundColor:'white', }} >
        <InputText Title={'Enter your Email address'} icon={'mail'} usedicon={true} />
        <CustomButton title={'Reset Password'} action={()=>navigation.navigate(Verification)}/>
        </View>
    )
}

export default Email

const styles = StyleSheet.create({})