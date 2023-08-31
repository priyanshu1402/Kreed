import { View, Text, StyleSheet, ScrollView,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunity from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const HostLivePlayroomChooseModal = ({modal,setmodal}) => {
  const navigation = useNavigation();

  const [checkbox,setcheckbox]=useState(false);
  return (
    <ScrollView style={{flex:1,backgroundColor:"black"}}>
      <Text  style={[styles.text,{marginLeft:20,marginBottom:20}]}>Choose Mode</Text>
<View style={{flexDirection:"row",justifyContent:'space-between',paddingHorizontal:10,marginBottom:20}}>
<View style={[styles.contaienr]}>
        <View style={[styles.box,,styles.centercontainer,]}><Text style={[{color:"white",fontSize:20,fontWeight:"bold"}]}>Doubles</Text></View>
       <View style={{flexDirection:"row",justifyContent:"space-between",width:"90%",paddingVertical:5}}>
       <LinearGradient 
        style={[styles.teambox]}   colors={['transparent','transparent']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}>
                <Text style={[styles.text2]}>Team 1 </Text>
              </LinearGradient>
              <TouchableOpacity style={[styles.checkbox]} onPress={()=>setcheckbox(!checkbox)}>
            { checkbox && <MaterialCommunity name="check" size={25} color="#86D957" />}
              </TouchableOpacity>
       </View>
       <View style={{flexDirection:"row",justifyContent:"space-between",width:"90%",paddingVertical:5,marginBottom:20}}>
       <LinearGradient 
        style={[styles.teambox]}   colors={['transparent','transparent']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}>
                <Text style={[styles.text2]}>Team 2 </Text>
              </LinearGradient>
              <TouchableOpacity style={[styles.checkbox]} onPress={()=>setcheckbox(!checkbox)}>
            { checkbox && <MaterialCommunity name="check" size={20} color="#86D957" />}
              </TouchableOpacity>
       </View>
       <View style={[{flexDirection:"row",width:"100%",height:30,marginBottom:-10}]}>
        <LinearGradient    colors={['rgba(255,255,255,.1)', 'rgba(255,255,255,.5)']}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}} style={[{height:30,width:"50%"},styles.centercontainer]}>
                   <MaterialCommunity name="reload" size={20} color="white" />
              </LinearGradient>
        <TouchableOpacity style={[{height:30,width:"50%",backgroundColor:"#0a871e"},styles.centercontainer]}>
        <MaterialCommunity name="check" size={20} color="white" />
        </TouchableOpacity>
       </View>
       
    </View>
    <View style={[styles.contaienr]}>
        <View style={[styles.box,,styles.centercontainer,]}><Text style={[{color:"white",fontSize:20,fontWeight:"bold"}]}>Doubles</Text></View>
       <View style={{flexDirection:"row",justifyContent:"space-between",width:"90%",paddingVertical:5}}>
       <LinearGradient 
        style={[styles.teambox]}   colors={['transparent','transparent']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}>
                <Text style={[styles.text2]}>Team 1 </Text>
              </LinearGradient>
              <TouchableOpacity style={[styles.checkbox]} onPress={()=>setcheckbox(!checkbox)}>
            { checkbox && <MaterialCommunity name="check" size={25} color="#86D957" />}
              </TouchableOpacity>
       </View>
       <View style={{flexDirection:"row",justifyContent:"space-between",width:"90%",paddingVertical:5,marginBottom:20}}>
       <LinearGradient 
        style={[styles.teambox]}  colors={['transparent','transparent']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}>
                <Text style={[styles.text2]}>Team 2 </Text>
              </LinearGradient>
              <TouchableOpacity style={[styles.checkbox]} onPress={()=>setcheckbox(!checkbox)}>
            { checkbox && <MaterialCommunity name="check" size={25} color="#86D957" />}
              </TouchableOpacity>
       </View>
       <View style={[{flexDirection:"row",width:"100%",height:30,marginBottom:-10}]}>
        <LinearGradient    colors={['rgba(255,255,255,.1)', 'rgba(255,255,255,.5)']}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}} style={[{height:30,width:"50%"},styles.centercontainer]}>
                   <MaterialCommunity name="reload" size={20} color="white" />
              </LinearGradient>
        <TouchableOpacity style={[{height:30,width:"50%",backgroundColor:"#0a871e"},styles.centercontainer]}>
        <MaterialCommunity name="check" size={20} color="white" />
        </TouchableOpacity>
       </View>
       
    </View>
   
   
