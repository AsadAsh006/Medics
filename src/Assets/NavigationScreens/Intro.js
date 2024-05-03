import { Image, StyleSheet, Text, View, } from 'react-native'
import React , {useEffect} from 'react'
import AppIntroSlider from 'react-native-app-intro-slider'

const Slides=[
    {
      Key:1,
      image: require('../Images/First.png')
    }, {
      Key:2,
      image: require('../Images/Second.png')
    }, {
      Key:3,
      image: require('../Images/Third.png')
    }
]

const Intro = ({navigation}) => {
  return (
  <AppIntroSlider 
  onDone={()=>navigation.navigate('Login')}
  data={Slides}
  renderItem={({item, index})=>{
return(
  <View style={{alignItems:'center', justifyContent:'center'}}>
    <Text>
      {item.Key}
    </Text>
    <Image source={item.image} />
  </View>
)

  }}
  />
  )
}

export default Intro

const styles = StyleSheet.create({})