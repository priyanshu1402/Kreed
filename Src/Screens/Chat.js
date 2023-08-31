import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import * as ImagePicker from 'react-native-image-picker';
const ChatScreen = () => {
    const [textInputWidth, setTextInputWidth] = useState(250);
  const navigation = useNavigation();
  const [inputText, setInputText] = useState('');
  const iconcolor = 'rgba(255,255,255,0.8)';
  const iconsize = 20;
  const handleSend = () => {
    // Implement your logic for sending the message
    // Here, you can use the inputText state for the message content
    console.log('Sending message:', inputText);
    setInputText('');
  };
  const selectImage = () => {
    const options = {
      maxWidth: 2000,
      maxHeight: 2000,
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.assets[0].uri };
        console.log(response.uri);
    
      }
    });
  };

  const back = () => {
    navigation.goBack();
  };
  
  const handleTextInputFocus = () => {
    setTextInputWidth(350); // Width when TextInput is clicked
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperTopView}>
        
          <TouchableOpacity onPress={back} style={{marginLeft:10}}>
            <Icon2 name={'arrow-back'} size={30} color="white" />
          </TouchableOpacity>

        <Image
          style={{width: 50, height: 50, borderRadius: 25,marginRight:"auto",marginLeft:10,borderColor:"#86D957",}}
          source={require('../Assets/download1.png')}
        />
        <View style={{marginRight:"auto",marginLeft:-60}}>
        <Text style={{color:"white",fontSize:18}}>Pratik Mondal</Text>
        <Text style={{color:"#86D957",fontSize:14}}>Active now</Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={styles.circleIconContainer}
            onPress={() => console.log('Phone call')}>
            <Icon name="phone" size={iconsize} color={"#86D957"} />
          </TouchableOpacity>
         
        </View>
      </View>

      <View style={styles.bottomView}>
        <TouchableOpacity
          style={styles.bottomIconContainer}
          onPress={() => console.log('Photo')}>
          <Icon name="camera" size={iconsize} color={iconcolor} />
        </TouchableOpacity>
        <TextInput
          style={[styles.input,{width:textInputWidth}]}
          placeholder="Message"
          placeholderTextColor={"rgba(255,255,255,.8)"}
          value={inputText}
          onChangeText={setInputText}
          onFocus={handleTextInputFocus}
        />
        <TouchableOpacity
          style={styles.bottomIconContainer}
          onPress={() => console.log('File')}>
          <Icon name="microphone" size={iconsize} color={iconcolor} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomIconContainer}
          onPress={selectImage}>
          <Icon name="photo" size={iconsize} color={iconcolor} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomIconContainer}
          onPress={() => console.log('Microphone')}>
          <Icon3 name="sticker-emoji" size={22} color={iconcolor} />
        </TouchableOpacity>

       
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  upperTopView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingVertical: 10,
    height: 60,
    borderBottomColor:"rgba(255,255,255,.5)",
    borderWidth:1,
  },
  circleIconContainer: {
    width: 33,
    height: 33,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,.1)',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  bottomView: {
    borderWidth:2,
   
    marginTop: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 6,
    borderRadius:40,
    marginBottom:15,
    backgroundColor:"#3d4044",
    width:"95%",
    marginRight:"auto",
    marginLeft:"auto"
  },
  bottomIconContainer: {
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    color:"rgba(255,255,255,.8)",
    paddingHorizontal: 10,
    marginRight: 10,
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  messagetext:{
    color:"white"
  }
});

export default ChatScreen;
