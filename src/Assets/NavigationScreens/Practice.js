import { StyleSheet, Text, View, TextInput, Button, FlatList, Modal } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addContact, deletContact, searchContact } from '../../Redux/counterSlice'

const Practice = () => {
    const counter = useSelector(val => val.counter.value)
    const newValue = useSelector(val => val.counter.newValue)
    console.log("🚀 ~ Practice ~ newValue:", newValue)

    const dispatch = useDispatch()
    const [name, setName]= useState('')
    const [phone,setPhone] = useState('')
    const [State, setState]= useState('')
    const [showModal, setShowModal] = useState(false)
    const [search, setSearch]= useState('')
    const SaveContact = ()=>{
      const contact  = {name,phone}
      dispatch(addContact(contact))
      dispatch
    }
    
    
    

  return (
    <View style={{backgroundColor:'white', flex:1,}}>
    <View>

   
</View>

    <TextInput
    placeholder='Enter Your Name'
    placeholderTextColor={"grey"}
    onChangeText={(val)=>setName(val)}
    value={name}
    style={{borderWidth:1,borderColor:'black', color:'black'}}
    />
  <TextInput
   placeholder='Enter Your Password'
   placeholderTextColor={"grey"}
    onChangeText={(val)=>setPhone(val)}
    value={phone}
    style={{borderWidth:1,borderColor:'black', color:'black'}}
    />

    <TextInput
    placeholder='Search'
    placeholderTextColor={'grey'}
    onChangeText={(val)=>setSearch(val)}
    value={search}
    style={{color:"black"}}
    />
<Button title='Search' onPress={()=>dispatch(searchContact(search))}/>
  <Button title='Save' onPress={SaveContact}/>
  


<View style={{flex:1, backgroundColor:'lightgreen'}}>
{newValue.length> 0? (
<View><Text style={{ color: 'red', fontSize: 30 }}>searchContact</Text><FlatList
data={newValue}
renderItem={({ item }) => {
return (
<View style={{ flex: 0.5 }}>
<Text style={{ color: 'black' }}>{item.name}</Text>
<Text style={{ color: 'black' }}>{item.phone}</Text>
<Button title='Delete' onPress={() => dispatch(deletContact(item.phone))} />
<Button title='new'/>
</View>
)
} } /></View>
):(
<View>
<FlatList
data={counter}
renderItem={({item, index})=>{
return(
  <View style={{flex:0.5}}>
<Text style={{color:'black'}}>{item.name}</Text>
<Text style={{color:'black'}}>{item.phone}</Text>
<Button title='Delete' onPress={()=>dispatch(deletContact(item.phone))}/>
  </View>
)
}}

/>
</View>
)}

</View>

</View>
  )

}

export default Practice

const styles = StyleSheet.create({})