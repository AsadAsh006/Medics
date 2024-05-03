import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import CustomButton from '../components/CustomButton'
const Verification = ({navigation}) => {
  return (
    <View style={{flex:1, backgroundColor:'white'}}>
        <TouchableOpacity style={{margin:10}}>
        <AntDesign name='left' size={30} color={'black'}/>
        </TouchableOpacity>
      <View style={{justifyContent:'center', flex:0.3}}>
        <Text style={{color:'black', fontSize:22, fontWeight:'700',textAlign:'center', width:'76%'}}>Enter Verification Code</Text>
        <Text style={{color:'darkgrey',textAlign:'center', width:'95%'}}>Enter the Verification code we have sent to your number</Text>
        <View style={{flexDirection:'row', marginTop:15, justifyContent:'space-around'}}>
        <TextInput placeholder=' ' style={{backgroundColor:'ghostwhite', width:'15%',borderRadius:10,color:'black', fontSize:22,alignItems:'center' }}/>
        <TextInput placeholder=' ' style={{backgroundColor:'ghostwhite', width:'15%', alignSelf:'center',borderRadius:10,color:'black', fontSize:22,alignItems:'center' }}/>
        <TextInput placeholder=' ' style={{backgroundColor:'ghostwhite', width:'15%', alignSelf:'center',borderRadius:10,color:'black', fontSize:22,alignItems:'center' }}/>
        <TextInput placeholder=' ' style={{backgroundColor:'ghostwhite', width:'15%', alignSelf:'center',borderRadius:10,color:'black', fontSize:22,alignItems:'center' }}/>
      </View>
      </View>
      <CustomButton title={'Verify'}/>
      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
      <Text style={{color:'grey'}}>Didn't received the code? </Text>
      <TouchableOpacity>
      <Text style={{color:'teal'}}> Resend it</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default Verification

const styles = StyleSheet.create({})