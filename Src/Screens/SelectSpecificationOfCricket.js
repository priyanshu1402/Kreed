import { StyleSheet, Text, View, TouchableOpacity, ScrollView ,Modal, TouchableWithoutFeedback} from 'react-native'
import React, { useState } from 'react'
import RoomHeader from '../Components/RoomHeader'
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import SelectBowler from '../Components/SelectBowler';
import SelectBatsman from '../Components/Selectbatsman';
const SelectSpecificationOfCricket = () => {
  const [modaltype,setmodaltype]=useState("batsman");
  const navigation = useNavigation();
  const [modal,setmodal]=useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <RoomHeader />

      <View style={{ flexDirection: 'row', height: '15%', alignItems: 'center',justifyContent:"space-evenly" }}>
        <Text style={styles.Text}>Choose No. of Overs :</Text>
         <ScrollView style={{height:60}}>
          <Text style={[styles.Text,{margin:10}]}>1</Text>
          <View style={{height:1,width:60,backgroundColor:"green"}}></View>
          <Text style={[styles.Text,{margin:10}]}>2</Text>
          <View style={{height:1,width:60,backgroundColor:"green"}}></View>
          <Text style={[styles.Text,{margin:10}]}>3</Text>
          <View style={{height:1,width:60,backgroundColor:"green"}}></View>
          <Text style={[styles.Text,{margin:10}]}>4</Text>
          <View style={{height:1,width:60,backgroundColor:"green"}}></View>
          <Text style={[styles.Text,{margin:10}]}>5</Text>
          <View style={{height:1,width:60,backgroundColor:"green"}}></View>
          <Text style={[styles.Text,{margin:10}]}>6</Text>
          <View style={{height:1,width:60,backgroundColor:"green"}}></View>
          <Text style={[styles.Text,{margin:10}]}>7</Text>
          <View style={{height:1,width:60,backgroundColor:"green"}}></View>
          <Text style={[styles.Text,{margin:10}]}>8</Text>
          <View style={{height:1,width:60,backgroundColor:"green"}}></View>
          <Text style={[styles.Text,{margin:10}]}>9</Text>
          <View style={{height:1,width:60,backgroundColor:"green"}}></View>
          <Text style={[styles.Text,{margin:10}]}>10</Text>
          <View style={{height:1,width:60,backgroundColor:"green"}}></View>
          <Text style={[styles.Text,{margin:10}]}>11</Text>
          <View style={{height:1,width:60,backgroundColor:"green"}}></View>
          <Text style={[styles.Text,{margin:10}]}>12</Text>
          <View style={{height:1,width:60,backgroundColor:"green"}}></View>
         </ScrollView>
      </View>
      <Text style={styles.Text}>Choose Ball Type :</Text>
      <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
        <View style={styles.BallTableHeadingColumn}>
          <View style={styles.BallTableHeading}>
            <Text style={styles.BallTableHeadingText}>Tennis Ball</Text>
          </View>
<View style={{flex:1,flexDirection:"row",justifyContent:"space-evenly",alignItems:"center"}}>
<FontAwesome name="sports-baseball" color="#9bbe3c" size={25} style={{}}/>

<View style={{height:15,width:15,borderWidth:1,borderColor:"white",borderRadius:10}}></View>

</View>
        </View>
        <View style={[styles.BallTableHeadingColumn, { borderLeftWidth: 0 }]}>
          <View style={styles.BallTableHeading}>
            <Text style={styles.BallTableHeadingText}>Cricket Ball</Text>
            
          </View>

          <View style={{ height: 60 }}>
          <View style={{flex:1,flexDirection:"row",justifyContent:"space-evenly",alignItems:"center"}}>
<View style={{flex:1,flexDirection :"row",alignItems:"center",marginLeft:20}}>
<FontAwesome name="sports-baseball" color="#C63C42" size={25} style={{}}/>
<LinearGradient colors={['#86D957', 'green']}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          style={{height:30,width:3,borderRadius:2,   transform: [{ rotate: '25deg' }],margin:5}} >

        
        </LinearGradient>
<FontAwesome name="sports-baseball" color="white" size={25} style={{}}/>
</View>
<View style={{height:15,width:15,borderWidth:1,borderColor:"white",borderRadius:10,marginRight:30}}></View>

</View>
          </View>

        </View>

      </View>
      <Text style={styles.Text}>Toss :</Text>
      <View style={{ marginHorizontal: 20, backgroundColor: '#102808', padding: 10, borderRadius: 20, flexDirection: 'row' }}>

        <View style={styles.TossColumn}>
          <Text style={styles.TossText}>Won by :</Text>

          <TouchableOpacity style={styles.TossButtonBox}>
            <Text style={styles.TossText}>Team 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.TossButtonBox}>
            <Text style={styles.TossText}>Team 1</Text>
          </TouchableOpacity>


        </View>


        <View style={styles.TossColumn}>
          <Text style={styles.TossText}>Choose to :</Text>
          <TouchableOpacity style={styles.TossButtonBox}>
            <Text style={styles.TossText}>Bat</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.TossButtonBox}>
            <Text style={styles.TossText}>Bowl</Text>
          </TouchableOpacity>
  

        </View>


      </View>

      <TouchableOpacity style={styles.StartGameButton} onPress={()=>setmodal(true)}>
        <LinearGradient colors={['#86D957', '#20341D']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.LinearGradientStartGameButtonButton} >

          <Text style={styles.StartGameButtonText}>Play</Text>
        </LinearGradient>
      </TouchableOpacity>
      <Modal visible={modal}
      transparent={true} 
      onRequestClose={()=>setmodal(false)}>
        <TouchableWithoutFeedback onPress={()=>setmodal(false)}>
          <View style={{backgroundColor:"rgba(0,0,0,.6)",flex:1}}></View>
        </TouchableWithoutFeedback>
        <View style={{width:"100%",height:500,backgroundColor:"black",borderTopColor:"green",borderTopRightRadius:10,borderTopLeftRadius:10,borderTopWidth:1}}>
              {modaltype=="batsman"?<SelectBatsman setmodaltype={setmodaltype}/>: <SelectBowler/> }
                      </View>
      </Modal>


    </View>
  )
}

export default SelectSpecificationOfCricket

const styles = StyleSheet.create({
  Text: {
    color: 'white',
    fontSize: 18,
    marginLeft: 18,
    margin: 20
  },
  BallTableHeading: {
    backgroundColor: '#86D957',
    alignItems: 'center',

    padding: 8
  },
  BallTableHeadingText: {
    fontSize: 15,
    color: 'black',
  },
  BallTableHeadingColumn: {
    width: '50%',
    borderColor: '#86D957',
    borderWidth: 2
  },
  TossText: {
    color: 'white',
    fontSize: 15,
  },
  TossButtonBox: {
    borderColor: '#86D957',
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 5,
    width: 100,
    alignItems: 'center',
    margin: 5
  },
  TossColumn: {
    width: '50%',
    alignItems: 'center'
  },
  StartGameButton: {
    backgroundColor: '#436A2E',
    alignItems: 'center',
    width: '90%',
    borderRadius: 20,
    alignSelf: 'flex-end',
    marginRight:20,
    marginBottom:10,
    marginTop:'auto'
},
StartGameButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
},
LinearGradientStartGameButtonButton: {
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    width: '100%'
},
})