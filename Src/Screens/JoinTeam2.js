import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList,
    ScrollView,
    Image,
    Modal,
    TouchableWithoutFeedback,
  } from 'react-native';
  import React, {useState} from 'react';
  import Entypo from 'react-native-vector-icons/dist/Entypo';
  import Feather from 'react-native-vector-icons/dist/Feather';
  import LinearGradient from 'react-native-linear-gradient';
  import RoomInfoBox from '../Components/RoomInfoBox';
  import RoomHeader from '../Components/RoomHeader';
  import {useNavigation} from '@react-navigation/native';
  import HostLivePlayroomChooseModal from '../Components/HostLivePlayroomChooseModal';
  import HostLivePlayroomChooseModal2 from '../Components/HostLiveroomchoosemodal2';
  import Exit from '../Components/Exit';
import HostLivePlayroomChooseModal3 from '../Components/HostLivePlayroommodal3';
  
  const JoinTeam2 = () => {
    const navigation = useNavigation();
    const [modal, setmodal] = useState(false);
  
    const [ Choosemodalstatus,setchosssemodalstatue]=useState(false);
  
    const MemberListData = [
      {key: 'A', Name: 'PlayerName'},
      {key: 'B', Name: 'PlayerName'},
      {key: 'C', Name: 'PlayerName'},
      {key: 'D', Name: 'PlayerName'},
      {key: 'E', Name: 'PlayerName'},
      {key: 'F', Name: 'PlayerName'},
      {key: 'G', Name: 'PlayerName'},
      {key: 'H', Name: 'PlayerName'},
      {key: 'I', Name: 'PlayerName'},
    ];
  
    const MemberList = ({item}) => (
      <TouchableOpacity style={{width: '45%', marginLeft: 10, margin: 5}}>
        <LinearGradient
          colors={['#EFF30F', '#308400']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 5,
            borderRadius: 8,
          }}>
          <Image
            source={require('../Assets/MSD.jpg')}
            style={{width: 30, height: 30, borderRadius: 25}}
          />
  
          <Text
            numberOfLines={1}
            style={{color: 'black', fontSize: 12, marginLeft: 5}}>
            {item.Name}
          </Text>
  
          <Entypo
            name="dots-three-vertical"
            size={20}
            color="#000"
            style={{marginLeft: 'auto'}}
          />
        </LinearGradient>
      </TouchableOpacity>
    );
  
    return (
      <View style={{flex: 1, backgroundColor: 'black'}}>
        <RoomHeader />
  <ScrollView>
    

  
  <View style={{justifyContent: 'space-between'}}>
    <FlatList
      data={MemberListData}
      renderItem={MemberList}
      numColumns={2}
      keyExtractor={item => '_' + item.key}
    />
  </View>
  
  <View style={{position: 'absolute', top: '80%', width: '100%'}}>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <TouchableOpacity  
      onPress={()=>{setchosssemodalstatue(true); setmodal(true)}}
        style={[
          styles.NextButton,
          {width: 50, height: 50, marginBottom: 10, marginLeft: '43%'},
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
      <Feather
        name="info"
        size={30}
        color="#fff"
        style={{marginLeft: 10}}
      />
    </View>
    <TouchableOpacity
      style={styles.NextButton}
      onPress={() => setmodal(true)}>
      <LinearGradient
        colors={['#86D957', '#000']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.LinearGradientButton}>
        <Text style={styles.LoginButtonText}>Start Game</Text>
      </LinearGradient>
    </TouchableOpacity>
  </View>
  
  <HostLivePlayroomChooseModal3 modal={modal} setmodal={setmodal}/>
  
  </ScrollView>
  <Modal
      animationType="slide"
                  transparent={true}
                  // visible={true}
                  visible={modal}>
                  <TouchableWithoutFeedback onPress={()=>setmodal(false)}>
                    <View style={{flex:1,backgroundColor:"rgba(0,0,0,.5)"}}></View>
                  </TouchableWithoutFeedback>
                  <Exit setmodal={setmodal}/>
                  <TouchableWithoutFeedback onPress={()=>setmodal(false)}>
                    <View style={{flex:1,backgroundColor:"rgba(0,0,0,.5)"}}></View>
                  </TouchableWithoutFeedback>
    
  </Modal></View>
    );
  };
  
  export default JoinTeam2;
  
  const styles = StyleSheet.create({
    modalplayerbutton: {
      color: 'rgba(255,255,255,.8)',
      fontSize: 16,
      width: '90%',
      backgroundColor: 'rgba(255,255,255,.2)',
      paddingHorizontal: 20,
      paddingVertical: 12,
      borderRadius: 10,
      borderColor: 'rgba(255,255,255,.5)',
      borderWidth: 1,
      marginVertical: 10,
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
  });
  