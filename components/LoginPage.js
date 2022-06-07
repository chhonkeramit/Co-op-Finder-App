import { StyleSheet, Text, View, Image , TextInput ,ScrollView , TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
// import imgSrc from '../assets/coop.jpg';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const loginPressed = () =>{
        console.log("loginPressed");
    }
    const registerPressed = () =>{
        console.log("registerPressed");
        navigation.navigate("Register");
    }
  return (
    <View style={styles.container}>
    <View>
     <Image style={styles.image} source={require('../assets/coop.jpg')} />
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
    marginTop: 40,
    marginBottom: 40,
    height: 300
 
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
