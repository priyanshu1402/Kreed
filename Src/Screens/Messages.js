import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as ImagePicker from 'react-native-image-picker';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import {useNavigation} from '@react-navigation/native';
import HeaderTop from '../Components/Header';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Message = (props) => {

  const navigation = useNavigation();
  const goback=()=>{
    navigation.goBack();
  }

  const goto = () => {
    navigation.navigate('Chat');
  };
  const gotoprofile = () => {
    navigation.navigate('Profile');
  };
  const colors = [
    '#FFCDD2',
    '#F8BBD0',
    '#E1BEE7',
    '#D1C4E9',
    '#C5CAE9',
    '#BBDEFB',
    '#B3E5FC',
    '#B2EBF2',
    '#B2DFDB',
    '#C8E6C9',
  ];
  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const messages = [
    {
      id: 1,
      avatar: require('../Assets/download1.png'),
      name: 'Priti Modal',
      timestamp: `${new Date(Date.now()).toLocaleString().slice(11,16)}${new Date(Date.now()).toLocaleString().slice(19,22)}`,
      hasRead: true,
    },
    {
      id: 1,
      avatar: require('../Assets/download1.png'),
      name: 'Priti Modal',
      timestamp: `${new Date(Date.now()).toLocaleString().slice(11,16)}${new Date(Date.now()).toLocaleString().slice(19,22)}`,
      hasRead: true,
    },
    {
      id: 1,
      avatar: require('../Assets/download1.png'),
      name: 'Priti Modal',
      timestamp: `${new Date(Date.now()).toLocaleString().slice(11,16)}${new Date(Date.now()).toLocaleString().slice(19,22)}`,
      hasRead: true,
    },

    {
      id: 1,
      avatar: require('../Assets/download1.png'),
      name: 'Priti Modal',
      timestamp: `${new Date(Date.now()).toLocaleString().slice(11,16)}${new Date(Date.now()).toLocaleString().slice(19,22)}`,
      hasRead: true,
    },
    {
      id: 1,
      avatar: require('../Assets/download1.png'),
      name: 'Priti Modal',
      timestamp: `${new Date(Date.now()).toLocaleString().slice(11,16)}${new Date(Date.now()).toLocaleString().slice(19,22)}`,
      hasRead: true,
    },
    {
      id: 1,
      avatar: require('../Assets/download1.png'),
      name: 'Priti Modal',
      timestamp: `${new Date(Date.now()).toLocaleString().slice(11,16)}${new Date(Date.now()).toLocaleString().slice(19,22)}`,
      hasRead: true,
    },
    // Add more message objects as needed
  ];
  const CircleIcon2 = ({avatar, name, hasRead, timestamp, backgroundColor}) => {
    return (
      <TouchableOpacity onPress={goto} style={styles.box}>
        <View>
          <Image
            style={{height: 65, width: 65, borderRadius: 35,marginBottom:-5}}
            source={avatar}
          />
        </View>
        <View
          style={{
            paddingHorizontal:20,
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.text}>{name}</Text>
          <Text style={styles.text2}>How are you</Text>
        </View>
        <View style={[{marginLeft:"auto",marginRight:10,alignItems:"center"}]}>

        <Text style={[styles.text2,{}]}>{timestamp}</Text>
  <View style={[styles.box2,{backgroundColor:"#a5df00"}]}>
        <Text style={{color:'black'}}>2</Text>
        </View>
        </View>
      
      </TouchableOpacity>
    );
  };
  const CircleIcon = ({name, backgroundColor}) => {
    return (
      <TouchableOpacity style={styles.iconContainer}>
        <View
          style={{
            height: 70,
            width: 70,
            backgroundColor: backgroundColor,
            borderRadius: 45,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 5,
            marginLeft: 10,
          }}>
          <Image
            style={{height: 55, width: 55}}
            source={require('../Assets/download1.png')}
          />
        </View>
        <Text style={styles.name}>{name}</Text>
      </TouchableOpacity>
    );
  };
  const iconNames = ['Icon1', 'Icon2', 'Icon3', 'Icon4', 'Icon5'];
  return (
    <View style={{alignItems: 'center', flex: 1, backgroundColor: 'black'}}>
<HeaderTop route='Priti Mondal'/>
<View
              style={{
                backgroundColor: '#23262a',
                width: '90%',
                borderRadius: 20,
                margin: 5,
                flexDirection: 'row',
                alignItems: 'center',
                padding: 5,
                marginBottom:15,
                paddingVertical:10,
                paddingHorizontal:15
              }}>
              <Ionicons
                name="search"
                size={20}
                color="white"
                style={{marginRight: 15}}
              />

              <Text style={{color: 'white', fontSize: 18}}>Search</Text>
            </View>


      {/* Other components */}
      <Text style={{color:"white",marginRight:"auto",fontSize:16,marginLeft:25,marginBottom:3}}>Messages</Text>
      <ScrollView>
        {messages.map(message => (
          <CircleIcon2
            key={message.id}
            index={message.id}
            avatar={message.avatar}
            name={message.name}
            timestamp={message.timestamp}
            hasRead={message.hasRead}
            backgroundColor={getRandomColor()}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  box2: {
    width: 20,
    borderWidth: 1,
    borderColor: 'green',
    
    height: 20,
    borderRadius: 17,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
 
  },
  text: {
    fontsize: 21,
    color: 'white',
    fontWeight: 'bold',
  },
  text2: {
    color: 'white',
    fontSize: 11,
    opacity: 0.8,
  },
  box: {
    width: windowWidth - 20,
    height: 65,
    backgroundColor: '#17191e',
    alignItems:"center",
    borderRadius: 40,
    flexDirection: 'row',
    
    marginTop: 20,
  },
  flex: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  iconContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  circle: {
    width: 70,
    height: 70,
    borderRadius: 40,
    backgroundColor: 'blue',
  },
  name: {
    marginTop: 10,
  },
});

export default Message;
