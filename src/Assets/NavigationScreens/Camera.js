import { StyleSheet, Text, View, Button, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { launchImageLibrary } from 'react-native-image-picker'
import { launchCamera } from 'react-native-image-picker'
import AsyncStorage from '@react-native-async-storage/async-storage'
const Camera = ({navigation}) => {

useEffect(()=>{
    getImage()
},[])

    const setItem =async ()=>{
        const setNewImage = await AsyncStorage.setItem('@Image' ,selectedimage )
    }    

    const getImage=async()=>{
       const getNewImage = await AsyncStorage.getItem('@Image')
       setSelectedImage(getNewImage)
    }
    const [selectedimage,setSelectedImage]= useState()
    const openImagePicker = () => {
        const options = {
          mediaType: 'photo',
          includeBase64: false,
          maxHeight: 2000,
          maxWidth: 2000,
        };
    
        launchImageLibrary(options, (response) => {
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('Image picker error: ', response.error);
          } else {
            let imageUri = response.uri || response.assets?.[0]?.uri;
            setSelectedImage(imageUri);
          }
        });
      };

      handleCameraLaunch = () => {
        const options = {
          mediaType: 'photo',
          includeBase64: false,
          maxHeight: 2000,
          maxWidth: 2000,
        };
      
        launchCamera(options, response => {
          if (response.didCancel) {
            console.log('User cancelled camera');
          } else if (response.error) {
            console.log('Camera Error: ', response.error);
          } else {
            let imageUri = response.uri || response.assets?.[0]?.uri;
            setSelectedImage(imageUri);
            console.log(imageUri);
          }
        });
      }

  return (
    <View style={{backgroundColor:'red', flex:1}}>
      <Button title="Choose from Device" onPress={openImagePicker} />
<Button title="Open Camera" onPress={handleCameraLaunch} />
<Image source={{uri: selectedimage}}
style={{
    height:250,
    width:250,
    borderRadius:120
}}
/>
<Button title='Save Image' onPress={setItem}/>

    </View>
  )
}

export default Camera

const styles = StyleSheet.create({})