import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import History from '../Components/History';
import MaterialIcon from 'react-native-vector-icons/dist/MaterialIcons';
const Endroom = () => {
    const navigation = useNavigation();
    const [status,setstatus]=useState("score");
  return (
    <View style={{flex:1,backgroundColor:"black",color:"white"}}>
         <TouchableOpacity onPress={()=>navigation.goBack()} style={{marginLeft:"auto",marginRight:20,marginBottom:20,marginTop:10}}><MaterialIcon name = "cancel" size={25} color="white"/></TouchableOpacity>

    <View style={{flexDirection:"row",width:"100%",height:50,marginTop:30,justifyContent:"space-evenly"}}>
    <View style={{}}>
            
   <TouchableOpacity ><Text style={{color:"white",fontSize:19,borderWidth:3}} onPress={()=>setstatus("score")}>ScoreBoard</Text></TouchableOpacity>

   <View style={{width:100,height:5,backgroundColor:status=="score"?"green":"black",borderRadius:5}}></View> 
    </View>
    <View style={{}}>
            
            <TouchableOpacity ><Text style={{color:"white",fontSize:19,borderWidth:3}} onPress={()=>setstatus("moment")}>Moments</Text></TouchableOpacity>
         
            <View style={{width:100,height:5,backgroundColor:status=="moment"?"green":"black",borderRadius:5}}></View> 
             </View>
    </View>
 {status=="score"?   <View>
    <View style={{flexDirection:"row",backgroundColor:"rgba(255,255,255,.2)",width:"100%",alignItems:'center',justifyContent:"space-between"}}><History/><MaterialIcon name = "check-box-outline-blank" size={20} color="white" style={{marginRight:10}}/></View>
    <View style={{flexDirection:"row",backgroundColor:"rgba(255,255,255,.2)",width:"100%",alignItems:'center',justifyContent:"space-between"}}><History/><MaterialIcon name = "check-box-outline-blank" size={20} color="white" style={{marginRight:10}}/></View>
    <View style={{flexDirection:"row",backgroundColor:"rgba(255,255,255,.2)",width:"100%",alignItems:'center',justifyContent:"space-between"}}><History/><MaterialIcon name = "check-box-outline-blank" size={20} color="white" style={{marginRight:10}}/></View>
    <View style={{flexDirection:"row",backgroundColor:"rgba(255,255,255,.2)",width:"100%",alignItems:'center',justifyContent:"space-between"}}><History/><MaterialIcon name = "check-box-outline-blank" size={20} color="white" style={{marginRight:10}}/></View>
    <View style={{flexDirection:"row",backgroundColor:"rgba(255,255,255,.2)",width:"100%",alignItems:'center',justifyContent:"space-between"}}><History/><MaterialIcon name = "check-box-outline-blank" size={20} color="white" style={{marginRight:10}}/></View>
    <View style={{flexDirection:"row",backgroundColor:"rgba(255,255,255,.2)",width:"100%",alignItems:'center',justifyContent:"space-between"}}><History/><MaterialIcon name = "check-box-outline-blank" size={20} color="white" style={{marginRight:10}}/></View>
    <View style={{flexDirection:"row",backgroundColor:"rgba(255,255,255,.2)",width:"100%",alignItems:'center',justifyContent:"space-between"}}><History/><MaterialIcon name = "check-box-outline-blank" size={20} color="white" style={{marginRight:10}}/></View>

    </View>:<ScrollView ></ScrollView>}
 <TouchableOpacity style={{marginLeft:"auto",marginRight:20,marginTop:10}}><Text style={{color:"white",}}>...see more</Text></TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate("Publish")} style={{width:120,height:40,borderRadius:7,backgroundColor:"#69a944",marginLeft:"auto",marginRight:20,marginTop:20}}>
        <Text style={{color:"white",fontWeight:"bold",fontSize:18.5,paddingHorizontal:20,paddingVertical:5}} >Publish</Text>
    </TouchableOpacity>
  </View>
  )
}

export default Endroom