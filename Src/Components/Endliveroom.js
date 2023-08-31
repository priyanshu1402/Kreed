import { View, Text,TouchableOpacity, StyleSheet,Image,FlatList, ScrollView } from 'react-native'
import React,{useState} from 'react'
import MaterialCommunity from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
const Endliveroom = ({setvalue}) => {
    const navigattion= useNavigation()
  const [status,setstatus]=useState("m");
  const data = [
    { id: 1, playerName: 'Player 1' },
    { id: 2, playerName: 'Player 2' },
    { id: 3, playerName: 'Player 3' },
    { id: 4, playerName: 'Player 4' },
    { id: 5, playerName: 'Player 5' },
    { id: 6, playerName: 'Player 1' },
    { id: 7, playerName: 'Player 2' },
    { id: 8, playerName: 'Player 3' },
    { id: 9, playerName: 'Player 4' },
    { id: 10, playerName: 'Player 5' },
  ];
  
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={require("../Assets/MSD.jpg")} style={{height:30,width:30,borderRadius:20}}/>
      <Text style={styles.playerName}>{item.playerName}</Text>
    </View>
  );
  
  const keyExtractor = item => item.id.toString();
  const color="#68d957"
  return (
    <View style={{height:700,width:"100%",backgroundColor:"#0b1d01",paddingVertical:20,borderTopRightRadius:10,borderTopLeftRadius:10,flex:1,alignItems:"center"}}>
          <View style={{height:80,width:"90%",borderRadius:10,backgroundColor:"rgba(0,0,0,.5)",marginLeft:"auto",marginRight:"auto",}}>
        <View style={{borderBottomColor:"rgba(255,255,255,.5)",width:"100%",height:70,flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingHorizontal:5}}>
          <Text style={[styles.text,{color:"#86d597"}]}>Team 1</Text> 
          <View style={{}}><Text style={[styles.text]}>104/3</Text><Text style={[styles.text]}>8 overs</Text></View> 
          <View style={{height:"90%",justifyContent:"center",alignItems:"center",borderRadius:10,paddingHorizontal:5}}>
          <MaterialCommunity  style={{marginTop:5}} name="trophy" size={25} color="gold" />
          <Text style={[styles.text,{fontSize:12,color:"gold"}]}>Won</Text>
          <Text style={[styles.text,{fontSize:12,color:"gold",marginBottom:5}]}>Against</Text>
          </View>

          <View style={{}}><Text style={[styles.text]}>139/3</Text><Text style={[styles.text]}>8 overs</Text></View> 
          <Text style={[styles.text,{color:"#86d597"}]}>Team 2</Text> 
        </View>
       
        
    </View>
<View style={{flex:1,flexDirection:"row",justifyContent:"space-between",marginTop:-20}}>
<View style={{flex:1,flexDirection:"row",justifyContent:"center",alignItems:'center'}}>
    <Image source={require("../Assets/MSD.jpg")} style={{height:30,width:30,borderRadius:20,borderColor:color,borderWidth:.5}}/>
<Text style={{color:"white",fontSize:13}}>Avinash    36{"(*14)"}</Text>
    </View>
    <View style={{flex:1,flexDirection:"row",justifyContent:"center",alignItems:'center'}}>
    <Image source={require("../Assets/MSD.jpg")} style={{height:30,width:30,borderRadius:20,borderColor:color,borderWidth:.5}}/>
<Text style={{color:"white",fontSize:13}}>Avinash    36{"(*14)"}</Text>
    </View>
    
</View>
<View style={{flex:1,flexDirection:"row",justifyContent:"space-between",marginTop:-50}}>
<View style={{flex:1,flexDirection:"row",justifyContent:"center",alignItems:'center'}}>
    <Image source={require("../Assets/MSD.jpg")} style={{height:30,width:30,borderRadius:20,borderColor:color,borderWidth:.5}}/>
<Text style={{color:"white",fontSize:13}}>Avinash    36{"(*14)"}</Text>
    </View>
    <View style={{flex:1,flexDirection:"row",justifyContent:"center",alignItems:'center'}}>
    <Image source={require("../Assets/MSD.jpg")} style={{height:30,width:30,borderRadius:20,borderColor:color,borderWidth:.5}}/>
<Text style={{color:"white",fontSize:13}}>Avinash    36{"(*14)"}</Text>
    </View>
    
</View>
<Text style={{color:"white",fontSize:14,borderRadius:5,height:30,borderWidth:.5,borderColor:color,paddingHorizontal:5,paddingVertical:3}}> Team 1 won by 30 runs</Text>
<Text style={{color:"white",fontSize:14,borderRadius:5,height:40,borderWidth:.5,borderColor:color,paddingHorizontal:5,marginTop:10,marginBottom:20}}>MVP GURU    <Image source={require("../Assets/MSD.jpg")} style={{height:30,width:30,borderRadius:20,borderColor:color,borderWidth:.5}}/>
</Text>
<Text style={{color:color,fontSize:14,borderRadius:5,height:30,borderWidth:.5,borderColor:color,paddingHorizontal:5,paddingVertical:3}}>View Full Scorecard</Text>


   <View style={{flex:1,flexDirection:"row",justifyContent:"space-between",marginHorizontal:20,marginTop:100}}>
    <TouchableOpacity style={{height:50,width:140,backgroundColor:"black",borderColor:color,borderRadius:10,borderWidth:1,flex:1,marginHorizontal:10,alignItems:"center",justifyContent:"center"}}>
        <Text style={{color:color,fontSize:16}}>Remate</Text>
        <Text style={{color:"white",fontSize:16}}>Same Team</Text>

    </TouchableOpacity>
    <TouchableOpacity style={{height:50,width:140,backgroundColor:"black",borderColor:color,borderRadius:10,borderWidth:1,flex:1,marginHorizontal:10,alignItems:"center",justifyContent:"center"}}>
        <Text style={{color:color,fontSize:16}}>Remate</Text>
        <Text style={{color:"white",fontSize:16}}>Different Team</Text>

    </TouchableOpacity>
   </View>
 
   <TouchableOpacity
            style={[styles.NextButton,{width:"70%",marginBottom:20}]}
            onPress={()=>navigattion.navigate("Publish2")}
           >
            <LinearGradient
              colors={['rgba(0,0,0,.4)','#86D957']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={[styles.LinearGradientButton,{padding:10}]}>
              <Text style={styles.LoginButtonText}>End Live Room</Text>
            </LinearGradient>
          </TouchableOpacity>
    </View>
  )
}
const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: 20,
  },
  item: {
        borderColor:"#86d957",
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius:5,
    width:150,
    justifyContent:"space-evenly",
    borderWidth:.7,
    margin:5
  },
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
  },
  playerName: {
    fontSize: 15,

    color:"rgba(255,255,255,.8)"
  },
  NextButton: {
    backgroundColor: '#436A2E',
    alignItems: 'center',
    width: '85%',
    borderRadius: 10,
    alignSelf: 'center',
  },
  LoginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  LinearGradientButton: {
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    width: '100%',
  },

})

export default Endliveroom