import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin'

const SigninWithGoogle = ({navigation}) => {
   
    
    GoogleSignin.configure({
      webClientId: '225708677270-b6bnm4sdd9nlksucj24kll0qg5hoqqlp.apps.googleusercontent.com',
    });
    
    
      const signInWithGoogle = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          const googleCredential = auth.GoogleAuthProvider.credential(userInfo.idToken);
          await auth().signInWithCredential(googleCredential);
          
        } catch (error) {
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // User cancelled the sign-in flow.
            console.log('Sign in cancelled');
          } else if (error.code === statusCodes.IN_PROGRESS) {
            // Sign-in process is already running.
            console.log('Sign in in progress');
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // Play Services not available or outdated.
            console.log('Play services not available');
          } else {
            // Some other error occurred.
            console.error('Error: ', error);
          }
        }
   
      return (
        <View>
          <GoogleSigninButton
            style={{ width: 192, height: 48 }}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Red}
            onPress={signInWithGoogle}
          />
        </View>
      );
    };
}

export default SigninWithGoogle

const styles = StyleSheet.create({})