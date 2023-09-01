import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity,ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import firestore from '@react-native-firebase/firestore';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import auth from '@react-native-firebase/auth';
const SignUp = ({ navigation }) => {

  const [passwordshow,setpasswordshow]=useState(true);

  const [verificationId, setVerificationId] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [loading,setLoading]=useState(false);

  const sendOTP = async () => {
    try {
      setLoading(true)
      // const confirmation = await auth().signInWithPhoneNumber(phonenumber);
      // setVerificationId(confirmation.verificationId);
      // console.log(confirmation.verificationId);
      navigation.navigate('Otp',{ email:Email,password:password,
      phonenumber:phonenumber,username:username});
      setLoading(true);
    } catch (error) {
      console.error('OTP sending error:', error.message);
      alert("Enter valid number")
      setLoading(false);
    }
  };

  const verifyOTP = async () => {
    try {
      const credential = auth.PhoneAuthProvider.credential(
        verificationId,
        verificationCode
      );
      await auth().currentUser.linkWithCredential(credential);

      console.log('OTP verification successful');
    
      // Navigate to authenticated screen or perform other actions
    } catch (error) {
      console.error('OTP verification error:', error.message);
    }
  };


  // const SendData = () => {
  //   if (name.length > 0 && phonenumber.length == '10' && Email.length > 0 && username.length > 0 && password.length > 0) {

  //     firestore()
  //       .collection('Users')
  //       .add({
  //         name: name,
  //         phonenumber: phonenumber,
  //         Email: Email,
  //         username: username,
  //         password: password,
  //       })
  //       .then(() => {
  //         console.log('User added!');
  //       });

  //     navigation.navigate('Otp')
  //   }
  //   else{
  //     navigation.navigate('Otp')
  //   }
  // }
 




  const [phonenumber, setphonenumber] = useState()
  const [Email, setEmail] = useState('')
  const [name, setname] = useState('')
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('');
  const gotologin=()=>{
    navigation.navigate('Login');
  }


  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={['#000', '#154015', '#154015', '#154015', '#154015', '#000']} style={{ flex: 1 }}>
        <View style={styles.Box}>
          <Text style={styles.LoginHeading}>
            SIGN-UP
          </Text>
          <View style={styles.TextInputBox}>
            <TextInput
              placeholder='Phone Number'
              placeholderTextColor={'#878A8B'}
              onChangeText={(text) => setphonenumber(text)}
              value={phonenumber}
              style={{ color: 'white' }}
            />
          </View>
          <View style={[styles.TextInputBox, { marginTop: 15 }]}>
            <TextInput
              placeholder='Email ID'
              placeholderTextColor={'#878A8B'}
              style={{ color: 'white' }}
              onChangeText={(text) => setEmail(text)}
              value={Email}
            />
          </View>
          <View style={[styles.TextInputBox, { marginTop: 15 }]}>
            <TextInput
              placeholder='Full Name'
              placeholderTextColor={'#878A8B'}
              style={{ color: 'white' }}
              onChangeText={(text) => setname(text)}
              value={name}
            />
          </View>
          <View style={[styles.TextInputBox, { marginTop: 15 }]}>
            <TextInput
              placeholder='Username'
              placeholderTextColor={'#878A8B'}
              style={{ color: 'white' }}
              onChangeText={(text) => setusername(text)}
              value={username}
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
          <LinearGradient    colors={['#86D957', '#203912','#1E3411']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}} style={styles.LoginButton}>

          <TouchableOpacity onPress={sendOTP} >
            <Text style={styles.LoginButtonText}>Sign up</Text>
          </TouchableOpacity>
              </LinearGradient>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={styles.TermText}> By signing up, you agree to our </Text>
            <TouchableOpacity><Text style={[styles.TermText, { color: '#4285F4', fontWeight: 'bold' }]}>  Terms And Policy</Text></TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={styles.ForgetText}> Have An aAcount?</Text>
            <TouchableOpacity onPress={gotologin}><Text style={[styles.ForgetText, { color: '#86D957', fontWeight: 'bold' }]}>  Log In</Text></TouchableOpacity>
          </View>

        </View>
      </LinearGradient>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
  Box: {
    marginLeft: 20,
    marginTop: 80,
    backgroundColor: 'black',
    borderRadius: 40,
    width: 320,
    height: 620,
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
    width: 250,
    marginLeft: 35,
    borderRadius: 20,
    marginTop: 15
  },
  LoginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    
    
  },
  TermText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 10,
    fontWeight: '300',
    marginTop: 15
  }
})