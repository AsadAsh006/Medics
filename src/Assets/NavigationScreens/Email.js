import { StyleSheet, Text, View , TouchableOpacity, Alert} from 'react-native'
import React, { useEffect, useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign' 
import InputText from '../components/InputText'
import CustomButton from '../components/CustomButton'
import Verification from './Verification'
import { useNavigation } from '@react-navigation/native'
const Email = ({navigation}) => {
    const Navigation = useNavigation()
    return (
        <View style={{flex:1, backgroundColor:'white', }} >
        
        <InputText Title={'Enter your Email address'} icon={'mail'} usedicon={true} />
        <CustomButton title={'Reset Password'} action={()=>Navigation.navigate('Verification')}/>
        </View>
    )
}

export default Email

const styles = StyleSheet.create({})