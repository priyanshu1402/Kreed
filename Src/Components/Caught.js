import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'

const Caught = () => {
  return (
    <View style={[styles.bc]}>
      <Text style={{color:"green" ,borderColor:"green",borderWidth:1,width:80}}>Caught</Text>
      <Text style={{color:"white"}}>Caught:</Text>
      <FlatList
      ></FlatList>
      
    </View>
  )
}

const styles= StyleSheet.create({
    bc:{
    borderColor:"green" ,
    height:400,width:"95%",borderRadius:20,
    borderWidth:3,backgroundColor:"black"
    }
    ,
    c:{
        color:"green"
    }
})

export default Caught