</View>
<View style={{flexDirection:"row",justifyContent:'space-between',paddingHorizontal:10,marginBottom:20}}>
<View style={[styles.contaienr]}>
        <View style={[styles.box,,styles.centercontainer,]}><Text style={[{color:"white",fontSize:20,fontWeight:"bold"}]}>Doubles</Text></View>
       <View style={{flexDirection:"row",justifyContent:"space-between",width:"90%",paddingVertical:5}}>
       <LinearGradient 
        style={[styles.teambox]}   colors={['transparent','transparent']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}>
                <Text style={[styles.text2]}>Team 1 </Text>
              </LinearGradient>
              <TouchableOpacity style={[styles.checkbox]} onPress={()=>setcheckbox(!checkbox)}>
            { checkbox && <MaterialCommunity name="check" size={25} color="#86D957" />}
              </TouchableOpacity>
       </View>
       <View style={{flexDirection:"row",justifyContent:"space-between",width:"90%",paddingVertical:5,marginBottom:20}}>
       <LinearGradient 
        style={[styles.teambox]}  colors={['transparent','transparent']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}>
                <Text style={[styles.text2]}>Team 2 </Text>
              </LinearGradient>
              <TouchableOpacity style={[styles.checkbox]} onPress={()=>setcheckbox(!checkbox)}>
            { checkbox && <MaterialCommunity name="check" size={25} color="#86D957" />}
              </TouchableOpacity>
       </View>
       <View style={[{flexDirection:"row",width:"100%",height:30,marginBottom:-10}]}>
        <LinearGradient    colors={['rgba(255,255,255,.1)', 'rgba(255,255,255,.5)']}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}} style={[{height:30,width:"50%"},styles.centercontainer]}>
                   <MaterialCommunity name="reload" size={20} color="white" />
              </LinearGradient>
        <TouchableOpacity style={[{height:30,width:"50%",backgroundColor:"#0a871e"},styles.centercontainer]}>
        <MaterialCommunity name="check" size={20} color="white" />
        </TouchableOpacity>
       </View>
       
    </View>
    <View style={[styles.contaienr]}>
        <View style={[styles.box,,styles.centercontainer,]}><Text style={[{color:"white",fontSize:20,fontWeight:"bold"}]}>Doubles</Text></View>
       <View style={{flexDirection:"row",justifyContent:"space-between",width:"90%",paddingVertical:5}}>
       <LinearGradient 
        style={[styles.teambox]}   colors={['transparent','transparent']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}>
                <Text style={[styles.text2]}>Team 1 </Text>
              </LinearGradient>
              <TouchableOpacity style={[styles.checkbox]} onPress={()=>setcheckbox(!checkbox)}>
            { checkbox && <MaterialCommunity name="check" size={25} color="#86D957" />}
              </TouchableOpacity>
       </View>
       <View style={{flexDirection:"row",justifyContent:"space-between",width:"90%",paddingVertical:5,marginBottom:20}}>
       <LinearGradient 
        style={[styles.teambox]} colors={['transparent','transparent']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}>
                <Text style={[styles.text2]}>Team 2 </Text>
              </LinearGradient>
              <TouchableOpacity style={[styles.checkbox]} onPress={()=>setcheckbox(!checkbox)}>
            { checkbox && <MaterialCommunity name="check" size={25} color="#86D957" />}
              </TouchableOpacity>
       </View>
       <View style={[{flexDirection:"row",width:"100%",height:30,marginBottom:-10}]}>
        <LinearGradient    colors={['rgba(255,255,255,.1)', 'rgba(255,255,255,.5)']}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}} style={[{height:30,width:"50%"},styles.centercontainer]}>
                   <MaterialCommunity name="reload" size={20} color="white" />
              </LinearGradient>
        <TouchableOpacity style={[{height:30,width:"50%",backgroundColor:"#0a871e"},styles.centercontainer]}>
        <MaterialCommunity name="check" size={20} color="white" />
        </TouchableOpacity>
       </View>
       
    </View>

   
   
