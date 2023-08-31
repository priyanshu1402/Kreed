import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { Color } from '../Components/GlobalStyle'
import firestore from '@react-native-firebase/firestore';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {

  const [passwordshow,setpasswordshow]=useState(true);
  const [number,setNumber]=useState();

  const FirebaseLogin = async() => {

    try {
      if (number && password) {
     
        const userDocRef = firestore().collection('Users').doc(`+91${number}`);
        try {
          const userDoc = await userDocRef.get();
          

          if(userDoc.exists){
            const userData = userDoc.data();
            console.log(userData.password);
            if( userData.password===password){
              console.log(userData.username);
              await AsyncStorage.setItem('username', userData.username);
              navigation.navigate('BottomBar');

            }
            else{

              alert("Wrong Credentials");
            }
          }
        } catch (error) {
          
        }
     
      
       
      }
    } catch (error) {
      console.error('Email sign-in error:', error.message);
      alert("Wrong Credentials")
      // Handle sign-in error (e.g., display an error message to the user)
    }
  }

  const [username, setusername] = useState();
  const [ Email,setEmail]=useState();
  const [password, setpassword] = useState();
  const gotosignup=()=>{
    navigation.navigate("SignUp")
  }
  const gotoforgetpassword=()=>{
    navigation.navigate("ForgetAccount")
  }





  return (
    <View style={{ flex: 1, backgroundColor: '#113513' }}>
      <LinearGradient colors={['#000', '#154015', '#154015', '#154015', '#154015', '#000']} style={{ flex: 1 }}>


        <View style={styles.Box}>
          <Text style={styles.LoginHeading}>
            LOGIN
          </Text>
          <View style={styles.TextInputBox}>
            <TextInput
              placeholder='Numeber'
              placeholderTextColor={'#878A8B'}
              style={{ color: 'white' }}
              onChangeText={(text) => setNumber(text)}
              value={number}
            />
          </View>
          <View style={[styles.TextInputBox, { marginTop: 15,flexDirection:"row",alignItems:'center',justifyContent:"space-between" }]}>
            <TextInput
              placeholder='Password'
              placeholderTextColor={'#878A8B'}
              style={{ color: 'white',width:"90%" }}
              onChangeText={(text) => setpassword(text)}
              value={password}
              secureTextEntry={passwordshow}
            />
           <TouchableOpacity onPress={()=>setpasswordshow(!passwordshow)}><Ionicons name ={passwordshow?"eye":"eye-off"} size={20} color="rgba(255,255,255,.8)"/></TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <TouchableOpacity style={styles.IconBox}>
              <Image source={require('../Assets/GoogleIcon.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.IconBox}>
              <Image source={require('../Assets/FacebookIcon.png')} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={gotoforgetpassword} >

            <Text style={styles.ForgetText}> Forgotten your password?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={FirebaseLogin} style={styles.LoginButton}>
            <Text style={styles.LoginButtonText}>Log In</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={styles.ForgetText}> Don’t have an account?</Text>
            <TouchableOpacity onPress={gotosignup}><Text style={[styles.ForgetText, { color: '#86D957', fontWeight: 'bold' }]}>  Sign Up</Text></TouchableOpacity>
          </View>

        </View>
      </LinearGradient>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  Box: {
    marginLeft: 20,
    marginTop: 140,
    backgroundColor: 'black',
    borderRadius: 40,
    width: 320,
    height: 460
  },
  LoginHeading: {
    color: 'white',
    marginLeft: 25,
    marginTop: 30,
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor:'white',
    textShadowRadius:5
  },
  TextInputBox: {
    backgroundColor: '#33363A',
    marginHorizontal: 20,
    borderRadius: 20,
    marginTop: 40,
    paddingHorizontal: 15,
  },
  IconBox: {
    marginTop: 15,
    marginHorizontal: 50,
    backgroundColor: "#0D1D12",
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  ForgetText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '300',
    marginTop: 15
  },
  LoginButton: {
    backgroundColor: '#436A2E',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    width: 200,
    marginLeft: 55,
    borderRadius: 20,
    marginTop: 15
  },
  LoginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
})