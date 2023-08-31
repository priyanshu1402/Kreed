import { View, Text, TouchableOpacity, ScrollView, StyleSheet, FlatList,Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import History from '../Components/History';
import MaterialIcon from 'react-native-vector-icons/dist/MaterialIcons';
const Publish = () => {
    const navigation = useNavigation();
    const [status,setstatus]=useState("score");
    const data = [
        { id: 1, image: require('../Assets/saina.png') },
        { id: 2, image: require('../Assets/saina.png') },
        { id: 3, image: require('../Assets/saina.png') },
        { id: 4, image: require('../Assets/saina.png') },
        { id: 5, image: require('../Assets/saina.png') },
        { id: 6, image: require('../Assets/saina.png') },
      ];
      const renderItem = ({ item }) => (
        <Image source={item.image} style={styles.image} />
      );
      const keyExtractor = item => item.id.toString();
  return (
    <View style={{flex:1,backgroundColor:"black",color:"white"}}>
         <TouchableOpacity onPress={()=>navigation.goBack()} style={{marginLeft:"auto",marginRight:20,marginBottom:20,marginTop:10}}><MaterialIcon name = "cancel" size={25} color="white"/></TouchableOpacity>


 <View>
    <View style={{flexDirection:"row",backgroundColor:"rgba(255,255,255,.2)",width:"100%",alignItems:'center',justifyContent:"space-between"}}><History/><MaterialIcon name = "check-box-outline-blank" size={20} color="white" style={{marginRight:10}}/></View>
    <View style={{flexDirection:"row",backgroundColor:"rgba(255,255,255,.2)",width:"100%",alignItems:'center',justifyContent:"space-between"}}><History/><MaterialIcon name = "check-box-outline-blank" size={20} color="white" style={{marginRight:10}}/></View>
    <View style={{flexDirection:"row",backgroundColor:"rgba(255,255,255,.2)",width:"100%",alignItems:'center',justifyContent:"space-between"}}><History/><MaterialIcon name = "check-box-outline-blank" size={20} color="white" style={{marginRight:10}}/></View>
    <View style={{flexDirection:"row",backgroundColor:"rgba(255,255,255,.2)",width:"100%",alignItems:'center',justifyContent:"space-between"}}><History/><MaterialIcon name = "check-box-outline-blank" size={20} color="white" style={{marginRight:10}}/></View>

    </View>
    <TouchableOpacity style={{marginLeft:"auto",marginRight:20,marginTop:10}}><Text style={{color:"white",}}>...see more</Text></TouchableOpacity>
    <ScrollView>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        numColumns={2}
        columnWrapperStyle={item=>item.id}
      />
    </ScrollView>

    <TextInput style={{borderColor:"rgba(255,255,255,.5)",borderRadius:3,height:65,width:"90%",borderWidth:1,marginRight:"auto",marginLeft:'auto'}} placeholder='Add caption ..' placeholderTextColor={"white"}></TextInput>
 <TouchableOpacity style={{marginLeft:"auto",marginRight:20,marginTop:10}}><Text style={{color:"white",}}>...see more</Text></TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate("BottomBar")} style={{width:120,height:40,borderRadius:7,backgroundColor:"#69a944",marginLeft:"auto",marginRight:20,marginTop:20}}>
        <Text style={{color:"white",fontWeight:"bold",fontSize:18.5,paddingHorizontal:20,paddingVertical:5}} >Publish</Text>
    </TouchableOpacity>
  </View>
  )
}

const styles= StyleSheet.create({
    image: {
  
        margin: 10,
        resizeMode: 'cover',
      },
})

export default Publish