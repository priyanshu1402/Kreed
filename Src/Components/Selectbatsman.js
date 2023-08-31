import { View, Text, StyleSheet, Image,FlatList,TouchableOpacity } from 'react-native'
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const SelectBatsman = ({setmodaltype}) => {
    const navigation=useNavigation();
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
  return (
    <View style={{flex:1,alignItems:'center'}}>
    <Text style={{color:"#86d957",fontSize:18,marginVertical:20}}>Select Strike & and Non-Strike Batsman</Text>
   
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
      />
          <TouchableOpacity
            style={[styles.NextButton,{width:"50%",marginBottom:20}]}
            onPress={() => setmodaltype("bowler")}>
            <LinearGradient
              colors={['rgba(255,255,255,.7)','#86D957']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={[styles.LinearGradientButton,{padding:10}]}>
              <Text style={styles.LoginButtonText}>Save</Text>
            </LinearGradient>
          </TouchableOpacity>
    </View>
  )
}
const styles= StyleSheet.create({
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
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        paddingTop: 20,
      },
      item: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius:5,
        width:150,
        justifyContent:"space-evenly",
        
        margin:5
      },
      icon: {
        marginRight: 10,
      },
      playerName: {
        fontSize: 15,
  
        color:"rgba(255,255,255,.8)"
      },
    
})

export default SelectBatsman