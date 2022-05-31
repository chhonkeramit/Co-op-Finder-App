import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image , TextInput ,ScrollView , TouchableOpacity} from 'react-native';
import React, { useState } from 'react';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginPressed = () =>{
        console.log("loginPressed");
    }
    const registerPressed = () =>{
        console.log("registerPressed");
    }
  return (
      <ScrollView>
    <View style={styles.container}>
    <View>
     <Image source={require('../assets/coop.jpg')} />
    </View>
    <View style = {styles.emailView}>
    <Text>ENTER YOUR EMAIL</Text>
    </View>
    <View style={styles.inputView}>
    <TextInput
    value={email}
    style={styles.TextInput}
    placeholder="Email."
    placeholderTextColor="#003f5c"
    onChangeText={(email) => setEmail(email)}
  />
</View>
<View style = {styles.passView}>
 <Text>ENTER YOUR PASSWORD</Text>
 </View>
<View style={styles.inputView}>
  <TextInput
    value={password}
    style={styles.TextInput}
    placeholder="Password."
    placeholderTextColor="#003f5c"
    secureTextEntry={true}
    onChangeText={(password) => setPassword(password)}
  />
</View>

<TouchableOpacity style={styles.loginBtn} onPress={loginPressed}>
  <Text style={styles.loginText}>LOGIN</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.loginBtn} onPress={registerPressed}>
  <Text style={styles.loginText}>REGISTER</Text>
</TouchableOpacity>
  
</View>
    </ScrollView>
  );
}
export default LoginPage 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image :{
    marginBottom: 40
 
  },
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: 300,
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  loginBtn:
 {
   width:"80%",
   borderRadius:25,
   
   height:55,
   alignItems:"center",
   justifyContent:"center",
   marginTop:40,
   backgroundColor:"#00BFFF",
 },
 passView:{
     paddingRight:"30%",
     marginBottom:"2%",
     fontStyle:'bold',
 },
 emailView:{
     paddingRight:"40%",
     marginBottom:"2%",
 },
 btnView:{
    
 },
});