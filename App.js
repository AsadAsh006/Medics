import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Intro from './src/Assets/NavigationScreens/Intro';
import Splash from './src/Assets/NavigationScreens/Splash';
import Camera from './src/Assets/NavigationScreens/Camera';
import Login from './src/Assets/NavigationScreens/Login';
import Signup from './src/Assets/NavigationScreens/Signup';
import Forgotpassword from './src/Assets/NavigationScreens/Forgotpassword';
import Verification from './src/Assets/NavigationScreens/Verification';
import NewPassword from './src/Assets/NavigationScreens/NewPassword';
import { LogLevel, OneSignal } from 'react-native-onesignal';
import Email from './src/Assets/NavigationScreens/Email';
import Phone from './src/Assets/NavigationScreens/Phone';
import InputText from './src/Assets/components/InputText';
import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import SigninWithGoogle from './src/Assets/components/SigninWithGoogle';
import { Provider } from 'react-redux';
import Store from './src/Redux/Store';
import NewSceen from './src/Assets/NavigationScreens/NewSceen';
import Practice from './src/Assets/NavigationScreens/Practice';




const Stack= createNativeStackNavigator();

const App = () => {

  const onesignal =()=>{

  // Remove this method to stop OneSignal Debugging
  OneSignal.Debug.setLogLevel(LogLevel.Verbose);

  // OneSignal Initialization
  OneSignal.initialize('e9ee427a-89f3-475e-8743-a734bf015f84');

  // requestPermission will show the native iOS or Android notification permission prompt.
  // We recommend removing the following code and instead using an In-App Message to prompt for notification permission
  OneSignal.Notifications.requestPermission(true);

  // Method for listening for notification clicks
  OneSignal.Notifications.addEventListener('click', (event) => {
    console.log('OneSignal: notification clicked:', event);
  });

  }
  useEffect (()=>{
    onesignal()
    setTimeout (()=>{
    setTime(false)
    }, 4000)
    },[])
    
    const [time, setTime]=useState(true)
  return (
    <Provider store={Store}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='NewScreen'  >
        {time?

<Stack.Screen name='Splash' component={Splash}/>
:
<Stack.Screen name='Intro' component={Intro}/>
        }
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name='Signup' component={Signup}/>
      <Stack.Screen name='Camera' component={Camera}/>
      <Stack.Screen name='Forgotpassword' component={Forgotpassword}/>
      <Stack.Screen name='Verification' component={Verification}/>
      <Stack.Screen name='NewPassword' component={NewPassword}/>
      <Stack.Screen name='Email' component={Email}/>
      <Stack.Screen name='Phone' component={Phone}/>
      <Stack.Screen name='InputText' component={InputText}/>
      <Stack.Screen name='NewScreen' component={NewSceen}/>
      <Stack.Screen name='Practice' component={Practice}/>
      {/* <Stack.Screen name='SigninWithGoogle' component={SigninWithGoogle}/> */}

      </Stack.Navigator>

    </NavigationContainer>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})