</View>
<View style={{flexDirection:"row",justifyContent:'space-between',paddingHorizontal:10,marginBottom:20}}>
<View style={[styles.contaienr]}>
        <View style={[styles.box,,styles.centercontainer,]}><Text style={[{color:"white",fontSize:20,fontWeight:"bold"}]}>Doubles</Text></View>
       <View style={{flexDirection:"row",justifyContent:"space-between",width:"90%",paddingVertical:5}}>
       <LinearGradient 
        style={[styles.teambox]}   colors={['transparent','transparent']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}>
                <Text style={[styles.text2]}>Team 1 </Text>
              </LinearGradient>
              <TouchableOpacity style={[styles.checkbox]} onPress={()=>setcheckbox(!checkbox)}>
            { checkbox && <MaterialCommunity name="check" size={25} color="#86D957" />}
              </TouchableOpacity>
       </View>
       <View style={{flexDirection:"row",justifyContent:"space-between",width:"90%",paddingVertical:5,marginBottom:20}}>
       <LinearGradient 
        style={[styles.teambox]}  colors={['transparent','transparent']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}>
                <Text style={[styles.text2]}>Team 2 </Text>
              </LinearGradient>
              <TouchableOpacity style={[styles.checkbox]} onPress={()=>setcheckbox(!checkbox)}>
            { checkbox && <MaterialCommunity name="check" size={25} color="#86D957" />}
              </TouchableOpacity>
       </View>
       <View style={[{flexDirection:"row",width:"100%",height:30,marginBottom:-10}]}>
        <LinearGradient    colors={['rgba(255,255,255,.1)', 'rgba(255,255,255,.5)']}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}} style={[{height:30,width:"50%"},styles.centercontainer]}>
                   <MaterialCommunity name="reload" size={20} color="white" />
              </LinearGradient>
        <TouchableOpacity style={[{height:30,width:"50%",backgroundColor:"#0a871e"},styles.centercontainer]}>
        <MaterialCommunity name="check" size={20} color="white" />
        </TouchableOpacity>
       </View>
       
    </View>
    <View style={[styles.contaienr]}>
        <View style={[styles.box,,styles.centercontainer,]}><Text style={[{color:"white",fontSize:20,fontWeight:"bold"}]}>Doubles</Text></View>
       <View style={{flexDirection:"row",justifyContent:"space-between",width:"90%",paddingVertical:5}}>
       <LinearGradient 
        style={[styles.teambox]}   colors={['transparent','transparent']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}>
                <Text style={[styles.text2]}>Team 1 </Text>
              </LinearGradient>
              <TouchableOpacity style={[styles.checkbox]} onPress={()=>setcheckbox(!checkbox)}>
            { checkbox && <MaterialCommunity name="check" size={25} color="#86D957" />}
              </TouchableOpacity>
       </View>
       <View style={{flexDirection:"row",justifyContent:"space-between",width:"90%",paddingVertical:5,marginBottom:20}}>
       <LinearGradient 
        style={[styles.teambox]} colors={['transparent','transparent']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}>
                <Text style={[styles.text2]}>Team 2 </Text>
              </LinearGradient>
              <TouchableOpacity style={[styles.checkbox]} onPress={()=>setcheckbox(!checkbox)}>
            { checkbox && <MaterialCommunity name="check" size={25} color="#86D957" />}
              </TouchableOpacity>
       </View>
       <View style={[{flexDirection:"row",width:"100%",height:30,marginBottom:-10}]}>
        <LinearGradient    colors={['rgba(255,255,255,.1)', 'rgba(255,255,255,.5)']}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}} style={[{height:30,width:"50%"},styles.centercontainer]}>
                   <MaterialCommunity name="reload" size={20} color="white" />
              </LinearGradient>
        <TouchableOpacity style={[{height:30,width:"50%",backgroundColor:"#0a871e"},styles.centercontainer]}>
        <MaterialCommunity name="check" size={20} color="white" />
        </TouchableOpacity>
       </View>
       
    </View>

   
   
</View>
       <TouchableOpacity  
          onPress={()=>{navigation.navigate("JoinTeam2")}}
            style={[
              styles.NextButton,
              {width: 50, height: 50, marginBottom: 10, },
            ]}>
            <LinearGradient
              colors={['#60a66a','rgba(255,255,255,.5)', '#282F2E']}
              start={{ x: 0.2, y: 0 }}
              style={[
                styles.LinearGradientButton,
                {padding: 0, justifyContent: 'center'},
              ]}>
              <Text style={[styles.LoginButtonText, {fontSize: 34}]}>+</Text>
            </LinearGradient>
          </TouchableOpacity>

    <LinearGradient    colors={['rgba(255,255,255,.4)','#7fb95e','#7fb95e','#7fb95e', 'rgba(255,255,255,.4)']}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}} style={[{height:45,width:"45%",borderRadius:10,marginRight:"auto",marginLeft:"auto",marginBottom:40},styles.centercontainer]}>
                   <TouchableOpacity onPress={()=>setmodal(true)} ><Text  style={[{color:"white",fontSize:20,fontWeight:"bold"}]}>Leave Room</Text></TouchableOpacity>
              </LinearGradient>
      


    </ScrollView>
  )
}

const styles = StyleSheet.create({

  centercontainer:{
   justifyContent:"center",
   alignItems:"center"
  },

  text2:{
    fontSize:17,
    color:"white",
    fontWeight:"bold"
  },
    text:{
        color:"#7fb95e",
        fontSize:17,

    },
    contaienr:{
       width:"45%",
       height:185,
       borderRadius:5,
       backgroundColor:"rgba(255,255,255,.2)",
       justifyContent:"center",
       alignItems:"center",
    
    },
    box:{
      backgroundColor:"#4f7240",
      width:"90%",
      height:40,
      borderRadius:10,
      marginTop:5
    }
    ,teambox:{
      width:"60%",
      height:30,
      opacity:.8,
      justifyContent:"center",
      alignItems:"center",
      borderRadius:5,
      borderWidth:1.5,
      borderColor:"#86D957"
    },
    checkbox:{
      height:30,
      width:30,
      borderRadius:5,
      borderWidth:1.5,
      borderColor:"#86D957"
    },
    NextButton: {
      backgroundColor: '#436A2E',
      alignItems: 'center',
      width: '85%',
      borderRadius: 20,
      alignSelf: 'center',
    },
    LoginButtonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
    LinearGradientButton: {
      borderRadius: 20,
      padding: 20,
      alignItems: 'center',
      width: '100%',
    },
})

export default HostLivePlayroomChooseModal