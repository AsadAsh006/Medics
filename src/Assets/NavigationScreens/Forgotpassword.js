import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign' 
import InputText from '../components/InputText'
import Email from './Email'
import Signup from './Signup'
import Phone from './Phone'
import CustomButton from '../components/CustomButton'
import Verification from './Verification'
const Forgotpassword = ({navigation}) => {
    const [email,setEmail]=useState(true)
    const [phone, setPhone]= useState(false)
  
  return (
    <View style={{flex:1, backgroundColor:'white'}}>
    <AntDesign name='left' color={'black'} size={30} />
    <View style={{flex:0.6, justifyContent:'center', }}>
     <Text style={{color:'black', fontSize:23, fontWeight:"700",alignSelf:'center',width:'88%', margin:5}}>Forgot Your Password?</Text>
     <Text style={{color:'darkgrey', alignSelf:'center',width:'88%',fontSize:16,}}>Enter your email or your phone number, we will send you a confirmation code</Text>
    <View style={{borderWidth:1, borderRadius:20, margin:20,  backgroundColor:'ghostwhite'}}>
    <View style={{flexDirection:'row', justifyContent:'space-between',}}>
     <TouchableOpacity  style={{backgroundColor:email?'white': null,height:35, width:'50%' , alignItems:'center', borderRadius:20,justifyContent:'center'}}
     onPress={()=>{
        setEmail(true)
        setPhone(false)
    }
    }
     >
        <Text style={{color:'grey'}}>Email</Text>
     </TouchableOpacity>
     <TouchableOpacity 
     style={{backgroundColor:phone? 'white':null ,height:35, width:'50%' , alignItems:'center', borderRadius:20,justifyContent:'center'}}
     onPress={()=>{
        setEmail(false)
        setPhone(true)
    }
    }>
        <Text style={{color:'grey'}}>Phone</Text>
     </TouchableOpacity>
     </View>
     </View>

     </View>
     
     {email && !phone ?
          <Email />
          :
          <Phone/>}

    </View>
  )
}

export default Forgotpassword

const styles = StyleSheet.create({})