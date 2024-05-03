import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-vector-icons/Icon'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicon from 'react-native-vector-icons/Ionicons'
const Space = (text) => {
  return (
   
    <TouchableOpacity style={{backgroundColor:'white', borderRadius:30, borderWidth:1, height:60, width:'90%' ,margin:10, flexDirection:'row'}} onPress={text.action? text.action:null}>
      <View style={{ justifyContent:'center',alignItems:'center'}}>
    {text.image?
    <Image source={text.Imagein? text.Imagein :require('../Images/g.png')} style={{height:25,width:25,margin:10, alignSelf:'center',}}/>:null}
    
    {text.icon? <Entypo name={text.name? text.name : null} color={text.color ? text.color : 'black'} size={25} style={{margin:10}}/> :null}
    {text.Ionicon?<Ionicon name={text.name ?text.name: null} size={30} color={'black'} style={{margin:10}} /> :null}</View>
    <View style={{alignItems:'center', justifyContent:'center'}} >
     <Text style={{alignSelf:'center', color:'black'}}>{text.intext? text.intext: 'Sign in with Google'}</Text>
     
     </View>

    </TouchableOpacity>

  )
}

export default Space

const styles = StyleSheet.create({})