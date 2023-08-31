import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  TouchableWithoutFeedback,
  Share,
  Switch,
  TextInput
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import MaterialCommunity from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/dist/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';
import {useSafeAreaFrame} from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';


import History from './History';
import LinearGradient from 'react-native-linear-gradient';

const Postcomponent = () => {
  const [modalvisible, setvisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [modaltype,setmodaltype]=useState();
  const [message,setmessage]=useState()
const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const handleShare = () => {
    Share.share({
      message: 'Check out this amazing content!', // The content you want to share
    })
      .then(result => {
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            // Content shared successfully
            console.log('Content shared successfully');
          } else {
            // Share was dismissed
            console.log('Share dismissed');
          }
        } else if (result.action === Share.dismissedAction) {
          // Share was dismissed
          console.log('Share dismissed');
        }
      })
      .catch(error => {
        // Error occurred while sharing
        console.log('Share error:', error);
      });
  };
  return (
    <View
      style={{
        width: '100%',
        backgroundColor: '#16191e',
        marginTop: 10,
        alignItems: 'center',
      
        marginBottom: 10,
      }}>
                  <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
      
              backgroundColor:"black",
              paddingHorizontal:10,
              
             
            }}>
            <Image
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                objectFit: 'containe',
                borderWidth:.5,
                borderColor:"yellow",
                padding:0
              }}
              source={require('../Assets/userimage.png')}
            />
            <View style={{width: '80%', marginLeft: 10}}>
              <Text style={{color: 'white', fontSize: 18}}>
                Priti Mondal has played {<Image source={require("../Assets/noto_badminton.png")}/>} with Parth and 3 others.
              </Text>
              <Text style={{color: '#86D957', fontSize: 12,marginTop:1,marginBottom:5}}>june 2 2023</Text>
            </View>
            <TouchableOpacity  onPress={() => {setvisible(true); setmodaltype("options")}} style={{marginTop: 6}}>
              <MaterialCommunity name="dots-vertical" size={20} color="white" />
            </TouchableOpacity>
          </View>
      <View
        style={{
          width: '95%',
          justifyContent: 'center',
          backgroundColor: 'black',
          marginTop: 7,
          padding: 10,
          borderRadius: 20,
          marginBottom: 10,
        }}>
      <History/>
      <History/>
      <History/>
      <Text style={{color:"#86D957",fontSize:14,marginLeft:"auto"}}>see more...</Text>
      </View>
      <Image
        style={{width: '100%', borderRadius: 10, margin: 5}}
        source={require('../Assets/download.jpg')}
      />
      <Text style={{color: 'white', fontSize: 14, margin: 5}}>
        The lorem ipsum text is usually a section of a Latin text by Cicero with
        words altered, added and removed to make it nonsensical. Lorem ipsum
        text is used in mock-ups of visual design projects before the actual
        words are ........
      </Text>
      <View
        style={{
          width: '100%',
          height: 60,
          backgroundColor: 'black',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal:20,
          paddingVertical:5
        }}>
        <TouchableOpacity style={styles.box}>
        <MaterialCommunity name ="fire" size={25} color="orange"/>
          <Text style={styles.text}>102k</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
        <EvilIcons name="comment" size={25} color="white"/>
          <Text style={styles.text}>12k</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={()=>{setvisible(true); setmodaltype("share")}}>
        <MaterialCommunity name ="share" size={25} color="white"/>
          <Text style={styles.text}>1k</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        visible={modalvisible}
        transparent={true}
        onRequestClose={() => setvisible(false)}>
        <TouchableWithoutFeedback onPress={() => setvisible(false)}>
          <View style={[styles.modaloverlay,{paddingBottom: 300}]}></View>
        </TouchableWithoutFeedback>
       
        { modaltype=="options" ? <ScrollView style={[ { paddingTop:20 ,height:250,backgroundColor:"black",borderWidth:1,borderTopColor:'green',borderRadius:10,marginTop:-20}]}>
         
            <View style={[styles.flex, {marginLeft: 40, marginRight: 'auto',marginBottom:10}]}>
              <MaterialIcon name="block" color="white" size={25} />
              <TouchableOpacity><Text style={[styles.Text,{marginLeft:20}]}>Block</Text></TouchableOpacity>
            </View>
            <View style={[styles.flex, {marginLeft: 40, marginRight: 'auto',marginBottom:10}]}>
              <MaterialIcon name="share" color="white" size={25} />
              <TouchableOpacity onPress={handleShare}><Text style={[styles.Text,{marginLeft:20}]}>Share Profile</Text></TouchableOpacity>
            </View>
            <View style={[styles.flex, {marginLeft: 40, marginRight: 'auto',marginBottom:10}]}>
              <MaterialIcon name="save" color="white" size={25} />
              <TouchableOpacity><Text style={[styles.Text,{marginLeft:20}]}>Save</Text></TouchableOpacity>
            </View>

            <View style={[styles.flex, {marginLeft: 40, marginRight: 'auto',marginBottom:10}]}>
              <MaterialIcon name="notifications-active" color="white" size={25} />
             <TouchableOpacity><Text style={[styles.Text,{marginLeft:20}]}>Notification for this post </Text></TouchableOpacity>
             <Switch
              
        trackColor={{false: '#70b64a', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : 'rgba(255,255,255,0.9)'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
            </View>
            <View style={[styles.flex, {marginLeft: 40, marginRight: 'auto',marginBottom:10}]}>
              <MaterialIcon name="edit" color="white" size={25} />
             <TouchableOpacity><Text style={[styles.Text,{marginLeft:20}]}>Edit Post</Text></TouchableOpacity>
            </View>
            <View style={[styles.flex, {marginLeft: 40, marginRight: 'auto',marginBottom:10}]}>
              <MaterialIcon name="report" color="red" size={25} />
             <TouchableOpacity><Text style={[styles.Text,{marginLeft:20}]}>Report</Text></TouchableOpacity>
            </View>
            <View style={[styles.flex, {marginLeft: 40, marginRight: 'auto',marginBottom:10}]}>
              <MaterialIcon name="delete-outline" color="red" size={25} />
             <TouchableOpacity><Text style={[styles.Text,{marginLeft:20}]}>Delete</Text></TouchableOpacity>
            </View>
          </ScrollView>:<ScrollView style={[ { paddingTop:20 ,height:250,backgroundColor:"black",borderWidth:1,borderTopColor:'green',borderRadius:10,marginTop:-20}]}>
          <View style={{ width: '100%',justifyContent:"center",display:"flex",alignItems:"center"}}>
        <TextInput placeholder='Write a message'
          placeholderTextColor={"white"}
          style={{width:"90%",borderRadius:10,borderWidth:1,borderColor:"rgba(255,255,255,.8)",height:40,color:"white",marginBottom:10}}
          value={message}
          onChangeText={(e)=>setmessage(e)}
        />
            <View
              style={{
                backgroundColor: 'rgba(255,255,255,0.5)',
                width: '90%',
                borderRadius: 15,
                margin: 5,
                flexDirection: 'row',
                alignItems: 'center',
                padding: 5,
                marginBottom:10
              }}>
              <Ionicons
                name="search"
                size={20}
                color="white"
                style={{marginRight: 5}}
              />

              <Text style={{color: 'white', fontSize: 18}}>Search</Text>
            </View>
          </View>
          <View
              style={{
                marginTop:5,
                width: '95%',
                height: 40,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems:"center",
                marginLeft:"auto",
                marginRight:"auto"
              }}>
              <View>
                <Image
               style={{height: 40, width: 40, borderRadius: 20}}
                  source={require('../Assets/download1.png')}
                />
              </View>
              <View style={{marginRight: 'auto', marginLeft: 10}}>
                <Text style={styles.Text}>Akash Datta</Text>
        
              </View>
              <TouchableOpacity 
      >
            <LinearGradient colors={['#86D957', '#72ba4a','rgba(0,0,0,.7)']} 
            start={{x:0,y:0}}
            end={{x:1,y:0}}
            style={styles.LinearGradientButton} >

              <Text style={{color:"white",fontSize:15,paddingHorizontal:5,paddingVertical:5,fontWeight:"bold"}}>Send</Text>
            </LinearGradient>
          </TouchableOpacity>
            </View>
            <View
              style={{
                marginTop:5,
                width: '95%',
                height: 40,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems:"center",
                marginLeft:"auto",
                marginRight:"auto"
              }}>
              <View>
                <Image
               style={{height: 40, width: 40, borderRadius: 20}}
                  source={require('../Assets/download1.png')}
                />
              </View>
              <View style={{marginRight: 'auto', marginLeft: 10}}>
                <Text style={styles.Text}>Akash Datta</Text>
        
              </View>
              <TouchableOpacity 
      >
            <LinearGradient colors={['#86D957', '#72ba4a','rgba(0,0,0,.7)']} 
            start={{x:0,y:0}}
            end={{x:1,y:0}}
            style={styles.LinearGradientButton} >

              <Text style={{color:"white",fontSize:15,paddingHorizontal:5,paddingVertical:5,fontWeight:"bold"}}>Send</Text>
            </LinearGradient>
          </TouchableOpacity>
            </View>
            
          </ScrollView>}
     
    
      </Modal>
    
    </View>
  );
};

const styles = StyleSheet.create({
  LoginButton: {
    backgroundColor: '#436A2E',
    alignItems: 'center',
    width: 100,
    borderRadius: 20,
   
    alignSelf: 'center'
  },

  LinearGradientButton:{
    height:27,
    width:80,
    borderRadius: 10,
    
    alignItems: 'center',
  
  },
  box: {
    backgroundColor: '#16191e',
    height: 35,
    width: 90,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:"center",
    paddingRight:10
   
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
  Text: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  modalcontainer: {
    width: '90%',
    height: 230,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',

    height: 250,
    backgroundColor: 'black',
  },
  modaloverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,

    borderRadius: 10,

    justifyContent: 'center',
    alignItems: 'center',
  },
  NavbarIcon: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  LoginButton: {
    backgroundColor: '#436A2E',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    width: 200,
    marginLeft: 55,
    borderRadius: 20,
    marginTop: 15,
  },
  LoginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  Text:{
    color:"white",
    fontSize:16,
    fontWeight:"bold"
  }
});

export default Postcomponent;
