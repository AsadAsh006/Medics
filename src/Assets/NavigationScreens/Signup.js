import { Button, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import InputText from '../components/InputText'
import auth from '@react-native-firebase/auth'
import Checkbox from 'react-native-check-box'
import Antdesign from 'react-native-vector-icons/AntDesign'
import CustomButton from '../components/CustomButton'
import Feather from 'react-native-vector-icons/Feather'
import MaterialcommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
const Signup = ({navigation}) => {
const [Email, setEmail]= useState('')
const [Password, setPassword]=useState ('')
const [modalVisible, setModalVisble] =useState(false)
const [checkBox,setCheckBox]= useState(false)

const SignUp=()=>{
    
    auth()
  .createUserWithEmailAndPassword(Email, Password)
  .then(() => {
    console.log('User account created & signed in!');
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });
}

const HandleSignUp=()=>{
  SignUp()
  {()=>setModalVisble(true)}
}


  return (
    
    <View style={{flex:1, backgroundColor:'white',}}>
    <View style={{ flexDirection:'row', alignItems:'center', justifyContent:'space-between', width:'60%', marginBottom:15}}>
      <TouchableOpacity>
    <Antdesign name='left' color={'black'} size={30} />
    </TouchableOpacity>
    <Text style={{color:'black', fontSize:22, fontWeight:'700'}}>
     Signup
    </Text>
    </View>
    <InputText Title={'Enter your Name'} AntDesign={true} icon={'user'} />
    <InputText state={setEmail} val={Email} usedicon={true} icon={'mail'}/>
    <InputText Title={'Enter your Password'} state={setPassword}  val={Password} Feathericon={true} icon={'lock'}/>
    <View style={{flexDirection:'row', alignItems:"center", justifyContent:'center',margin:5 }}>
      <TouchableOpacity onPress={()=>setCheckBox(true)}>
      <MaterialcommunityIcon name='checkbox-blank-outline' color={'darkgrey'} size={25}/>
      </TouchableOpacity>
    <Text style={{color:'black'}}>I agree to the medidoc</Text>
    <TouchableOpacity>
    <Text style={{color:'teal'}}> Terms of Services </Text>
    </TouchableOpacity>
    <Text style={{color:'black'}}>and</Text>
    </View>
    <TouchableOpacity style={{alignItems:"center", width:'47%'}}>
      <Text style={{color:'teal'}}>
        Privacy Policy
      </Text>
    </TouchableOpacity>
    <View style={{marginTop:20}}>
   <CustomButton title={'SignUp'} action={HandleSignUp}/>
   </View>
   <View style={{flexDirection:"row", justifyContent:'center'}}>
   <Text style={{color:'black'}}>Already have an account ?</Text>
   <TouchableOpacity>
    <Text style={{color:'teal'}}> Login</Text>
   </TouchableOpacity>
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
  <Text style={{color:'darkgrey', textAlign:'center'}}>Your account has been registered</Text>
  <Text style={{color:'darkgrey', textAlign:'center'}}>Successfully</Text>
  <CustomButton title={'Login'} action={()=>setModalVisble(false)}/>
  </View>
  

</View>
  
  </Modal>
    </View>


    
  )
}

export default Signup

const styles = StyleSheet.create({})


