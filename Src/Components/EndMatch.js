import { View, Text,TouchableOpacity, StyleSheet,Image,FlatList, ScrollView } from 'react-native'
import React,{useState} from 'react'
import MaterialCommunity from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
const EndMatch = ({setData}) => {
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
    <View style={{flexDirection:"row",width:"100%",height:50,marginTop:30,justifyContent:"space-evenly"}}>
    <View style={{}}>
            
   <TouchableOpacity ><Text style={{color:color,fontSize:16,backgroundColor:status=="m"?"rgba(255,255,255,.2)":"transparent",borderRadius:3,paddingHorizontal:3}} onPress={()=>setstatus("m")}>MVP</Text></TouchableOpacity>

   <View style={{width:100,height:5,backgroundColor:status=="m"?color:"transparent",borderRadius:5}}></View> 
    </View>
    <View style={{}}>
            
            <TouchableOpacity ><Text style={{color:color,fontSize:16,backgroundColor:status=="f"?"rgba(255,255,255,.2)":"transparent",borderRadius:3,paddingHorizontal:3}} onPress={()=>setstatus("f")}>Full Scorecard</Text></TouchableOpacity>
         
            <View style={{width:115,height:5,backgroundColor:status=="f"?color:"transparent",borderRadius:5}}></View> 
             </View>
    </View>

   {status==="m"?<View style={{flex:1,alignItems:"center"}}>
   <Text style={{color:color,fontSize:17,marginBottom:20}}>Choose MVP From Winning Team</Text>
    <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
      />
      
   </View>:<ScrollView style={{backgroundColor:"#192513",width:"97%",height:500,borderRadius:10,borderWidth:.3,borderColor:color,marginBottom:20}}>
    <Text style={{color:color,fontSize:18,marginRight:"auto",marginLeft:"auto",marginVertical:10}}>Full Scoredcard of Team 1 </Text>
    <View style={{height:30,borderTopColor:"rgba(255,255,255,.5)",borderBottomColor:"rgba(255,255,255,.5)",borderWidth:1,marginVertical:10,justifyContent:"space-around",flex:1,flexDirection:'row'}}>
      <Text style={{color:"white",fontSize:16}}>Bating</Text>
      <Text style={{color:"white",fontSize:16,marginLeft:"30%"}}>R</Text>
      <Text style={{color:"white",fontSize:16}}>B</Text>
      <Text style={{color:"white",fontSize:16}}>4s</Text>
      <Text style={{color:"white",fontSize:16}}>6s</Text>
      <Text style={{color:"white",fontSize:16}}>S/R</Text>
    </View>
    <View style={{height:30,borderTopColor:"rgba(255,255,255,.5)",marginVertical:3,justifyContent:"space-around",flex:1,flexDirection:'row'}}>
    <Image style={{height:20,width:20,borderRadius:20}} source={require("../Assets/MSD.jpg")}/>
      <Text style={{color:"white",fontSize:13,marginLeft:-10,width:80}}>PlayerName</Text>
      <Text style={{color:"white",fontSize:13,marginLeft:"10%"}}>13</Text>
      <Text style={{color:"white",fontSize:13}}>16</Text>
      <Text style={{color:"white",fontSize:13}}>4</Text>
      <Text style={{color:"white",fontSize:13}}>2</Text>
      <Text style={{color:"white",fontSize:13}}>130.4</Text>
    </View>
    <View style={{height:30,borderTopColor:"rgba(255,255,255,.5)",marginVertical:3,justifyContent:"space-around",flex:1,flexDirection:'row'}}>
    <Image style={{height:20,width:20,borderRadius:20}} source={require("../Assets/MSD.jpg")}/>
      <Text style={{color:"white",fontSize:13,marginLeft:-10,width:80}}>PlayerName</Text>
      <Text style={{color:"white",fontSize:13,marginLeft:"10%"}}>13</Text>
      <Text style={{color:"white",fontSize:13}}>16</Text>
      <Text style={{color:"white",fontSize:13}}>4</Text>
      <Text style={{color:"white",fontSize:13}}>2</Text>
      <Text style={{color:"white",fontSize:13}}>130.4</Text>
    </View>
    <View style={{height:30,borderTopColor:"rgba(255,255,255,.5)",marginVertical:3,justifyContent:"space-around",flex:1,flexDirection:'row'}}>
    <Image style={{height:20,width:20,borderRadius:20}} source={require("../Assets/MSD.jpg")}/>
      <Text style={{color:"white",fontSize:13,marginLeft:-10,width:80}}>PlayerName</Text>
      <Text style={{color:"white",fontSize:13,marginLeft:"10%"}}>13</Text>
      <Text style={{color:"white",fontSize:13}}>16</Text>
      <Text style={{color:"white",fontSize:13}}>4</Text>
      <Text style={{color:"white",fontSize:13}}>2</Text>
      <Text style={{color:"white",fontSize:13}}>130.4</Text>
    </View>
    <View style={{height:30,borderTopColor:"rgba(255,255,255,.5)",marginVertical:3,justifyContent:"space-around",flex:1,flexDirection:'row'}}>
    <Image style={{height:20,width:20,borderRadius:20}} source={require("../Assets/MSD.jpg")}/>
      <Text style={{color:"white",fontSize:13,marginLeft:-10,width:80}}>PlayerName</Text>
      <Text style={{color:"white",fontSize:13,marginLeft:"10%"}}>13</Text>
      <Text style={{color:"white",fontSize:13}}>16</Text>
      <Text style={{color:"white",fontSize:13}}>4</Text>
      <Text style={{color:"white",fontSize:13}}>2</Text>
      <Text style={{color:"white",fontSize:13}}>130.4</Text>
    </View>
    <View style={{height:30,borderTopColor:"rgba(255,255,255,.5)",marginVertical:3,justifyContent:"space-around",flex:1,flexDirection:'row'}}>
    <Image style={{height:20,width:20,borderRadius:20}} source={require("../Assets/MSD.jpg")}/>
      <Text style={{color:"white",fontSize:13,marginLeft:-10,width:80}}>PlayerName</Text>
      <Text style={{color:"white",fontSize:13,marginLeft:"10%"}}>13</Text>
      <Text style={{color:"white",fontSize:13}}>16</Text>
      <Text style={{color:"white",fontSize:13}}>4</Text>
      <Text style={{color:"white",fontSize:13}}>2</Text>
      <Text style={{color:"white",fontSize:13}}>130.4</Text>
    </View>
    <View style={{height:30,borderTopColor:"rgba(255,255,255,.5)",marginVertical:3,justifyContent:"space-around",flex:1,flexDirection:'row'}}>
    <Image style={{height:20,width:20,borderRadius:20}} source={require("../Assets/MSD.jpg")}/>
      <Text style={{color:"white",fontSize:13,marginLeft:-10,width:80}}>PlayerName</Text>
      <Text style={{color:"white",fontSize:13,marginLeft:"10%"}}>13</Text>
      <Text style={{color:"white",fontSize:13}}>16</Text>
      <Text style={{color:"white",fontSize:13}}>4</Text>
      <Text style={{color:"white",fontSize:13}}>2</Text>
      <Text style={{color:"white",fontSize:13}}>130.4</Text>
    </View>

    <View style={{height:30,borderTopColor:"rgba(255,255,255,.5)",marginVertical:3,justifyContent:"space-around",flex:1,flexDirection:'row'}}>
    <Image style={{height:20,width:20,borderRadius:20}} source={require("../Assets/MSD.jpg")}/>
      <Text style={{color:"white",fontSize:13,marginLeft:-10,width:80}}>PlayerName</Text>
      <Text style={{color:"white",fontSize:13,marginLeft:"10%"}}>13</Text>
      <Text style={{color:"white",fontSize:13}}>16</Text>
      <Text style={{color:"white",fontSize:13}}>4</Text>
      <Text style={{color:"white",fontSize:13}}>2</Text>
      <Text style={{color:"white",fontSize:13}}>130.4</Text>
    </View>
    <View style={{height:30,borderTopColor:"rgba(255,255,255,.5)",borderBottomColor:"rgba(255,255,255,.5)",borderWidth:1,marginVertical:10,justifyContent:"space-around",flex:1,flexDirection:'row'}}>
      <Text style={{color:"white",fontSize:16}}>Bowling</Text>
      <Text style={{color:"white",fontSize:16,marginLeft:"30%"}}>O</Text>
      <Text style={{color:"white",fontSize:16}}>M</Text>
      <Text style={{color:"white",fontSize:16}}>R</Text>
      <Text style={{color:"white",fontSize:16}}>W</Text>
      <Text style={{color:"white",fontSize:16}}>Econ</Text>
    </View>
    <View style={{height:30,borderTopColor:"rgba(255,255,255,.5)",marginVertical:3,justifyContent:"space-around",flex:1,flexDirection:'row'}}>
    <Image style={{height:20,width:20,borderRadius:20}} source={require("../Assets/MSD.jpg")}/>
      <Text style={{color:"white",fontSize:13,marginLeft:-10,width:80}}>PlayerName</Text>
      <Text style={{color:"white",fontSize:13,marginLeft:"10%"}}>13</Text>
      <Text style={{color:"white",fontSize:13}}>16</Text>
      <Text style={{color:"white",fontSize:13}}>4</Text>
      <Text style={{color:"white",fontSize:13}}>2</Text>
      <Text style={{color:"white",fontSize:13}}>130.4</Text>
    </View>
    <View style={{height:30,borderTopColor:"rgba(255,255,255,.5)",marginVertical:3,justifyContent:"space-around",flex:1,flexDirection:'row'}}>
    <Image style={{height:20,width:20,borderRadius:20}} source={require("../Assets/MSD.jpg")}/>
      <Text style={{color:"white",fontSize:13,marginLeft:-10,width:80}}>PlayerName</Text>
      <Text style={{color:"white",fontSize:13,marginLeft:"10%"}}>13</Text>
      <Text style={{color:"white",fontSize:13}}>16</Text>
      <Text style={{color:"white",fontSize:13}}>4</Text>
      <Text style={{color:"white",fontSize:13}}>2</Text>
      <Text style={{color:"white",fontSize:13}}>130.4</Text>
    </View>
    <View style={{height:30,borderTopColor:"rgba(255,255,255,.5)",marginVertical:3,justifyContent:"space-around",flex:1,flexDirection:'row'}}>
    <Image style={{height:20,width:20,borderRadius:20}} source={require("../Assets/MSD.jpg")}/>
      <Text style={{color:"white",fontSize:13,marginLeft:-10,width:80}}>PlayerName</Text>
      <Text style={{color:"white",fontSize:13,marginLeft:"10%"}}>13</Text>
      <Text style={{color:"white",fontSize:13}}>16</Text>
      <Text style={{color:"white",fontSize:13}}>4</Text>
      <Text style={{color:"white",fontSize:13}}>2</Text>
      <Text style={{color:"white",fontSize:13}}>130.4</Text>
    </View>

   </ScrollView>}
   <TouchableOpacity
            style={[styles.NextButton,{width:"70%",marginBottom:20}]}
            onPress={()=>setData("endvote")}>
            <LinearGradient
              colors={['rgba(0,0,0,.4)','#86D957']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={[styles.LinearGradientButton,{padding:10}]}>
              <Text style={styles.LoginButtonText}>End Voting    {"(03:40)"}</Text>
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

export default EndMatch