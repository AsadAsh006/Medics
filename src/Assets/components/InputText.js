import { StyleSheet, Text, View , TextInput} from 'react-native'
import React from 'react'
import IonIcon from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
const InputText = (params,{navigation}) => {
  return (
    <View
    style={{
        alignItems:'center',
        flexDirection:"row",
        margin:10,
        alignSelf:'center',
        elevation:5,
        backgroundColor:'whitesmoke', 
        height:50,
        width:'90%',
        borderRadius:22}}>
    {params.FontAwesome?
    <FontAwesome name={params.icon? params.icon:null}/>:null}
    {params.AntDesign?
     <AntDesign name={params.icon? params.icon : 'user'} size={25} color={'grey'} style={{margin:10}}/>:null   }  
    {params.usedicon?
    <IonIcon name={params.icon ? params.icon : "home"} color={'darkgrey'}  size={25} style={{margin:10}}/>: null}
    {params.Feathericon?
    <Feather name={params.icon ? params.icon : "home"} color={'darkgrey'}  size={25} style={{margin:10}}/>: null}
    <TextInput 
    style={{color:'black'}}
    onChangeText={(val)=>params.state ? params.state(val) : null}
    value={params.val ? params.val : null}
    placeholder={params.Title? params.Title : 'Enter Your Email'}
     placeholderTextColor={'darkgrey'} 
     >
    </TextInput>

    </View>
  )
}

export default InputText

const styles = StyleSheet.create({})