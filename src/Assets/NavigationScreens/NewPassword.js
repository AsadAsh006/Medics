import { StyleSheet, Text, TouchableOpacity, View , Modal} from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import InputText from '../components/InputText'
import CustomButton from '../components/CustomButton'
import Feather from 'react-native-vector-icons/Feather'
const NewPassword = ({navigation}) => {
    const [modalVisible, setModalVisble] =useState(false)
  return (
    <View style={{flex:1, backgroundColor:'white'}}>
        <TouchableOpacity style={{margin:10}} onPress={()=>navigation.navigate('Verification')}>
     <AntDesign name='left' color={'black'} size={30}/>
     </TouchableOpacity>
     <View style={{flex:0.55, justifyContent:'center',marginBottom:10 }}>
        <Text style={{color:'black', fontSize:22,fontWeight:'700', textAlign:'center', width:'75%' }}>Create New Password</Text>
        <Text style={{color:'grey', textAlign:'center', width:'75%'}}>Create your new  password to login</Text>
        <InputText Title={'Enter your New Password'} Feathericon={true} icon={'lock'}/>
        <InputText Title={'Confirm password'} Feathericon={true} icon={'lock'}/>
        <CustomButton title={'Create Password'} action={()=>setModalVisble(true)}/>
     </View>
    
     <Modal
   animationType='slide'
   transparent={true}
   visible={modalVisible}
   onRequestClose={()=>setModalVisble(false)}
   >
 <View style={{flex:1,justifyContent:'center', backgroundColor:'rgba(50,50,50,.5)', }}>
   <View style={{backgroundColor:'white', flex:0.5, width:'80%', alignSelf:'center', borderRadius:15,}}>
   <View style={{backgroundColor:'lightgreen', width:100, height:100, alignItems:'center', justifyContent:'center', alignSelf:'center', borderRadius:200, opacity:0.5, margin:30}}>
   <Feather name='check' size={50} color={'teal'}/>
   </View>
   <Text style={{color:'black', fontWeight:"bold", fontSize:19, textAlign:'center',margin:10 }}>Success</Text>
   <Text style={{color:'darkgrey', textAlign:'center', width:'93%'}}>You have successfully reset your password.</Text>
   
   <CustomButton title={'Go to home'} action={()=>navigation.navigate('Login')}/>
   </View>
   
 </View>
   
   </Modal>
    </View>
  )
}

export default NewPassword

const styles = StyleSheet.create({})