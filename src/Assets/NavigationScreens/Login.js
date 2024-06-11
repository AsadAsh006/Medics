// import { StyleSheet, Text, TextInput, View } from 'react-native'
// import React, { useState } from 'react'
// import auth from '@react-native-firebase/auth';
// import InputText from '../components/InputText';


// const Login = ({Navigation}) => {
//     const [Email, setEmail]=useState()
//     const [password, setPassword]=useState()

//     const AuthScreen =()=>{
//         auth()
//         .createUserWithEmailAndPassword('Email', 'Password')
//         .then(() => {
//           console.log('User account created & signed in!');
//         })
//         .catch(error => {
//           if (error.code === 'auth/email-already-in-use') {
//             console.log('That email address is already in use!');
//           }
      
//           if (error.code === 'auth/invalid-email') {
//             console.log('That email address is invalid!');
//           }
      
//           console.error(error);
//         });

       
//     }

//   return (
//     <View>
//     <InputText/>
//     </View> 
// )
// }

// export default Login

// const styles = StyleSheet.create({})

import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Modal, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import InputText from '../components/InputText'
import Antdesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import CustomButton from '../components/CustomButton'
import Space from '../components/Space'
import auth from '@react-native-firebase/auth'
import Signup from './Signup'
import Camera from './Camera'
import { LoginManager, AccessToken, LoginButton } from 'react-native-fbsdk-next';


import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';
import SigninWithGoogle from '../components/SigninWithGoogle'


const Login = ({navigation}) => {
    const [modalVisible, setModalVisble]= useState(false)
    const [Email, setEmail]= useState('')
    const [Password, setPassword]= useState('')
    const [State, setState]= useState('')
    const signUp=()=>{
        auth()
  .signInWithEmailAndPassword(Email, Password)
  .then(() => {
    navigation.navigate(Camera)
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
    GoogleSignin.configure({
      webClientId: "225708677270-b6bnm4sdd9nlksucj24kll0qg5hoqqlp.apps.googleusercontent.com",
    });
    
    
    const onGoogleButtonPress=async()=> {
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      // Get the users ID token
      const { idToken } = await GoogleSignin.signIn();
    
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    
      // Sign-in the user with the credential
      return auth().signInWithCredential(googleCredential);
    }

const onFacebookButtonPress=async()=> {
  // Attempt login with permissions
  const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

  if (result.isCancelled) {
    throw 'User cancelled the login process';
  }

  // Once signed in, get the users AccessToken
  const data = await AccessToken.getCurrentAccessToken();

  if (!data) {
    throw 'Something went wrong obtaining access token';
  }

  // Create a Firebase credential with the AccessToken
  const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(facebookCredential);
}
const  correctPassword ='12345678'

 
const handleSubmit = () => {
  // Check if password contains non-numeric characters
  if (!/^\d+$/.test(Password)) {
    Alert.alert(
      "Invalid Password",
      "Password should only contain numeric characters.",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );
    return;
  }

  // Check if password matches the correct password
  if (Password !== correctPassword) {
    Alert.alert(
      "Invalid Password",
      "The password you entered is incorrect. Please try again.",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
  
     
      { cancelable: false }
    );
  } 
  
  else {
    console.log("Password is correct");
    // Handle successful password case
    setModalVisble(true)
  }
};


  return (
    <View style={{backgroundColor:'white', flex:1,}}>
    <View style={{flexDirection:"row",justifyContent:'space-between',alignItems:'center',  width:'60%', marginBottom:20,marginTop:5 }}>
    <TouchableOpacity style={{alignItems:'flex-start', justifyContent:'flex-start', }} onPress={()=>navigation.navigate('Intro')}>
    <Antdesign name='left' size={25} color={'black'} style={{alignSelf:"flex-start"}}/>
    </TouchableOpacity>
    <Text style={{

 textAlign:'center',
 color:'black',
 alignItems:'center', 
  fontSize:22, 
  fontWeight:700,
   
  }}>
     Login
    </Text>
    </View>
     <InputText state={setEmail} val={Email} icon={'mail'} usedicon={true}/>

    <InputText state={setPassword} val={Password} Title={'Enter your Password'} icon={'lock'} Feathericon={true} length={8} />

   <TouchableOpacity style={{flex:0.}}onPress={()=>navigation.navigate('Forgotpassword')}>
    <Text style={{color:'teal', alignSelf:'flex-end', marginEnd:15}}>
        Forgot Password
    </Text>
    </TouchableOpacity>
  {/* <CustomButton/> */}
<CustomButton title={'Login'} action={handleSubmit ? handleSubmit :()=>setModalVisble(true)}/>
 <View style={{alignItems:'center', justifyContent:'space-between', }}>
  <View style={{flexDirection:'row', alignItems:"center",margin:5}}>
  <Text style={{color:'darkgrey'}}>
    Don't have an account ? </Text>
    <TouchableOpacity onPress={()=>{navigation.navigate(Signup)}}>
    <Text style={{color:'teal'}}>Sign Up</Text>
    </TouchableOpacity>
  </View>
  <Text style={{color:'darkgrey',margin:10}}>OR</Text>

       
        <Space Imagein={require('../Images/g.png')} image={true} action={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
    />
        <Space  Ionicon={true} name={"logo-apple"} intext={'Sign in with Apple'} />
        <Space icon={true} name={'facebook-with-circle'} color={'blue'} intext={'Sign in With Facebook'} action={()=>onFacebookButtonPress().then(()=>console.log('Signed in with Facebook'))}/>
       
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
   <Text style={{color:'black', fontWeight:"bold", fontSize:19, textAlign:'center',margin:10 }}>Yeah! Welcome Back</Text>
   <Text style={{color:'darkgrey', textAlign:'center'}}>Once again you login successfully</Text>
   <Text style={{color:'darkgrey', textAlign:'center'}}>into medidoc app</Text>
   <CustomButton title={'Go to home'} action={()=>setModalVisble(false)}/>
   </View>
   
 </View>
   
   </Modal>


<SigninWithGoogle/>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})