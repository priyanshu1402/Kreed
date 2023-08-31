import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React from 'react';

const History = () => {
  return (
    <View style={{}}>
      <View
        style={{
          flexDirection: 'row',

          backgroundColor: '#16191E',

          padding: 3,

          borderRadius: 5,
          borderWidth: 1,
          borderColor: 'green',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            marginLeft: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
      style={styles.img}
      source={require('../Assets/userimage.png')}
            />
            <Image
      style={styles.img}
      source={require('../Assets/userimage.png')}
            />
          </View>
    
        </View>
        <View
          style={{
            justifyContent: 'space-between',

            flexDirection: 'row',
            width: 100,
          }}>
          <Text style={{color: 'white'}}>10</Text>
          <Text style={{color: 'white'}}>vs</Text>
          <Text style={{color: 'white'}}>5</Text>
        </View>

        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            marginRight: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={styles.img}
              source={require('../Assets/userimage.png')}
            />
            <Image
            style={styles.img}
              source={require('../Assets/userimage.png')}
            />
          </View>
         
        </View>
      </View>
      
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 10,
  },
  img:{
    width: 40,
    height: 40,
    borderRadius: 20,
    objectFit: 'containe',
    borderWidth:.5,
    borderColor:"yellow",
    marginHorizontal:2
  }
});

export default History;
