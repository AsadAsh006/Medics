import { Button, StyleSheet, Text, View,TextInput, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { reactHooksModule } from '@reduxjs/toolkit/query/react'

const NewSceen = () => {
const [newname, setName]=useState('')
const [phone, setPhone]=useState('')
const [contact, setContact]=([
  {
    name:'ASadsdd', phone:'03214454857'
  },
  {
    name:'ASadsdd', phone:'032145457'
  },  {
    name:'AsdsSad', phone:'03214545857'
  },  {
    name:'ASdsdad', phone:'032144574857'
  },
  
  
])
  useEffect(()=>{
getData()
  },[])
const storeData =async()=>{
const inputData= {newname,phone}
const JsonValue= JSON.stringify(inputData)
await AsyncStorage.setItem('new', JsonValue)

}
console.log("🚀 ~ storeData ~ storeData.setContact:", storeData.setContact)


const getData= async()=>{
  const newData= await AsyncStorage.getItem('new')
  const okData= await JSON.parse(newData)
  console.log("🚀 ~ getData ~ okData:", okData)
  // console.log("🚀 ~ getData ~ newData:", newData)
setContact(okData)
}


const deleteData =async()=>{
  const data= AsyncStorage.removeItem('new')
  getData()
   
}
  return (    
    <View style={{flex:1, backgroundColor:'red'}}>
      <TextInput placeholder='Enter Name' placeholderTextColor={'grey'} style={{backgroundColor:'white', borderWidth:1, borderColor:'blue', color:'black'}} onChangeText={(val)=>setName(val)} value={newname}/>
      <TextInput placeholder='Enter Phone Number' placeholderTextColor={'grey'} style={{backgroundColor:'white', borderWidth:1, borderColor:'blue', color:'black'}} onChangeText={(val)=>setPhone(val)} value={phone}/>

    <Button title='get' onPress={storeData}/>
    <Button title='delete' onPress={deleteData}/>

  <FlatList
  data={contact}
  renderItem={({item,index})=>{
    return(
    <View style={{backgroundColor:"white", flex:1}}> 
      <Text style={{color:'black'}}>{item.name}</Text>
    </View>
    )
  }}
  />
    </View>
  )
}

export default NewSceen

const styles = StyleSheet.create({})