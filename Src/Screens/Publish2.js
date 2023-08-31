import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    StyleSheet,
  } from 'react-native';import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import History from '../Components/History';
import MaterialIcon from 'react-native-vector-icons/dist/MaterialIcons';
import Publish from './Publish';
import MaterialCommunity from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const Publish2 = () => {
    const[check,setcheck]=useState(false)
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
 {status=="score"?   
 <View>
 <View style={{flexDirection:"row",backgroundColor:"rgba(255,255,255,.2)",width:"100%",alignItems:'center',justifyContent:"space-between",marginBottom:15}}>
 <View style={{height:150,width:"90%",borderRadius:20,borderWidth:2,borderColor:"#86d597",marginLeft:"auto",marginRight:"auto",}}>
        <View style={{borderBottomColor:"rgba(255,255,255,.5)",borderBottomWidth:2,width:"100%",height:70,flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingHorizontal:5}}>
          <Text style={[styles.text,{color:"#86d597"}]}>Team 1</Text> 
          <View style={{}}><Text style={[styles.text]}>104/3</Text><Text style={[styles.text]}>8 overs</Text></View> 
          <View style={{height:"90%",backgroundColor:"rgba(255,255,255,.3)",justifyContent:"center",alignItems:"center",borderRadius:10,paddingHorizontal:5}}>
          <MaterialCommunity  style={{marginTop:5}} name="trophy" size={25} color="gold" />
          <Text style={[styles.text,{fontSize:12,color:"gold"}]}>Won</Text>
          <Text style={[styles.text,{fontSize:12,color:"gold",marginBottom:5}]}>Against</Text>
          </View>

          <View style={{}}><Text style={[styles.text]}>139/3</Text><Text style={[styles.text]}>8 overs</Text></View> 
          <Text style={[styles.text,{color:"#86d597"}]}>Team 2</Text> 
        </View>
        <View style={{width:"100%",height:"50%",justifyContent:"space-between",alignItems:"center",flexDirection:"row",paddingHorizontal:10}}>
            <Image source={require("../Assets/download1.png")} style={{height:30,width:30,borderRadius:30}}/>
           <View style={{flexDirection:"column",justifyContent:"space-between",alignItems:"center"}}><MaterialCommunity name="cricket" size={20} color="yellow" />
           <MaterialCommunity name="bowling" size={20} color="red" style={{marginTop:10}} /></View>
            <View style={{}}><Text style={[styles.text]}>22(8)</Text><Text style={[styles.text]}>1-14-1</Text>
            <Text style={[styles.text,]}>O R W</Text></View> 
            <View style={{height:"100%",width:1.5,backgroundColor:"rgba(255,255,255,.5)"}}></View>
            <View style={{flexDirection:"row",alignItems:"center"}}>
            <MaterialCommunity name="medal" size={20} color="gold"  />
            <Text style={[styles.text,{color:"#86d597",fontSize:16}]}>MVP</Text> 
            <Image source={require("../Assets/download1.png")} style={{height:25,width:25,borderRadius:12.5 , zIndex:1}}/>
            <Text style={[styles.text,{backgroundColor:"rgba(255,255,255,.3)",fontSize:14,fontWeight:"normal",paddingHorizontal:10,marginLeft:-10,borderRadius:15,paddingVertical:3}]}>guru</Text>
            </View>
        </View>
        
    </View>
<TouchableOpacity onPress={()=>setcheck(!check)} >
<MaterialIcon  name = {check?"check":"check-box-outline-blank"} size={20} color="white" style={{marginRight:10}}/>
</TouchableOpacity></View>
 <View style={{flexDirection:"row",backgroundColor:"rgba(255,255,255,.2)",width:"100%",alignItems:'center',justifyContent:"space-between",marginBottom:15}}>
 <View style={{height:150,width:"90%",borderRadius:20,borderWidth:2,borderColor:"#86d597",marginLeft:"auto",marginRight:"auto",}}>
        <View style={{borderBottomColor:"rgba(255,255,255,.5)",borderBottomWidth:2,width:"100%",height:70,flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingHorizontal:5}}>
          <Text style={[styles.text,{color:"#86d597"}]}>Team 1</Text> 
          <View style={{}}><Text style={[styles.text]}>104/3</Text><Text style={[styles.text]}>8 overs</Text></View> 
          <View style={{height:"90%",backgroundColor:"rgba(255,255,255,.3)",justifyContent:"center",alignItems:"center",borderRadius:10,paddingHorizontal:5}}>
          <MaterialCommunity  style={{marginTop:5}} name="trophy" size={25} color="gold" />
          <Text style={[styles.text,{fontSize:12,color:"gold"}]}>Won</Text>
          <Text style={[styles.text,{fontSize:12,color:"gold",marginBottom:5}]}>Against</Text>
          </View>

          <View style={{}}><Text style={[styles.text]}>139/3</Text><Text style={[styles.text]}>8 overs</Text></View> 
          <Text style={[styles.text,{color:"#86d597"}]}>Team 2</Text> 
        </View>
        <View style={{width:"100%",height:"50%",justifyContent:"space-between",alignItems:"center",flexDirection:"row",paddingHorizontal:10}}>
            <Image source={require("../Assets/download1.png")} style={{height:30,width:30,borderRadius:30}}/>
           <View style={{flexDirection:"column",justifyContent:"space-between",alignItems:"center"}}><MaterialCommunity name="cricket" size={20} color="yellow" />
           <MaterialCommunity name="bowling" size={20} color="red" style={{marginTop:10}} /></View>
            <View style={{}}><Text style={[styles.text]}>22(8)</Text><Text style={[styles.text]}>1-14-1</Text>
            <Text style={[styles.text,]}>O R W</Text></View> 
            <View style={{height:"100%",width:1.5,backgroundColor:"rgba(255,255,255,.5)"}}></View>
            <View style={{flexDirection:"row",alignItems:"center"}}>
            <MaterialCommunity name="medal" size={20} color="gold"  />
            <Text style={[styles.text,{color:"#86d597",fontSize:16}]}>MVP</Text> 
            <Image source={require("../Assets/download1.png")} style={{height:25,width:25,borderRadius:12.5 , zIndex:1}}/>
            <Text style={[styles.text,{backgroundColor:"rgba(255,255,255,.3)",fontSize:14,fontWeight:"normal",paddingHorizontal:10,marginLeft:-10,borderRadius:15,paddingVertical:3}]}>guru</Text>
            </View>
        </View>
        
    </View>
<TouchableOpacity onPress={()=>setcheck(!check)} >
<MaterialIcon  name = {check?"check":"check-box-outline-blank"} size={20} color="white" style={{marginRight:10}}/>
</TouchableOpacity></View>
 <View style={{flexDirection:"row",backgroundColor:"rgba(255,255,255,.2)",width:"100%",alignItems:'center',justifyContent:"space-between",marginBottom:15}}>
 <View style={{height:150,width:"90%",borderRadius:20,borderWidth:2,borderColor:"#86d597",marginLeft:"auto",marginRight:"auto",}}>
        <View style={{borderBottomColor:"rgba(255,255,255,.5)",borderBottomWidth:2,width:"100%",height:70,flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingHorizontal:5}}>
          <Text style={[styles.text,{color:"#86d597"}]}>Team 1</Text> 
          <View style={{}}><Text style={[styles.text]}>104/3</Text><Text style={[styles.text]}>8 overs</Text></View> 
          <View style={{height:"90%",backgroundColor:"rgba(255,255,255,.3)",justifyContent:"center",alignItems:"center",borderRadius:10,paddingHorizontal:5}}>
          <MaterialCommunity  style={{marginTop:5}} name="trophy" size={25} color="gold" />
          <Text style={[styles.text,{fontSize:12,color:"gold"}]}>Won</Text>
          <Text style={[styles.text,{fontSize:12,color:"gold",marginBottom:5}]}>Against</Text>
          </View>

          <View style={{}}><Text style={[styles.text]}>139/3</Text><Text style={[styles.text]}>8 overs</Text></View> 
          <Text style={[styles.text,{color:"#86d597"}]}>Team 2</Text> 
        </View>
        <View style={{width:"100%",height:"50%",justifyContent:"space-between",alignItems:"center",flexDirection:"row",paddingHorizontal:10}}>
            <Image source={require("../Assets/download1.png")} style={{height:30,width:30,borderRadius:30}}/>
           <View style={{flexDirection:"column",justifyContent:"space-between",alignItems:"center"}}><MaterialCommunity name="cricket" size={20} color="yellow" />
           <MaterialCommunity name="bowling" size={20} color="red" style={{marginTop:10}} /></View>
            <View style={{}}><Text style={[styles.text]}>22(8)</Text><Text style={[styles.text]}>1-14-1</Text>
            <Text style={[styles.text,]}>O R W</Text></View> 
            <View style={{height:"100%",width:1.5,backgroundColor:"rgba(255,255,255,.5)"}}></View>
            <View style={{flexDirection:"row",alignItems:"center"}}>
            <MaterialCommunity name="medal" size={20} color="gold"  />
            <Text style={[styles.text,{color:"#86d597",fontSize:16}]}>MVP</Text> 
            <Image source={require("../Assets/download1.png")} style={{height:25,width:25,borderRadius:12.5 , zIndex:1}}/>
            <Text style={[styles.text,{backgroundColor:"rgba(255,255,255,.3)",fontSize:14,fontWeight:"normal",paddingHorizontal:10,marginLeft:-10,borderRadius:15,paddingVertical:3}]}>guru</Text>
            </View>
        </View>
        
    </View>
<TouchableOpacity onPress={()=>setcheck(!check)} >
<MaterialIcon  name = {check?"check":"check-box-outline-blank"} size={20} color="white" style={{marginRight:10}}/>
</TouchableOpacity></View>

    </View>:<ScrollView ></ScrollView>}
 <TouchableOpacity style={{marginLeft:"auto",marginRight:20,marginTop:10}}><Text style={{color:"white",}}>...see more</Text></TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate("BottomBar")} style={{width:120,height:40,borderRadius:7,backgroundColor:"#69a944",marginLeft:"auto",marginRight:20,marginTop:20}}>
        <Text style={{color:"white",fontWeight:"bold",fontSize:18.5,paddingHorizontal:20,paddingVertical:5}} >Publish</Text>
    </TouchableOpacity>
  </View>
  )
}
const styles = StyleSheet.create({
    Text: {
      color: 'white',
      fontSize: 16,
    },
    table: {
      backgroundColor: 'black',
      borderWidth: 1,
      borderColor: 'green',
      marginBottom: 10,
      marginTop: 20,
    },
    row: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderColor: 'green',
    },
    headerCell: {
      flex: 1,
      paddingVertical: 8,
      paddingHorizontal: 3,
      fontWeight: 'bold',
      color: 'white',
  
    },
    cell: {
      flex: 1,
      paddingVertical: 8,
      paddingHorizontal: 3,
      color: 'white',
    },
    text:{
        color:"white",
        fontSize:15,
        fontWeight:"bold"
    }
  });
  

export default Publish2